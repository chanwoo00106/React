const Login = () => {
  return (
    <div>
      <header>
        <h1 className='text-5xl font-bold text-center my-4'>
          This is login page
        </h1>
      </header>
      <form
        data-testid='error-wrap'
        className='px-4 py-8 border border-black max-w-xl w-11/12 mx-auto rounded-xl shadow flex flex-col gap-4'
      >
        <h2 className='text-2xl text-center'>Login Form</h2>
        <input
          type='email'
          placeholder='이메일'
          className='border-black border px-4 py-2 rounded-2xl outline-none'
        />
        <input
          type='password'
          placeholder='비밀번호'
          className='border-black border px-4 py-2 rounded-2xl outline-none'
        />
        <button
          type='submit'
          className='border-black border py-2 rounded-2xl w-1/2 mx-auto'
        >
          로그인
        </button>
      </form>
      <footer></footer>
    </div>
  )
}

export default Login
