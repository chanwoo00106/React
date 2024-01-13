import { RemoteAuthentication } from '@/data/usecases/authentication/RemoteAuthentication'
import { AuthenticationParams } from '@/domain/usecases'
import { z } from 'zod'
import View from './view'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
  authentication: RemoteAuthentication
  validation: z.ZodSchema<AuthenticationParams>
}

const Login = ({ authentication, validation }: Props) => {
  const { register, handleSubmit } = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
  })

  const onSubmit = handleSubmit((data) => {
    authentication.auth(data)
  })

  return <View register={register} onSubmit={onSubmit} />
}

export default Login
