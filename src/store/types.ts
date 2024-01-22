// Getters Auth
export const GETTER_AUTH_IS_AUTHENTICATED = 'auth/getter/isAuthenticated'
export const GETTER_AUTH_STATUS = 'auth/getter/status'
export const GETTER_AUTH_ERROR = 'auth/getter/error'
// Getters Languages
export const GETTER_LANGUAGES_LIST = 'languages/getter/list'
export const GETTER_LANGUAGES_STATUS = 'languages/getter/status'
export const GETTER_LANGUAGES_ERROR = 'languages/getter/error'
export const GETTER_LANGUAGES_SOURCE_LANGUAGE = 'languages/getter/sourceLanguage'
export const GETTER_LANGUAGES_TARGET_LANGUAGE = 'languages/getter/targetLanguage'
// Getters translation
export const GETTER_TRANSLATION_RESULT = 'translation/getter/result'
export const GETTER_TRANSLATION_STATUS = 'translation/getter/status'
export const GETTER_TRANSLATION_ERROR = 'translation/getter/error'
export const GETTER_TRANSLATION_TEXT = 'translation/getter/text'
export const GETTER_TRANSLATION_NUMBER_OF_WORDS = 'translation/getter/numberOfWords'


// Actions Auth
export const ACTION_AUTH_LOGIN = 'auth/action/login'
export const ACTION_AUTH_RESTORE_TOKEN = 'auth/action/restore/token'
// Actions Languages
export const ACTION_LANGUAGES_GET = 'languages/action/get'
export const ACTION_LANGUAGES_CHANGE_SOURCE_LANGUAGE = 'languages/action/changeSourceLanguage'
export const ACTION_LANGUAGES_CHANGE_TARGET_LANGUAGE = 'languages/action/changeTargetLanguage'
// Actions Translation
export const ACTION_TRANSLATION_TRANSLATE = 'translation/action/translate'
export const ACTION_TRANSLATION_CHANGE_TEXT = 'translation/action/changeText'
export const ACTION_TRANSLATION_CHANGE_RESULT = 'translation/action/changeResult'

// Mutations Auth
export const MUTATION_AUTH_LOADING = 'auth/mutation/loading'
export const MUTATION_AUTH_SUCCEEDED = 'auth/mutation/succeeded'
export const MUTATION_AUTH_FAILED = 'auth/mutation/failed'
export const MUTATION_AUTH_RESTORE_TOKEN = 'auth/mutation/restoreToken'
// Mutations Languages
export const MUTATION_LANGUAGES_LOADING = 'languages/mutation/loading'
export const MUTATION_LANGUAGES_SUCCEEDED = 'languages/mutation/succeeded'
export const MUTATION_LANGUAGES_FAILED = 'languages/mutation/failed'
export const MUTATION_LANGUAGES_CHANGE_SOURCE_LANGUAGE = 'languages/mutation/changeSourceLanguage'
export const MUTATION_LANGUAGES_CHANGE_TARGET_LANGUAGE = 'languages/mutation/changeTargetLanguage'
// Mutations Translation
export const MUTATION_TRANSLATION_LOADING = 'translation/mutation/loading'
export const MUTATION_TRANSLATION_SUCCEEDED = 'translation/mutation/succeeded'
export const MUTATION_TRANSLATION_FAILED = 'translation/mutation/failed'
export const MUTATION_TRANSLATION_CHANGE_TEXT = 'translation/mutation/changeText'
export const MUTATION_TRANSLATION_CHANGE_RESULT = 'translation/mutation/changeResult'