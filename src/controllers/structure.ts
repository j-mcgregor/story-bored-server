import _ from 'lodash'
import { ChapterType, SceneType, StageType } from '../generated/graphql'
import { StoryStageEnum } from '../models/data/Stage'
import { StoryLength } from '../models/story/Length'

export enum StructureTypeEnum {
    Traditional = 'TRADITIONAL',
}

export enum SectionLocationEnum {
    Prologue = 'prologue',
    Epilogue = 'epilogue',
    Beginning = 'beginning',
    Middle = 'middle',
    End = 'end',
}

export interface BodyStructureTypeInput {
    type: StructureTypeEnum
    prologue?: boolean
    epilogue?: boolean
}

export interface SectionType {
    section: number
    name: string
    stages?: StageType[]
    chapters?: ChapterType[]
    scenes?: SceneType[]
    avMinWordsPerSection?: number
    avMaxWordsPerSection?: number
    avChaptersPerSection?: number
}

// STRUCTURE is made of:
// - SECTIONS
// - STAGES
// - CHAPTERS
// - SCENES

export class StructureController {
    public prologue = false
    public epilogue = false
    public section1Scenes = [StoryStageEnum.STASIS, StoryStageEnum.TRIGGER]
    public section2Scenes = [
        StoryStageEnum.QUEST,
        StoryStageEnum.BOLT,
        StoryStageEnum.SHIFT,
        StoryStageEnum.DEFEAT,
    ]
    public section3Scenes = [StoryStageEnum.POWER, StoryStageEnum.RESOLUTION]

    public filterScenesByStage = (arr: SceneType[]) => {
        const section1 = arr.filter(a => this.section1Scenes.includes(a.defaultStage))
        const section2 = arr.filter(a => this.section2Scenes.includes(a.defaultStage))
        const section3 = arr.filter(a => this.section3Scenes.includes(a.defaultStage))

        return [section1, section2, section3]
    }

    public divider = (arr1: any[], arr2: any[]): number => Math.floor(arr1.length / arr2.length)

    protected createNestedChapters = (arr1: ChapterType[], arr2: StageType[]): StageType[] => {
        const div = this.divider(arr1, arr2)
        const splitChpt = _.chunk(arr1, div)

        const res = arr2.map((stage, i) => {
            return ({
                stage: stage.stage,
                summary: stage.summary,
                storyOrder: stage.storyOrder,
                plottingOrder: stage.plottingOrder,
                chapters: splitChpt[i],
            } as unknown) as StageType
        })

        return res
    }

    public generateSections = ({
        type,
        prologue = this.prologue,
        epilogue = this.epilogue,
    }: BodyStructureTypeInput): SectionType[] => {
        switch (type) {
            case StructureTypeEnum.Traditional:
                const base: SectionType[] = [
                    { section: 1, name: SectionLocationEnum.Beginning },
                    { section: 2, name: SectionLocationEnum.Middle },
                    { section: 3, name: SectionLocationEnum.End },
                ]

                if (prologue) {
                    base.unshift({
                        section: 0,
                        name: SectionLocationEnum.Prologue,
                    })
                }
                if (epilogue) {
                    base.push({
                        section: prologue ? base.length : base.length + 1,
                        name: SectionLocationEnum.Epilogue,
                    })
                }

                return base
            default:
                return []
        }
    }

    public generateStages = (sections: SectionType[], stagesList: StageType[]) => {
        return sections.map(section => {
            switch (section.name) {
                case SectionLocationEnum.Beginning:
                    return {
                        ...section,
                        stages: stagesList.filter(s => s.storyOrder <= 2),
                    }
                case SectionLocationEnum.Middle:
                    return {
                        ...section,
                        stages: stagesList.filter(s => s.storyOrder > 2 && s.storyOrder <= 6),
                    }
                case SectionLocationEnum.End:
                    return {
                        ...section,
                        stages: stagesList.filter(s => s.storyOrder > 6),
                    }
                default:
                    return { ...section, stages: [] }
            }
        })
    }

    public generateChapters = (
        sections: SectionType[],
        numberOfChapters: number,
        nested: boolean,
        storyLength: StoryLength
    ) => {
        const { minWords, maxWords } = storyLength
        const SECTIONS_LENGTH = sections.length

        const avChaptersPerSection: number =
            numberOfChapters > SECTIONS_LENGTH
                ? Math.floor(numberOfChapters / SECTIONS_LENGTH)
                : SECTIONS_LENGTH

        const chapters: ChapterType[] = Array.from(Array(numberOfChapters), (x, i) => ({
            chapter: i + 1,
            avMinWordsPerChapter: minWords,
            avMaxWordsPerChapter: maxWords,
        }))

        const sectionChapters: ChapterType[][] = _.chunk(chapters, avChaptersPerSection)
        const SECTION_CHAPTER_LENGTH = sectionChapters.length

        const newSections = sections.map(section => {
            switch (section.name) {
                case SectionLocationEnum.Beginning:
                    if (nested) {
                        const stages = this.createNestedChapters(sectionChapters[0], section.stages)

                        return { ...section, stages }
                    } else {
                        return { ...section, chapters: sectionChapters[0] }
                    }
                case SectionLocationEnum.End:
                    const last: number = SECTION_CHAPTER_LENGTH - 1
                    if (nested) {
                        const stages = this.createNestedChapters(sectionChapters[last], section.stages)

                        return { ...section, stages }
                    } else {
                        return { ...section, chapters: sectionChapters[last] }
                    }
                case SectionLocationEnum.Middle:
                    const midChpts = _.flattenDeep(sectionChapters.slice(1, SECTION_CHAPTER_LENGTH))
                    if (nested) {
                        const stages = this.createNestedChapters(midChpts, section.stages)

                        return { ...section, stages }
                    } else {
                        return { ...section, chapters: midChpts }
                    }
                default:
                    return {
                        ...section,
                        chapters: [],
                    }
            }
        })

        return newSections
    }

    protected mapScenesToStages = (stage: StageType, scenes: SceneType[]) => {
        return {
            ...stage,
            scenes: scenes.filter(cs => cs.defaultStage === stage.stage),
        }
    }

    protected mapStagesToSection = (section: SectionType, sectionScenes: SceneType[]) => {
        return {
            ...section,
            stages: section.stages.map(stage => this.mapScenesToStages(stage, sectionScenes)),
        }
    }

    public generateScenes = (sections: SectionType[], nested: boolean, scenes: SceneType[]) => {
        return sections.map(section => {
            const [section1, section2, section3] = this.filterScenesByStage([...scenes])

            switch (section.name) {
                case SectionLocationEnum.Beginning:
                    if (nested) {
                        return this.mapStagesToSection(section, section1)
                    } else {
                        return { ...section, scenes: section1 }
                    }
                case SectionLocationEnum.Middle:
                    if (nested) {
                        return this.mapStagesToSection(section, section2)
                    } else {
                        return { ...section, scenes: section2 }
                    }
                case SectionLocationEnum.End:
                    if (nested) {
                        return this.mapStagesToSection(section, section3)
                    } else {
                        return { ...section, scenes: section3 }
                    }
                default:
                    return { ...section, scenes: [] }
            }
        })
    }
}
