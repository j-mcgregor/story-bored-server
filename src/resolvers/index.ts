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
import Character from './generate/character'
// CHARACTER
import CharacterBodyPart from './character/bodyParts'
import CharacterDescription from './character/descriptions'
import CharacterHonorifics from './character/honorifics'
import CharacterFirstNames from './character/first_names'
import CharacterLastNames from './character/last_names'
import CharacterMoods from './character/moods'
import CharacterOccupations from './character/occupations'
import CharacterTitles from './character/titles'

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
    CharacterFirstNames,
    CharacterLastNames,
    CharacterMoods,
    CharacterOccupations,
    CharacterTitles,
    Character,
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
    CharacterFirstNames,
    CharacterLastNames,
    CharacterMoods,
    CharacterOccupations,
    CharacterTitles,
    Character,
}
