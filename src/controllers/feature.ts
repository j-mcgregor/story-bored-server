import _ from 'lodash'

import sequelize from '../db'
import { GenerateFeaturesInput, GenerateFeaturesOptions, GenerateFeaturesType } from '../generated/graphql'
import Models from '../models'

export class FeatureController {
    public features: GenerateFeaturesType
    public featuresToInclude: string[]

    constructor(input: GenerateFeaturesInput) {
        this.features = {}
        this.featuresToInclude = _.keys(_.pickBy(input)).map(t => t.toUpperCase())
    }

    includeOption(feature: string, options: GenerateFeaturesOptions) {
        switch (feature) {
            case 'BUILD':
                return {
                    category: options.BUILD,
                }
            case 'HAIR_COLOR_ALTERNATIVES':
                return {
                    category: options.HAIR_COLOR_ALTERNATIVES,
                }
            case 'PERSONALITY_TRAITS':
                return {
                    category: options.PERSONALITY_TRAITS,
                }
            default:
                return {}
        }
    }

    async getFeatures(options?: GenerateFeaturesOptions) {
        for (let i = 0; i < this.featuresToInclude.length; i++) {
            try {
                const res = await Models.CharacterFeature.findOne({
                    order: sequelize.random(),
                    where: {
                        feature: this.featuresToInclude[i],
                        ...this.includeOption(this.featuresToInclude[i], options),
                    },
                })

                this.features[this.featuresToInclude[i]] = res
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}
