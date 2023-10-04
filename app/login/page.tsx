'use client'
import { FC, FormEvent } from 'react'
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa'

const Login: FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-indigo-300'>
        <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
          <div>
            <h2 className='text-3xl font-extrabold text-gray-900 text-center'>
              Sign in to your account
            </h2>
          </div>
          <form className='mt-8' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='email-address'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                className='mt-1 p-3 w-full rounded border border-gray-700 shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Email address'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                className='mt-1 p-3 w-full rounded border border-gray-700 shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Password'
              />
            </div>

            <div className='mb-4 flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-800'
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
