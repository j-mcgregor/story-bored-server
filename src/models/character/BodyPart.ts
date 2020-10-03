import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, STRING } = DataTypes

export class CharacterBodyPart extends Model {
    public id: string
    public part: string

    public readonly createdAt: Date
    public readonly updatedAt: Date
    public readonly deletedAt: Date
}

CharacterBodyPart.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        part: STRING,
    },
    {
        sequelize,
        modelName: 'character_body_part',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterBodyPartModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): CharacterBodyPart
}

export default CharacterBodyPart as CharacterBodyPartModelStatic
