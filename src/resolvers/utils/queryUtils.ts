import { BuildOptions, Model } from 'sequelize'

export type BaseModel = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions)
}

const queryAll = async (model: BaseModel) => model.findAll()

export default {
    queryAll,
}
