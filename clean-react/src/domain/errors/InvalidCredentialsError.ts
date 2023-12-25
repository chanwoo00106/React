class InvalidCredentialsError extends Error {
  constructor() {
    super('Credentials Error')
    this.name = 'InvalidCredentialsError'
  }
}

export default InvalidCredentialsError
