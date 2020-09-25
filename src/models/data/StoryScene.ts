import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'
import { StoryStageType } from './Stage'

const { UUID, UUIDV1, TEXT, ENUM, INTEGER } = DataTypes

const {
    STASIS,
    TRIGGER,
    QUEST,
    BOLT,
    SHIFT,
    DEFEAT,
    POWER,
    RESOLUTION,
} = StoryStageType

export class StoryScene extends Model {
    public id: string
    public defaultStage: StoryStageType
    public defaultScene: number
    public description: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt: Date
}

StoryScene.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        defaultStage: ENUM(
            STASIS,
            TRIGGER,
            QUEST,
            BOLT,
            SHIFT,
            DEFEAT,
            POWER,
            RESOLUTION
        ),
        defaultScene: INTEGER,
        description: TEXT,
    },
    {
        sequelize,
        modelName: 'data_story_scene',
        timestamps: true,
        paranoid: true,
    }
)

export type StorySceneModelStatic = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions): StoryScene
}

export default StoryScene as StorySceneModelStatic
