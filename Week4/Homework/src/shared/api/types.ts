export interface BaseResponse<T> {
  success: boolean;
  status: number;
  message: string;
  code: string;
  data: T;
}

export interface ErrorResponse {
  success: false;
  status: number;
  message: string;
  code: string;
  meta: {
    path?: string;
    timestamp?: string;
  };
}