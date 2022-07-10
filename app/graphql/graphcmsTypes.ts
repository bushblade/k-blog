import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  authorAvatar: Array<Author>;
  coverImagePost: Array<Post>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  thumbnailPost: Array<Post>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetAuthorAvatarArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorWhereInput>;
};


/** Asset system model */
export type AssetCoverImagePostArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetThumbnailPostArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  authorAvatar?: InputMaybe<AuthorCreateManyInlineInput>;
  coverImagePost?: InputMaybe<PostCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  thumbnailPost?: InputMaybe<PostCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  authorAvatar_every?: InputMaybe<AuthorWhereInput>;
  authorAvatar_none?: InputMaybe<AuthorWhereInput>;
  authorAvatar_some?: InputMaybe<AuthorWhereInput>;
  coverImagePost_every?: InputMaybe<PostWhereInput>;
  coverImagePost_none?: InputMaybe<PostWhereInput>;
  coverImagePost_some?: InputMaybe<PostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  thumbnailPost_every?: InputMaybe<PostWhereInput>;
  thumbnailPost_none?: InputMaybe<PostWhereInput>;
  thumbnailPost_some?: InputMaybe<PostWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  authorAvatar?: InputMaybe<AuthorUpdateManyInlineInput>;
  coverImagePost?: InputMaybe<PostUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  thumbnailPost?: InputMaybe<PostUpdateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  authorAvatar_every?: InputMaybe<AuthorWhereInput>;
  authorAvatar_none?: InputMaybe<AuthorWhereInput>;
  authorAvatar_some?: InputMaybe<AuthorWhereInput>;
  coverImagePost_every?: InputMaybe<PostWhereInput>;
  coverImagePost_none?: InputMaybe<PostWhereInput>;
  coverImagePost_some?: InputMaybe<PostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  thumbnailPost_every?: InputMaybe<PostWhereInput>;
  thumbnailPost_none?: InputMaybe<PostWhereInput>;
  thumbnailPost_some?: InputMaybe<PostWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Author = Node & {
  __typename?: 'Author';
  /** Enter a short bio about yourself, or other authors. */
  biography?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Author>;
  /** List of Author versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Enter the display name for authors */
  name: Scalars['String'];
  /** Add a profile picture for authors */
  picture: Asset;
  /** Connect blog posts to this author */
  posts: Array<Post>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** Enter the job title of the author */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AuthorCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type AuthorHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type AuthorPictureArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type AuthorPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type AuthorPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type AuthorScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AuthorUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AuthorWhereUniqueInput;
};

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AuthorEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AuthorCreateInput = {
  biography?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  picture: AssetCreateOneInlineInput;
  posts?: InputMaybe<PostCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Create and connect multiple existing Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>;
};

export type AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>;
};

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Author;
};

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  biography_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  biography_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  biography_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  biography_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  biography_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  biography_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  biography_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  biography_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  biography_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<AssetWhereInput>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AuthorOrderByInput {
  BiographyAsc = 'biography_ASC',
  BiographyDesc = 'biography_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AuthorUpdateInput = {
  biography?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<AssetUpdateOneInlineInput>;
  posts?: InputMaybe<PostUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorConnectInput>>;
  /** Create and connect multiple Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>;
  /** Delete multiple Author documents */
  delete?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Disconnect multiple Author documents */
  disconnect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Author documents */
  set?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Update multiple Author documents */
  update?: InputMaybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Author documents */
  upsert?: InputMaybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>;
};

export type AuthorUpdateManyInput = {
  biography?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AuthorUpdateManyInput;
  /** Document search */
  where: AuthorWhereInput;
};

export type AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>;
  /** Delete currently connected Author document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Author document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Author document */
  update?: InputMaybe<AuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Author document */
  upsert?: InputMaybe<AuthorUpsertWithNestedWhereUniqueInput>;
};

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AuthorUpdateInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput;
  /** Update document if it exists */
  update: AuthorUpdateInput;
};

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AuthorUpsertInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

/** Identifies documents */
export type AuthorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  biography_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  biography_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  biography_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  biography_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  biography_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  biography_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  biography_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  biography_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  biography_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<AssetWhereInput>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Categories that your posts fit into */
export type Category = Node & {
  __typename?: 'Category';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** A short description to tell your users what this category is about. */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** List of Category versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  post: Array<Post>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** A url friendly bit of text for a link to a category */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The category title */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Categories that your posts fit into */
export type CategoryCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Categories that your posts fit into */
export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Categories that your posts fit into */
export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Categories that your posts fit into */
export type CategoryPostArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


/** Categories that your posts fit into */
export type CategoryPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Categories that your posts fit into */
export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Categories that your posts fit into */
export type CategoryUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  post?: InputMaybe<PostCreateManyInlineInput>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  post_every?: InputMaybe<PostWhereInput>;
  post_none?: InputMaybe<PostWhereInput>;
  post_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  post?: InputMaybe<PostUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  post_every?: InputMaybe<PostWhereInput>;
  post_none?: InputMaybe<PostWhereInput>;
  post_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one author */
  createAuthor?: Maybe<Author>;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Create one post */
  createPost?: Maybe<Post>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one video */
  createVideo?: Maybe<Video>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Author documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthorsConnection)
   */
  deleteManyAuthors: BatchPayload;
  /** Delete many Author documents, return deleted documents */
  deleteManyAuthorsConnection: AuthorConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection;
  /**
   * Delete many Video documents
   * @deprecated Please use the new paginated many mutation (deleteManyVideosConnection)
   */
  deleteManyVideos: BatchPayload;
  /** Delete many Video documents, return deleted documents */
  deleteManyVideosConnection: VideoConnection;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one video from _all_ existing stages. Returns deleted document. */
  deleteVideo?: Maybe<Video>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one author */
  publishAuthor?: Maybe<Author>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Author documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthorsConnection)
   */
  publishManyAuthors: BatchPayload;
  /** Publish many Author documents */
  publishManyAuthorsConnection: AuthorConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload;
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection;
  /**
   * Publish many Video documents
   * @deprecated Please use the new paginated many mutation (publishManyVideosConnection)
   */
  publishManyVideos: BatchPayload;
  /** Publish many Video documents */
  publishManyVideosConnection: VideoConnection;
  /** Publish one post */
  publishPost?: Maybe<Post>;
  /** Publish one video */
  publishVideo?: Maybe<Video>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one author */
  schedulePublishAuthor?: Maybe<Author>;
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>;
  /** Schedule to publish one post */
  schedulePublishPost?: Maybe<Post>;
  /** Schedule to publish one video */
  schedulePublishVideo?: Maybe<Video>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAuthor?: Maybe<Author>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost?: Maybe<Post>;
  /** Unpublish one video from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishVideo?: Maybe<Video>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<Author>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Author documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthorsConnection)
   */
  unpublishManyAuthors: BatchPayload;
  /** Find many Author documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAuthorsConnection: AuthorConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection;
  /**
   * Unpublish many Video documents
   * @deprecated Please use the new paginated many mutation (unpublishManyVideosConnection)
   */
  unpublishManyVideos: BatchPayload;
  /** Find many Video documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyVideosConnection: VideoConnection;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>;
  /** Unpublish one video from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishVideo?: Maybe<Video>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one author */
  updateAuthor?: Maybe<Author>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many authors
   * @deprecated Please use the new paginated many mutation (updateManyAuthorsConnection)
   */
  updateManyAuthors: BatchPayload;
  /** Update many Author documents */
  updateManyAuthorsConnection: AuthorConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload;
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection;
  /**
   * Update many videos
   * @deprecated Please use the new paginated many mutation (updateManyVideosConnection)
   */
  updateManyVideos: BatchPayload;
  /** Update many Video documents */
  updateManyVideosConnection: VideoConnection;
  /** Update one post */
  updatePost?: Maybe<Post>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one video */
  updateVideo?: Maybe<Video>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Upsert one post */
  upsertPost?: Maybe<Post>;
  /** Upsert one video */
  upsertVideo?: Maybe<Video>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateVideoArgs = {
  data: VideoCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAuthorsArgs = {
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationDeleteManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyPostsArgs = {
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationDeleteManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationDeleteManyVideosArgs = {
  where?: InputMaybe<VideoManyWhereInput>;
};


export type MutationDeleteManyVideosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoManyWhereInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteVideoArgs = {
  where: VideoWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishAuthorArgs = {
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};


export type MutationPublishCategoryArgs = {
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAuthorsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationPublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationPublishManyCategoriesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyPostsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationPublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationPublishManyVideosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<VideoManyWhereInput>;
};


export type MutationPublishManyVideosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<VideoManyWhereInput>;
};


export type MutationPublishPostArgs = {
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationPublishVideoArgs = {
  to?: Array<Stage>;
  where: VideoWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAuthorArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};


export type MutationSchedulePublishCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationSchedulePublishPostArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationSchedulePublishVideoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: VideoWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishAuthorArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: AuthorWhereUniqueInput;
};


export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishPostArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PostWhereUniqueInput;
};


export type MutationScheduleUnpublishVideoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: VideoWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishAuthorArgs = {
  from?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};


export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAuthorsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationUnpublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyPostsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUnpublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUnpublishManyVideosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<VideoManyWhereInput>;
};


export type MutationUnpublishManyVideosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<VideoManyWhereInput>;
};


