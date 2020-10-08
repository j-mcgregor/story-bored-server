import sequelize from '../db'
import { CharacterListEnum, CharacterType, Fix_Enum } from '../generated/graphql'
import Models from '../models'
import { Character } from '../resolvers/generate/character'

export class CharacterController {
    public character: Character

    constructor() {
        this.character = {}
    }

    async getTitle(fix: Fix_Enum) {
        try {
            const res = await Models.CharacterTitle.findOne({
                order: sequelize.random(),
                where: {
                    fix,
                },
            })

            this.character.title = res.title
        } catch (e) {
            throw new Error(e)
        }
    }

    async getFirstName() {
        try {
            const res = await Models.CharacterFirstName.findOne({
                order: sequelize.random(),
            })

            this.character.first_name = res.first_name
        } catch (e) {
            throw new Error(e)
        }
    }

    async getLastName() {
        try {
            const res = await Models.CharacterLastName.findOne({
                order: sequelize.random(),
            })

            this.character.last_name = res.last_name
        } catch (e) {
            throw new Error(e)
        }
    }

    async getCharacterType(name?: CharacterListEnum) {
        try {
            let type: CharacterType

            if (name) {
                type = await Models.CharacterType.findOne({
                    where: {
                        name,
                    },
                })
            } else {
                type = await Models.CharacterType.findOne({
                    order: sequelize.random(),
                })
            }

            this.character.character_type = type
        } catch (e) {
            throw new Error(e)
        }
    }

    async getDescriptions(limit?: number) {
        try {
            const res = await Models.CharacterDescription.findAll({
                limit,
                order: sequelize.random(),
            })

            this.character.descriptions = [...res.map(d => d.description)]
        } catch (e) {
            throw new Error(e)
        }
    }

    async getMoods(limit?: number) {
        try {
            const res = await Models.CharacterMood.findAll({
                limit,
                order: sequelize.random(),
            })

            this.character.moods = [...res.map(d => d.mood)]
        } catch (e) {
            throw new Error(e)
        }
    }

    async getOccupations(limit?: number) {
        try {
            const res = await Models.CharacterOccupation.findAll({
                limit,
                order: sequelize.random(),
            })

            this.character.occupations = [...res.map(d => d.occupation)]
        } catch (e) {
            throw new Error(e)
        }
    }

    async getHonorific() {
        try {
            const res = await Models.CharacterHonorifics.findOne({
                order: sequelize.random(),
            })

            this.character.honorific = res.honorific
        } catch (e) {
            throw new Error(e)
        }
    }
}
