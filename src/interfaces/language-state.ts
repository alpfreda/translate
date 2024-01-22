import { RequestStatus } from '@/enum/request-status'
import { Language } from './language'

export interface LanguageState {
  list: Language[]
  status: RequestStatus
  error: string | null
  sourceLanguage: string
  targetLanguage: string
}
