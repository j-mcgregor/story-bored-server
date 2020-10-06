import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, STRING } = DataTypes

export class CharacterHonorifics extends Model {
    public id: string
    public honorific: string

    public readonly createdAt: Date
    public readonly updatedAt: Date
    public readonly deletedAt: Date
}

CharacterHonorifics.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        honorific: STRING,
    },
    {
        sequelize,
        modelName: 'character_honorifics',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterHonorificsModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): CharacterHonorifics
}

export default CharacterHonorifics as CharacterHonorificsModelStatic
