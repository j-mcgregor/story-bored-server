import {
    CharacterHonorificsInput,
    CharacterHonorificsType,
    Resolvers,
} from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const HONORIFIC_UPDATED = 'HONORIFIC_UPDATED'
const HONORIFIC_DELETED = 'HONORIFIC_DELETED'

const resolver: Resolvers = {
    Query: {
        characterHonorifics: async (
            _,
            __,
            { models }
        ): Promise<CharacterHonorificsType[]> => {
            try {
                const all = await queryUtils.queryAll(
                    models.CharacterHonorifics
                )
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterHonorifics: async (
            _,
            { honorific },
            { models }
        ): Promise<CharacterHonorificsType> => {
            try {
                const newDevice = await queryUtils.addItem<
                    CharacterHonorificsInput
                >({
                    model: models.CharacterHonorifics,
                    item: { honorific },
                    checkField: ['honorific', honorific],
                })

                return newDevice
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterHonorifics: async (
            _,
            args,
            { models, pubsub }
        ): Promise<CharacterHonorificsType> => {
            try {
                const device = await queryUtils.updateItem(
                    models.CharacterDescription,
                    args.honorific,
                    ['id', args.honorific.id]
                )

                pubsub.publish(HONORIFIC_UPDATED, { device })

                return device
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterHonorifics: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.CharacterHonorifics,
                    checkField: ['id', args.honorificId],
                    pubsub,
                    constant: HONORIFIC_DELETED,
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
        bulkAddCharacterHonorifics: async (
            _,
            { honorifics },
            { models }
        ): Promise<CharacterHonorificsType[]> => {
            try {
                await queryUtils.bulkAddItem(
                    models.CharacterHonorifics,
                    honorifics,
                    ['honorific', 'honorific']
                )

                const all = await queryUtils.queryAll(
                    models.CharacterHonorifics
                )

                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
