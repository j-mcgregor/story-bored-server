import { StoryLength, Resolvers } from '../../generated/graphql'

const STORY_UPDATED = 'STORY_UPDATED'
const STORY_DELETED = 'STORY_DELETED'

const resolver: Resolvers = {
    Query: {
        storyLength: async (_, __, { models }): Promise<StoryLength[]> => {
            const { StoryLength: storyLengthModel } = models
            try {
                const allStoryLengths = await storyLengthModel.findAll()

                return allStoryLengths
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addStoryLength: async (_, args, { models }): Promise<StoryLength[]> => {
            const { StoryLength: storyLengthModel } = models

            const storyLengthName = await storyLengthModel.findOne({
                where: {
                    name: args.storyLength.name,
                },
                raw: true,
            })

            if (storyLengthName) {
                throw new Error(
                    'Name is already in use. Please choose from FLASH, SHORT, NOVELLA, NOVEL or EPIC'
                )
            }

            try {
                await storyLengthModel.create(args.storyLength, { raw: true })
                const allStoryLengths = await storyLengthModel.findAll()

                return allStoryLengths
            } catch (err) {
                throw new Error(err)
            }
        },
        updateStoryLength: async (
            _,
            args,
            { models, pubsub }
        ): Promise<StoryLength> => {
            try {
                models.StoryLength.update(args, {
                    where: {
                        id: args.storyLength.id,
                    },
                })

                const storyLength = await models.StoryLength.findOne({
                    where: {
                        id: args.storyLength.id,
                    },
                    raw: true,
                })

                pubsub.publish(STORY_UPDATED, { storyLength })

                return storyLength
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteStoryLength: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const storyLength = await models.StoryLength.findOne({
                    where: {
                        id: args.storyLengthId,
                    },
                    raw: true,
                })

                if (!storyLength) {
                    throw new Error(
                        "Story Length doesn't exist or has been deleted"
                    )
                }

                models.StoryLength.destroy({
                    where: {
                        id: args.storyLengthId,
                    },
                })

                pubsub.publish(STORY_DELETED, { storyLength })

                return `Story Length ${storyLength.name} (id: ${storyLength.id}) successfully deleted`
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
