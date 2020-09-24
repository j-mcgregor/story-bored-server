import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, ENUM, STRING, ARRAY } = DataTypes

export enum GenreListType {
    SCIFI = 'SCIFI',
    CRIME = 'CRIME',
    HORROR = 'HORROR',
    ROMANCE = 'ROMANCE',
    FANTASY = 'FANTASY',
    RELIGIOUS = 'RELIGIOUS',
    HISTORICAL = 'HISTORICAL',
    INSPIRATION = 'INSPIRATION',
}

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

export class Genre extends Model {
    public id: string
    public name: GenreListType
    public keywords: string[]

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt: Date
}

Genre.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        name: ENUM(
            SCIFI,
            CRIME,
            HORROR,
            ROMANCE,
            FANTASY,
            RELIGIOUS,
            HISTORICAL,
            INSPIRATION
        ),
        keywords: ARRAY(STRING),
    },
    {
        sequelize,
        modelName: 'genre',
        timestamps: true,
        paranoid: true,
    }
)

export type GenreModelStatic = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions): Genre
}

export default Genre as GenreModelStatic