export type MutationUnpublishPostArgs = {
  from?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationUnpublishVideoArgs = {
  from?: Array<Stage>;
  where: VideoWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAuthorsArgs = {
  data: AuthorUpdateManyInput;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationUpdateManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AuthorUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyInput;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUpdateManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PostUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUpdateManyVideosArgs = {
  data: VideoUpdateManyInput;
  where?: InputMaybe<VideoManyWhereInput>;
};


export type MutationUpdateManyVideosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: VideoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoManyWhereInput>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateVideoArgs = {
  data: VideoUpdateInput;
  where: VideoWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAuthorArgs = {
  upsert: AuthorUpsertInput;
  where: AuthorWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  upsert: PostUpsertInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertVideoArgs = {
  upsert: VideoUpsertInput;
  where: VideoWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Post = Node & {
  __typename?: 'Post';
  /** Who should be credited with writing this post? */
  author?: Maybe<Author>;
  /** A brief intro to what this post is about. */
  blurb?: Maybe<Scalars['String']>;
  categories: Array<Category>;
  /** Write your blog post! */
  content: PostContentRichText;
  /**
   * Upload or select a cover image to set as your Featured Image.
   * This will show as the first and main title image in your Post.
   * Ideally the image should be 16:9 aspect ratio, as this looks best.
   *
   */
  coverImage?: Maybe<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  /** List of Post versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /**
   * This will show as a preview image in your site.
   * Ideally the image should be 16:9 aspect ratio.
   * If a 16:9 image is not provided then it will be cropped to fit in the site.
   * This can be the same image as the cover image if you wish.
   */
  previewImage: Asset;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** A URL friendly bit of text to link to your post */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Name your blog post! */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PostAuthorArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PostCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type PostCoverImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PostCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PostPreviewImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PostPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PostScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PostUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PostWhereUniqueInput;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PostEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PostContentRichText = {
  __typename?: 'PostContentRichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  json: Scalars['RichTextAST'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  references: Array<PostContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type PostContentRichTextEmbeddedTypes = Video;

export type PostCreateInput = {
  author?: InputMaybe<AuthorCreateOneInlineInput>;
  blurb?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<CategoryCreateManyInlineInput>;
  content: Scalars['RichTextAST'];
  coverImage?: InputMaybe<AssetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  previewImage: AssetCreateOneInlineInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Create and connect multiple existing Post documents */
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Post;
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<AuthorWhereInput>;
  blurb?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blurb_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blurb_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blurb_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  blurb_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blurb_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blurb_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blurb_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  blurb_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blurb_starts_with?: InputMaybe<Scalars['String']>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  previewImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PostOrderByInput {
  BlurbAsc = 'blurb_ASC',
  BlurbDesc = 'blurb_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PostUpdateInput = {
  author?: InputMaybe<AuthorUpdateOneInlineInput>;
  blurb?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<CategoryUpdateManyInlineInput>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  coverImage?: InputMaybe<AssetUpdateOneInlineInput>;
  previewImage?: InputMaybe<AssetUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostConnectInput>>;
  /** Create and connect multiple Post documents */
  create?: InputMaybe<Array<PostCreateInput>>;
  /** Delete multiple Post documents */
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: InputMaybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: InputMaybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
};

export type PostUpdateManyInput = {
  blurb?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PostUpdateManyInput;
  /** Document search */
  where: PostWhereInput;
};

export type PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>;
  /** Delete currently connected Post document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Post document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Post document */
  update?: InputMaybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: InputMaybe<PostUpsertWithNestedWhereUniqueInput>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PostUpdateInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PostUpsertInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<AuthorWhereInput>;
  blurb?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blurb_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blurb_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blurb_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  blurb_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blurb_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blurb_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blurb_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  blurb_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blurb_starts_with?: InputMaybe<Scalars['String']>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  previewImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single author */
  author?: Maybe<Author>;
  /** Retrieve document version */
  authorVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple authors */
  authors: Array<Author>;
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single post */
  post?: Maybe<Post>;
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single video */
  video?: Maybe<Video>;
  /** Retrieve document version */
  videoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple videos */
  videos: Array<Video>;
  /** Retrieve multiple videos using the Relay connection interface */
  videosConnection: VideoConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAuthorArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AuthorWhereUniqueInput;
};


export type QueryAuthorVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAuthorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPostArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PostWhereUniqueInput;
};


export type QueryPostVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVideoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: VideoWhereUniqueInput;
};


export type QueryVideoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryVideosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<VideoWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Author | Category | Post | Video;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

/** Embed a YouTube video in your post */
export type Video = Node & {
  __typename?: 'Video';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Video>;
  /** List of Video versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** A name of the Video to help you find it again. */
  nameOfVideo?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Insert the YouTube share url to your video. */
  youTubeShareUrl: Scalars['String'];
};


/** Embed a YouTube video in your post */
export type VideoCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Embed a YouTube video in your post */
export type VideoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Embed a YouTube video in your post */
export type VideoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Embed a YouTube video in your post */
export type VideoPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Embed a YouTube video in your post */
export type VideoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Embed a YouTube video in your post */
export type VideoUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type VideoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: VideoWhereUniqueInput;
};

/** A connection to a list of items. */
export type VideoConnection = {
  __typename?: 'VideoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<VideoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type VideoCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  nameOfVideo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  youTubeShareUrl: Scalars['String'];
};

export type VideoCreateManyInlineInput = {
  /** Connect multiple existing Video documents */
  connect?: InputMaybe<Array<VideoWhereUniqueInput>>;
  /** Create and connect multiple existing Video documents */
  create?: InputMaybe<Array<VideoCreateInput>>;
};

export type VideoCreateOneInlineInput = {
  /** Connect one existing Video document */
  connect?: InputMaybe<VideoWhereUniqueInput>;
  /** Create and connect one Video document */
  create?: InputMaybe<VideoCreateInput>;
};

/** An edge in a connection. */
export type VideoEdge = {
  __typename?: 'VideoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Video;
};

/** Identifies documents */
export type VideoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  nameOfVideo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nameOfVideo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nameOfVideo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nameOfVideo_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  nameOfVideo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nameOfVideo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nameOfVideo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nameOfVideo_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  nameOfVideo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nameOfVideo_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  youTubeShareUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youTubeShareUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youTubeShareUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youTubeShareUrl_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  youTubeShareUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youTubeShareUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youTubeShareUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youTubeShareUrl_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  youTubeShareUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youTubeShareUrl_starts_with?: InputMaybe<Scalars['String']>;
};

export enum VideoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameOfVideoAsc = 'nameOfVideo_ASC',
  NameOfVideoDesc = 'nameOfVideo_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  YouTubeShareUrlAsc = 'youTubeShareUrl_ASC',
  YouTubeShareUrlDesc = 'youTubeShareUrl_DESC'
}

export type VideoUpdateInput = {
  nameOfVideo?: InputMaybe<Scalars['String']>;
  youTubeShareUrl?: InputMaybe<Scalars['String']>;
};

export type VideoUpdateManyInlineInput = {
  /** Connect multiple existing Video documents */
  connect?: InputMaybe<Array<VideoConnectInput>>;
  /** Create and connect multiple Video documents */
  create?: InputMaybe<Array<VideoCreateInput>>;
  /** Delete multiple Video documents */
  delete?: InputMaybe<Array<VideoWhereUniqueInput>>;
  /** Disconnect multiple Video documents */
  disconnect?: InputMaybe<Array<VideoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Video documents */
  set?: InputMaybe<Array<VideoWhereUniqueInput>>;
  /** Update multiple Video documents */
  update?: InputMaybe<Array<VideoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Video documents */
  upsert?: InputMaybe<Array<VideoUpsertWithNestedWhereUniqueInput>>;
};

export type VideoUpdateManyInput = {
  nameOfVideo?: InputMaybe<Scalars['String']>;
  youTubeShareUrl?: InputMaybe<Scalars['String']>;
};

export type VideoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: VideoUpdateManyInput;
  /** Document search */
  where: VideoWhereInput;
};

export type VideoUpdateOneInlineInput = {
  /** Connect existing Video document */
  connect?: InputMaybe<VideoWhereUniqueInput>;
  /** Create and connect one Video document */
  create?: InputMaybe<VideoCreateInput>;
  /** Delete currently connected Video document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Video document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Video document */
  update?: InputMaybe<VideoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Video document */
  upsert?: InputMaybe<VideoUpsertWithNestedWhereUniqueInput>;
};

export type VideoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: VideoUpdateInput;
  /** Unique document search */
  where: VideoWhereUniqueInput;
};

export type VideoUpsertInput = {
  /** Create document if it didn't exist */
  create: VideoCreateInput;
  /** Update document if it exists */
  update: VideoUpdateInput;
};

export type VideoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: VideoUpsertInput;
  /** Unique document search */
  where: VideoWhereUniqueInput;
};

