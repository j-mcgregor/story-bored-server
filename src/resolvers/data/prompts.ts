import { WritingPrompt, Resolvers } from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const PROMPT_UPDATED = 'PROMPT_UPDATED'
const PROMPT_DELETED = 'PROMPT_DELETED'

const resolver: Resolvers = {
    Query: {
        writingPrompt: async (_, __, { models }): Promise<WritingPrompt[]> => {
            try {
                const all = await queryUtils.queryAll(models.WritingPrompt)
                return all
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addWritingPrompt: async (
            _,
            args,
            { models }
        ): Promise<WritingPrompt> => {
            try {
                const newDevice: WritingPrompt = await queryUtils.addItem<
                    WritingPrompt
                >({
                    model: models.WritingPrompt,
                    item: args.writingPrompt,
                    checkField: ['prompt', args.writingPrompt.prompt],
                })

                return newDevice
            } catch (err) {
                throw new Error(err)
            }
        },
        updateWritingPrompt: async (
            _,
            args,
            { models, pubsub }
        ): Promise<WritingPrompt> => {
            try {
                const prompt = await queryUtils.updateItem(
                    models.WritingPrompt,
                    args.writingPrompt,
                    ['id', args.writingPrompt.id]
                )

                pubsub.publish(PROMPT_UPDATED, { prompt })

                return prompt
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteWritingPrompt: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.WritingPrompt,
                    checkField: ['id', args.writingPromptId],
                    pubsub,
                    constant: PROMPT_DELETED,
                })

                if (typeof deleted === 'string') {
                    return deleted
                }
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddWritingPrompt: async (
            _,
            args,
            { models }
        ): Promise<WritingPrompt[]> => {
            try {
                const allPrompts = await queryUtils.bulkAddItem(
                    models.WritingPrompt,
                    args.writingPrompts,
                    ['prompt', 'prompt']
                )

                if (Array.isArray(allPrompts)) {
                    return allPrompts
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
