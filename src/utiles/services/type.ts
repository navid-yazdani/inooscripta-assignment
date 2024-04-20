export interface axiosHeader {
  "content-type"?: string;
  "Accept"?: string;
  "Accept-Language"?: string;
}

export interface axiosResult {
  status: number;
}

export interface otpRequest {
  target: string;
  captcha: string;
  existingUserVerify: string;
}

export interface otpRequestResult extends axiosResult {
  result: {
    ttl: number;
    code: string;
  }
}

export interface signup {
  user: string;
  email: string;
  otpCode: string;
  acceptPolicy: string;
  otpValidate: string;
  captcha: string;
  password: string;
  rePassword: string;
  username: string;
}

export interface signupResult extends axiosResult {
  result: boolean;
}

export interface login {
  user: string;
  email?: string;
  pass?: string;
  otpLogin?: string;
  captcha: string;
}

export interface loginResult extends axiosResult {
  result: {
    email: null | string;
    id: number;
    lc: string;
    mobile: null | string;
    name: null | string;
    oauthProvider: null | string;
    oauthUid: null | string;
    sessionToken: string;
    user: null | string;
  }
}

export interface forgot {
  user: string;
  password: string;
  rePassword: string;
  otpCode: string;
  captcha: string;
}

export interface forgotResult extends axiosResult {
  result: boolean;
}

export interface initResult extends axiosResult {
  result: {
    isLoggedIn: boolean;
    lang: string;
    lc: string;
    session: string;
    languages: langInterface[];
  }
}

interface langInterface {
  id: string;
  name: string;
  rtl: boolean;
}

export interface change {
  oldPassword: string;
  password: string;
  rePassword: string;
  captcha: string;
}

export interface changeResult extends axiosResult {
  result: boolean;
}

// INQUIRY
export interface categories {
  langId: string
  // 0: disabled only, 1: enabled only, -1: all
  enabled: '0' | '1' | '-1'
  categoryId: string
}

export interface categoryResult extends axiosResult {
  result: category[]
}

export interface category {
  id: number,
  title: string,
  inquiryCategoryId: string,
  langId: string,
  enabled: 0 | 1,
  priority: number,
  insDate: string,
  haveSub: 0 | 1
}

export interface surveyList {
  inquiryCategoryId: string
}

export interface singleSurvey {
  id: string
}

export interface inquiry {
  name: string
  inquiryCategoryId: string
  inquiryUserCategoryId: string
  inquiryLanguage: string
  // can be anon:login not required , users:login required , limited:just allowed users can cooperate
  cooperationType: cooperationType
  singleSession: binaryType
  // can be 0 or 1 . default is 0. if current user is inquiry admin can set this to 1
  isTemplate: binaryType
  // base64_encoded file content1
  headerFile?: string | undefined
  // base64_encoded file content
  footerFile?: string | undefined
  // base64_encoded file content
  bgFile?: string | undefined
  // time for a user to complete the form/survey (seconds)
  timeLimited?: string
  // background color
  bgColor?: string,
  textFont?: string,
  textSize?: string,
  bodyHtml?: string,
  bodyCss?: string,
  completionMessage?: string,
  responseEditable?: string,
  responseEditLimit?: string,
  maximumParticipantCount?: string,
  expireMessage?: string,
  shuffleQuestion?: string,
  questionCountInEachExam?: string,
  resultViewStatus?: string,
  // base64_encoded file content or can be multipart formdata
  publicFile?: string | undefined
  publicTitle?: string
  publicDescription?: string
  // can be 0 or 1 default is 0
  hideQuestionNumber: binaryType
}

export type cooperationType = 'anon' | 'users' | 'limited'

export type binaryType = '0' | '1'

export interface inquiryResult extends axiosResult {
  result: string
}

export interface inquiryEdit extends inquiry {
  id: string | undefined
}

export interface publishInquiry {
  id: string,
  publishDate?: string
}

export interface deleteInquiryFile {
  referenceObjectTitle: string
  referenceId: string
}

export interface survey {
  data_type?: string
  bgColor: string
  bgFile: string | null
  bodyCss: string
  completionMessage: string
  expireDate: string | null
  footerFile: string | null
  headerFile: string | null
  id: string
  inquiryCategoryId: string
  insDate: string | null
  isBookmarked: 0 | 1
  isExpired: 0 | 1
  isPublished: 0 | 1
  isTemplate: 0 | 1
  lcs: string | null
  name: string
  oneQuestionPerPage: 0 | 1
  publicDescription: string
  publicFile: string | null
  publicTitle: string
  publishDate: string
}

export interface listResult extends axiosResult {
  result: {
    count: number
    data: survey[]
    lc: string
    numberRecordsPerPage: number
    pageNumber: number
    pagesCount: number
    pagingString: []
  }
}

export interface surveyResult extends axiosResult {
  result: inquiry
}