/** Identifies documents */
export type VideoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  nameOfVideo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nameOfVideo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nameOfVideo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nameOfVideo_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  nameOfVideo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nameOfVideo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nameOfVideo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nameOfVideo_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  nameOfVideo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nameOfVideo_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  youTubeShareUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youTubeShareUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youTubeShareUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youTubeShareUrl_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  youTubeShareUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youTubeShareUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youTubeShareUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youTubeShareUrl_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  youTubeShareUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youTubeShareUrl_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Video record uniquely */
export type VideoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Aggregate: ResolverTypeWrapper<Aggregate>;
  Asset: ResolverTypeWrapper<Asset>;
  AssetConnectInput: AssetConnectInput;
  AssetConnection: ResolverTypeWrapper<AssetConnection>;
  AssetCreateInput: AssetCreateInput;
  AssetCreateLocalizationDataInput: AssetCreateLocalizationDataInput;
  AssetCreateLocalizationInput: AssetCreateLocalizationInput;
  AssetCreateLocalizationsInput: AssetCreateLocalizationsInput;
  AssetCreateManyInlineInput: AssetCreateManyInlineInput;
  AssetCreateOneInlineInput: AssetCreateOneInlineInput;
  AssetEdge: ResolverTypeWrapper<AssetEdge>;
  AssetManyWhereInput: AssetManyWhereInput;
  AssetOrderByInput: AssetOrderByInput;
  AssetTransformationInput: AssetTransformationInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetUpdateLocalizationDataInput: AssetUpdateLocalizationDataInput;
  AssetUpdateLocalizationInput: AssetUpdateLocalizationInput;
  AssetUpdateLocalizationsInput: AssetUpdateLocalizationsInput;
  AssetUpdateManyInlineInput: AssetUpdateManyInlineInput;
  AssetUpdateManyInput: AssetUpdateManyInput;
  AssetUpdateManyLocalizationDataInput: AssetUpdateManyLocalizationDataInput;
  AssetUpdateManyLocalizationInput: AssetUpdateManyLocalizationInput;
  AssetUpdateManyLocalizationsInput: AssetUpdateManyLocalizationsInput;
  AssetUpdateManyWithNestedWhereInput: AssetUpdateManyWithNestedWhereInput;
  AssetUpdateOneInlineInput: AssetUpdateOneInlineInput;
  AssetUpdateWithNestedWhereUniqueInput: AssetUpdateWithNestedWhereUniqueInput;
  AssetUpsertInput: AssetUpsertInput;
  AssetUpsertLocalizationInput: AssetUpsertLocalizationInput;
  AssetUpsertWithNestedWhereUniqueInput: AssetUpsertWithNestedWhereUniqueInput;
  AssetWhereInput: AssetWhereInput;
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  Author: ResolverTypeWrapper<Author>;
  AuthorConnectInput: AuthorConnectInput;
  AuthorConnection: ResolverTypeWrapper<AuthorConnection>;
  AuthorCreateInput: AuthorCreateInput;
  AuthorCreateManyInlineInput: AuthorCreateManyInlineInput;
  AuthorCreateOneInlineInput: AuthorCreateOneInlineInput;
  AuthorEdge: ResolverTypeWrapper<AuthorEdge>;
  AuthorManyWhereInput: AuthorManyWhereInput;
  AuthorOrderByInput: AuthorOrderByInput;
  AuthorUpdateInput: AuthorUpdateInput;
  AuthorUpdateManyInlineInput: AuthorUpdateManyInlineInput;
  AuthorUpdateManyInput: AuthorUpdateManyInput;
  AuthorUpdateManyWithNestedWhereInput: AuthorUpdateManyWithNestedWhereInput;
  AuthorUpdateOneInlineInput: AuthorUpdateOneInlineInput;
  AuthorUpdateWithNestedWhereUniqueInput: AuthorUpdateWithNestedWhereUniqueInput;
  AuthorUpsertInput: AuthorUpsertInput;
  AuthorUpsertWithNestedWhereUniqueInput: AuthorUpsertWithNestedWhereUniqueInput;
  AuthorWhereInput: AuthorWhereInput;
  AuthorWhereUniqueInput: AuthorWhereUniqueInput;
  BatchPayload: ResolverTypeWrapper<BatchPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryConnectInput: CategoryConnectInput;
  CategoryConnection: ResolverTypeWrapper<CategoryConnection>;
  CategoryCreateInput: CategoryCreateInput;
  CategoryCreateManyInlineInput: CategoryCreateManyInlineInput;
  CategoryCreateOneInlineInput: CategoryCreateOneInlineInput;
  CategoryEdge: ResolverTypeWrapper<CategoryEdge>;
  CategoryManyWhereInput: CategoryManyWhereInput;
  CategoryOrderByInput: CategoryOrderByInput;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryUpdateManyInlineInput: CategoryUpdateManyInlineInput;
  CategoryUpdateManyInput: CategoryUpdateManyInput;
  CategoryUpdateManyWithNestedWhereInput: CategoryUpdateManyWithNestedWhereInput;
  CategoryUpdateOneInlineInput: CategoryUpdateOneInlineInput;
  CategoryUpdateWithNestedWhereUniqueInput: CategoryUpdateWithNestedWhereUniqueInput;
  CategoryUpsertInput: CategoryUpsertInput;
  CategoryUpsertWithNestedWhereUniqueInput: CategoryUpsertWithNestedWhereUniqueInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  Color: ResolverTypeWrapper<Color>;
  ColorInput: ColorInput;
  ConnectPositionInput: ConnectPositionInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DocumentFileTypes: DocumentFileTypes;
  DocumentOutputInput: DocumentOutputInput;
  DocumentTransformationInput: DocumentTransformationInput;
  DocumentVersion: ResolverTypeWrapper<DocumentVersion>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Hex: ResolverTypeWrapper<Scalars['Hex']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImageFit: ImageFit;
  ImageResizeInput: ImageResizeInput;
  ImageTransformationInput: ImageTransformationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  Locale: Locale;
  Location: ResolverTypeWrapper<Location>;
  LocationInput: LocationInput;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Asset'] | ResolversTypes['Author'] | ResolversTypes['Category'] | ResolversTypes['Post'] | ResolversTypes['ScheduledOperation'] | ResolversTypes['ScheduledRelease'] | ResolversTypes['User'] | ResolversTypes['Video'];
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Post: ResolverTypeWrapper<Post>;
  PostConnectInput: PostConnectInput;
  PostConnection: ResolverTypeWrapper<PostConnection>;
  PostContentRichText: ResolverTypeWrapper<Omit<PostContentRichText, 'references'> & { references: Array<ResolversTypes['PostContentRichTextEmbeddedTypes']> }>;
  PostContentRichTextEmbeddedTypes: ResolversTypes['Video'];
  PostCreateInput: PostCreateInput;
  PostCreateManyInlineInput: PostCreateManyInlineInput;
  PostCreateOneInlineInput: PostCreateOneInlineInput;
  PostEdge: ResolverTypeWrapper<PostEdge>;
  PostManyWhereInput: PostManyWhereInput;
  PostOrderByInput: PostOrderByInput;
  PostUpdateInput: PostUpdateInput;
  PostUpdateManyInlineInput: PostUpdateManyInlineInput;
  PostUpdateManyInput: PostUpdateManyInput;
  PostUpdateManyWithNestedWhereInput: PostUpdateManyWithNestedWhereInput;
  PostUpdateOneInlineInput: PostUpdateOneInlineInput;
  PostUpdateWithNestedWhereUniqueInput: PostUpdateWithNestedWhereUniqueInput;
  PostUpsertInput: PostUpsertInput;
  PostUpsertWithNestedWhereUniqueInput: PostUpsertWithNestedWhereUniqueInput;
  PostWhereInput: PostWhereInput;
  PostWhereUniqueInput: PostWhereUniqueInput;
  PublishLocaleInput: PublishLocaleInput;
  Query: ResolverTypeWrapper<{}>;
  RGBA: ResolverTypeWrapper<Rgba>;
  RGBAHue: ResolverTypeWrapper<Scalars['RGBAHue']>;
  RGBAInput: RgbaInput;
  RGBATransparency: ResolverTypeWrapper<Scalars['RGBATransparency']>;
  RichText: ResolverTypeWrapper<RichText>;
  RichTextAST: ResolverTypeWrapper<Scalars['RichTextAST']>;
  ScheduledOperation: ResolverTypeWrapper<Omit<ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<ResolversTypes['ScheduledOperationAffectedDocument']> }>;
  ScheduledOperationAffectedDocument: ResolversTypes['Asset'] | ResolversTypes['Author'] | ResolversTypes['Category'] | ResolversTypes['Post'] | ResolversTypes['Video'];
  ScheduledOperationConnectInput: ScheduledOperationConnectInput;
  ScheduledOperationConnection: ResolverTypeWrapper<ScheduledOperationConnection>;
  ScheduledOperationCreateManyInlineInput: ScheduledOperationCreateManyInlineInput;
  ScheduledOperationCreateOneInlineInput: ScheduledOperationCreateOneInlineInput;
  ScheduledOperationEdge: ResolverTypeWrapper<ScheduledOperationEdge>;
  ScheduledOperationManyWhereInput: ScheduledOperationManyWhereInput;
  ScheduledOperationOrderByInput: ScheduledOperationOrderByInput;
  ScheduledOperationStatus: ScheduledOperationStatus;
  ScheduledOperationUpdateManyInlineInput: ScheduledOperationUpdateManyInlineInput;
  ScheduledOperationUpdateOneInlineInput: ScheduledOperationUpdateOneInlineInput;
  ScheduledOperationWhereInput: ScheduledOperationWhereInput;
  ScheduledOperationWhereUniqueInput: ScheduledOperationWhereUniqueInput;
  ScheduledRelease: ResolverTypeWrapper<ScheduledRelease>;
  ScheduledReleaseConnectInput: ScheduledReleaseConnectInput;
  ScheduledReleaseConnection: ResolverTypeWrapper<ScheduledReleaseConnection>;
  ScheduledReleaseCreateInput: ScheduledReleaseCreateInput;
  ScheduledReleaseCreateManyInlineInput: ScheduledReleaseCreateManyInlineInput;
  ScheduledReleaseCreateOneInlineInput: ScheduledReleaseCreateOneInlineInput;
  ScheduledReleaseEdge: ResolverTypeWrapper<ScheduledReleaseEdge>;
  ScheduledReleaseManyWhereInput: ScheduledReleaseManyWhereInput;
  ScheduledReleaseOrderByInput: ScheduledReleaseOrderByInput;
  ScheduledReleaseStatus: ScheduledReleaseStatus;
  ScheduledReleaseUpdateInput: ScheduledReleaseUpdateInput;
  ScheduledReleaseUpdateManyInlineInput: ScheduledReleaseUpdateManyInlineInput;
  ScheduledReleaseUpdateManyInput: ScheduledReleaseUpdateManyInput;
  ScheduledReleaseUpdateManyWithNestedWhereInput: ScheduledReleaseUpdateManyWithNestedWhereInput;
  ScheduledReleaseUpdateOneInlineInput: ScheduledReleaseUpdateOneInlineInput;
  ScheduledReleaseUpdateWithNestedWhereUniqueInput: ScheduledReleaseUpdateWithNestedWhereUniqueInput;
  ScheduledReleaseUpsertInput: ScheduledReleaseUpsertInput;
  ScheduledReleaseUpsertWithNestedWhereUniqueInput: ScheduledReleaseUpsertWithNestedWhereUniqueInput;
  ScheduledReleaseWhereInput: ScheduledReleaseWhereInput;
  ScheduledReleaseWhereUniqueInput: ScheduledReleaseWhereUniqueInput;
  Stage: Stage;
  String: ResolverTypeWrapper<Scalars['String']>;
  SystemDateTimeFieldVariation: SystemDateTimeFieldVariation;
  UnpublishLocaleInput: UnpublishLocaleInput;
  User: ResolverTypeWrapper<User>;
  UserConnectInput: UserConnectInput;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserCreateManyInlineInput: UserCreateManyInlineInput;
  UserCreateOneInlineInput: UserCreateOneInlineInput;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserKind: UserKind;
  UserManyWhereInput: UserManyWhereInput;
  UserOrderByInput: UserOrderByInput;
  UserUpdateManyInlineInput: UserUpdateManyInlineInput;
  UserUpdateOneInlineInput: UserUpdateOneInlineInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Version: ResolverTypeWrapper<Version>;
  VersionWhereInput: VersionWhereInput;
  Video: ResolverTypeWrapper<Video>;
  VideoConnectInput: VideoConnectInput;
  VideoConnection: ResolverTypeWrapper<VideoConnection>;
  VideoCreateInput: VideoCreateInput;
  VideoCreateManyInlineInput: VideoCreateManyInlineInput;
  VideoCreateOneInlineInput: VideoCreateOneInlineInput;
  VideoEdge: ResolverTypeWrapper<VideoEdge>;
  VideoManyWhereInput: VideoManyWhereInput;
  VideoOrderByInput: VideoOrderByInput;
  VideoUpdateInput: VideoUpdateInput;
  VideoUpdateManyInlineInput: VideoUpdateManyInlineInput;
  VideoUpdateManyInput: VideoUpdateManyInput;
  VideoUpdateManyWithNestedWhereInput: VideoUpdateManyWithNestedWhereInput;
  VideoUpdateOneInlineInput: VideoUpdateOneInlineInput;
  VideoUpdateWithNestedWhereUniqueInput: VideoUpdateWithNestedWhereUniqueInput;
  VideoUpsertInput: VideoUpsertInput;
  VideoUpsertWithNestedWhereUniqueInput: VideoUpsertWithNestedWhereUniqueInput;
  VideoWhereInput: VideoWhereInput;
  VideoWhereUniqueInput: VideoWhereUniqueInput;
  _FilterKind: _FilterKind;
  _MutationInputFieldKind: _MutationInputFieldKind;
  _MutationKind: _MutationKind;
  _OrderDirection: _OrderDirection;
  _RelationInputCardinality: _RelationInputCardinality;
  _RelationInputKind: _RelationInputKind;
  _RelationKind: _RelationKind;
  _SystemDateTimeFieldVariation: _SystemDateTimeFieldVariation;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Aggregate: Aggregate;
  Asset: Asset;
  AssetConnectInput: AssetConnectInput;
  AssetConnection: AssetConnection;
  AssetCreateInput: AssetCreateInput;
  AssetCreateLocalizationDataInput: AssetCreateLocalizationDataInput;
  AssetCreateLocalizationInput: AssetCreateLocalizationInput;
  AssetCreateLocalizationsInput: AssetCreateLocalizationsInput;
  AssetCreateManyInlineInput: AssetCreateManyInlineInput;
  AssetCreateOneInlineInput: AssetCreateOneInlineInput;
  AssetEdge: AssetEdge;
  AssetManyWhereInput: AssetManyWhereInput;
  AssetTransformationInput: AssetTransformationInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetUpdateLocalizationDataInput: AssetUpdateLocalizationDataInput;
  AssetUpdateLocalizationInput: AssetUpdateLocalizationInput;
  AssetUpdateLocalizationsInput: AssetUpdateLocalizationsInput;
  AssetUpdateManyInlineInput: AssetUpdateManyInlineInput;
  AssetUpdateManyInput: AssetUpdateManyInput;
  AssetUpdateManyLocalizationDataInput: AssetUpdateManyLocalizationDataInput;
  AssetUpdateManyLocalizationInput: AssetUpdateManyLocalizationInput;
  AssetUpdateManyLocalizationsInput: AssetUpdateManyLocalizationsInput;
  AssetUpdateManyWithNestedWhereInput: AssetUpdateManyWithNestedWhereInput;
  AssetUpdateOneInlineInput: AssetUpdateOneInlineInput;
  AssetUpdateWithNestedWhereUniqueInput: AssetUpdateWithNestedWhereUniqueInput;
  AssetUpsertInput: AssetUpsertInput;
  AssetUpsertLocalizationInput: AssetUpsertLocalizationInput;
  AssetUpsertWithNestedWhereUniqueInput: AssetUpsertWithNestedWhereUniqueInput;
  AssetWhereInput: AssetWhereInput;
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  Author: Author;
  AuthorConnectInput: AuthorConnectInput;
  AuthorConnection: AuthorConnection;
  AuthorCreateInput: AuthorCreateInput;
  AuthorCreateManyInlineInput: AuthorCreateManyInlineInput;
  AuthorCreateOneInlineInput: AuthorCreateOneInlineInput;
  AuthorEdge: AuthorEdge;
  AuthorManyWhereInput: AuthorManyWhereInput;
  AuthorUpdateInput: AuthorUpdateInput;
  AuthorUpdateManyInlineInput: AuthorUpdateManyInlineInput;
  AuthorUpdateManyInput: AuthorUpdateManyInput;
  AuthorUpdateManyWithNestedWhereInput: AuthorUpdateManyWithNestedWhereInput;
  AuthorUpdateOneInlineInput: AuthorUpdateOneInlineInput;
  AuthorUpdateWithNestedWhereUniqueInput: AuthorUpdateWithNestedWhereUniqueInput;
  AuthorUpsertInput: AuthorUpsertInput;
  AuthorUpsertWithNestedWhereUniqueInput: AuthorUpsertWithNestedWhereUniqueInput;
  AuthorWhereInput: AuthorWhereInput;
  AuthorWhereUniqueInput: AuthorWhereUniqueInput;
  BatchPayload: BatchPayload;
  Boolean: Scalars['Boolean'];
  Category: Category;
  CategoryConnectInput: CategoryConnectInput;
  CategoryConnection: CategoryConnection;
  CategoryCreateInput: CategoryCreateInput;
  CategoryCreateManyInlineInput: CategoryCreateManyInlineInput;
  CategoryCreateOneInlineInput: CategoryCreateOneInlineInput;
  CategoryEdge: CategoryEdge;
  CategoryManyWhereInput: CategoryManyWhereInput;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryUpdateManyInlineInput: CategoryUpdateManyInlineInput;
  CategoryUpdateManyInput: CategoryUpdateManyInput;
  CategoryUpdateManyWithNestedWhereInput: CategoryUpdateManyWithNestedWhereInput;
  CategoryUpdateOneInlineInput: CategoryUpdateOneInlineInput;
  CategoryUpdateWithNestedWhereUniqueInput: CategoryUpdateWithNestedWhereUniqueInput;
  CategoryUpsertInput: CategoryUpsertInput;
  CategoryUpsertWithNestedWhereUniqueInput: CategoryUpsertWithNestedWhereUniqueInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  Color: Color;
  ColorInput: ColorInput;
  ConnectPositionInput: ConnectPositionInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  DocumentOutputInput: DocumentOutputInput;
  DocumentTransformationInput: DocumentTransformationInput;
  DocumentVersion: DocumentVersion;
  Float: Scalars['Float'];
  Hex: Scalars['Hex'];
  ID: Scalars['ID'];
  ImageResizeInput: ImageResizeInput;
  ImageTransformationInput: ImageTransformationInput;
  Int: Scalars['Int'];
  Json: Scalars['Json'];
  Location: Location;
  LocationInput: LocationInput;
  Long: Scalars['Long'];
  Mutation: {};
  Node: ResolversParentTypes['Asset'] | ResolversParentTypes['Author'] | ResolversParentTypes['Category'] | ResolversParentTypes['Post'] | ResolversParentTypes['ScheduledOperation'] | ResolversParentTypes['ScheduledRelease'] | ResolversParentTypes['User'] | ResolversParentTypes['Video'];
  PageInfo: PageInfo;
  Post: Post;
  PostConnectInput: PostConnectInput;
  PostConnection: PostConnection;
  PostContentRichText: Omit<PostContentRichText, 'references'> & { references: Array<ResolversParentTypes['PostContentRichTextEmbeddedTypes']> };
  PostContentRichTextEmbeddedTypes: ResolversParentTypes['Video'];
  PostCreateInput: PostCreateInput;
  PostCreateManyInlineInput: PostCreateManyInlineInput;
  PostCreateOneInlineInput: PostCreateOneInlineInput;
  PostEdge: PostEdge;
  PostManyWhereInput: PostManyWhereInput;
  PostUpdateInput: PostUpdateInput;
  PostUpdateManyInlineInput: PostUpdateManyInlineInput;
  PostUpdateManyInput: PostUpdateManyInput;
  PostUpdateManyWithNestedWhereInput: PostUpdateManyWithNestedWhereInput;
  PostUpdateOneInlineInput: PostUpdateOneInlineInput;
  PostUpdateWithNestedWhereUniqueInput: PostUpdateWithNestedWhereUniqueInput;
  PostUpsertInput: PostUpsertInput;
  PostUpsertWithNestedWhereUniqueInput: PostUpsertWithNestedWhereUniqueInput;
  PostWhereInput: PostWhereInput;
  PostWhereUniqueInput: PostWhereUniqueInput;
  PublishLocaleInput: PublishLocaleInput;
  Query: {};
  RGBA: Rgba;
  RGBAHue: Scalars['RGBAHue'];
  RGBAInput: RgbaInput;
  RGBATransparency: Scalars['RGBATransparency'];
  RichText: RichText;
  RichTextAST: Scalars['RichTextAST'];
  ScheduledOperation: Omit<ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<ResolversParentTypes['ScheduledOperationAffectedDocument']> };
  ScheduledOperationAffectedDocument: ResolversParentTypes['Asset'] | ResolversParentTypes['Author'] | ResolversParentTypes['Category'] | ResolversParentTypes['Post'] | ResolversParentTypes['Video'];
  ScheduledOperationConnectInput: ScheduledOperationConnectInput;
  ScheduledOperationConnection: ScheduledOperationConnection;
  ScheduledOperationCreateManyInlineInput: ScheduledOperationCreateManyInlineInput;
  ScheduledOperationCreateOneInlineInput: ScheduledOperationCreateOneInlineInput;
  ScheduledOperationEdge: ScheduledOperationEdge;
  ScheduledOperationManyWhereInput: ScheduledOperationManyWhereInput;
  ScheduledOperationUpdateManyInlineInput: ScheduledOperationUpdateManyInlineInput;
  ScheduledOperationUpdateOneInlineInput: ScheduledOperationUpdateOneInlineInput;
  ScheduledOperationWhereInput: ScheduledOperationWhereInput;
  ScheduledOperationWhereUniqueInput: ScheduledOperationWhereUniqueInput;
  ScheduledRelease: ScheduledRelease;
  ScheduledReleaseConnectInput: ScheduledReleaseConnectInput;
  ScheduledReleaseConnection: ScheduledReleaseConnection;
  ScheduledReleaseCreateInput: ScheduledReleaseCreateInput;
  ScheduledReleaseCreateManyInlineInput: ScheduledReleaseCreateManyInlineInput;
  ScheduledReleaseCreateOneInlineInput: ScheduledReleaseCreateOneInlineInput;
  ScheduledReleaseEdge: ScheduledReleaseEdge;
  ScheduledReleaseManyWhereInput: ScheduledReleaseManyWhereInput;
  ScheduledReleaseUpdateInput: ScheduledReleaseUpdateInput;
  ScheduledReleaseUpdateManyInlineInput: ScheduledReleaseUpdateManyInlineInput;
  ScheduledReleaseUpdateManyInput: ScheduledReleaseUpdateManyInput;
  ScheduledReleaseUpdateManyWithNestedWhereInput: ScheduledReleaseUpdateManyWithNestedWhereInput;
  ScheduledReleaseUpdateOneInlineInput: ScheduledReleaseUpdateOneInlineInput;
  ScheduledReleaseUpdateWithNestedWhereUniqueInput: ScheduledReleaseUpdateWithNestedWhereUniqueInput;
  ScheduledReleaseUpsertInput: ScheduledReleaseUpsertInput;
  ScheduledReleaseUpsertWithNestedWhereUniqueInput: ScheduledReleaseUpsertWithNestedWhereUniqueInput;
  ScheduledReleaseWhereInput: ScheduledReleaseWhereInput;
  ScheduledReleaseWhereUniqueInput: ScheduledReleaseWhereUniqueInput;
  String: Scalars['String'];
  UnpublishLocaleInput: UnpublishLocaleInput;
  User: User;
  UserConnectInput: UserConnectInput;
  UserConnection: UserConnection;
  UserCreateManyInlineInput: UserCreateManyInlineInput;
  UserCreateOneInlineInput: UserCreateOneInlineInput;
  UserEdge: UserEdge;
  UserManyWhereInput: UserManyWhereInput;
  UserUpdateManyInlineInput: UserUpdateManyInlineInput;
  UserUpdateOneInlineInput: UserUpdateOneInlineInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Version: Version;
  VersionWhereInput: VersionWhereInput;
  Video: Video;
  VideoConnectInput: VideoConnectInput;
  VideoConnection: VideoConnection;
  VideoCreateInput: VideoCreateInput;
  VideoCreateManyInlineInput: VideoCreateManyInlineInput;
  VideoCreateOneInlineInput: VideoCreateOneInlineInput;
  VideoEdge: VideoEdge;
  VideoManyWhereInput: VideoManyWhereInput;
  VideoUpdateInput: VideoUpdateInput;
  VideoUpdateManyInlineInput: VideoUpdateManyInlineInput;
  VideoUpdateManyInput: VideoUpdateManyInput;
  VideoUpdateManyWithNestedWhereInput: VideoUpdateManyWithNestedWhereInput;
  VideoUpdateOneInlineInput: VideoUpdateOneInlineInput;
  VideoUpdateWithNestedWhereUniqueInput: VideoUpdateWithNestedWhereUniqueInput;
  VideoUpsertInput: VideoUpsertInput;
  VideoUpsertWithNestedWhereUniqueInput: VideoUpsertWithNestedWhereUniqueInput;
  VideoWhereInput: VideoWhereInput;
  VideoWhereUniqueInput: VideoWhereUniqueInput;
};

