interface LocalStorage {
  get(key: string): any
  set(key: string, value: any): void
  remove(key: string): void
}

export default LocalStorage
