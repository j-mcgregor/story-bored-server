import { GenreType, Resolvers } from '../../generated/graphql'

const GENRE_UPDATED = 'GENRE_UPDATED'
const GENRE_DELETED = 'GENRE_DELETED'

const resolver: Resolvers = {
    Query: {
        genreType: async (_, __, { models }): Promise<GenreType[]> => {
            const { GenreType: genreModel } = models
            try {
                const allGenreTypes = await genreModel.findAll()

                return allGenreTypes
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addGenreType: async (_, args, { models }): Promise<GenreType[]> => {
            const { GenreType: genreModel } = models

            const genreName = await genreModel.findOne({
                where: {
                    name: args.genreType.name,
                },
                raw: true,
            })

            if (genreName) {
                throw new Error(
                    'Name is already in use. Please choose from FLASH, SHORT, NOVELLA, NOVEL or EPIC'
                )
            }

            try {
                await genreModel.create(args.genreType, { raw: true })
                const allGenreTypes = await genreModel.findAll()

                return allGenreTypes
            } catch (err) {
                throw new Error(err)
            }
        },
        updateGenreType: async (
            _,
            args,
            { models, pubsub }
        ): Promise<GenreType> => {
            try {
                models.GenreType.update(args, {
                    where: {
                        id: args.genreType.id,
                    },
                })

                const genre = await models.GenreType.findOne({
                    where: {
                        id: args.genreType.id,
                    },
                    raw: true,
                })

                pubsub.publish(GENRE_UPDATED, { genre })

                return genre
            } catch (err) {
                throw new Error(err)
            }
        },
        deleteGenreType: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const genre = await models.GenreType.findOne({
                    where: {
                        id: args.genreTypeId,
                    },
                    raw: true,
                })

                if (!genre) {
                    throw new Error(
                        "Story Length doesn't exist or has been deleted"
                    )
                }

                models.GenreType.destroy({
                    where: {
                        id: args.genreTypeId,
                    },
                })

                pubsub.publish(GENRE_DELETED, { genre })

                return `Story Length ${genre.name} (id: ${genre.id}) successfully deleted`
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
