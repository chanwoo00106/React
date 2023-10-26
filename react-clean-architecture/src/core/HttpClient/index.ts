import axios from "axios";
import type { Method } from "../Method";

class HttpClient {
  constructor(private baseURL: string) {}

  async request<R, D>(method: Method, url: string, data: D): Promise<R>;
  async request<R>(method: Method, url: string): Promise<R>;
  async request<R, D>(method: Method, url: string, data?: D): Promise<R> {
    const res = await axios({
      baseURL: this.baseURL,
      method,
      url,
      data,
    });

    return res.data;
  }
}

export default HttpClient;
