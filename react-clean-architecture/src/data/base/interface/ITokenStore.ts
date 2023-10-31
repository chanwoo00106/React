interface ITokenStore {
  save(value: string): void;
  get(): string | null;
  delete(): void;
}

export default ITokenStore;
