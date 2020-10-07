import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, STRING } = DataTypes

enum LanguageEnum {
    EN = 'en',
}

export class CharacterOccupation extends Model {
    public id: string
    public occupation: string
    public language: string

    public readonly createdAt: Date
    public readonly updatedAt: Date
    public readonly deletedAt: Date
}

CharacterOccupation.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        occupation: STRING,
        language: {
            type: STRING,
            defaultValue: LanguageEnum.EN,
        },
    },
    {
        sequelize,
        modelName: 'character_occupation',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterOccupationModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): CharacterOccupation
}

export default CharacterOccupation as CharacterOccupationModelStatic
