import { BuildOptions, DataTypes, Model } from 'sequelize'

import sequelize from '../../db'

const { UUID, UUIDV1, TEXT, STRING } = DataTypes

export class PlotDevice extends Model {
    public id: string
    public plot: string
    public definition: string
    public example: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt: Date
}

PlotDevice.init(
    {
        id: {
            type: UUID,
            defaultValue: UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        plot: STRING,
        definition: TEXT,
        example: TEXT,
    },
    {
        sequelize,
        modelName: 'data_plot_device',
        timestamps: true,
        paranoid: true,
    }
)

export type PlotDeviceModelStatic = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions): PlotDevice
}

export default PlotDevice as PlotDeviceModelStatic
