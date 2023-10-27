import type { Method } from "./Method";

type RouteType = {
  method: Method;
  url: string;
};

export abstract class CoreEndpoint<Endpoints extends string> {
  static baseURL = "http://localhost:3000";

  public abstract route: Record<Endpoints, RouteType>;
  public abstract errorMapper: Record<Endpoints, Record<number, string>>;
}
