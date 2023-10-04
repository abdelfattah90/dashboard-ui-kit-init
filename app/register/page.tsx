'use client'

import { FC, FormEvent } from 'react'

const Register: FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <div
        className='min-h-screen py-40 rounded'
        style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}
      >
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
            <div
              className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center'
              style={{
                backgroundImage: 'url("images/register.png")',
              }}
            ></div>
            <div className='w-full lg:w-1/2 py-16 px-12'>
              <h2 className='text-3xl mb-4'>Register</h2>
              <p className='mb-4'>
                Create your account. It’s free and only take a minute
              </p>
              <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-5'>
                  <input
                    type='text'
                    placeholder='Firstname'
                    className='border  py-1 px-2 rounded border-gray-700 shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  />
                  <input
                    type='text'
                    placeholder='Surname'
                    className='border py-1 px-2 rounded border-gray-700 shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  />
                </div>
                <div className='mt-5'>
                  <input
                    type='text'
                    placeholder='Email'
                    className='border  py-1 px-2 w-full rounded border-gray-700 shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  />
                </div>
                <div className='mt-5'>
                  <input
                    type='password'
                    placeholder='Password'
                    className='border py-1 px-2 w-full rounded border-gray-700 shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  />
                </div>
                <div className='mt-5'>
                  <input
                    type='password'
                    placeholder='Confirm Password'
                    className='border  py-1 px-2 w-full rounded border-gray-700 shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  />
                </div>

                <div className='mt-5'>
                  <button className='w-full bg-purple-500 py-3 text-center text-white rounded border-gray-700 shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
