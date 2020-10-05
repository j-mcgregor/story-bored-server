import { CharacterDescriptionsType, Resolvers } from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const DESCRIPTION_UPDATED = 'DESCRIPTION_UPDATED'
const DESCRIPTION_DELETED = 'DESCRIPTION_DELETED'

const resolver: Resolvers = {
    Query: {
        characterDescriptions: async (
            _,
            __,
            { models }
        ): Promise<CharacterDescriptionsType[]> => {
            try {
                const all = await queryUtils.queryAll(
                    models.CharacterDescription
                )
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterDescriptions: async (
            _,
            { description },
            { models }
        ): Promise<CharacterDescriptionsType> => {
            try {
                const newDescription = await queryUtils.addItem<
                    CharacterDescriptionsType
                >({
                    model: models.CharacterDescription,
                    item: { description },
                    checkField: ['description', description],
                })

                return newDescription
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterDescriptions: async (
            _,
            args,
            { models, pubsub }
        ): Promise<CharacterDescriptionsType> => {
            try {
                const description = await queryUtils.updateItem(
                    models.CharacterDescription,
                    args.description,
                    ['id', args.description.id]
                )

                pubsub.publish(DESCRIPTION_UPDATED, { description })

                return description
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterDescriptions: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.CharacterDescription,
                    checkField: ['id', args.descriptionId],
                    pubsub,
                    constant: DESCRIPTION_DELETED,
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
        bulkAddCharacterDescriptions: async (
            _,
            args,
            { models }
        ): Promise<CharacterDescriptionsType[]> => {
            try {
                const allDescriptions = await queryUtils.bulkAddItem(
                    models.CharacterDescription,
                    args.descriptions,
                    ['description', 'description']
                )

                if (Array.isArray(allDescriptions)) {
                    return allDescriptions
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
