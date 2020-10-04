import { BuildOptions, Model } from 'sequelize'

export type BaseModel = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions)
}

const queryAll = async (model: BaseModel) => model.findAll()

const addItem = async <T extends {}>(
    model: BaseModel,
    item: T,
    checkField?: [string, string]
) => {
    try {
        const exists = await model.findOne({
            where: {
                [checkField[0]]: checkField[1],
            },
            raw: true,
        })
        console.log(exists)

        if (exists) {
            throw new Error(
                `"${checkField[0]}: ${checkField[1]}" already exists. Be more creative`
            )
        } else {
            return model.create(item, { raw: true })
        }
    } catch (error) {
        return new Error(error)
    }
}

export default {
    queryAll,
    addItem,
}
