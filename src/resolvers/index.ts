import Notification from './notification'
import User from './user'
import StoryLength from './story/story-length'
import CharacterModel from './story/character-types'
import GenreModel from './story/genre'
import WritingPrompt from './data/prompts'
import PlotDevices from './data/plotDevices'
import StoryStages from './data/stages'

export const allResolvers = [
    Notification,
    User,
    // STORY
    StoryLength,
    CharacterModel,
    GenreModel,
    // STORY DATA
    WritingPrompt,
    PlotDevices,
    StoryStages,
]

export default {
    Notification,
    User,
    StoryLength,
    CharacterModel,
    GenreModel,
    WritingPrompt,
    PlotDevices,
    StoryStages,
}
