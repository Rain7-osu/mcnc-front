export interface IParams {
  [key: string]: any;
}

export interface IBody {
  [key: string]: any;
}

export interface IHeaders {
  [key: string]: any;
}

export interface IResponse<T> {
  error_message: string;
  status: 'OK';
  data: T;
}
