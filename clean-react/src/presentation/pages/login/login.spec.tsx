import { RenderResult, render, fireEvent } from '@testing-library/react'
import Login from './login'
import { test, describe, expect } from 'vitest'
import { ValidationSpy } from '@/presentation/test'
import { faker } from '@faker-js/faker'

type SutTypes = {
  validationSpy: ValidationSpy
  sut: RenderResult
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
    const email = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: email } })

    expect(validationSpy.fieldName).toBe('email')
    expect(validationSpy.fieldValue).toBe(email)
  })

  test('Should call Validation with correct password', () => {
    const { sut, validationSpy } = makeSut()
    const passwordInput = sut.getByPlaceholderText('password')
    const password = faker.internet.password()
    fireEvent.input(passwordInput, { target: { value: password } })

    expect(validationSpy.fieldName).toBe('password')
    expect(validationSpy.fieldValue).toBe(password)
  })
})
