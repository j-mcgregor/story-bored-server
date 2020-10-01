import sequelize from '../../db'
import { Head, Resolvers, WritingPrompt } from '../../generated/graphql'

function getRandom(arr: string[], n: number) {
    const result = new Array(n)
    let len = arr.length
    const taken = new Array(len)

    if (n > len)
        throw new RangeError('getRandom: more elements taken than available')
    while (n--) {
        const x = Math.floor(Math.random() * len)
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken ? taken[len] : len
    }
    return result
}

const resolver: Resolvers = {
    Mutation: {
        createHead: async (_, args, { models }): Promise<Head> => {
            let prompt = {} as WritingPrompt
            try {
                if (args.meta.prompt) {
                    prompt = await models.WritingPrompt.findOne({
                        where: {
                            genres: args.meta.genre,
                        },
                        order: sequelize.random(),
                    })
                }

                const genre = await models.GenreType.findOne({
                    where: {
                        name: args.meta.genre,
                    },
                }).then(g => {
                    g.keywords = !!args.meta.keywords
                        ? getRandom(g.keywords, args.meta.keywords)
                        : g.keywords
                    return g
                })

                const length = await models.StoryLength.findOne({
                    where: {
                        name: args.meta.length,
                    },
                })

                if (!prompt) throw new Error()

                const head: Head = {
                    prompt: prompt && prompt,
                    genre,
                    length,
                }

                return head
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
