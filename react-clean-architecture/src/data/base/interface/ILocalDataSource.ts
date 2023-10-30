interface ILocalDataSource {
  get(key: string): string | null;
  set(key: string, data: string): void;
  remove(key: string): void;
  removeAll(): void;
}

export default ILocalDataSource;
