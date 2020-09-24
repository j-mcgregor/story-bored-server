import { WritingPrompt, Resolvers } from '../../generated/graphql'

const GENRE_UPDATED = 'GENRE_UPDATED'
const GENRE_DELETED = 'GENRE_DELETED'

const resolver: Resolvers = {
    Query: {
        writingPrompt: async (_, __, { models }): Promise<WritingPrompt[]> => {
            const { WritingPrompt: promptModel } = models
            try {
                const allPrompts = await promptModel.findAll()

                return allPrompts
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
        ): Promise<WritingPrompt[]> => {
            const { WritingPrompt: promptModel } = models

            const prompt = await promptModel.findOne({
                where: {
                    prompt: args.writingPrompt.prompt,
                },
                raw: true,
            })

            if (prompt) {
                throw new Error('Prompt already exists. Be more creative')
            }

            try {
                await promptModel.create(args.writingPrompt, { raw: true })
                const allPrompts = await promptModel.findAll()

                return allPrompts
            } catch (err) {
                throw new Error(err)
            }
        },
        updateWritingPrompt: async (
            _,
            args,
            { models, pubsub }
        ): Promise<WritingPrompt> => {
            const { WritingPrompt: promptModel } = models

            try {
                promptModel.update(args, {
                    where: {
                        id: args.writingPrompt.id,
                    },
                })

                const prompt = await promptModel.findOne({
                    where: {
                        id: args.writingPrompt.id,
                    },
                    raw: true,
                })

                pubsub.publish(GENRE_UPDATED, { prompt })

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
            const { WritingPrompt: promptModel } = models

            try {
                const prompt = await promptModel.findOne({
                    where: {
                        id: args.writingPromptId,
                    },
                    raw: true,
                })

                if (!prompt) {
                    throw new Error(
                        "Writing prompt doesn't exist or has been deleted"
                    )
                }

                promptModel.destroy({
                    where: {
                        id: args.writingPromptId,
                    },
                })

                pubsub.publish(GENRE_DELETED, { prompt })

                return `Writing Prompt (id: ${prompt.id}) successfully deleted`
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddWritingPrompt: async (
            _,
            args,
            { models }
        ): Promise<WritingPrompt[]> => {
            const { WritingPrompt: promptModel } = models
            console.log(args.writingPrompts.length)

            try {
                await promptModel.bulkCreate(args.writingPrompts)
                const allPrompts = await promptModel.findAll()

                return allPrompts
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
