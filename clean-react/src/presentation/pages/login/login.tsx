const Login = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <form className='w-[90%] min-w-20 max-w-xl border-white border rounded-lg py-8 px-6'>
        <h1 className='text-center text-4xl font-bold mb-8'>Just Login</h1>

        <input
          className='w-full px-3 py-2.5 rounded-lg mb-4'
          placeholder='email'
        />

        <input
          className='w-full px-3 py-2.5 rounded-lg mb-6'
          placeholder='password'
        />

        <div className='text-center'>
          <button className='w-1/3'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
