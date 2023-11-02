import type { Method } from "./Method";

export type RouteType<D> = {
  method: Method;
  url: string;
  data?: D;
};

export abstract class CoreEndpoint<Endpoints extends string> {
  public abstract route(endpoint: Endpoints): RouteType<undefined>;
  public abstract route<D>(endpoint: Endpoints, data: D): RouteType<D>;
  public abstract errors: Record<Endpoints, Record<number, string>>;
}
