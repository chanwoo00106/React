import { inject, injectable } from 'inversify'
import LocalAuthDataSource from './LocalAuthDataSource'
import BaseSymbols from '@/domain/base/BaseSymbols'
import type LocalStorage from '@/domain/base/LocalStorage'

import 'reflect-metadata'

@injectable()
class LocalAuthDataSourceImpl implements LocalAuthDataSource {
  constructor(
    @inject(BaseSymbols.LocalStorage)
    private readonly localStorage: LocalStorage,
  ) {}

  signin(token: string): void {
    this.localStorage.set('token', token)
  }
}

export default LocalAuthDataSourceImpl
