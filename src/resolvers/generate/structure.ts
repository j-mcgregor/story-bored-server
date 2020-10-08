import { StructureController, SectionType } from '../../controllers/structure'
import { Resolvers } from '../../generated/graphql'

const resolver: Resolvers = {
    Mutation: {
        generateSections: async (
            _,
            { type, prologue, epilogue },
            { models }
        ): Promise<SectionType[]> => {
            const obj = new StructureController().generateSections({
                type,
                prologue,
                epilogue,
            })

            return obj
        },
        generateSectionsWithStages: async (
            _,
            { type, prologue, epilogue },
            { models }
        ): Promise<SectionType[]> => {
            try {
                const controller = new StructureController()
                const sections = controller.generateSections({
                    type,
                    prologue,
                    epilogue,
                })

                const stages = await models.StoryStage.findAll()
                const sectionsWithStages = controller.generateStages(
                    sections,
                    stages
                )

                return sectionsWithStages
            } catch (err) {
                throw new Error(err)
            }
        },
        generateSectionsWithChapters: async (
            _,
            { type, prologue, epilogue, nested, numberOfChapters, length },
            { models }
        ): Promise<SectionType[]> => {
            try {
                const controller = new StructureController()
                const sections = controller.generateSections({
                    type,
                    prologue,
                    epilogue,
                })

                const stages = await models.StoryStage.findAll({
                    attributes: [
                        'stage',
                        'summary',
                        'plottingOrder',
                        'storyOrder',
                    ],
                })

                const sectionsWithStages = controller.generateStages(
                    sections,
                    stages
                )

                const storyLength = await models.StoryLength.findOne({
                    where: {
                        name: length,
                    },
                })

                const sectionsWithChapters = controller.generateChapters(
                    sectionsWithStages,
                    numberOfChapters,
                    nested,
                    storyLength
                )

                return sectionsWithChapters
            } catch (err) {
                throw new Error(err)
            }
        },
        generateSectionsWithScenes: async (
            _,
            { type, prologue, epilogue, nested, numberOfChapters, length },
            { models }
        ): Promise<SectionType[]> => {
            try {
                const controller = new StructureController()
                const sections = controller.generateSections({
                    type,
                    prologue,
                    epilogue,
                })

                const stages = await models.StoryStage.findAll({
                    attributes: [
                        'stage',
                        'summary',
                        'plottingOrder',
                        'storyOrder',
                    ],
                })

                const sectionsWithStages = controller.generateStages(
                    sections,
                    stages
                )

                const storyLength = await models.StoryLength.findOne({
                    where: {
                        name: length,
                    },
                })

                const sectionsWithChapters = controller.generateChapters(
                    sectionsWithStages,
                    numberOfChapters,
                    nested,
                    storyLength
                )

                const scenes = await models.StoryScene.findAll({
                    attributes: ['defaultStage', 'defaultScene', 'description'],
                })

                const sectonsWithScenes = controller.generateScenes(
                    sectionsWithChapters,
                    nested,
                    scenes
                )

                return sectonsWithScenes
            } catch (err) {
                throw new Error(err)
            }
        },
        generateStructure: async (
            _,
            {
                type,
                prologue,
                epilogue,
                nested,
                numberOfChapters,
                length,
                includeStages,
                includeChapters,
                includeScenes,
            },
            { models }
        ): Promise<SectionType[]> => {
            try {
                // determine how complex the structure should be
                // Sections
                // Stages
                // Chapters
                // Scenes

                const controller = new StructureController()

                let sections: SectionType[]

                /**
                 * ---------------
                 * BASIC SECTION
                 * ---------------
                 */

                sections = controller.generateSections({
                    type,
                    prologue,
                    epilogue,
                })

                /**
                 * ---------------
                 * INCLUDE STAGES
                 * ---------------
                 */

                if (includeStages) {
                    const stages = await models.StoryStage.findAll({
                        attributes: [
                            'stage',
                            'summary',
                            'plottingOrder',
                            'storyOrder',
                        ],
                    })

                    sections = controller.generateStages(sections, stages)
                }

                /**
                 * ---------------
                 * INCLUDE CHAPTERS
                 * ---------------
                 */

                if (includeChapters) {
                    const storyLength = await models.StoryLength.findOne({
                        where: {
                            name: length,
                        },
                    })

                    sections = controller.generateChapters(
                        sections,
                        numberOfChapters,
                        nested,
                        storyLength
                    )
                }

                /**
                 * ---------------
                 * INCLUDE SCENES
                 * ---------------
                 */

                if (includeScenes) {
                    const scenes = await models.StoryScene.findAll({
                        attributes: [
                            'defaultStage',
                            'defaultScene',
                            'description',
                        ],
                    })

                    sections = controller.generateScenes(
                        sections,
                        nested,
                        scenes
                    )
                }

                return sections
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
