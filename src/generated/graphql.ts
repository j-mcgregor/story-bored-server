import { CharacterListEnum } from './src/models/story/CharacterType';
import { CharacterRoleEnum } from './src/models/story/CharacterLype';
import { GenreListType } from './src/models/story/GenreListType';
import { StoryStageEnum } from './src/models/data/Stage';
import { StructureTypeEnums } from './src/controllers/generators/structure';
import StructureTypeEnum = StructureTypeEnums;
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export enum AuthType {
  Email = 'EMAIL',
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  Apple = 'APPLE'
}

export type BodyStructureTypeInput = {
  type?: Maybe<StructureTypeEnum>;
  prologue?: Maybe<Scalars['Boolean']>;
  epilogue?: Maybe<Scalars['Boolean']>;
};

export type ChapterType = {
  __typename?: 'ChapterType';
  chapter?: Maybe<Scalars['Int']>;
  avMinWordsPerChapter?: Maybe<Scalars['Int']>;
  avMaxWordsPerChapter?: Maybe<Scalars['Int']>;
  scenes?: Maybe<Array<Maybe<SceneType>>>;
};

export type CharacterBodyPartsInput = {
  id?: Maybe<Scalars['String']>;
  part?: Maybe<Scalars['String']>;
};

export type CharacterBodyPartsType = {
  __typename?: 'CharacterBodyPartsType';
  id?: Maybe<Scalars['String']>;
  part?: Maybe<Scalars['String']>;
};

