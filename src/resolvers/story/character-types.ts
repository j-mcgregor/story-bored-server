import { CharacterType, Resolvers } from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const CHARACTER_TYPE_UPDATED = 'CHARACTER_TYPE_UPDATED'
const CHARACTER_TYPE_DELETED = 'CHARACTER_TYPE_DELETED'

const resolver: Resolvers = {
    Query: {
        characterType: async (_, __, { models }): Promise<CharacterType[]> => {
            try {
                const all = await queryUtils.queryAll(models.CharacterType)
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterType: async (
            _,
            args,
            { models }
        ): Promise<CharacterType> => {
            try {
                const newDevice: CharacterType = await queryUtils.addItem<
                    CharacterType
                >({
                    model: models.CharacterType,
                    item: args.characterType as CharacterType,
                    checkField: ['name', args.characterType.name],
                    errorMsg:
                        'Name is already in use. Please choose from ANTAGONIST, CONFIDANTE, DEUTERAGONIST, DYNAMIC_CHANGING, FOIL, LOVE_INTEREST, PROTAGONIST, ROUND, STATIC_UNCHANGING, SYMBOLIC, STOCK or TERTIARY',
                })

                return newDevice
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterType: async (
            _,
            args,
            { models, pubsub }
        ): Promise<CharacterType> => {
            try {
                await models.CharacterType.update(args.characterType, {
                    where: {
                        id: args.characterType.id,
                    },
                })

                const characterType = await models.CharacterType.findOne({
                    where: {
                        id: args.characterType.id,
                    },
                    raw: true,
                })

                pubsub.publish(CHARACTER_TYPE_UPDATED, { characterType })

                return characterType
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterType: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const characterType = await models.CharacterType.findOne({
                    where: {
                        id: args.characterTypeId,
                    },
                    raw: true,
                })

                if (!characterType) {
                    throw new Error(
                        "Character Type doesn't exist or has been deleted"
                    )
                }

                models.CharacterType.destroy({
                    where: {
                        id: args.characterTypeId,
                    },
                })

                pubsub.publish(CHARACTER_TYPE_DELETED, { characterType })

                return `Character Type ${characterType.name} (id: ${characterType.id}) successfully deleted`
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
