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
            args,
            { models }
        ): Promise<CharacterDescriptionsType> => {
            const { CharacterDescription: descriptionModel } = models

            const description = await descriptionModel.findOne({
                where: {
                    description: args.description,
                },
                raw: true,
            })

            if (description) {
                throw new Error('Description already exists. Be more creative')
            }

            try {
                const newDescription = await descriptionModel.create(
                    { description: args.description },
                    { raw: true }
                )

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
            const { CharacterDescription: descriptionModel } = models

            try {
                descriptionModel.update(args, {
                    where: {
                        id: args.description.id,
                    },
                })

                const description = await descriptionModel.findOne({
                    where: {
                        id: args.description.id,
                    },
                    raw: true,
                })

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
            const { CharacterDescription: descriptionModel } = models

            try {
                const description = await descriptionModel.findOne({
                    where: {
                        id: args.description.id,
                    },
                    raw: true,
                })

                if (!description) {
                    throw new Error(
                        "Character Description doesn't exist or has been deleted"
                    )
                }

                descriptionModel.destroy({
                    where: {
                        id: args.description.id,
                    },
                })

                pubsub.publish(DESCRIPTION_DELETED, { description })

                return `Character Description (id: ${description.id}) successfully deleted`
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddCharacterDescriptions: async (
            _,
            args,
            { models }
        ): Promise<CharacterDescriptionsType[]> => {
            const { CharacterDescription: descriptionModel } = models

            try {
                const all = await descriptionModel.findAll({
                    attributes: ['description'],
                })

                const existingDescriptions = [
                    ...new Set(all.map(a => a.description)),
                ]

                const filteredArgs = args.descriptions
                    .map(desc => {
                        return !existingDescriptions.includes(desc.description)
                            ? desc
                            : null
                    })
                    .filter(f => f)

                await descriptionModel.bulkCreate(filteredArgs)
                const allDescriptions = await descriptionModel.findAll()

                return allDescriptions
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
