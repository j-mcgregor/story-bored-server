import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, STRING, ENUM } = DataTypes

export enum Origin {
    SPANISH = 'SPANISH',
    NORWEIGIAN = 'NORWEIGIAN',
    GENERAL = 'GENERAL',
}

enum GenderTraditionalEnum {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}

export class CharacterFirstName extends Model {
    public id: string
    public firstName: string
    public origin: Origin
    public gender: GenderTraditionalEnum

    public readonly createdAt: Date
    public readonly updatedAt: Date
    public readonly deletedAt: Date
}

CharacterFirstName.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        firstName: STRING,
        origin: ENUM(Origin.SPANISH, Origin.NORWEIGIAN, Origin.GENERAL),
        gender: ENUM(GenderTraditionalEnum.MALE, GenderTraditionalEnum.FEMALE),
    },
    {
        sequelize,
        modelName: 'character_first_name',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterFirstNameModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): CharacterFirstName
}

export default CharacterFirstName as CharacterFirstNameModelStatic
