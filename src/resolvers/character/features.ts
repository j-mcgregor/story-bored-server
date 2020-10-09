import { CharacterFeatureInput, CharacterFeatureType, Resolvers } from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const FEATURE_UPDATED = 'FEATURE_UPDATED'
const FEATURE_DELETED = 'FEATURE_DELETED'

const resolver: Resolvers = {
    Query: {
        characterFeatures: async (_, __, { models }): Promise<CharacterFeatureType[]> => {
            try {
                const all = await queryUtils.queryAll(models.CharacterFeature)

                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterFeature: async (_, { feature }, { models }): Promise<CharacterFeatureType> => {
            try {
                const name = await queryUtils.addItem<CharacterFeatureInput>({
                    model: models.CharacterFeature,
                    item: feature,
                    checkField: ['feature', feature.feature],
                })

                return name
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterFeature: async (_, { feature }, { models, pubsub }): Promise<CharacterFeatureType> => {
            try {
                const moodUpdated = await queryUtils.updateItem(models.CharacterDescription, { feature }, [
                    'id',
                    feature.id,
                ])

                pubsub.publish(FEATURE_UPDATED, { moodUpdated })

                return moodUpdated
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterFeature: async (_, args, { models, pubsub }): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.CharacterFeature,
                    checkField: ['id', args.featureId],
                    pubsub,
                    constant: FEATURE_DELETED,
                })

                if (typeof deleted === 'string') {
                    return deleted
                } else {
                    throw deleted.message
                }
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddCharacterFeatures: async (_, { features }, { models }): Promise<CharacterFeatureType[]> => {
            try {
                await queryUtils.bulkAddItem(models.CharacterFeature, features, ['feature', 'feature'])

                const all = await queryUtils.queryAll(models.CharacterFeature)

                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