export type DefaultOverrideDirectiveArgs = {
  args: Array<Scalars['String']>;
};

export type DefaultOverrideDirectiveResolver<Result, Parent, ContextType = any, Args = DefaultOverrideDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MarkDirectiveArgs = {
  aggregate?: Maybe<Scalars['Boolean']>;
  connectInput?: Maybe<Scalars['String']>;
  connection?: Maybe<Scalars['String']>;
  countable?: Maybe<Scalars['Boolean']>;
  createInputType?: Maybe<Scalars['String']>;
  createLocalizationInputType?: Maybe<Scalars['String']>;
  createdAtField?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['Boolean']>;
  documentVersion?: Maybe<Scalars['Boolean']>;
  edge?: Maybe<Scalars['Boolean']>;
  fieldType?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  filterIsList?: Maybe<Scalars['Boolean']>;
  filterKind?: Maybe<_FilterKind>;
  isComponent?: Maybe<Scalars['Boolean']>;
  isConnectInput?: Maybe<Scalars['Boolean']>;
  isListRichText?: Maybe<Scalars['Boolean']>;
  isMemberInput?: Maybe<Scalars['Boolean']>;
  isPositionInput?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isRichTextType?: Maybe<Scalars['Boolean']>;
  isUnidirectional?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['Boolean']>;
  localizations?: Maybe<Scalars['Boolean']>;
  localized?: Maybe<Scalars['Boolean']>;
  model?: Maybe<Scalars['String']>;
  modelVersions?: Maybe<Scalars['Boolean']>;
  mutationInputFieldKind?: Maybe<_MutationInputFieldKind>;
  mutationKind?: Maybe<_MutationKind>;
  order?: Maybe<Scalars['Boolean']>;
  orderDirection?: Maybe<_OrderDirection>;
  pageInfo?: Maybe<Scalars['Boolean']>;
  relationInputCardinality?: Maybe<_RelationInputCardinality>;
  relationInputKind?: Maybe<_RelationInputKind>;
  relationKind?: Maybe<_RelationKind>;
  replaceableWithUserId?: Maybe<Scalars['Boolean']>;
  reverseRelationInputCardinality?: Maybe<_RelationInputCardinality>;
  richTextType?: Maybe<Scalars['String']>;
  stages?: Maybe<Scalars['Boolean']>;
  storageId?: Maybe<Scalars['String']>;
  systemDateTimeFieldVariation?: Maybe<_SystemDateTimeFieldVariation>;
  unionFieldDetailsForVirtualMemberSide?: Maybe<Scalars['String']>;
  unionType?: Maybe<Scalars['String']>;
  updatedAtField?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Boolean']>;
  validations?: Maybe<Scalars['String']>;
  versionRetentionCount?: Maybe<Scalars['Int']>;
  versionRetentionPeriod?: Maybe<Scalars['Int']>;
  whereUniqueInput?: Maybe<Scalars['String']>;
};

