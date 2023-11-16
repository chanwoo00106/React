export class UnexpectedError extends Error {
  constructor() {
    super('unexpectedError')
    this.name = 'unexpectedError'
  }
}
