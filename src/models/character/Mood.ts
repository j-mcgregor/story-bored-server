import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, STRING } = DataTypes

export class CharacterMood extends Model {
    public id: string
    public mood: string

    public readonly createdAt: Date
    public readonly updatedAt: Date
    public readonly deletedAt: Date
}

CharacterMood.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        mood: STRING,
    },
    {
        sequelize,
        modelName: 'character_mood',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterMoodModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): CharacterMood
}

export default CharacterMood as CharacterMoodModelStatic
