import { RequestStatus } from "@/enum/request-status"

export interface AuthState {
  token: string | null
  status: RequestStatus
  error: string | null
}
