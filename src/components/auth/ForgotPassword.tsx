import Logo from '../../assets/images/logo.svg'


const ForgotPassword = () => {
  return (
   <div 
      className='w-screen min-h-screen flex  flex-col items-center justify-center text-center bg-neutral-100'
    >
       {/* Main container */}
      <div
        className=' font-sans
          w-135 bg-neutral-0 p-12 rounded-xl
          flex flex-col gap-4
        '
      >

        <img src={Logo} alt="logo of notes" className='h-7 pb-2'/>

        {/* Welcome note */}
        <div className='space-y-2'>
          <h1 className='text-preset-1'>
            Forgotten your password?
          </h1>
          <p className='text-preset-5 text-neutral-600'>
            Enter your email below, and we'll send you a link to reset it.
          </p>
        </div>

        <form 
          onSubmit={(e)=> {
            e.preventDefault()
          }}
          
          className='pt-6 text-left space-y-4 '
        >

          <div className='flex flex-col space-y-1.5'>
            <label htmlFor="email" className='text-preset-4'>
              Email Address
            </label>
            <input 
              id='email'
              autoComplete='email'
              type="email" name="email" placeholder='email@example.com'
              className='border border-neutral-300 py-3 px-4 rounded-lg '  
            />
          </div>
          <button 
            type='submit'
            className='w-full py-3 px-4 bg-blue-500 text-neutral-0 rounded-lg cursor-pointer'>
            Send Reset Link
          </button>
        </form>
      </div>  
    </div>
  )
}

export default ForgotPassword