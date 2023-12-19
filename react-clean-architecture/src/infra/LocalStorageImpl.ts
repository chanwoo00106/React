import LocalStorage from '@/domain/base/LocalStorage'
import { injectable } from 'inversify'

import 'reflect-metadata'

@injectable()
class LocalStorageImpl implements LocalStorage {
  get(key: string) {
    return localStorage.getItem(key)
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, value)
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }
}

export default LocalStorageImpl
