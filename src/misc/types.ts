export interface BaseResponse<T> {
  success: boolean
  error_msg: string
  body: T
}
