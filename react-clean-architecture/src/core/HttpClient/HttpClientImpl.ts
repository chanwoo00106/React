import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { HttpClient } from ".";
import axios from "axios";

class HttpClientImpl implements HttpClient {
  private httpClient = axios.create({ baseURL: "/" });

  get<T, D>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> {
    return this.httpClient.get(url, config);
  }

  post<T, D>(
    url: string,
    data?: D | undefined,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> {
    return this.httpClient.post(url, data, config);
  }

  put<T, D>(
    url: string,
    data?: D | undefined,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> {
    return this.httpClient.put(url, data, config);
  }

  patch<T, D>(
    url: string,
    data?: D | undefined,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> {
    return this.httpClient.patch(url, data, config);
  }

  delete<T, D>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T>> {
    return this.httpClient.delete(url, config);
  }
}

export default HttpClientImpl;
