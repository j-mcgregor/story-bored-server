import { StoryScene, Resolvers } from '../../generated/graphql'

const SCENE_UPDATED = 'SCENE_UPDATED'
const SCENE_DELETED = 'SCENE_DELETED'

const resolver: Resolvers = {
    Query: {
        storyScenes: async (_, __, { models }): Promise<StoryScene[]> => {
            const { StoryScene: storySceneModel } = models
            try {
                const allStoryScenes = await storySceneModel.findAll()

                return allStoryScenes
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addStoryScene: async (_, args, { models }): Promise<StoryScene[]> => {
            const { StoryScene: storySceneModel } = models

            const defaultScene = await storySceneModel.findOne({
                where: {
                    id: args.storyScene.id,
                },
                raw: true,
            })

            if (defaultScene) {
                throw new Error('Story Scene already exists. Be more creative')
            }

            try {
                await storySceneModel.create(args.storyScene, { raw: true })
                const allStoryScenes = await storySceneModel.findAll()

                return allStoryScenes
            } catch (err) {
                throw new Error(err)
            }
        },
        updateStoryScene: async (
            _,
            args,
            { models, pubsub }
        ): Promise<StoryScene> => {
            const { StoryScene: storySceneModel } = models

            try {
                storySceneModel.update(args, {
                    where: {
                        id: args.storyScene.id,
                    },
                })

                const prompt = await storySceneModel.findOne({
                    where: {
                        id: args.storyScene.id,
                    },
                    raw: true,
                })

                pubsub.publish(SCENE_UPDATED, { prompt })

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
            const { StoryScene: storySceneModel } = models

            try {
                const prompt = await storySceneModel.findOne({
                    where: {
                        id: args.writingPromptId,
                    },
                    raw: true,
                })

                if (!prompt) {
                    throw new Error(
                        "Story Scene doesn't exist or has been deleted"
                    )
                }

                storySceneModel.destroy({
                    where: {
                        id: args.writingPromptId,
                    },
                })

                pubsub.publish(SCENE_DELETED, { prompt })

                return `Story Scene (id: ${prompt.id}) successfully deleted`
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddStoryScene: async (
            _,
            args,
            { models }
        ): Promise<StoryScene[]> => {
            const { StoryScene: storySceneModel } = models

            try {
                const allStoryScenesBefore = await storySceneModel.findAll()

                let sceneTypeExists: boolean

                allStoryScenesBefore.filter(defaultScene => {
                    if (sceneTypeExists) return false

                    if (
                        !!args.storyScenes.filter(
                            f => f.defaultScene === defaultScene.defaultScene
                        ).length
                    ) {
                        sceneTypeExists = true
                    }
                })

                if (sceneTypeExists)
                    throw new Error(
                        'A scene with this order number already exists'
                    )

                await storySceneModel.bulkCreate(args.storyScenes)
                const allStoryScenes = await storySceneModel.findAll()

                return allStoryScenes
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
