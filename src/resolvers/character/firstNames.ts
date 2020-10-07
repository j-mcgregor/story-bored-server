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
            { firstName },
            { models }
        ): Promise<CharacterFirstNameType> => {
            try {
                const newDevice = await queryUtils.addItem<
                    CharacterFirstNameInput
                >({
                    model: models.CharacterFirstName,
                    item: firstName,
                    checkField: ['firstName', firstName.firstName],
                })

                return newDevice
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterFirstName: async (
            _,
            { firstName },
            { models, pubsub }
        ): Promise<CharacterFirstNameType> => {
            try {
                const firstNameUpdated = await queryUtils.updateItem(
                    models.CharacterDescription,
                    { firstName },
                    ['id', firstName.id]
                )

                pubsub.publish(FIRST_NAME_UPDATED, { firstNameUpdated })

                return firstNameUpdated
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
                    checkField: ['id', args.firstNameId],
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
            { firstNames },
            { models }
        ): Promise<CharacterFirstNameType[]> => {
            try {
                await queryUtils.bulkAddItem(
                    models.CharacterFirstName,
                    firstNames,
                    ['firstName', 'firstName']
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
