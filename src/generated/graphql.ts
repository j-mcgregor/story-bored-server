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



export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE'
}

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
};


export type QueryUserArgs = {
  id: Scalars['ID'];
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
  Mutation: ResolverTypeWrapper<{}>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  SocialUserInput: SocialUserInput;
  UserInput: UserInput;
  NotificationInput: NotificationInput;
  StoryLengthInput: StoryLengthInput;
  Subscription: ResolverTypeWrapper<{}>;
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
  Mutation: {};
  AuthPayload: AuthPayload;
  SocialUserInput: SocialUserInput;
  UserInput: UserInput;
  NotificationInput: NotificationInput;
  StoryLengthInput: StoryLengthInput;
  Subscription: {};
};

export type AuthPayloadResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

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

export type Resolvers<ContextType = MyContext> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StoryLength?: StoryLengthResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;
