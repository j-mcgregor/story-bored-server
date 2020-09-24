import { StoryStage, Resolvers } from '../../generated/graphql'

const STAGE_UPDATED = 'STAGE_UPDATED'
const STAGE_DELETED = 'STAGE_DELETED'

const resolver: Resolvers = {
    Query: {
        storyStages: async (_, __, { models }): Promise<StoryStage[]> => {
            const { StoryStage: storyStageModel } = models
            try {
                const allStoryStages = await storyStageModel.findAll()

                return allStoryStages
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addStoryStage: async (_, args, { models }): Promise<StoryStage[]> => {
            const { StoryStage: storyStageModel } = models

            const stage = await storyStageModel.findOne({
                where: {
                    stage: args.storyStage.stage,
                },
                raw: true,
            })

            if (stage) {
                throw new Error('Story Stage already exists. Be more creative')
            }

            try {
                await storyStageModel.create(args.storyStage, { raw: true })
                const allStoryStages = await storyStageModel.findAll()

                return allStoryStages
            } catch (err) {
                throw new Error(err)
            }
        },
        updateStoryStage: async (
            _,
            args,
            { models, pubsub }
        ): Promise<StoryStage> => {
            const { StoryStage: storyStageModel } = models

            try {
                storyStageModel.update(args, {
                    where: {
                        id: args.storyStage.id,
                    },
                })

                const prompt = await storyStageModel.findOne({
                    where: {
                        id: args.storyStage.id,
                    },
                    raw: true,
                })

                pubsub.publish(STAGE_UPDATED, { prompt })

                return prompt
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteWritingPrompt: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            const { StoryStage: storyStageModel } = models

            try {
                const prompt = await storyStageModel.findOne({
                    where: {
                        id: args.writingPromptId,
                    },
                    raw: true,
                })

                if (!prompt) {
                    throw new Error(
                        "Story Stage doesn't exist or has been deleted"
                    )
                }

                storyStageModel.destroy({
                    where: {
                        id: args.writingPromptId,
                    },
                })

                pubsub.publish(STAGE_DELETED, { prompt })

                return `Story Stage (id: ${prompt.id}) successfully deleted`
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddStoryStage: async (
            _,
            args,
            { models }
        ): Promise<StoryStage[]> => {
            const { StoryStage: storyStageModel } = models

            try {
                const allStoryStagesBefore = await storyStageModel.findAll()

                let stageTypeExists: boolean

                allStoryStagesBefore.filter(stage => {
                    if (stageTypeExists) return false

                    if (
                        !!args.storyStages.filter(f => f.stage === stage.stage)
                            .length
                    ) {
                        stageTypeExists = true
                    }
                })

                if (stageTypeExists) throw new Error('Stage already exists')

                await storyStageModel.bulkCreate(args.storyStages)
                const allStoryStages = await storyStageModel.findAll()

                return allStoryStages
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
