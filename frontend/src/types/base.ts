export type BaseResponse = {
  message: string;
};

export type ErrorResponse = BaseResponse & {
  status: "error";
  error: string;
};

export type SuccessResponse<T> = BaseResponse & {
  status: "success";
  data: T;
};
