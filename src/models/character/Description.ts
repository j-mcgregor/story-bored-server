import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, STRING } = DataTypes

export class CharacterDescription extends Model {
    public id: string
    public description: string

    public readonly createdAt: Date
    public readonly updatedAt: Date
    public readonly deletedAt: Date
}

CharacterDescription.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        description: STRING,
    },
    {
        sequelize,
        modelName: 'character_description',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterDescriptionModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): CharacterDescription
}

export default CharacterDescription as CharacterDescriptionModelStatic
