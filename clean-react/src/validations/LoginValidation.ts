import zod from 'zod'

const LoginValidation = zod.object({
  email: zod.string().email('이메일 형식으로 작성해 주세요'),
  password: zod.string(),
})

export default LoginValidation
