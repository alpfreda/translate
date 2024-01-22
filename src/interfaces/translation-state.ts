import { RequestStatus } from '@/enum/request-status'

export interface TranslationState {
  text: string
  result: string[]
  status: RequestStatus
  error: string | null
}