export interface userSurveyResult extends axiosResult {
  result: {
    data: userSurvey[],
    paging: number,
    recordsCount: number,
    pagesCount: number,
    currentPage: number,
    numberRecordsPerPage: number
  }
}

export interface userSurvey {
  id: string,
  name: string,
  publishDate: string,
  expireDate: string,
  isTemplate: 0 | 1
}

// Comments
export interface commentList {
  referenceObjectId: number,
  referenceId: string | undefined
  // commentId can be id of a comment or null
  commentId: number | null
  // page number for paging result. default is 1
  pg: number,
  // number of records per page, default is 10
  nrpp: number
}

export interface commentBody {
  referenceObjectId: number,
  referenceId: string | undefined
  // commentId can be id of a comment or null
  commentId: number | null
  name: string
  email: string
  description: string
  captcha: string
}

export interface deleteComment {
  referenceObjectId: number,
  referenceId: string
  id: number
}

export interface commentResult extends axiosResult {
  result: {
    data: comment[]
  }
}

export interface comment {
  description: string
  dislikeCount: number
  email: string
  haveChild: boolean
  id: number
  insDate: string
  likeCount: number
  name: string
}

export interface feedbackBody {
  // 1: comment
  referenceObjectId: number,
  // if refObj : 1 below line means commentId=4
  referenceId: string
  // likeStatuses => -10...10
  likeStatus: number
}

// Bookmark
export interface bookmarkBody {
  referenceObjectId: string
  referenceId: string
}

export interface bookmarkResult extends axiosResult {
  result: boolean
}

export interface bookmarkList extends axiosResult {
  result: {
    count: number
    data: bookmark[]
    numberRecordsPerPage: number
    pageNumber: number
    pagesCount: number
    pagingString: []
  }
}

export interface bookmark extends bookmarkBody {
  insDate: string
}

// Segments
export interface inquirySegments {
  inquiryId: string | undefined
}

export interface segmentBody {
  inquiryId: string
  name: string
  description: string
  pageNo: string
}

export interface editSegmentBody extends segmentBody {
  id: string
}

export interface deleteSegmentBody {
  inquiryId: string | undefined
  id: string
}

export interface segmentsResult extends axiosResult {
  result: segment[]
}

export interface segment {
  description: string
  id: string
  inquiryId: string
  name: string
  pageNo: string
}

// Questions
export interface questions {
  inquiryId: string | undefined
}

export interface questionParam extends questions {
  id: string
}

export interface questionBody {
  // inquiryId: string | undefined
  // inquirySegmentId: string
  // questionBody: string
  // questionType: questionType
  // questionFile: ''
  // responseType: responseType
  // isForce: '0' | '1'
  // // sortOrder can be 1-999
  // sortOrder: string
  // // pageNo can be : 0-9
  // pageNo: string
}

export interface questionEdit extends questionBody {
  // id: string
}

export interface questionResult extends axiosResult {
  result: question[]
}

export interface question {
  id: string
  inquiryId: string
  inquirySegmentId: string
  isForce: '0' | '1'
  max: string
  min: string
  optionHorizontalView: '0' | '1'
  optionRandomSortOrder: '0' | '1'
  pageNo: string
  questionBody: string
  questionFile: ''
  questionType: questionType
  responseType: responseType
  sortOrder: string
}

export type questionType = 'text' | 'video' | 'image' | 'sound'
export type responseType =
  'checkbox'
  | 'multipleChoice'
  | 'starRating'
  | 'singleTextbox'
  | 'multipleTextbox'
  | 'commentBox'
  | 'file'
  | 'linearScale'
  | 'checkboxGrid'
  | 'dropdownSingleChoice'
  | 'dropdownMultipleChoice'
  | 'ranking'
  | 'radio'
  | 'datetime'

// Option segments
export interface optionSegments {
  inquiryId: string
  inquiryQuestionId: string
}

export interface optionSegmentParam {
  id: string
  inquiryId: string
  inquiryQuestionId: string
}

export interface optionSegmentBody {
  inquiryId: string | undefined
  inquiryQuestionId: string | undefined
  name: string
  description: string
}

export interface optionSegmentEdit extends optionSegmentBody {
  id: string
}

export interface optionSegment {
  id: string
  inquiryQuestionId: string
  name: string
  description: string
}

export interface optSegmentsResult extends axiosResult {
  result: optionSegment[]
}

export interface deleteOptQuestionResult extends axiosResult {
  result: boolean
}

// Options
export interface optionsParams {
  inquiryId: string
  inquiryQuestionId: string
}

export interface optionsResult extends axiosResult {
  result: option[]
}

export interface option {
  id: string
  inquiryId: string
  inquiryQuestionId: string
  inquiryOptionSegmentId: string
  optionBody: string
  optionType: optionType
  optionFile: string | undefined
  sortOrder: string
}

export interface optionParams {
  id: string
  inquiryId: string | undefined
  inquiryQuestionId: string | undefined
}

