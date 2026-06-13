 import GoogleIcon from '../../assets/images/icon-google.svg';
import Logo from '../../assets/images/logo.svg'
import ShowIcon from '../../assets/images/icon-show-password.svg';
import HideIcon from '../../assets/images/icon-hide-password.svg';
import { useState } from 'react';

const Signup = () => {
  const[showPassword, setShowPassword] = useState(false);

  

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
            Create your account
          </h1>
          <p className='text-preset-5'>
            Sign up to start organizing your notes and boost your productivity.
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

          <div className='flex flex-col space-y-1.5'>
            <label htmlFor="password" className='text-preset-4'>
              Password
            </label>
             {/* wrapper for password */}
            <div  className='border border-neutral-300 py-3 px-4 rounded-lg flex justify-between gap-2 focus-within:ring' >
              <input 
                id='password'
                autoComplete='current-password'
                type={showPassword ? "text" : "password"} name="password" 
                className='w-full outline-none focus:outline-none'
              />
              <button
                type='button'
                className='cursor-pointer'
                onClick={() => setShowPassword((prev: any) => !prev)}
              >
                 <img 
                  className='text-neutral-500'
                  src={showPassword ? HideIcon : ShowIcon} alt={showPassword ? "show password" : "hide password"} 
                 />
              </button>
            </div>
          </div>

          <button 
            type='submit'
            className='w-full py-3 px-4 bg-blue-500 text-neutral-0 rounded-lg cursor-pointer'>
            Login
          </button>
        </form>

        <hr className='border-t border-neutral-200'/>

        <div className='space-y-4 mt-2'>
          <p className='text-preset-5 text-neutral-600'>
            Or log in with:
          </p>
          <button 
            className='w-full flex items-center justify-center gap-4 py-3 border border-neutral-300 cursor-pointer rounded-xl'
          >
            <span> <img src={GoogleIcon} alt="icon of google" /> </span> Google
          </button>
        </div>

        <hr className='border-t border-neutral-200'/>

        <div className='text-preset-5 text-neutral-600'>
          Already have an account ? <a href='/#' className='text-neutral-950'>Login</a>
        </div>

      </div>


    </div>
  )
}

export default Signup