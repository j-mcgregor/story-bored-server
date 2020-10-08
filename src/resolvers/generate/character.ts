import { CharacterController } from '../../controllers/character'
import { CharacterType, Resolvers } from '../../generated/graphql'

export interface Character {
    title?: string
    first_name?: string
    last_name?: string
    character_type?: CharacterType
    descriptions?: string[]
    moods?: string[]
    occupations?: string[]
    honorific?: string
}

const resolver: Resolvers = {
    Query: {
        generateCharacter: async (_, { input }): Promise<Character> => {
            const controller = new CharacterController()

            try {
                if (input.title !== null) await controller.getTitle(input.title)

                if (input.first_name !== null) await controller.getFirstName()

                if (input.last_name !== null) await controller.getLastName()

                if (input.character_type) await controller.getCharacterType(input.character_type.type)

                if (input.descriptions) await controller.getDescriptions(input.descriptions)

                if (input.moods) await controller.getMoods(input.moods)

                if (input.occupations) await controller.getOccupations(input.occupations)

                if (input.honorifics) await controller.getHonorific()

                return controller.character
            } catch (e) {
                throw new Error(e)
            }
        },
    },
}

export default resolver
