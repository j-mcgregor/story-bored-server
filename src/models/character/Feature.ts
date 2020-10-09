import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, STRING, ENUM } = DataTypes

export enum Feature {
    AGE = 'AGE',
    BUILD = 'BUILD',
    EYEBROWS = 'EYEBROWS',
    EYE_COLOR = 'EYE_COLOR',
    EYE_SHAPE = 'EYE_SHAPE',
    FACIAL_SHAPE = 'FACIAL_SHAPE',
    FACIAL_HAIR = 'FACIAL_HAIR',
    FACIAL_FEATURES = 'FACIAL_FEATURES',
    GENERAL_APPEARANCE = 'GENERAL_APPEARANCE',
    HAIR_COLOR = 'HAIR_COLOR',
    HAIR_COLOR_ALTERNATIVES = 'HAIR_COLOR_ALTERNATIVES',
    HAIR_LENGTH = 'HAIR_LENGTH',
    HAIR_TYPES = 'HAIR_TYPES',
    HANDS = 'HANDS',
    HEIGHT = 'HEIGHT',
    MOUTH_LIPS = 'MOUTH_LIPS',
    NOSE = 'NOSE',
    PERSONALITY_TRAITS = 'PERSONALITY_TRAITS',
    SKIN_GENERAL = 'SKIN_GENERAL',
    SKIN_TONE = 'SKIN_TONE',
}

export class CharacterFeature extends Model {
    public id: string
    public feature: string
    public value: string
    public category: string

    public readonly createdAt: Date
    public readonly updatedAt: Date
    public readonly deletedAt: Date
}

CharacterFeature.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        feature: ENUM(
            Feature.AGE,
            Feature.BUILD,
            Feature.EYEBROWS,
            Feature.EYE_COLOR,
            Feature.EYE_SHAPE,
            Feature.FACIAL_SHAPE,
            Feature.FACIAL_HAIR,
            Feature.FACIAL_FEATURES,
            Feature.GENERAL_APPEARANCE,
            Feature.HAIR_COLOR,
            Feature.HAIR_COLOR_ALTERNATIVES,
            Feature.HAIR_LENGTH,
            Feature.HAIR_TYPES,
            Feature.HANDS,
            Feature.HEIGHT,
            Feature.MOUTH_LIPS,
            Feature.NOSE,
            Feature.PERSONALITY_TRAITS,
            Feature.SKIN_GENERAL,
            Feature.SKIN_TONE
        ),
        value: STRING,
        category: {
            type: STRING,
            defaultValue: null,
        },
    },
    {
        sequelize,
        modelName: 'character_feature',
        timestamps: true,
        paranoid: true,
    }
)

export type CharacterFeatureModelStatic = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions): CharacterFeature
}

export default CharacterFeature as CharacterFeatureModelStatic
