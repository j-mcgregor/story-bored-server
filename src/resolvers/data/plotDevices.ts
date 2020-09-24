import { PlotDevice, Resolvers } from '../../generated/graphql'

const GENRE_UPDATED = 'GENRE_UPDATED'
const GENRE_DELETED = 'GENRE_DELETED'

const resolver: Resolvers = {
    Query: {
        plotDevices: async (_, __, { models }): Promise<PlotDevice[]> => {
            const { PlotDevice: plotDeviceModel } = models
            try {
                const allPlotDevices = await plotDeviceModel.findAll()

                return allPlotDevices
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        addPlotDevice: async (_, args, { models }): Promise<PlotDevice[]> => {
            const { PlotDevice: plotDeviceModel } = models

            const plotDevice = await plotDeviceModel.findOne({
                where: {
                    id: args.plotDevice.id,
                },
                raw: true,
            })

            if (plotDevice) {
                throw new Error('Plot Device already exists. Be more creative')
            }

            try {
                await plotDeviceModel.create(args.plotDevice, { raw: true })
                const allPlotDevices = await plotDeviceModel.findAll()

                return allPlotDevices
            } catch (err) {
                throw new Error(err)
            }
        },
        updatePlotDevice: async (
            _,
            args,
            { models, pubsub }
        ): Promise<PlotDevice> => {
            const { PlotDevice: plotDeviceModel } = models

            try {
                plotDeviceModel.update(args, {
                    where: {
                        id: args.plotDevice.id,
                    },
                })

                const plotDevice = await plotDeviceModel.findOne({
                    where: {
                        id: args.plotDevice.id,
                    },
                    raw: true,
                })

                pubsub.publish(GENRE_UPDATED, { plotDevice })

                return plotDevice
            } catch (err) {
                throw new Error(err)
            }
        },
        deletePlotDevice: async (
            _,
            args,
            { models, pubsub }
        ): Promise<string> => {
            const { PlotDevice: plotDeviceModel } = models

            try {
                const plotDevice = await plotDeviceModel.findOne({
                    where: {
                        id: args.plotDeviceId,
                    },
                    raw: true,
                })

                if (!plotDevice) {
                    throw new Error(
                        "Plot Device doesn't exist or has been deleted"
                    )
                }

                plotDeviceModel.destroy({
                    where: {
                        id: args.plotDeviceId,
                    },
                })

                pubsub.publish(GENRE_DELETED, { plotDevice })

                return `Plot Device (id: ${plotDevice.id}) successfully deleted`
            } catch (err) {
                throw new Error(err)
            }
        },
        bulkAddPlotDevice: async (
            _,
            args,
            { models }
        ): Promise<PlotDevice[]> => {
            const { PlotDevice: plotDeviceModel } = models
            console.log(args.plotDevices.length)

            try {
                await plotDeviceModel.bulkCreate(args.plotDevices)
                const allPlotDevices = await plotDeviceModel.findAll()

                return allPlotDevices
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}

export default resolver
