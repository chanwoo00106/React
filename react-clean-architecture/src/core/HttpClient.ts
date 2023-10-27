import type { Method } from "axios";
import axios from "axios";

export type RequestType<D = undefined> = {
  method: Method;
  url: string;
  data?: D;
};

export type ResponseType<R> =
  | {
      isError: false;
      data: R;
    }
  | {
      isError: true;
      message: string;
    };

class HttpClient {
  protected baseURL = "http://localhost:3000";

  protected async request<R, D>(
    config: RequestType<D>,
    errors: Record<number, string>,
  ): Promise<R | string>;
  protected async request<R>(
    config: RequestType<undefined>,
    errors: Record<number, string>,
  ): Promise<R | string>;

  protected async request<R, D = undefined>(
    { method, url, data }: RequestType<D>,
    errors: Record<number, string>,
  ): Promise<ResponseType<R>> {
    console.log(errors);
    try {
      const res = await axios({
        baseURL: this.baseURL,
        method,
        url,
        data,
      });

      return {
        isError: false,
        data: res.data,
      };
    } catch (e) {
      return {
        isError: true,
        message: "",
      };
    }
  }
}

export default HttpClient;
