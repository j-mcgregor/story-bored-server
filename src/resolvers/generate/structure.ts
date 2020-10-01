import {
    StructureController,
    SectionType,
} from '../../controllers/generators/structure'
import sequelize from '../../db'
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
    },
}

export default resolver
