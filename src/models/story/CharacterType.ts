import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, ENUM, STRING, ARRAY, TEXT } = DataTypes

enum CharacterListEnum {
    ANTAGONIST = 'ANTAGONIST',
    CONFIDANTE = 'CONFIDANTE',
    DEUTERAGONIST = 'DEUTERAGONIST',
    DYNAMIC_CHANGING = 'DYNAMIC_CHANGING',
    FOIL = 'FOIL',
    LOVE_INTEREST = 'LOVE_INTEREST',
    PROTAGONIST = 'PROTAGONIST',
    ROUND = 'ROUND',
    STATIC_UNCHANGING = 'STATIC_UNCHANGING',
    STOCK = 'STOCK',
    SYMBOLIC = 'SYMBOLIC',
    TERTIARY = 'TERTIARY',
}

enum CharacterRoleEnum {
    ROLE = 'ROLE',
    QUALITY = 'QUALITY',
}

const {
    ANTAGONIST,
    CONFIDANTE,
    DEUTERAGONIST,
    DYNAMIC_CHANGING,
    FOIL,
    LOVE_INTEREST,
    PROTAGONIST,
    ROUND,
    STATIC_UNCHANGING,
    SYMBOLIC,
    STOCK,
    TERTIARY,
} = CharacterListEnum

export class CharacterType extends Model {
    public id: string
    public description: string
    public examples: string[]
    public category: CharacterRoleEnum
    public name: CharacterListEnum
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt: Date
}

CharacterType.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        name: ENUM(
            ANTAGONIST,
            CONFIDANTE,
            DEUTERAGONIST,
            DYNAMIC_CHANGING,
            FOIL,
            LOVE_INTEREST,
            PROTAGONIST,
            ROUND,
            STATIC_UNCHANGING,
            SYMBOLIC,
            STOCK,
            TERTIARY
        ),
        category: ENUM(CharacterRoleEnum.ROLE, CharacterRoleEnum.QUALITY),
        description: TEXT,
        examples: ARRAY(STRING),
    },
    {
        sequelize,
        modelName: 'character_type',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterTypeModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): CharacterType
}

export default CharacterType as CharacterTypeModelStatic
