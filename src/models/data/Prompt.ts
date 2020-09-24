import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'
import { GenreListType } from '../story/Genre'

const { UUID, UUIDV1, TEXT, ARRAY, ENUM } = DataTypes

const {
    SCIFI,
    CRIME,
    HORROR,
    ROMANCE,
    FANTASY,
    RELIGIOUS,
    HISTORICAL,
    INSPIRATION,
} = GenreListType

export class WritingPrompt extends Model {
    public id: string
    public prompt: string
    public genres: string[]

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt: Date
}

WritingPrompt.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        prompt: TEXT,
        genres: ARRAY(
            ENUM(
                SCIFI,
                CRIME,
                HORROR,
                ROMANCE,
                FANTASY,
                RELIGIOUS,
                HISTORICAL,
                INSPIRATION
            )
        ),
    },
    {
        sequelize,
        modelName: 'data_writing_prompt',
        timestamps: true,
        paranoid: true,
    }
)

export type WritingPromptModelStatic = typeof Model & {
    new (
        values?: Record<string, unknown>,
        options?: BuildOptions
    ): WritingPrompt
}

export default WritingPrompt as WritingPromptModelStatic
