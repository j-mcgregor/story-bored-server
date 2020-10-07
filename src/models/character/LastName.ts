import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'
import { Origin } from './FirstName'

const { UUID, UUIDV1, STRING, ENUM } = DataTypes

export class CharacterLastName extends Model {
    public id: string
    public lastName: string
    public origin: Origin

    public readonly createdAt: Date
    public readonly updatedAt: Date
    public readonly deletedAt: Date
}

CharacterLastName.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        lastName: STRING,
        origin: ENUM(Origin.SPANISH, Origin.NORWEIGIAN, Origin.GENERAL),
    },
    {
        sequelize,
        modelName: 'character_last_name',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterLastNameModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): CharacterLastName
}

export default CharacterLastName as CharacterLastNameModelStatic
