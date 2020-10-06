import Notification from './notification'
import User from './user'
import StoryLength from './story/story-length'
import CharacterModel from './story/character-types'
import GenreModel from './story/genre'
import WritingPrompt from './data/prompts'
import PlotDevices from './data/plotDevices'
import StoryStages from './data/stages'
import StoryScenes from './data/storyScenes'
// GENRATE
import Head from './generate/head'
import Structure from './generate/structure'
// CHARACTER
import CharacterBodyPart from './character/bodyParts'
import CharacterDescription from './character/descriptions'
import CharacterHonorifics from './character/honorifics'

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
    StoryScenes,
    // GENERATE
    Head,
    Structure,
    // CHARACTER
    CharacterBodyPart,
    CharacterDescription,
    CharacterHonorifics,
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
    StoryScenes,
    // GENERATE
    Head,
    Structure,
    // CHARACTER
    CharacterBodyPart,
    CharacterDescription,
    CharacterHonorifics,
}
