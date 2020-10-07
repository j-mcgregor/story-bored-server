import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, STRING, ENUM } = DataTypes

enum LanguageEnum {
    EN = 'en',
}

enum FixEnum {
    PRE = 'PRE',
    SUF = 'SUF',
}

export class CharacterTitle extends Model {
    public id: string
    public title: string
    public language: string
    public fix: FixEnum

    public readonly createdAt: Date
    public readonly updatedAt: Date
    public readonly deletedAt: Date
}

CharacterTitle.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        title: STRING,
        language: {
            type: STRING,
            defaultValue: LanguageEnum.EN,
        },
        fix: ENUM(FixEnum.PRE, FixEnum.SUF),
    },
    {
        sequelize,
        modelName: 'character_title',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterTitleModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): CharacterTitle
}

export default CharacterTitle as CharacterTitleModelStatic
