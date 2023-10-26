import type { Method } from "./Method";

export interface RouteType {
  url: string;
  method: Method;
}

export abstract class CoreEndpoint<Endpoint extends string> {
  public abstract baseUrl: string;

  public abstract route(): Record<Endpoint, RouteType>;

  public abstract body<D>(): Record<Endpoint, D>;
}
