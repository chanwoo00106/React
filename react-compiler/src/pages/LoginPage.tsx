import { useActionState } from 'react'
import { fetchPostList } from '../services/postsService'

const LoginPage = () => {
  const [state, submitAction, isPending] = useActionState<
    string | null,
    FormData
  >(async (_prev, formData) => {
    'use server'

    try {
      console.log(Object.fromEntries(formData))
      await fetchPostList()

      return null
    } catch (e) {
      return JSON.stringify(e)
    }
  }, null)

  return (
    <form
      action={submitAction}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <input name='username' placeholder='Username' />
      <input name='password' placeholder='Password' type='password' />
      <button type='submit' disabled={isPending}>
        Submit
      </button>
      {JSON.stringify(state)}
    </form>
  )
}

export default LoginPage
