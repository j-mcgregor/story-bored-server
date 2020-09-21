import Notification, { NotificationModelStatic } from './Notification'
import Post, { PostModelStatic } from './Post'
import User, { UserModelStatic } from './User'
import StoryLength, { StoryLengthModelStatic } from './story/Length'

export default {
    Notification,
    User,
    Post,
    StoryLength,
}

export interface ModelType {
    User: UserModelStatic
    Post: PostModelStatic
    Notification: NotificationModelStatic
    StoryLength: StoryLengthModelStatic
}
