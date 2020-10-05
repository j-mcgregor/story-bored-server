import { PubSub } from 'apollo-server'
import { BuildOptions, Model } from 'sequelize'

export type BaseModel = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions)
}

const queryAll = async (model: BaseModel) => model.findAll()

interface AddType<T> {
    model: BaseModel
    item: T
    checkField?: [string, string]
    errorMsg?: string
}

const addItem = async <T extends {}>({
    model,
    item,
    checkField,
    errorMsg = `"${checkField[0]}: ${checkField[1]}" already exists. Be more creative`,
}: AddType<T>) => {
    try {
        const exists = await model.findOne({
            where: {
                [checkField[0]]: checkField[1],
            },
            raw: true,
        })

        if (exists) {
            throw new Error(errorMsg)
        } else {
            return model.create(item, { raw: true })
        }
    } catch (error) {
        return new Error(error)
    }
}

const bulkAddItem = async <T extends {}>(
    model: BaseModel,
    items: T[],
    checkDuplicates?: [string, string]
) => {
    let newItems: T[] = [...items]

    try {
        if (checkDuplicates?.length) {
            const all = await model.findAll({
                attributes: [checkDuplicates[0]],
            })

            const existing = [...new Set(all.map(a => a[checkDuplicates[1]]))]

            newItems = items
                .map(item => {
                    return !existing.includes(item[checkDuplicates[1]])
                        ? item
                        : null
                })
                .filter(f => f)
        }

        await model.bulkCreate(newItems)

        return queryAll(model)
    } catch (error) {
        return new Error(error)
    }
}

const updateItem = async <T extends {}>(
    model: BaseModel,
    item: T,
    checkField?: [string, string]
) => {
    try {
        await model.update(item, {
            where: {
                [checkField[0]]: checkField[1],
            },
        })

        return model.findOne({
            where: {
                [checkField[0]]: checkField[1],
            },
            raw: true,
        })
    } catch (error) {
        return new Error(error)
    }
}

interface DeleteType {
    model: BaseModel
    checkField?: [string, string]
    pubsub?: PubSub
    constant?: string
}

const deleteItem = async ({
    model,
    checkField,
    pubsub,
    constant,
}: DeleteType) => {
    try {
        const exists = await model.findOne({
            where: {
                [checkField[0]]: checkField[1],
            },
            raw: true,
        })

        if (!exists) {
            throw new Error(
                `"${checkField[0]}: ${checkField[1]}" doesn't exist or has been deleted`
            )
        }

        await model.destroy({
            where: {
                [checkField[0]]: checkField[1],
            },
        })

        pubsub.publish(constant, { deleted: exists })

        return `${checkField[0]}: ${checkField[1]} successfully deleted`
    } catch (error) {
        return new Error(error)
    }
}

export default {
    queryAll,
    bulkAddItem,
    updateItem,
    deleteItem,
    addItem,
}
