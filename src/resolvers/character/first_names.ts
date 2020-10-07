import {
    CharacterFirstNameInput,
    CharacterFirstNameType,
    Resolvers,
} from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const FIRST_NAME_UPDATED = 'FIRST_NAME_UPDATED'
const FIRST_NAME_DELETED = 'FIRST_NAME_DELETED'

const resolver: Resolvers = {
    Query: {
        characterFirstNames: async (
            _,
            __,
            { models }
        ): Promise<CharacterFirstNameType[]> => {
            try {
                const all = await queryUtils.queryAll(models.CharacterFirstName)
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterFirstName: async (
            _,
            { first_name },
            { models }
        ): Promise<CharacterFirstNameType> => {
            try {
                const newDevice = await queryUtils.addItem<
                    CharacterFirstNameInput
                >({
                    model: models.CharacterFirstName,
                    item: first_name,
                    checkField: ['first_name', first_name.first_name],
                })

                return newDevice
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterFirstName: async (
            _,
            { first_name },
            { models, pubsub }
        ): Promise<CharacterFirstNameType> => {
            try {
                const first_nameUpdated = await queryUtils.updateItem(
                    models.CharacterDescription,
                    { first_name },
                    ['id', first_name.id]
                )

                pubsub.publish(FIRST_NAME_UPDATED, { first_nameUpdated })

                return first_nameUpdated
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterFirstName: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.CharacterFirstName,
                    checkField: ['id', args.first_nameId],
                    pubsub,
                    constant: FIRST_NAME_DELETED,
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
        bulkAddCharacterFirstNames: async (
            _,
            { first_names },
            { models }
        ): Promise<CharacterFirstNameType[]> => {
            try {
                await queryUtils.bulkAddItem(
                    models.CharacterFirstName,
                    first_names,
                    ['first_name', 'first_name']
                )

                const all = await queryUtils.queryAll(models.CharacterFirstName)

                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
