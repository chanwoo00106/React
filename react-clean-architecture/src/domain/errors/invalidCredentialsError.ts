export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credential Error')
    this.name = 'InvalidCredentialsError'
  }
}
