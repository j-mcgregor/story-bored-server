import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, ENUM, INTEGER } = DataTypes

enum StoryLengthType {
    Flash = 'FLASH',
    Short = 'SHORT',
    Novella = 'NOVELLA',
    Novel = 'NOVEL',
    Epic = 'EPIC',
}

export class StoryLength extends Model {
    public id: string
    public minWords: number
    public maxWords: number
    public avChapters: number
    public name: StoryLengthType
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt: Date
}

StoryLength.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        minWords: {
            type: INTEGER,
        },
        maxWords: {
            type: INTEGER,
        },
        avChapters: {
            type: INTEGER,
        },
        name: ENUM('FLASH', 'SHORT', 'NOVELLA', 'NOVEL', 'EPIC'),
    },
    {
        sequelize,
        modelName: 'story_length',
        timestamps: true,
        paranoid: true,
    }
)

export type StoryLengthModelStatic = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions): StoryLength
}

export default StoryLength as StoryLengthModelStatic
