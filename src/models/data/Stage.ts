import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, TEXT, ENUM, INTEGER } = DataTypes

export enum StoryStageEnum {
    STASIS = 'STASIS',
    TRIGGER = 'TRIGGER',
    QUEST = 'QUEST',
    BOLT = 'BOLT',
    SHIFT = 'SHIFT',
    DEFEAT = 'DEFEAT',
    POWER = 'POWER',
    RESOLUTION = 'RESOLUTION',
}

const {
    STASIS,
    TRIGGER,
    QUEST,
    BOLT,
    SHIFT,
    DEFEAT,
    POWER,
    RESOLUTION,
} = StoryStageEnum

export class StoryStage extends Model {
    public id: string
    public stage: StoryStageEnum
    public summary: string
    public storyOrder: number
    public plottingOrder: number

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt: Date
}

StoryStage.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        stage: ENUM(
            STASIS,
            TRIGGER,
            QUEST,
            BOLT,
            SHIFT,
            DEFEAT,
            POWER,
            RESOLUTION
        ),
        summary: TEXT,
        storyOrder: INTEGER,
        plottingOrder: INTEGER,
    },
    {
        sequelize,
        modelName: 'data_story_stage',
        timestamps: true,
        paranoid: true,
    }
)

export type StoryStageModelStatic = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions): StoryStage
}

export default StoryStage as StoryStageModelStatic
