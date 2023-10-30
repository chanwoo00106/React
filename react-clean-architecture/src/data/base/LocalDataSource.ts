import { injectable } from "inversify";
import "reflect-metadata";
import type ILocalDataSource from "./interface/ILocalDataSource";

@injectable()
class LocalDataSource implements ILocalDataSource {
  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }
}

export default LocalDataSource;
