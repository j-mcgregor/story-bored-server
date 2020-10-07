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
            { last_name },
            { models }
        ): Promise<CharacterLastNameType> => {
            try {
                const name = await queryUtils.addItem<CharacterLastNameInput>({
                    model: models.CharacterLastName,
                    item: last_name,
                    checkField: ['last_name', last_name.last_name],
                })

                return name
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterLastName: async (
            _,
            { last_name },
            { models, pubsub }
        ): Promise<CharacterLastNameType> => {
            try {
                const last_nameUpdated = await queryUtils.updateItem(
                    models.CharacterDescription,
                    { last_name },
                    ['id', last_name.id]
                )

                pubsub.publish(LAST_NAME_UPDATED, { last_nameUpdated })

                return last_nameUpdated
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
                    checkField: ['id', args.last_nameId],
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
            { last_names },
            { models }
        ): Promise<CharacterLastNameType[]> => {
            try {
                await queryUtils.bulkAddItem(
                    models.CharacterLastName,
                    last_names,
                    ['last_name', 'last_name']
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