export interface optionBody {
  // inquiryId: string | undefined
  // inquiryQuestionId: string | undefined
  // inquiryOptionSegmentId: string
  // optionBody: string
  // optionType: optionType
  // optionFile: string | undefined
  // // sortOrder can be 1-999
  // sortOrder: string
}

export interface optionEdit extends optionBody {
  // id: string
}

export type optionType = 'text' | 'video' | 'image' | 'sound'

export interface answersBody {
  inquiryId: string | undefined
  questions: {
    [key: string]: number | string[] | { optionId: string }[]
  }
  captcha: string
}

// Result
export interface initSessionResult extends axiosResult {
  result: initSession
}

export interface initSession {
  session: session,
  item: initSessionItem,
  pages: initSessionPages
}

export interface initSessionPages {
  [key: string]: {
    segments: initSessionSegment[]
  }
}

export interface initSessionSegment extends segment {
  inquiryQuestions: {
    [key: string]: sessionQuestion
  }
}

interface initSessionItem extends inquiry {
  segments: segment[],
  questions: {
    [key: string]: sessionQuestion
  }
}

interface session {
  serverTime: number,
  startTime: number,
  remainingTime: number
}

export interface sessionQuestion extends question {
  inquiryQuestionOptionSegments: {
    [key: string]: optionSegment
  },
  inquiryQuestionOptions: {
    [key: string]: option
  }
}

// User groups
export interface getGroupsResult extends axiosResult {
  result: getGroupType[]
}

interface getGroupType {
  id: string;
  memberId: string | null;
  name: string;
  userId: string | null;
}

export interface addGroup {
  name: string;
}

export interface addGroupResult extends axiosResult {
  result: string;
}

export interface editGroup {
  id: string;
  name: string;
}

export interface editGroupResult extends axiosResult {

}

export interface deleteGroup {
  id: string;
}

export interface deleteGroupResult extends axiosResult {
  result: string;
}

export interface getUsersInGroup {
  id: string;
}

export interface getUsersInGroupResult extends axiosResult {
  result: {
    id: string;
    name: string;
    userId: string;
    memberId: member[];
  }
}

interface member {
  id: number;
  email: string;
  mobile: string;
  username: string;
}

export interface addUserToGroup {
  userGroupId: string;
  user: string;
}

export interface addUserToGroupResult extends axiosResult {
  result: boolean;
}

export interface deleteUserFromGroup {
  userGroupId: string;
  userId: string;
}

export interface deleteUserFromGroupResult extends axiosResult {
  result: boolean;
}


export interface commentResult extends axiosResult {
  result: {
    data: comment[]
  }
}

export interface comment {
  description: string
  dislikeCount: number
  email: string
  haveChild: boolean
  id: number
  insDate: string
  likeCount: number
  name: string
}

export interface feedbackBody {
  // 1: comment
  referenceObjectId: number,
  // if refObj : 1 below line means commentId=4
  referenceId: string
  // likeStatuses => -10...10
  likeStatus: number
}


export interface getCategoryResult extends axiosResult {
  result: categoryList[];
}

interface categoryList {
  id: number;
  name: string;
  userId?: string | null;
}

export interface addCategory {
  name: string;
}

export interface addCategoryResult extends axiosResult {
  result: boolean;
}

export interface editCategory {
  id: string;
  name: string;
}

export interface editCategoryResult extends axiosResult {
  result: boolean;
}

export interface deleteCategory {
  id: string;
}

export interface deleteCategoryResult extends axiosResult {
  result: boolean;
}

export interface getCountriesResult extends axiosResult {
  result: countryList;
}

interface country {
  id: string;
  name: string;
  lang: string;
  phonePrefix: string;
}

interface countryList {
  [key: string]: country;
}

export interface setLang {
  lang?: string;
  lc: string;
}

export interface setLangResult extends axiosResult {
  result: {
    lc: string;
    lang: string;
  }
}

export interface updateInfo {
  name?: string;
  nationalId?: string;
  personType?: string;
  tel?: string;
  email?: string;
  birthDate?: string;
  captcha: string;
}

export interface updateInfoResult extends axiosResult {
  result: boolean;
}

export interface getInfoResult extends axiosResult {
  result: {
    id: number;
    enabled: number;
    email: string | null;
    tel: string | null;
    personType: string | null;
    birthDate: string | null;
    nationalId: string | null;
    username: string | null;
    name: string | null;
    picture: string | null;
  }
}

export interface updateMobile {
  mobile: string;
  otpCode: string;
  captcha: string;
}

export interface updateMobileResult extends axiosResult {
  result: boolean;
}

export interface uploadAvatar {
}

export interface uploadAvatarResult extends axiosResult {
  result: boolean;
}

export interface logoutResult extends axiosResult {
  result: boolean;
}

export interface deleteResult extends axiosResult {
  result: boolean
}