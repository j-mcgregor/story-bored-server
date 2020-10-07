import {
    CharacterTitleInput,
    CharacterTitleType,
    Resolvers,
} from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const TITLE_UPDATED = 'TITLE_UPDATED'
const TITLE_DELETED = 'TITLE_DELETED'

const resolver: Resolvers = {
    Query: {
        characterTitles: async (
            _,
            __,
            { models }
        ): Promise<CharacterTitleType[]> => {
            try {
                const all = await queryUtils.queryAll(models.CharacterTitle)
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterTitle: async (
            _,
            { title },
            { models }
        ): Promise<CharacterTitleType> => {
            try {
                const occ = await queryUtils.addItem<CharacterTitleInput>({
                    model: models.CharacterTitle,
                    item: title,
                    checkField: ['title', title.title],
                })

                return occ
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterTitle: async (
            _,
            { title },
            { models, pubsub }
        ): Promise<CharacterTitleType> => {
            try {
                const titleUpdated = await queryUtils.updateItem(
                    models.CharacterDescription,
                    { title },
                    ['id', title.id]
                )

                pubsub.publish(TITLE_UPDATED, { titleUpdated })

                return titleUpdated
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterTitle: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.CharacterTitle,
                    checkField: ['id', args.titleId],
                    pubsub,
                    constant: TITLE_DELETED,
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
        bulkAddCharacterTitles: async (
            _,
            { titles },
            { models }
        ): Promise<CharacterTitleType[]> => {
            try {
                await queryUtils.bulkAddItem(models.CharacterTitle, titles, [
                    'title',
                    'title',
                ])

                const all = await queryUtils.queryAll(models.CharacterTitle)

                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
