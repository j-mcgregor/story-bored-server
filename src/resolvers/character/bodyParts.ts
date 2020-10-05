import { CharacterBodyPartsType, Resolvers } from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const BODY_PART_UPDATED = 'BODY_PART_UPDATED'
const BODY_PART_DELETED = 'BODY_PART_DELETED'

const resolver: Resolvers = {
    Query: {
        characterBodyParts: async (
            _,
            __,
            { models }
        ): Promise<CharacterBodyPartsType[]> => {
            try {
                const all = await queryUtils.queryAll(models.CharacterBodyPart)
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterBodyParts: async (
            _,
            { part },
            { models }
        ): Promise<CharacterBodyPartsType> => {
            try {
                const newPart = await queryUtils.addItem<
                    CharacterBodyPartsType
                >({
                    model: models.CharacterBodyPart,
                    item: { part },
                    checkField: ['part', part],
                })

                return newPart
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterBodyParts: async (
            _,
            args,
            { models, pubsub }
        ): Promise<CharacterBodyPartsType> => {
            const { CharacterBodyPart: bodyPartModel } = models

            try {
                bodyPartModel.update(args, {
                    where: {
                        id: args.part.id,
                    },
                })

                const bodyPart = await bodyPartModel.findOne({
                    where: {
                        id: args.part.id,
                    },
                    raw: true,
                })

                pubsub.publish(BODY_PART_UPDATED, { bodyPart })

                return bodyPart
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterBodyParts: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            const { CharacterBodyPart: bodyPartModel } = models

            try {
                const bodyPart = await bodyPartModel.findOne({
                    where: {
                        id: args.part.id,
                    },
                    raw: true,
                })

                if (!bodyPart) {
                    throw new Error(
                        "Body Part doesn't exist or has been deleted"
                    )
                }

                bodyPartModel.destroy({
                    where: {
                        id: args.part.id,
                    },
                })

                pubsub.publish(BODY_PART_DELETED, { bodyPart })

                return `Body Part (id: ${bodyPart.id}) successfully deleted`
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddCharacterBodyParts: async (
            _,
            args,
            { models }
        ): Promise<CharacterBodyPartsType[]> => {
            const { CharacterBodyPart: bodyPartModel } = models

            try {
                await bodyPartModel.bulkCreate(args.parts)
                const allBodyParts = await bodyPartModel.findAll()

                return allBodyParts
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
