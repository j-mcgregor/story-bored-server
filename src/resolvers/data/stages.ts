import { StageType, Resolvers } from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const STAGE_UPDATED = 'STAGE_UPDATED'
const STAGE_DELETED = 'STAGE_DELETED'

const resolver: Resolvers = {
    Query: {
        storyStages: async (_, __, { models }): Promise<StageType[]> => {
            try {
                const all = await queryUtils.queryAll(models.StoryStage)
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addStoryStage: async (_, args, { models }): Promise<StageType> => {
            try {
                const newStage = await queryUtils.addItem<StageType>({
                    model: models.StoryStage,
                    item: args.storyStage,
                    checkField: ['stage', args.storyStage.stage],
                })

                return newStage
            } catch (err) {
                throw new Error(err)
            }
        },
        updateStoryStage: async (
            _,
            args,
            { models, pubsub }
        ): Promise<StageType> => {
            try {
                const stage = await queryUtils.updateItem(
                    models.StoryStage,
                    args.storyStage,
                    ['id', args.storyStage.id]
                )

                pubsub.publish(STAGE_UPDATED, { stage })

                return stage
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteStoryStage: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.StoryStage,
                    checkField: ['id', args.storyStageId],
                    pubsub,
                    constant: STAGE_DELETED,
                })

                if (typeof deleted === 'string') {
                    return deleted
                }
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddStoryStage: async (
            _,
            args,
            { models }
        ): Promise<StageType[]> => {
            try {
                const all = await queryUtils.bulkAddItem(
                    models.StoryStage,
                    args.storyStages,
                    ['stage', 'stage']
                )

                if (Array.isArray(all)) {
                    return all
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
