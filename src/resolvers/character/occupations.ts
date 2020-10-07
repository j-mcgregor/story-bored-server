import {
    CharacterOccupationInput,
    CharacterOccupationType,
    Resolvers,
} from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const OCCUPATION_UPDATED = 'OCCUPATION_UPDATED'
const OCCUPATION_DELETED = 'OCCUPATION_DELETED'

const resolver: Resolvers = {
    Query: {
        characterOccupations: async (
            _,
            __,
            { models }
        ): Promise<CharacterOccupationType[]> => {
            try {
                const all = await queryUtils.queryAll(
                    models.CharacterOccupation
                )
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterOccupation: async (
            _,
            { occupation },
            { models }
        ): Promise<CharacterOccupationType> => {
            try {
                const occ = await queryUtils.addItem<CharacterOccupationInput>({
                    model: models.CharacterOccupation,
                    item: occupation,
                    checkField: ['occupation', occupation.occupation],
                })

                return occ
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterOccupation: async (
            _,
            { occupation },
            { models, pubsub }
        ): Promise<CharacterOccupationType> => {
            try {
                const occupationUpdated = await queryUtils.updateItem(
                    models.CharacterDescription,
                    { occupation },
                    ['id', occupation.id]
                )

                pubsub.publish(OCCUPATION_UPDATED, { occupationUpdated })

                return occupationUpdated
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterOccupation: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.CharacterOccupation,
                    checkField: ['id', args.occupationId],
                    pubsub,
                    constant: OCCUPATION_DELETED,
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
        bulkAddCharacterOccupations: async (
            _,
            { occupations },
            { models }
        ): Promise<CharacterOccupationType[]> => {
            try {
                await queryUtils.bulkAddItem(
                    models.CharacterOccupation,
                    occupations,
                    ['occupation', 'occupation']
                )

                const all = await queryUtils.queryAll(
                    models.CharacterOccupation
                )

                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