export type MarkDirectiveResolver<Result, Parent, ContextType = any, Args = MarkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type PermissionDirectiveArgs = {
  actions?: Maybe<Array<Scalars['String']>>;
  resources?: Maybe<Array<Scalars['String']>>;
};

export type PermissionDirectiveResolver<Result, Parent, ContextType = any, Args = PermissionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type PsqlDirectiveArgs = {
  column?: Maybe<Scalars['String']>;
  componentParentFieldValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  idColumn?: Maybe<Scalars['String']>;
  join?: Maybe<Scalars['String']>;
  localizationTable?: Maybe<Scalars['String']>;
  memberColumns?: Maybe<Array<Scalars['String']>>;
  prio?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  updatedAtColumn?: Maybe<Scalars['String']>;
  versionTable?: Maybe<Scalars['String']>;
};

export type PsqlDirectiveResolver<Result, Parent, ContextType = any, Args = PsqlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RemoteDirectiveArgs = {
  debugEnabled: Scalars['Boolean'];
  docPlaceholderFields: Array<Scalars['String']>;
  forwardClientHeaders: Scalars['Boolean'];
  gqlEntryPointPath?: Maybe<Array<Scalars['String']>>;
  gqlOperationName?: Maybe<Scalars['String']>;
  gqlQuery?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['Json']>;
  method: Scalars['String'];
  sourceType: Scalars['String'];
  ttlInSeconds?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};

