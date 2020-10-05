import { StoryScene, Resolvers } from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const SCENE_UPDATED = 'SCENE_UPDATED'
const SCENE_DELETED = 'SCENE_DELETED'

const resolver: Resolvers = {
    Query: {
        storyScenes: async (_, __, { models }): Promise<StoryScene[]> => {
            try {
                const all = await queryUtils.queryAll(models.StoryScene)
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addStoryScene: async (_, args, { models }): Promise<StoryScene> => {
            try {
                const newDevice: StoryScene = await queryUtils.addItem<
                    StoryScene
                >({
                    model: models.StoryScene,
                    item: args.storyScene,
                    checkField: ['description', args.storyScene.description],
                })

                return newDevice
            } catch (err) {
                throw new Error(err)
            }
        },
        updateStoryScene: async (
            _,
            args,
            { models, pubsub }
        ): Promise<StoryScene> => {
            try {
                const scene = await queryUtils.updateItem(
                    models.StoryScene,
                    args.storyScene,
                    ['id', args.storyScene.id]
                )

                pubsub.publish(SCENE_UPDATED, { scene })

                return scene
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteStoryScene: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.StoryScene,
                    checkField: ['id', args.storySceneId],
                    pubsub,
                    constant: SCENE_DELETED,
                })

                if (typeof deleted === 'string') {
                    return deleted
                }
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddStoryScene: async (
            _,
            args,
            { models }
        ): Promise<StoryScene[]> => {
            try {
                const allStoryScenesBefore = await queryUtils.queryAll(
                    models.StoryScene
                )

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

                if (sceneTypeExists) {
                    throw new Error(
                        'A scene with this order number already exists'
                    )
                }

                const all = await queryUtils.bulkAddItem(
                    models.StoryScene,
                    args.storyScenes,
                    ['description', 'description']
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
