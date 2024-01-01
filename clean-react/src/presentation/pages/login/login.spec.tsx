import Validation from '@/presentation/protocols/validation'
import { RenderResult, render, fireEvent } from '@testing-library/react'
import Login from './login'
import { test, describe, expect } from 'vitest'

type SutTypes = {
  validationSpy: ValidationSpy
  sut: RenderResult
}

class ValidationSpy implements Validation {
  errorMessage: string = ''
  input: object = {}

  validate(input: object): string {
    this.input = input
    return this.errorMessage
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  return {
    validationSpy,
    sut: render(<Login validation={validationSpy} />),
  }
}

describe('Login page', () => {
  test('Should call Validation with correct email', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByPlaceholderText('email')
    fireEvent.input(emailInput, { target: { value: 'any_email' } })

    expect(validationSpy.input).toEqual({
      email: 'any_email',
      password: '',
    })
  })

  test('Should call Validation with correct password', () => {
    const { sut, validationSpy } = makeSut()
    const passwordInput = sut.getByPlaceholderText('password')
    fireEvent.input(passwordInput, { target: { value: 'any_password' } })

    expect(validationSpy.input).toEqual({
      email: '',
      password: 'any_password',
    })
  })
})
