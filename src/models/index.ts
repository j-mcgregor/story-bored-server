import Notification, { NotificationModelStatic } from './Notification'
import Post, { PostModelStatic } from './Post'
import User, { UserModelStatic } from './User'
// STORY
import StoryLength, { StoryLengthModelStatic } from './story/Length'
import CharacterType, { CharacterTypeModelStatic } from './story/CharacterType'
import GenreType, { GenreModelStatic } from './story/Genre'
// DATA
import WritingPrompt, { WritingPromptModelStatic } from './data/Prompt'
import PlotDevice, { PlotDeviceModelStatic } from './data/PlotDevice'
import StoryStage, { StoryStageModelStatic } from './data/Stage'
import StoryScene, { StorySceneModelStatic } from './data/StoryScene'
// CHARACTER
import CharacterBodyPart, {
    CharacterBodyPartModelStatic,
} from './character/BodyPart'
import CharacterDescription, {
    CharacterDescriptionModelStatic,
} from './character/Description'
import CharacterHonorifics, {
    CharacterHonorificsModelStatic,
} from './character/Honorifics'
import CharacterFirstName, {
    CharacterFirstNameModelStatic,
} from './character/FirstName'
import CharacterLastName, {
    CharacterLastNameModelStatic,
} from './character/LastName'
import CharacterMood, { CharacterMoodModelStatic } from './character/Mood'
import CharacterOccupation, {
    CharacterOccupationModelStatic,
} from './character/Occupation'
import CharacterTitle, { CharacterTitleModelStatic } from './character/Title'

export default {
    Notification,
    User,
    Post,
    StoryLength,
    CharacterType,
    GenreType,
    WritingPrompt,
    PlotDevice,
    StoryStage,
    StoryScene,
    // CHARACTER
    CharacterBodyPart,
    CharacterDescription,
    CharacterHonorifics,
    CharacterFirstName,
    CharacterLastName,
    CharacterMood,
    CharacterOccupation,
    CharacterTitle,
}

export interface ModelType {
    User: UserModelStatic
    Post: PostModelStatic
    Notification: NotificationModelStatic
    StoryLength: StoryLengthModelStatic
    CharacterType: CharacterTypeModelStatic
    GenreType: GenreModelStatic
    WritingPrompt: WritingPromptModelStatic
    PlotDevice: PlotDeviceModelStatic
    StoryStage: StoryStageModelStatic
    StoryScene: StorySceneModelStatic
    // CHARACTER
    CharacterBodyPart: CharacterBodyPartModelStatic
    CharacterDescription: CharacterDescriptionModelStatic
    CharacterHonorifics: CharacterHonorificsModelStatic
    CharacterFirstName: CharacterFirstNameModelStatic
    CharacterLastName: CharacterLastNameModelStatic
    CharacterMood: CharacterMoodModelStatic
    CharacterOccupation: CharacterOccupationModelStatic
    CharacterTitle: CharacterTitleModelStatic
}