export type CharacterDescriptionsInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CharacterDescriptionsType = {
  __typename?: 'CharacterDescriptionsType';
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CharacterFirstNameInput = {
  id?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  origin: Name_Origin;
  gender?: Maybe<GenderModernEnum>;
};

export type CharacterFirstNameType = {
  __typename?: 'CharacterFirstNameType';
  firstName?: Maybe<Scalars['String']>;
  origin?: Maybe<Name_Origin>;
  gender?: Maybe<GenderModernEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type CharacterHonorificsInput = {
  id?: Maybe<Scalars['String']>;
  honorific?: Maybe<Scalars['String']>;
};

export type CharacterHonorificsType = {
  __typename?: 'CharacterHonorificsType';
  honorific: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type CharacterInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<CharacterListEnum>;
  category?: Maybe<CharacterRoleEnum>;
  description?: Maybe<Scalars['String']>;
  examples: Array<Maybe<Scalars['String']>>;
};

export type CharacterLastNameInput = {
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  origin: Name_Origin;
};

export type CharacterLastNameType = {
  __typename?: 'CharacterLastNameType';
  lastName?: Maybe<Scalars['String']>;
  origin?: Maybe<Name_Origin>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export { CharacterListEnum };

export type CharacterMoodInput = {
  id?: Maybe<Scalars['String']>;
  mood?: Maybe<Scalars['String']>;
};

export type CharacterMoodType = {
  __typename?: 'CharacterMoodType';
  mood?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export { CharacterRoleEnum };

export type CharacterType = {
  __typename?: 'CharacterType';
  id: Scalars['ID'];
  name?: Maybe<CharacterListEnum>;
  category?: Maybe<CharacterRoleEnum>;
  description?: Maybe<Scalars['String']>;
  examples: Array<Maybe<Scalars['String']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};



export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE'
}

export enum GenderModernEnum {
  Agender = 'AGENDER',
  Androgyne = 'ANDROGYNE',
  Androgynous = 'ANDROGYNOUS',
  Bigender = 'BIGENDER',
  Cis = 'CIS',
  Cisgender = 'CISGENDER',
  CisFemale = 'CIS_FEMALE',
  CisMale = 'CIS_MALE',
  CisMan = 'CIS_MAN',
  CisWoman = 'CIS_WOMAN',
  CisgenderFemale = 'CISGENDER_FEMALE',
  CisgenderMale = 'CISGENDER_MALE',
  CisgenderMan = 'CISGENDER_MAN',
  CisgenderWoman = 'CISGENDER_WOMAN',
  Female = 'FEMALE',
  FemaleToMale = 'FEMALE_TO_MALE',
  Ftm = 'FTM',
  GenderFluid = 'GENDER_FLUID',
  GenderNonconforming = 'GENDER_NONCONFORMING',
  GenderQuestioning = 'GENDER_QUESTIONING',
  GenderVariant = 'GENDER_VARIANT',
  Genderqueer = 'GENDERQUEER',
  Intersex = 'INTERSEX',
  Male = 'MALE',
  MaleToFemale = 'MALE_TO_FEMALE',
  Mtf = 'MTF',
  Neither = 'NEITHER',
  Neutrois = 'NEUTROIS',
  NonBinary = 'NON_BINARY',
  Other = 'OTHER',
  Pangender = 'PANGENDER',
  Trans = 'TRANS',
  TransFemale = 'TRANS_FEMALE',
  TransMale = 'TRANS_MALE',
  TransMan = 'TRANS_MAN',
  TransPerson = 'TRANS_PERSON',
  TransWoman = 'TRANS_WOMAN',
  Transfeminine = 'TRANSFEMININE',
  Transgender = 'TRANSGENDER',
  TransgenderFemale = 'TRANSGENDER_FEMALE',
  TransgenderMale = 'TRANSGENDER_MALE',
  TransgenderMan = 'TRANSGENDER_MAN',
  TransgenderPerson = 'TRANSGENDER_PERSON',
  TransgenderWoman = 'TRANSGENDER_WOMAN',
  Transmasculine = 'TRANSMASCULINE',
  Transsexual = 'TRANSSEXUAL',
  TranssexualFemale = 'TRANSSEXUAL_FEMALE',
  TranssexualMale = 'TRANSSEXUAL_MALE',
  TranssexualMan = 'TRANSSEXUAL_MAN',
  TranssexualPerson = 'TRANSSEXUAL_PERSON',
  TranssexualWoman = 'TRANSSEXUAL_WOMAN',
  TwoSpirit = 'TWO_SPIRIT'
}

export { GenreListType };

export type GenreType = {
  __typename?: 'GenreType';
  id: Scalars['ID'];
  name?: Maybe<GenreListType>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type GenreTypeInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<GenreListType>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Head = {
  __typename?: 'Head';
  genre?: Maybe<GenreType>;
  prompt?: Maybe<WritingPrompt>;
  length?: Maybe<StoryLength>;
};

export type HeadInput = {
  genre?: Maybe<Array<Maybe<GenreListType>>>;
  prompt?: Maybe<Scalars['Boolean']>;
  length?: Maybe<StoryLengthType>;
  keywords?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signInEmail: AuthPayload;
  signInGoogle: AuthPayload;
  signInFacebook: AuthPayload;
  signInApple: AuthPayload;
  signUp: AuthPayload;
  addNotificationToken?: Maybe<Notification>;
  updateProfile?: Maybe<User>;
  addStoryLength?: Maybe<Array<Maybe<StoryLength>>>;
  updateStoryLength?: Maybe<StoryLength>;
  deleteStoryLength?: Maybe<Scalars['String']>;
  addCharacterType?: Maybe<CharacterType>;
  updateCharacterType?: Maybe<CharacterType>;
  deleteCharacterType?: Maybe<Scalars['String']>;
  addGenreType?: Maybe<Array<Maybe<GenreType>>>;
  updateGenreType?: Maybe<GenreType>;
  deleteGenreType?: Maybe<Scalars['String']>;
  addWritingPrompt?: Maybe<WritingPrompt>;
  updateWritingPrompt?: Maybe<WritingPrompt>;
  deleteWritingPrompt?: Maybe<Scalars['String']>;
  bulkAddWritingPrompt?: Maybe<Array<Maybe<WritingPrompt>>>;
  addPlotDevice?: Maybe<Array<Maybe<PlotDevice>>>;
  updatePlotDevice?: Maybe<PlotDevice>;
  deletePlotDevice?: Maybe<Scalars['String']>;
  bulkAddPlotDevice?: Maybe<Array<Maybe<PlotDevice>>>;
  addStoryStage?: Maybe<StageType>;
  updateStoryStage?: Maybe<StageType>;
  deleteStoryStage?: Maybe<Scalars['String']>;
  bulkAddStoryStage?: Maybe<Array<Maybe<StageType>>>;
  addStoryScene?: Maybe<StoryScene>;
  updateStoryScene?: Maybe<StoryScene>;
  deleteStoryScene?: Maybe<Scalars['String']>;
  bulkAddStoryScene?: Maybe<Array<Maybe<StoryScene>>>;
  createHead?: Maybe<Head>;
  generateSections?: Maybe<Array<Maybe<SectionType>>>;
  generateSectionsWithStages?: Maybe<Array<Maybe<SectionType>>>;
  generateSectionsWithChapters?: Maybe<Array<Maybe<SectionType>>>;
  generateSectionsWithScenes?: Maybe<Array<Maybe<SectionType>>>;
  generateStructure?: Maybe<Array<Maybe<SectionType>>>;
  addCharacterBodyParts?: Maybe<CharacterBodyPartsType>;
  updateCharacterBodyParts?: Maybe<CharacterBodyPartsType>;
  deleteCharacterBodyParts?: Maybe<Scalars['String']>;
  bulkAddCharacterBodyParts?: Maybe<Array<Maybe<CharacterBodyPartsType>>>;
  addCharacterDescriptions?: Maybe<CharacterDescriptionsType>;
  updateCharacterDescriptions?: Maybe<CharacterDescriptionsType>;
  deleteCharacterDescriptions?: Maybe<Scalars['String']>;
  bulkAddCharacterDescriptions?: Maybe<Array<Maybe<CharacterDescriptionsType>>>;
  addCharacterHonorifics?: Maybe<CharacterHonorificsType>;
  updateCharacterHonorifics?: Maybe<CharacterHonorificsType>;
  deleteCharacterHonorifics?: Maybe<Scalars['String']>;
  bulkAddCharacterHonorifics?: Maybe<Array<Maybe<CharacterHonorificsType>>>;
  addCharacterFirstName?: Maybe<CharacterFirstNameType>;
  updateCharacterFirstName?: Maybe<CharacterFirstNameType>;
  deleteCharacterFirstName?: Maybe<Scalars['String']>;
  bulkAddCharacterFirstNames?: Maybe<Array<Maybe<CharacterFirstNameType>>>;
  addCharacterLastName?: Maybe<CharacterLastNameType>;
  updateCharacterLastName?: Maybe<CharacterLastNameType>;
  deleteCharacterLastName?: Maybe<Scalars['String']>;
  bulkAddCharacterLastNames?: Maybe<Array<Maybe<CharacterLastNameType>>>;
  addCharacterMood?: Maybe<CharacterMoodType>;
  updateCharacterMood?: Maybe<CharacterMoodType>;
  deleteCharacterMood?: Maybe<Scalars['String']>;
  bulkAddCharacterMoods?: Maybe<Array<Maybe<CharacterMoodType>>>;
};


export type MutationSignInEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignInGoogleArgs = {
  socialUser: SocialUserInput;
};


export type MutationSignInFacebookArgs = {
  socialUser: SocialUserInput;
};


export type MutationSignInAppleArgs = {
  socialUser: SocialUserInput;
};


export type MutationSignUpArgs = {
  user: UserInput;
};


export type MutationAddNotificationTokenArgs = {
  notification: NotificationInput;
};


export type MutationUpdateProfileArgs = {
  user: UserInput;
};


export type MutationAddStoryLengthArgs = {
  storyLength: StoryLengthInput;
};


export type MutationUpdateStoryLengthArgs = {
  storyLength: StoryLengthInput;
};


export type MutationDeleteStoryLengthArgs = {
  storyLengthId: Scalars['String'];
};


export type MutationAddCharacterTypeArgs = {
  characterType: CharacterInput;
};


export type MutationUpdateCharacterTypeArgs = {
  characterType: CharacterInput;
};


export type MutationDeleteCharacterTypeArgs = {
  characterTypeId: Scalars['String'];
};


export type MutationAddGenreTypeArgs = {
  genreType: GenreTypeInput;
};


export type MutationUpdateGenreTypeArgs = {
  genreType: GenreTypeInput;
};


export type MutationDeleteGenreTypeArgs = {
  genreTypeId: Scalars['String'];
};


export type MutationAddWritingPromptArgs = {
  writingPrompt: WritingPromptInput;
};


export type MutationUpdateWritingPromptArgs = {
  writingPrompt: WritingPromptInput;
};


export type MutationDeleteWritingPromptArgs = {
  writingPromptId: Scalars['String'];
};


export type MutationBulkAddWritingPromptArgs = {
  writingPrompts: Array<Maybe<WritingPromptInput>>;
};


export type MutationAddPlotDeviceArgs = {
  plotDevice: PlotDeviceInput;
};


export type MutationUpdatePlotDeviceArgs = {
  plotDevice: PlotDeviceInput;
};


export type MutationDeletePlotDeviceArgs = {
  plotDeviceId: Scalars['String'];
};


export type MutationBulkAddPlotDeviceArgs = {
  plotDevices: Array<Maybe<PlotDeviceInput>>;
};


export type MutationAddStoryStageArgs = {
  storyStage: StoryStageInput;
};


export type MutationUpdateStoryStageArgs = {
  storyStage: StoryStageInput;
};


export type MutationDeleteStoryStageArgs = {
  storyStageId: Scalars['String'];
};


export type MutationBulkAddStoryStageArgs = {
  storyStages: Array<Maybe<StoryStageInput>>;
};


export type MutationAddStorySceneArgs = {
  storyScene: StorySceneInput;
};


export type MutationUpdateStorySceneArgs = {
  storyScene: StorySceneInput;
};


export type MutationDeleteStorySceneArgs = {
  storySceneId: Scalars['String'];
};


export type MutationBulkAddStorySceneArgs = {
  storyScenes: Array<Maybe<StorySceneInput>>;
};


export type MutationCreateHeadArgs = {
  meta?: Maybe<HeadInput>;
};


export type MutationGenerateSectionsArgs = {
  type?: Maybe<StructureTypeEnum>;
  prologue?: Maybe<Scalars['Boolean']>;
  epilogue?: Maybe<Scalars['Boolean']>;
};


export type MutationGenerateSectionsWithStagesArgs = {
  type?: Maybe<StructureTypeEnum>;
  prologue?: Maybe<Scalars['Boolean']>;
  epilogue?: Maybe<Scalars['Boolean']>;
};


export type MutationGenerateSectionsWithChaptersArgs = {
  type?: Maybe<StructureTypeEnum>;
  prologue?: Maybe<Scalars['Boolean']>;
  epilogue?: Maybe<Scalars['Boolean']>;
  numberOfChapters?: Maybe<Scalars['Int']>;
  nested?: Maybe<Scalars['Boolean']>;
  length?: Maybe<StoryLengthType>;
};


export type MutationGenerateSectionsWithScenesArgs = {
  type?: Maybe<StructureTypeEnum>;
  prologue?: Maybe<Scalars['Boolean']>;
  epilogue?: Maybe<Scalars['Boolean']>;
  numberOfChapters?: Maybe<Scalars['Int']>;
  nested?: Maybe<Scalars['Boolean']>;
  length?: Maybe<StoryLengthType>;
};


export type MutationGenerateStructureArgs = {
  type?: Maybe<StructureTypeEnum>;
  prologue?: Maybe<Scalars['Boolean']>;
  epilogue?: Maybe<Scalars['Boolean']>;
  numberOfChapters?: Maybe<Scalars['Int']>;
  nested?: Maybe<Scalars['Boolean']>;
  length?: Maybe<StoryLengthType>;
  includeStages?: Maybe<Scalars['Boolean']>;
  includeChapters?: Maybe<Scalars['Boolean']>;
  includeScenes?: Maybe<Scalars['Boolean']>;
};


export type MutationAddCharacterBodyPartsArgs = {
  part?: Maybe<Scalars['String']>;
};


export type MutationUpdateCharacterBodyPartsArgs = {
  part?: Maybe<CharacterBodyPartsInput>;
};


export type MutationDeleteCharacterBodyPartsArgs = {
  part?: Maybe<CharacterBodyPartsInput>;
};


export type MutationBulkAddCharacterBodyPartsArgs = {
  parts: Array<Maybe<CharacterBodyPartsInput>>;
};


export type MutationAddCharacterDescriptionsArgs = {
  description?: Maybe<Scalars['String']>;
};


export type MutationUpdateCharacterDescriptionsArgs = {
  description?: Maybe<CharacterDescriptionsInput>;
};


export type MutationDeleteCharacterDescriptionsArgs = {
  descriptionId: Scalars['String'];
};


export type MutationBulkAddCharacterDescriptionsArgs = {
  descriptions: Array<Maybe<CharacterDescriptionsInput>>;
};


export type MutationAddCharacterHonorificsArgs = {
  honorific?: Maybe<Scalars['String']>;
};


export type MutationUpdateCharacterHonorificsArgs = {
  honorific?: Maybe<CharacterHonorificsInput>;
};


export type MutationDeleteCharacterHonorificsArgs = {
  honorificId: Scalars['String'];
};


export type MutationBulkAddCharacterHonorificsArgs = {
  honorifics: Array<Maybe<CharacterHonorificsInput>>;
};


export type MutationAddCharacterFirstNameArgs = {
  firstName?: Maybe<CharacterFirstNameInput>;
};


export type MutationUpdateCharacterFirstNameArgs = {
  firstName?: Maybe<CharacterFirstNameInput>;
};


export type MutationDeleteCharacterFirstNameArgs = {
  firstNameId: Scalars['String'];
};


export type MutationBulkAddCharacterFirstNamesArgs = {
  firstNames: Array<Maybe<CharacterFirstNameInput>>;
};


export type MutationAddCharacterLastNameArgs = {
  lastName?: Maybe<CharacterLastNameInput>;
};


export type MutationUpdateCharacterLastNameArgs = {
  lastName?: Maybe<CharacterLastNameInput>;
};


export type MutationDeleteCharacterLastNameArgs = {
  lastNameId: Scalars['String'];
};


export type MutationBulkAddCharacterLastNamesArgs = {
  lastNames: Array<Maybe<CharacterLastNameInput>>;
};


export type MutationAddCharacterMoodArgs = {
  mood?: Maybe<CharacterMoodInput>;
};


export type MutationUpdateCharacterMoodArgs = {
  mood?: Maybe<CharacterMoodInput>;
};


export type MutationDeleteCharacterMoodArgs = {
  moodId: Scalars['String'];
};


export type MutationBulkAddCharacterMoodsArgs = {
  moods: Array<Maybe<CharacterMoodInput>>;
};

export enum Name_Origin {
  Spanish = 'SPANISH',
  Norweigian = 'NORWEIGIAN',
  General = 'GENERAL'
}

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['ID'];
  token?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationInput = {
  token: Scalars['String'];
  device?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
};

export type PlotDevice = {
  __typename?: 'PlotDevice';
  id?: Maybe<Scalars['String']>;
  plot?: Maybe<Scalars['String']>;
  definition?: Maybe<Scalars['String']>;
  example?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type PlotDeviceInput = {
  id?: Maybe<Scalars['String']>;
  plot?: Maybe<Scalars['String']>;
  definition?: Maybe<Scalars['String']>;
  example?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user?: Maybe<User>;
  posts: Array<Post>;
  notifications: Array<Notification>;
  storyLength: Array<Maybe<StoryLength>>;
  characterType: Array<Maybe<CharacterType>>;
  genreType: Array<Maybe<GenreType>>;
  writingPrompt: Array<Maybe<WritingPrompt>>;
  plotDevices: Array<Maybe<PlotDevice>>;
  storyStages: Array<Maybe<StageType>>;
  storyScenes: Array<Maybe<StoryScene>>;
  characterBodyParts: Array<Maybe<CharacterBodyPartsType>>;
  characterDescriptions: Array<Maybe<CharacterDescriptionsType>>;
  characterHonorifics: Array<Maybe<CharacterHonorificsType>>;
  characterFirstNames: Array<Maybe<CharacterFirstNameType>>;
  characterLastNames: Array<Maybe<CharacterLastNameType>>;
  characterMoods: Array<Maybe<CharacterMoodType>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type SceneType = {
  __typename?: 'SceneType';
  defaultStage?: Maybe<StoryStageEnum>;
  defaultScene?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export type SectionInput = {
  section?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type SectionType = {
  __typename?: 'SectionType';
  section?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  stages?: Maybe<Array<Maybe<StageType>>>;
  chapters?: Maybe<Array<Maybe<ChapterType>>>;
  scenes?: Maybe<Array<Maybe<SceneType>>>;
  avMinWordsPerSection?: Maybe<Scalars['Int']>;
  avMaxWordsPerSection?: Maybe<Scalars['Int']>;
  avChaptersPerSection?: Maybe<Scalars['Int']>;
};

export type SocialUserInput = {
  socialId: Scalars['String'];
  authType: AuthType;
  email?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  thumbURL?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  gender?: Maybe<Gender>;
  phone?: Maybe<Scalars['String']>;
};

export type StageType = {
  __typename?: 'StageType';
  id?: Maybe<Scalars['String']>;
  stage?: Maybe<StoryStageEnum>;
  summary?: Maybe<Scalars['String']>;
  storyOrder?: Maybe<Scalars['Int']>;
  plottingOrder?: Maybe<Scalars['Int']>;
  chapters?: Maybe<Array<Maybe<ChapterType>>>;
  scenes?: Maybe<Array<Maybe<SceneType>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type StoryLength = {
  __typename?: 'StoryLength';
  id: Scalars['ID'];
  minWords?: Maybe<Scalars['Int']>;
  maxWords?: Maybe<Scalars['Int']>;
  avChapters?: Maybe<Scalars['Int']>;
  name?: Maybe<StoryLengthType>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type StoryLengthInput = {
  id?: Maybe<Scalars['ID']>;
  minWords?: Maybe<Scalars['Int']>;
  maxWords?: Maybe<Scalars['Int']>;
  avChapters?: Maybe<Scalars['Int']>;
  name?: Maybe<StoryLengthType>;
};

export enum StoryLengthType {
  Flash = 'FLASH',
  Short = 'SHORT',
  Novella = 'NOVELLA',
  Novel = 'NOVEL',
  Epic = 'EPIC'
}

export type StoryScene = {
  __typename?: 'StoryScene';
  id?: Maybe<Scalars['String']>;
  defaultStage?: Maybe<StoryStageEnum>;
  defaultScene?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type StorySceneInput = {
  id?: Maybe<Scalars['String']>;
  defaultStage?: Maybe<StoryStageEnum>;
  defaultScene?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export { StoryStageEnum };

export type StoryStageInput = {
  id?: Maybe<Scalars['String']>;
  stage?: Maybe<StoryStageEnum>;
  summary?: Maybe<Scalars['String']>;
  storyOrder?: Maybe<Scalars['Int']>;
  plottingOrder?: Maybe<Scalars['Int']>;
};

export { StructureTypeEnum };

export type Subscription = {
  __typename?: 'Subscription';
  userSignedIn?: Maybe<User>;
  userUpdated?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  thumbURL?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  gender?: Maybe<Gender>;
  phone?: Maybe<Scalars['String']>;
  socialId?: Maybe<Scalars['String']>;
  authType?: Maybe<AuthType>;
  verified?: Maybe<Scalars['Boolean']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  posts?: Maybe<Array<Maybe<Post>>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  gender?: Maybe<Gender>;
  phone?: Maybe<Scalars['String']>;
  statusMessage?: Maybe<Scalars['String']>;
};

export type WritingPrompt = {
  __typename?: 'WritingPrompt';
  id?: Maybe<Scalars['String']>;
  prompt?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<GenreListType>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type WritingPromptInput = {
  id?: Maybe<Scalars['String']>;
  prompt: Scalars['String'];
  genres?: Maybe<Array<GenreListType>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Gender: Gender;
  AuthType: AuthType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Notification: ResolverTypeWrapper<Notification>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Post: ResolverTypeWrapper<Post>;
  StoryLength: ResolverTypeWrapper<StoryLength>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  StoryLengthType: StoryLengthType;
  CharacterType: ResolverTypeWrapper<CharacterType>;
  CharacterListEnum: CharacterListEnum;
  CharacterRoleEnum: CharacterRoleEnum;
  GenreType: ResolverTypeWrapper<GenreType>;
  GenreListType: GenreListType;
  WritingPrompt: ResolverTypeWrapper<WritingPrompt>;
  PlotDevice: ResolverTypeWrapper<PlotDevice>;
  StageType: ResolverTypeWrapper<StageType>;
  StoryStageEnum: StoryStageEnum;
  ChapterType: ResolverTypeWrapper<ChapterType>;
  SceneType: ResolverTypeWrapper<SceneType>;
  StoryScene: ResolverTypeWrapper<StoryScene>;
  CharacterBodyPartsType: ResolverTypeWrapper<CharacterBodyPartsType>;
  CharacterDescriptionsType: ResolverTypeWrapper<CharacterDescriptionsType>;
  CharacterHonorificsType: ResolverTypeWrapper<CharacterHonorificsType>;
  CharacterFirstNameType: ResolverTypeWrapper<CharacterFirstNameType>;
  NAME_ORIGIN: Name_Origin;
  GenderModernEnum: GenderModernEnum;
  CharacterLastNameType: ResolverTypeWrapper<CharacterLastNameType>;
  CharacterMoodType: ResolverTypeWrapper<CharacterMoodType>;
  Mutation: ResolverTypeWrapper<{}>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  SocialUserInput: SocialUserInput;
  UserInput: UserInput;
  NotificationInput: NotificationInput;
  StoryLengthInput: StoryLengthInput;
  CharacterInput: CharacterInput;
  GenreTypeInput: GenreTypeInput;
  WritingPromptInput: WritingPromptInput;
  PlotDeviceInput: PlotDeviceInput;
  StoryStageInput: StoryStageInput;
  StorySceneInput: StorySceneInput;
  HeadInput: HeadInput;
  Head: ResolverTypeWrapper<Head>;
  StructureTypeEnum: StructureTypeEnum;
  SectionType: ResolverTypeWrapper<SectionType>;
  CharacterBodyPartsInput: CharacterBodyPartsInput;
  CharacterDescriptionsInput: CharacterDescriptionsInput;
  CharacterHonorificsInput: CharacterHonorificsInput;
  CharacterFirstNameInput: CharacterFirstNameInput;
  CharacterLastNameInput: CharacterLastNameInput;
  CharacterMoodInput: CharacterMoodInput;
  Subscription: ResolverTypeWrapper<{}>;
  BodyStructureTypeInput: BodyStructureTypeInput;
  SectionInput: SectionInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  User: User;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Date: Scalars['Date'];
  Gender: Gender;
  AuthType: AuthType;
  Boolean: Scalars['Boolean'];
  Notification: Notification;
  DateTime: Scalars['DateTime'];
  Post: Post;
  StoryLength: StoryLength;
  Int: Scalars['Int'];
  StoryLengthType: StoryLengthType;
  CharacterType: CharacterType;
  CharacterListEnum: CharacterListEnum;
  CharacterRoleEnum: CharacterRoleEnum;
  GenreType: GenreType;
  GenreListType: GenreListType;
  WritingPrompt: WritingPrompt;
  PlotDevice: PlotDevice;
  StageType: StageType;
  StoryStageEnum: StoryStageEnum;
  ChapterType: ChapterType;
  SceneType: SceneType;
  StoryScene: StoryScene;
  CharacterBodyPartsType: CharacterBodyPartsType;
  CharacterDescriptionsType: CharacterDescriptionsType;
  CharacterHonorificsType: CharacterHonorificsType;
  CharacterFirstNameType: CharacterFirstNameType;
  NAME_ORIGIN: Name_Origin;
  GenderModernEnum: GenderModernEnum;
  CharacterLastNameType: CharacterLastNameType;
  CharacterMoodType: CharacterMoodType;
  Mutation: {};
  AuthPayload: AuthPayload;
  SocialUserInput: SocialUserInput;
  UserInput: UserInput;
  NotificationInput: NotificationInput;
  StoryLengthInput: StoryLengthInput;
  CharacterInput: CharacterInput;
  GenreTypeInput: GenreTypeInput;
  WritingPromptInput: WritingPromptInput;
  PlotDeviceInput: PlotDeviceInput;
  StoryStageInput: StoryStageInput;
  StorySceneInput: StorySceneInput;
  HeadInput: HeadInput;
  Head: Head;
  StructureTypeEnum: StructureTypeEnum;
  SectionType: SectionType;
  CharacterBodyPartsInput: CharacterBodyPartsInput;
  CharacterDescriptionsInput: CharacterDescriptionsInput;
  CharacterHonorificsInput: CharacterHonorificsInput;
  CharacterFirstNameInput: CharacterFirstNameInput;
  CharacterLastNameInput: CharacterLastNameInput;
  CharacterMoodInput: CharacterMoodInput;
  Subscription: {};
  BodyStructureTypeInput: BodyStructureTypeInput;
  SectionInput: SectionInput;
};

export type AuthPayloadResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ChapterTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ChapterType'] = ResolversParentTypes['ChapterType']> = {
  chapter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avMinWordsPerChapter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avMaxWordsPerChapter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  scenes?: Resolver<Maybe<Array<Maybe<ResolversTypes['SceneType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterBodyPartsTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CharacterBodyPartsType'] = ResolversParentTypes['CharacterBodyPartsType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  part?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterDescriptionsTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CharacterDescriptionsType'] = ResolversParentTypes['CharacterDescriptionsType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterFirstNameTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CharacterFirstNameType'] = ResolversParentTypes['CharacterFirstNameType']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['NAME_ORIGIN']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['GenderModernEnum']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterHonorificsTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CharacterHonorificsType'] = ResolversParentTypes['CharacterHonorificsType']> = {
  honorific?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterLastNameTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CharacterLastNameType'] = ResolversParentTypes['CharacterLastNameType']> = {
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['NAME_ORIGIN']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterMoodTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CharacterMoodType'] = ResolversParentTypes['CharacterMoodType']> = {
  mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CharacterType'] = ResolversParentTypes['CharacterType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['CharacterListEnum']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['CharacterRoleEnum']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  examples?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GenreTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['GenreType'] = ResolversParentTypes['GenreType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['GenreListType']>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type HeadResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Head'] = ResolversParentTypes['Head']> = {
  genre?: Resolver<Maybe<ResolversTypes['GenreType']>, ParentType, ContextType>;
  prompt?: Resolver<Maybe<ResolversTypes['WritingPrompt']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['StoryLength']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signInEmail?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignInEmailArgs, 'email' | 'password'>>;
  signInGoogle?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignInGoogleArgs, 'socialUser'>>;
  signInFacebook?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignInFacebookArgs, 'socialUser'>>;
  signInApple?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignInAppleArgs, 'socialUser'>>;
  signUp?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'user'>>;
  addNotificationToken?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationAddNotificationTokenArgs, 'notification'>>;
  updateProfile?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'user'>>;
  addStoryLength?: Resolver<Maybe<Array<Maybe<ResolversTypes['StoryLength']>>>, ParentType, ContextType, RequireFields<MutationAddStoryLengthArgs, 'storyLength'>>;
  updateStoryLength?: Resolver<Maybe<ResolversTypes['StoryLength']>, ParentType, ContextType, RequireFields<MutationUpdateStoryLengthArgs, 'storyLength'>>;
  deleteStoryLength?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteStoryLengthArgs, 'storyLengthId'>>;
  addCharacterType?: Resolver<Maybe<ResolversTypes['CharacterType']>, ParentType, ContextType, RequireFields<MutationAddCharacterTypeArgs, 'characterType'>>;
  updateCharacterType?: Resolver<Maybe<ResolversTypes['CharacterType']>, ParentType, ContextType, RequireFields<MutationUpdateCharacterTypeArgs, 'characterType'>>;
  deleteCharacterType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteCharacterTypeArgs, 'characterTypeId'>>;
  addGenreType?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenreType']>>>, ParentType, ContextType, RequireFields<MutationAddGenreTypeArgs, 'genreType'>>;
  updateGenreType?: Resolver<Maybe<ResolversTypes['GenreType']>, ParentType, ContextType, RequireFields<MutationUpdateGenreTypeArgs, 'genreType'>>;
  deleteGenreType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteGenreTypeArgs, 'genreTypeId'>>;
  addWritingPrompt?: Resolver<Maybe<ResolversTypes['WritingPrompt']>, ParentType, ContextType, RequireFields<MutationAddWritingPromptArgs, 'writingPrompt'>>;
  updateWritingPrompt?: Resolver<Maybe<ResolversTypes['WritingPrompt']>, ParentType, ContextType, RequireFields<MutationUpdateWritingPromptArgs, 'writingPrompt'>>;
  deleteWritingPrompt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteWritingPromptArgs, 'writingPromptId'>>;
  bulkAddWritingPrompt?: Resolver<Maybe<Array<Maybe<ResolversTypes['WritingPrompt']>>>, ParentType, ContextType, RequireFields<MutationBulkAddWritingPromptArgs, 'writingPrompts'>>;
  addPlotDevice?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlotDevice']>>>, ParentType, ContextType, RequireFields<MutationAddPlotDeviceArgs, 'plotDevice'>>;
  updatePlotDevice?: Resolver<Maybe<ResolversTypes['PlotDevice']>, ParentType, ContextType, RequireFields<MutationUpdatePlotDeviceArgs, 'plotDevice'>>;
  deletePlotDevice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeletePlotDeviceArgs, 'plotDeviceId'>>;
  bulkAddPlotDevice?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlotDevice']>>>, ParentType, ContextType, RequireFields<MutationBulkAddPlotDeviceArgs, 'plotDevices'>>;
  addStoryStage?: Resolver<Maybe<ResolversTypes['StageType']>, ParentType, ContextType, RequireFields<MutationAddStoryStageArgs, 'storyStage'>>;
  updateStoryStage?: Resolver<Maybe<ResolversTypes['StageType']>, ParentType, ContextType, RequireFields<MutationUpdateStoryStageArgs, 'storyStage'>>;
  deleteStoryStage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteStoryStageArgs, 'storyStageId'>>;
  bulkAddStoryStage?: Resolver<Maybe<Array<Maybe<ResolversTypes['StageType']>>>, ParentType, ContextType, RequireFields<MutationBulkAddStoryStageArgs, 'storyStages'>>;
  addStoryScene?: Resolver<Maybe<ResolversTypes['StoryScene']>, ParentType, ContextType, RequireFields<MutationAddStorySceneArgs, 'storyScene'>>;
  updateStoryScene?: Resolver<Maybe<ResolversTypes['StoryScene']>, ParentType, ContextType, RequireFields<MutationUpdateStorySceneArgs, 'storyScene'>>;
  deleteStoryScene?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteStorySceneArgs, 'storySceneId'>>;
  bulkAddStoryScene?: Resolver<Maybe<Array<Maybe<ResolversTypes['StoryScene']>>>, ParentType, ContextType, RequireFields<MutationBulkAddStorySceneArgs, 'storyScenes'>>;
  createHead?: Resolver<Maybe<ResolversTypes['Head']>, ParentType, ContextType, RequireFields<MutationCreateHeadArgs, never>>;
  generateSections?: Resolver<Maybe<Array<Maybe<ResolversTypes['SectionType']>>>, ParentType, ContextType, RequireFields<MutationGenerateSectionsArgs, never>>;
  generateSectionsWithStages?: Resolver<Maybe<Array<Maybe<ResolversTypes['SectionType']>>>, ParentType, ContextType, RequireFields<MutationGenerateSectionsWithStagesArgs, never>>;
  generateSectionsWithChapters?: Resolver<Maybe<Array<Maybe<ResolversTypes['SectionType']>>>, ParentType, ContextType, RequireFields<MutationGenerateSectionsWithChaptersArgs, never>>;
  generateSectionsWithScenes?: Resolver<Maybe<Array<Maybe<ResolversTypes['SectionType']>>>, ParentType, ContextType, RequireFields<MutationGenerateSectionsWithScenesArgs, never>>;
  generateStructure?: Resolver<Maybe<Array<Maybe<ResolversTypes['SectionType']>>>, ParentType, ContextType, RequireFields<MutationGenerateStructureArgs, never>>;
  addCharacterBodyParts?: Resolver<Maybe<ResolversTypes['CharacterBodyPartsType']>, ParentType, ContextType, RequireFields<MutationAddCharacterBodyPartsArgs, never>>;
  updateCharacterBodyParts?: Resolver<Maybe<ResolversTypes['CharacterBodyPartsType']>, ParentType, ContextType, RequireFields<MutationUpdateCharacterBodyPartsArgs, never>>;
  deleteCharacterBodyParts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteCharacterBodyPartsArgs, never>>;
  bulkAddCharacterBodyParts?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterBodyPartsType']>>>, ParentType, ContextType, RequireFields<MutationBulkAddCharacterBodyPartsArgs, 'parts'>>;
  addCharacterDescriptions?: Resolver<Maybe<ResolversTypes['CharacterDescriptionsType']>, ParentType, ContextType, RequireFields<MutationAddCharacterDescriptionsArgs, never>>;
  updateCharacterDescriptions?: Resolver<Maybe<ResolversTypes['CharacterDescriptionsType']>, ParentType, ContextType, RequireFields<MutationUpdateCharacterDescriptionsArgs, never>>;
  deleteCharacterDescriptions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteCharacterDescriptionsArgs, 'descriptionId'>>;
  bulkAddCharacterDescriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterDescriptionsType']>>>, ParentType, ContextType, RequireFields<MutationBulkAddCharacterDescriptionsArgs, 'descriptions'>>;
  addCharacterHonorifics?: Resolver<Maybe<ResolversTypes['CharacterHonorificsType']>, ParentType, ContextType, RequireFields<MutationAddCharacterHonorificsArgs, never>>;
  updateCharacterHonorifics?: Resolver<Maybe<ResolversTypes['CharacterHonorificsType']>, ParentType, ContextType, RequireFields<MutationUpdateCharacterHonorificsArgs, never>>;
  deleteCharacterHonorifics?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteCharacterHonorificsArgs, 'honorificId'>>;
  bulkAddCharacterHonorifics?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterHonorificsType']>>>, ParentType, ContextType, RequireFields<MutationBulkAddCharacterHonorificsArgs, 'honorifics'>>;
  addCharacterFirstName?: Resolver<Maybe<ResolversTypes['CharacterFirstNameType']>, ParentType, ContextType, RequireFields<MutationAddCharacterFirstNameArgs, never>>;
  updateCharacterFirstName?: Resolver<Maybe<ResolversTypes['CharacterFirstNameType']>, ParentType, ContextType, RequireFields<MutationUpdateCharacterFirstNameArgs, never>>;
  deleteCharacterFirstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteCharacterFirstNameArgs, 'firstNameId'>>;
  bulkAddCharacterFirstNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterFirstNameType']>>>, ParentType, ContextType, RequireFields<MutationBulkAddCharacterFirstNamesArgs, 'firstNames'>>;
  addCharacterLastName?: Resolver<Maybe<ResolversTypes['CharacterLastNameType']>, ParentType, ContextType, RequireFields<MutationAddCharacterLastNameArgs, never>>;
  updateCharacterLastName?: Resolver<Maybe<ResolversTypes['CharacterLastNameType']>, ParentType, ContextType, RequireFields<MutationUpdateCharacterLastNameArgs, never>>;
  deleteCharacterLastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteCharacterLastNameArgs, 'lastNameId'>>;
  bulkAddCharacterLastNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterLastNameType']>>>, ParentType, ContextType, RequireFields<MutationBulkAddCharacterLastNamesArgs, 'lastNames'>>;
  addCharacterMood?: Resolver<Maybe<ResolversTypes['CharacterMoodType']>, ParentType, ContextType, RequireFields<MutationAddCharacterMoodArgs, never>>;
  updateCharacterMood?: Resolver<Maybe<ResolversTypes['CharacterMoodType']>, ParentType, ContextType, RequireFields<MutationUpdateCharacterMoodArgs, never>>;
  deleteCharacterMood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteCharacterMoodArgs, 'moodId'>>;
  bulkAddCharacterMoods?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterMoodType']>>>, ParentType, ContextType, RequireFields<MutationBulkAddCharacterMoodsArgs, 'moods'>>;
};

export type NotificationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  device?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  os?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PlotDeviceResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PlotDevice'] = ResolversParentTypes['PlotDevice']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  definition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  example?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PostResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  notifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType>;
  storyLength?: Resolver<Array<Maybe<ResolversTypes['StoryLength']>>, ParentType, ContextType>;
  characterType?: Resolver<Array<Maybe<ResolversTypes['CharacterType']>>, ParentType, ContextType>;
  genreType?: Resolver<Array<Maybe<ResolversTypes['GenreType']>>, ParentType, ContextType>;
  writingPrompt?: Resolver<Array<Maybe<ResolversTypes['WritingPrompt']>>, ParentType, ContextType>;
  plotDevices?: Resolver<Array<Maybe<ResolversTypes['PlotDevice']>>, ParentType, ContextType>;
  storyStages?: Resolver<Array<Maybe<ResolversTypes['StageType']>>, ParentType, ContextType>;
  storyScenes?: Resolver<Array<Maybe<ResolversTypes['StoryScene']>>, ParentType, ContextType>;
  characterBodyParts?: Resolver<Array<Maybe<ResolversTypes['CharacterBodyPartsType']>>, ParentType, ContextType>;
  characterDescriptions?: Resolver<Array<Maybe<ResolversTypes['CharacterDescriptionsType']>>, ParentType, ContextType>;
  characterHonorifics?: Resolver<Array<Maybe<ResolversTypes['CharacterHonorificsType']>>, ParentType, ContextType>;
  characterFirstNames?: Resolver<Array<Maybe<ResolversTypes['CharacterFirstNameType']>>, ParentType, ContextType>;
  characterLastNames?: Resolver<Array<Maybe<ResolversTypes['CharacterLastNameType']>>, ParentType, ContextType>;
  characterMoods?: Resolver<Array<Maybe<ResolversTypes['CharacterMoodType']>>, ParentType, ContextType>;
};

export type SceneTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['SceneType'] = ResolversParentTypes['SceneType']> = {
  defaultStage?: Resolver<Maybe<ResolversTypes['StoryStageEnum']>, ParentType, ContextType>;
  defaultScene?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SectionTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['SectionType'] = ResolversParentTypes['SectionType']> = {
  section?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stages?: Resolver<Maybe<Array<Maybe<ResolversTypes['StageType']>>>, ParentType, ContextType>;
  chapters?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChapterType']>>>, ParentType, ContextType>;
  scenes?: Resolver<Maybe<Array<Maybe<ResolversTypes['SceneType']>>>, ParentType, ContextType>;
  avMinWordsPerSection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avMaxWordsPerSection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avChaptersPerSection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StageTypeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['StageType'] = ResolversParentTypes['StageType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['StoryStageEnum']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storyOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  plottingOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chapters?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChapterType']>>>, ParentType, ContextType>;
  scenes?: Resolver<Maybe<Array<Maybe<ResolversTypes['SceneType']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StoryLengthResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['StoryLength'] = ResolversParentTypes['StoryLength']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  minWords?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxWords?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avChapters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['StoryLengthType']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StorySceneResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['StoryScene'] = ResolversParentTypes['StoryScene']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultStage?: Resolver<Maybe<ResolversTypes['StoryStageEnum']>, ParentType, ContextType>;
  defaultScene?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SubscriptionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  userSignedIn?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "userSignedIn", ParentType, ContextType>;
  userUpdated?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "userUpdated", ParentType, ContextType>;
};

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authType?: Resolver<Maybe<ResolversTypes['AuthType']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notification']>>>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type WritingPromptResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['WritingPrompt'] = ResolversParentTypes['WritingPrompt']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prompt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenreListType']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = MyContext> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  ChapterType?: ChapterTypeResolvers<ContextType>;
  CharacterBodyPartsType?: CharacterBodyPartsTypeResolvers<ContextType>;
  CharacterDescriptionsType?: CharacterDescriptionsTypeResolvers<ContextType>;
  CharacterFirstNameType?: CharacterFirstNameTypeResolvers<ContextType>;
  CharacterHonorificsType?: CharacterHonorificsTypeResolvers<ContextType>;
  CharacterLastNameType?: CharacterLastNameTypeResolvers<ContextType>;
  CharacterMoodType?: CharacterMoodTypeResolvers<ContextType>;
  CharacterType?: CharacterTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  GenreType?: GenreTypeResolvers<ContextType>;
  Head?: HeadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  PlotDevice?: PlotDeviceResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SceneType?: SceneTypeResolvers<ContextType>;
  SectionType?: SectionTypeResolvers<ContextType>;
  StageType?: StageTypeResolvers<ContextType>;
  StoryLength?: StoryLengthResolvers<ContextType>;
  StoryScene?: StorySceneResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  WritingPrompt?: WritingPromptResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;
