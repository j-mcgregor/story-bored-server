import { PlotDevice, Resolvers } from '../../generated/graphql'
import queryUtils from '../utils/queryUtils'

const DEVICE_UPDATED = 'DEVICE_UPDATED'
const DEVICE_DELETED = 'DEVICE_DELETED'

const resolver: Resolvers = {
    Query: {
        plotDevices: async (_, __, { models }): Promise<PlotDevice[]> => {
            try {
                const allPlotDevices = await queryUtils.queryAll(
                    models.PlotDevice
                )
                return allPlotDevices
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addPlotDevice: async (_, args, { models }): Promise<PlotDevice[]> => {
            try {
                const newDevice = await queryUtils.addItem({
                    model: models.PlotDevice,
                    item: args.plotDevice,
                    checkField: ['plot', args.plotDevice.plot],
                })

                return newDevice
            } catch (err) {
                throw new Error(err)
            }
        },
        updatePlotDevice: async (
            _,
            args,
            { models, pubsub }
        ): Promise<PlotDevice> => {
            try {
                const device = await queryUtils.updateItem(
                    models.CharacterDescription,
                    args.plotDevice,
                    ['id', args.plotDevice.id]
                )

                pubsub.publish(DEVICE_UPDATED, { device })

                return device
            } catch (err) {
                throw new Error(err)
            }
        },
        deletePlotDevice: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            try {
                const deleted = await queryUtils.deleteItem({
                    model: models.PlotDevice,
                    checkField: ['id', args.plotDeviceId],
                    pubsub,
                    constant: DEVICE_DELETED,
                })

                if (typeof deleted === 'string') {
                    return deleted
                } else {
                    throw deleted.message
                }
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddPlotDevice: async (
            _,
            args,
            { models }
        ): Promise<PlotDevice[]> => {
            try {
                const allPlotDevices = await queryUtils.bulkAddItem(
                    models.PlotDevice,
                    args.plotDevices,
                    ['plot', 'plot']
                )

                if (Array.isArray(allPlotDevices)) {
                    return allPlotDevices
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
