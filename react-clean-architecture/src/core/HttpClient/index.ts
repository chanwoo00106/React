import type { AxiosRequestConfig, AxiosResponse } from "axios";

type ResponseType<T> = AxiosResponse<T>;
type RequestConfigType<T> = AxiosRequestConfig<T>;

export interface HttpClient {
  get<T, D>(
    url: string,
    config?: RequestConfigType<D>,
  ): Promise<ResponseType<T>>;

  post<T, D>(
    url: string,
    data?: D,
    config?: RequestConfigType<D>,
  ): Promise<ResponseType<T>>;

  put<T, D>(
    url: string,
    data?: D,
    config?: RequestConfigType<D>,
  ): Promise<ResponseType<T>>;

  patch<T, D>(
    url: string,
    data?: D,
    config?: RequestConfigType<D>,
  ): Promise<ResponseType<T>>;

  delete<T, D>(
    url: string,
    config?: RequestConfigType<D>,
  ): Promise<ResponseType<T>>;
}