export type RemoteDirectiveResolver<Result, Parent, ContextType = any, Args = RemoteDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Aggregate'] = ResolversParentTypes['Aggregate']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  authorAvatar?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType, Partial<AssetAuthorAvatarArgs>>;
  coverImagePost?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<AssetCoverImagePostArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<AssetCreatedAtArgs, 'variation'>>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<AssetCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<AssetDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<AssetHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localizations?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<AssetLocalizationsArgs, 'includeCurrent' | 'locales'>>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AssetPublishedAtArgs, 'variation'>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<AssetPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<AssetScheduledInArgs>>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  thumbnailPost?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<AssetThumbnailPostArgs>>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<AssetUpdatedAtArgs, 'variation'>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<AssetUpdatedByArgs>>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<AssetUrlArgs>>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetConnection'] = ResolversParentTypes['AssetConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['AssetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetEdge'] = ResolversParentTypes['AssetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  biography?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<AuthorCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<AuthorDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<AuthorHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, Partial<AuthorPictureArgs>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<AuthorPostsArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<AuthorPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<AuthorScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<AuthorUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorConnection'] = ResolversParentTypes['AuthorConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['AuthorEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorEdge'] = ResolversParentTypes['AuthorEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = {
  count?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CategoryCreatedByArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<CategoryDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<CategoryHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<CategoryPostArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CategoryPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<CategoryScheduledInArgs>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CategoryUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryConnection'] = ResolversParentTypes['CategoryConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CategoryEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEdge'] = ResolversParentTypes['CategoryEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Color'] = ResolversParentTypes['Color']> = {
  css?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hex?: Resolver<ResolversTypes['Hex'], ParentType, ContextType>;
  rgba?: Resolver<ResolversTypes['RGBA'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DocumentVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentVersion'] = ResolversParentTypes['DocumentVersion']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hex'], any> {
  name: 'Hex';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  distance?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<LocationDistanceArgs, 'from'>>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'data'>>;
  createAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationCreateAuthorArgs, 'data'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'data'>>;
  createScheduledRelease?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<MutationCreateScheduledReleaseArgs, 'data'>>;
  createVideo?: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<MutationCreateVideoArgs, 'data'>>;
  deleteAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationDeleteAssetArgs, 'where'>>;
  deleteAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationDeleteAuthorArgs, 'where'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'where'>>;
  deleteManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyAssetsArgs>>;
  deleteManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, Partial<MutationDeleteManyAssetsConnectionArgs>>;
  deleteManyAuthors?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyAuthorsArgs>>;
  deleteManyAuthorsConnection?: Resolver<ResolversTypes['AuthorConnection'], ParentType, ContextType, Partial<MutationDeleteManyAuthorsConnectionArgs>>;
  deleteManyCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyCategoriesArgs>>;
  deleteManyCategoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, Partial<MutationDeleteManyCategoriesConnectionArgs>>;
  deleteManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyPostsArgs>>;
  deleteManyPostsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, Partial<MutationDeleteManyPostsConnectionArgs>>;
  deleteManyVideos?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyVideosArgs>>;
  deleteManyVideosConnection?: Resolver<ResolversTypes['VideoConnection'], ParentType, ContextType, Partial<MutationDeleteManyVideosConnectionArgs>>;
  deletePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'where'>>;
  deleteScheduledOperation?: Resolver<Maybe<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, RequireFields<MutationDeleteScheduledOperationArgs, 'where'>>;
  deleteScheduledRelease?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<MutationDeleteScheduledReleaseArgs, 'where'>>;
  deleteVideo?: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<MutationDeleteVideoArgs, 'where'>>;
  publishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationPublishAssetArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  publishAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationPublishAuthorArgs, 'to' | 'where'>>;
  publishCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationPublishCategoryArgs, 'to' | 'where'>>;
  publishManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyAssetsArgs, 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationPublishManyAssetsConnectionArgs, 'from' | 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyAuthors?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyAuthorsArgs, 'to'>>;
  publishManyAuthorsConnection?: Resolver<ResolversTypes['AuthorConnection'], ParentType, ContextType, RequireFields<MutationPublishManyAuthorsConnectionArgs, 'from' | 'to'>>;
  publishManyCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyCategoriesArgs, 'to'>>;
  publishManyCategoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, RequireFields<MutationPublishManyCategoriesConnectionArgs, 'from' | 'to'>>;
  publishManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyPostsArgs, 'to'>>;
  publishManyPostsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, RequireFields<MutationPublishManyPostsConnectionArgs, 'from' | 'to'>>;
  publishManyVideos?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyVideosArgs, 'to'>>;
  publishManyVideosConnection?: Resolver<ResolversTypes['VideoConnection'], ParentType, ContextType, RequireFields<MutationPublishManyVideosConnectionArgs, 'from' | 'to'>>;
  publishPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationPublishPostArgs, 'to' | 'where'>>;
  publishVideo?: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<MutationPublishVideoArgs, 'to' | 'where'>>;
  schedulePublishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationSchedulePublishAssetArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  schedulePublishAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationSchedulePublishAuthorArgs, 'to' | 'where'>>;
  schedulePublishCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationSchedulePublishCategoryArgs, 'to' | 'where'>>;
  schedulePublishPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationSchedulePublishPostArgs, 'to' | 'where'>>;
  schedulePublishVideo?: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<MutationSchedulePublishVideoArgs, 'to' | 'where'>>;
  scheduleUnpublishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishAssetArgs, 'from' | 'unpublishBase' | 'where'>>;
  scheduleUnpublishAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishAuthorArgs, 'from' | 'where'>>;
  scheduleUnpublishCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishCategoryArgs, 'from' | 'where'>>;
  scheduleUnpublishPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishPostArgs, 'from' | 'where'>>;
  scheduleUnpublishVideo?: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishVideoArgs, 'from' | 'where'>>;
  unpublishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUnpublishAssetArgs, 'from' | 'unpublishBase' | 'where'>>;
  unpublishAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationUnpublishAuthorArgs, 'from' | 'where'>>;
  unpublishCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUnpublishCategoryArgs, 'from' | 'where'>>;
  unpublishManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyAssetsArgs, 'from' | 'unpublishBase'>>;
  unpublishManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyAssetsConnectionArgs, 'from' | 'stage' | 'unpublishBase'>>;
  unpublishManyAuthors?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyAuthorsArgs, 'from'>>;
  unpublishManyAuthorsConnection?: Resolver<ResolversTypes['AuthorConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyAuthorsConnectionArgs, 'from' | 'stage'>>;
  unpublishManyCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyCategoriesArgs, 'from'>>;
  unpublishManyCategoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyCategoriesConnectionArgs, 'from' | 'stage'>>;
  unpublishManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyPostsArgs, 'from'>>;
  unpublishManyPostsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyPostsConnectionArgs, 'from' | 'stage'>>;
  unpublishManyVideos?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyVideosArgs, 'from'>>;
  unpublishManyVideosConnection?: Resolver<ResolversTypes['VideoConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyVideosConnectionArgs, 'from' | 'stage'>>;
  unpublishPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUnpublishPostArgs, 'from' | 'where'>>;
  unpublishVideo?: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<MutationUnpublishVideoArgs, 'from' | 'where'>>;
  updateAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'data' | 'where'>>;
  updateAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationUpdateAuthorArgs, 'data' | 'where'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'data' | 'where'>>;
  updateManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyAssetsArgs, 'data'>>;
  updateManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyAssetsConnectionArgs, 'data'>>;
  updateManyAuthors?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyAuthorsArgs, 'data'>>;
  updateManyAuthorsConnection?: Resolver<ResolversTypes['AuthorConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyAuthorsConnectionArgs, 'data'>>;
  updateManyCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyCategoriesArgs, 'data'>>;
  updateManyCategoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyCategoriesConnectionArgs, 'data'>>;
  updateManyPosts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyPostsArgs, 'data'>>;
  updateManyPostsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyPostsConnectionArgs, 'data'>>;
  updateManyVideos?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyVideosArgs, 'data'>>;
  updateManyVideosConnection?: Resolver<ResolversTypes['VideoConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyVideosConnectionArgs, 'data'>>;
  updatePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'data' | 'where'>>;
  updateScheduledRelease?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<MutationUpdateScheduledReleaseArgs, 'data' | 'where'>>;
  updateVideo?: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<MutationUpdateVideoArgs, 'data' | 'where'>>;
  upsertAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUpsertAssetArgs, 'upsert' | 'where'>>;
  upsertAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationUpsertAuthorArgs, 'upsert' | 'where'>>;
  upsertCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpsertCategoryArgs, 'upsert' | 'where'>>;
  upsertPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpsertPostArgs, 'upsert' | 'where'>>;
  upsertVideo?: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<MutationUpsertVideoArgs, 'upsert' | 'where'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Asset' | 'Author' | 'Category' | 'Post' | 'ScheduledOperation' | 'ScheduledRelease' | 'User' | 'Video', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, Partial<PostAuthorArgs>>;
  blurb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<PostCategoriesArgs>>;
  content?: Resolver<ResolversTypes['PostContentRichText'], ParentType, ContextType>;
  coverImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<PostCoverImageArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<PostCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<PostDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<PostHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  previewImage?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, Partial<PostPreviewImageArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<PostPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<PostScheduledInArgs>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<PostUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostConnection'] = ResolversParentTypes['PostConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PostEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostContentRichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostContentRichText'] = ResolversParentTypes['PostContentRichText']> = {
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  json?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  references?: Resolver<Array<ResolversTypes['PostContentRichTextEmbeddedTypes']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostContentRichTextEmbeddedTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostContentRichTextEmbeddedTypes'] = ResolversParentTypes['PostContentRichTextEmbeddedTypes']> = {
  __resolveType: TypeResolveFn<'Video', ParentType, ContextType>;
};

export type PostEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostEdge'] = ResolversParentTypes['PostEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'locales' | 'stage' | 'where'>>;
  assetVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryAssetVersionArgs, 'where'>>;
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetsArgs, 'locales' | 'stage'>>;
  assetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<QueryAssetsConnectionArgs, 'locales' | 'stage'>>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryAuthorArgs, 'locales' | 'stage' | 'where'>>;
  authorVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryAuthorVersionArgs, 'where'>>;
  authors?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryAuthorsArgs, 'locales' | 'stage'>>;
  authorsConnection?: Resolver<ResolversTypes['AuthorConnection'], ParentType, ContextType, RequireFields<QueryAuthorsConnectionArgs, 'locales' | 'stage'>>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'locales' | 'stage'>>;
  categoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, RequireFields<QueryCategoriesConnectionArgs, 'locales' | 'stage'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'locales' | 'stage' | 'where'>>;
  categoryVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryCategoryVersionArgs, 'where'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id' | 'locales' | 'stage'>>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'locales' | 'stage' | 'where'>>;
  postVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryPostVersionArgs, 'where'>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostsArgs, 'locales' | 'stage'>>;
  postsConnection?: Resolver<ResolversTypes['PostConnection'], ParentType, ContextType, RequireFields<QueryPostsConnectionArgs, 'locales' | 'stage'>>;
  scheduledOperation?: Resolver<Maybe<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, RequireFields<QueryScheduledOperationArgs, 'locales' | 'stage' | 'where'>>;
  scheduledOperations?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, RequireFields<QueryScheduledOperationsArgs, 'locales' | 'stage'>>;
  scheduledOperationsConnection?: Resolver<ResolversTypes['ScheduledOperationConnection'], ParentType, ContextType, RequireFields<QueryScheduledOperationsConnectionArgs, 'locales' | 'stage'>>;
  scheduledRelease?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<QueryScheduledReleaseArgs, 'locales' | 'stage' | 'where'>>;
  scheduledReleases?: Resolver<Array<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<QueryScheduledReleasesArgs, 'locales' | 'stage'>>;
  scheduledReleasesConnection?: Resolver<ResolversTypes['ScheduledReleaseConnection'], ParentType, ContextType, RequireFields<QueryScheduledReleasesConnectionArgs, 'locales' | 'stage'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'locales' | 'stage' | 'where'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'locales' | 'stage'>>;
  usersConnection?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersConnectionArgs, 'locales' | 'stage'>>;
  video?: Resolver<Maybe<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<QueryVideoArgs, 'locales' | 'stage' | 'where'>>;
  videoVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryVideoVersionArgs, 'where'>>;
  videos?: Resolver<Array<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<QueryVideosArgs, 'locales' | 'stage'>>;
  videosConnection?: Resolver<ResolversTypes['VideoConnection'], ParentType, ContextType, RequireFields<QueryVideosConnectionArgs, 'locales' | 'stage'>>;
};

export type RgbaResolvers<ContextType = any, ParentType extends ResolversParentTypes['RGBA'] = ResolversParentTypes['RGBA']> = {
  a?: Resolver<ResolversTypes['RGBATransparency'], ParentType, ContextType>;
  b?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  g?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  r?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RgbaHueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBAHue'], any> {
  name: 'RGBAHue';
}

export interface RgbaTransparencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBATransparency'], any> {
  name: 'RGBATransparency';
}

export type RichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['RichText'] = ResolversParentTypes['RichText']> = {
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RichTextAstScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RichTextAST'], any> {
  name: 'RichTextAST';
}

export type ScheduledOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledOperation'] = ResolversParentTypes['ScheduledOperation']> = {
  affectedDocuments?: Resolver<Array<ResolversTypes['ScheduledOperationAffectedDocument']>, ParentType, ContextType, Partial<ScheduledOperationAffectedDocumentsArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledOperationCreatedByArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, RequireFields<ScheduledOperationDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledOperationPublishedByArgs>>;
  rawPayload?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  release?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, Partial<ScheduledOperationReleaseArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ScheduledOperationStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledOperationUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledOperationAffectedDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledOperationAffectedDocument'] = ResolversParentTypes['ScheduledOperationAffectedDocument']> = {
  __resolveType: TypeResolveFn<'Asset' | 'Author' | 'Category' | 'Post' | 'Video', ParentType, ContextType>;
};

export type ScheduledOperationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledOperationConnection'] = ResolversParentTypes['ScheduledOperationConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ScheduledOperationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledOperationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledOperationEdge'] = ResolversParentTypes['ScheduledOperationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ScheduledOperation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledReleaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledRelease'] = ResolversParentTypes['ScheduledRelease']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledReleaseCreatedByArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<ScheduledReleaseDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isImplicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  operations?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<ScheduledReleaseOperationsArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledReleasePublishedByArgs>>;
  releaseAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ScheduledReleaseStatus'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledReleaseUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledReleaseConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledReleaseConnection'] = ResolversParentTypes['ScheduledReleaseConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ScheduledReleaseEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledReleaseEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledReleaseEdge'] = ResolversParentTypes['ScheduledReleaseEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ScheduledRelease'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<UserDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['UserKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Version'] = ResolversParentTypes['Version']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Video'] = ResolversParentTypes['Video']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<VideoCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['Video']>, ParentType, ContextType, RequireFields<VideoDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<VideoHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nameOfVideo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<VideoPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<VideoScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<VideoUpdatedByArgs>>;
  youTubeShareUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoConnection'] = ResolversParentTypes['VideoConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['VideoEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoEdge'] = ResolversParentTypes['VideoEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Video'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Aggregate?: AggregateResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetConnection?: AssetConnectionResolvers<ContextType>;
  AssetEdge?: AssetEdgeResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  AuthorConnection?: AuthorConnectionResolvers<ContextType>;
  AuthorEdge?: AuthorEdgeResolvers<ContextType>;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryConnection?: CategoryConnectionResolvers<ContextType>;
  CategoryEdge?: CategoryEdgeResolvers<ContextType>;
  Color?: ColorResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DocumentVersion?: DocumentVersionResolvers<ContextType>;
  Hex?: GraphQLScalarType;
  Json?: GraphQLScalarType;
  Location?: LocationResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostConnection?: PostConnectionResolvers<ContextType>;
  PostContentRichText?: PostContentRichTextResolvers<ContextType>;
  PostContentRichTextEmbeddedTypes?: PostContentRichTextEmbeddedTypesResolvers<ContextType>;
  PostEdge?: PostEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RGBA?: RgbaResolvers<ContextType>;
  RGBAHue?: GraphQLScalarType;
  RGBATransparency?: GraphQLScalarType;
  RichText?: RichTextResolvers<ContextType>;
  RichTextAST?: GraphQLScalarType;
  ScheduledOperation?: ScheduledOperationResolvers<ContextType>;
  ScheduledOperationAffectedDocument?: ScheduledOperationAffectedDocumentResolvers<ContextType>;
  ScheduledOperationConnection?: ScheduledOperationConnectionResolvers<ContextType>;
  ScheduledOperationEdge?: ScheduledOperationEdgeResolvers<ContextType>;
  ScheduledRelease?: ScheduledReleaseResolvers<ContextType>;
  ScheduledReleaseConnection?: ScheduledReleaseConnectionResolvers<ContextType>;
  ScheduledReleaseEdge?: ScheduledReleaseEdgeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  Version?: VersionResolvers<ContextType>;
  Video?: VideoResolvers<ContextType>;
  VideoConnection?: VideoConnectionResolvers<ContextType>;
  VideoEdge?: VideoEdgeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  defaultOverride?: DefaultOverrideDirectiveResolver<any, any, ContextType>;
  mark?: MarkDirectiveResolver<any, any, ContextType>;
  permission?: PermissionDirectiveResolver<any, any, ContextType>;
  psql?: PsqlDirectiveResolver<any, any, ContextType>;
  remote?: RemoteDirectiveResolver<any, any, ContextType>;
};
