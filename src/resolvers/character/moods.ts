import {
    CharacterMoodInput,
    CharacterMoodType,
    Resolvers,
} from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const MOOD_UPDATED = 'MOOD_UPDATED'
const MOOD_DELETED = 'MOOD_DELETED'

const resolver: Resolvers = {
    Query: {
        characterMoods: async (
            _,
            __,
            { models }
        ): Promise<CharacterMoodType[]> => {
            try {
                const all = await queryUtils.queryAll(models.CharacterMood)
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addCharacterMood: async (
            _,
            { mood },
            { models }
        ): Promise<CharacterMoodType> => {
            try {
                const name = await queryUtils.addItem<CharacterMoodInput>({
                    model: models.CharacterMood,
                    item: mood,
                    checkField: ['mood', mood.mood],
                })

                return name
            } catch (err) {
                throw new Error(err)
            }
        },
        updateCharacterMood: async (
            _,
            { mood },
            { models, pubsub }
        ): Promise<CharacterMoodType> => {
            try {
                const moodUpdated = await queryUtils.updateItem(
                    models.CharacterDescription,
                    { mood },
                    ['id', mood.id]
                )

                pubsub.publish(MOOD_UPDATED, { moodUpdated })

                return moodUpdated
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteCharacterMood: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.CharacterMood,
                    checkField: ['id', args.moodId],
                    pubsub,
                    constant: MOOD_DELETED,
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
        bulkAddCharacterMoods: async (
            _,
            { moods },
            { models }
        ): Promise<CharacterMoodType[]> => {
            try {
                await queryUtils.bulkAddItem(models.CharacterMood, moods, [
                    'mood',
                    'mood',
                ])

                const all = await queryUtils.queryAll(models.CharacterMood)

                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
