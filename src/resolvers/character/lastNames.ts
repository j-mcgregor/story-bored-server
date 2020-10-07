import {
    CharacterLastNameInput,
    CharacterLastNameType,
    Resolvers,
} from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const LAST_NAME_UPDATED = 'LAST_NAME_UPDATED'
const LAST_NAME_DELETED = 'LAST_NAME_DELETED'

const resolver: Resolvers = {
    Query: {
        characterLastNames: async (
            _,
            __,
            { models }
        ): Promise<CharacterLastNameType[]> => {
            try {
                const all = await queryUtils.queryAll(models.CharacterLastName)
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterLastName: async (
            _,
            { lastName },
            { models }
        ): Promise<CharacterLastNameType> => {
            try {
                const name = await queryUtils.addItem<CharacterLastNameInput>({
                    model: models.CharacterLastName,
                    item: lastName,
                    checkField: ['lastName', lastName.lastName],
                })

                return name
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterLastName: async (
            _,
            { lastName },
            { models, pubsub }
        ): Promise<CharacterLastNameType> => {
            try {
                const lastNameUpdated = await queryUtils.updateItem(
                    models.CharacterDescription,
                    { lastName },
                    ['id', lastName.id]
                )

                pubsub.publish(LAST_NAME_UPDATED, { lastNameUpdated })

                return lastNameUpdated
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterLastName: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.CharacterLastName,
                    checkField: ['id', args.lastNameId],
                    pubsub,
                    constant: LAST_NAME_DELETED,
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
        bulkAddCharacterLastNames: async (
            _,
            { lastNames },
            { models }
        ): Promise<CharacterLastNameType[]> => {
            try {
                await queryUtils.bulkAddItem(
                    models.CharacterLastName,
                    lastNames,
                    ['lastName', 'lastName']
                )

                const all = await queryUtils.queryAll(models.CharacterLastName)

                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
