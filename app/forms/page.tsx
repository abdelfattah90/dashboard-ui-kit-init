'use client'
import { FC, useState, Fragment, FormEvent } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { PiCaretUpDown } from 'react-icons/pi'
import { BsPatchCheck } from 'react-icons/bs'

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ')
}

const team = [
  {
    id: 1,
    name: 'Ahmed',
  },
  {
    id: 2,
    name: 'Mohamed',
  },
  {
    id: 3,
    name: 'Ali',
  },
  {
    id: 4,
    name: 'Saad',
  },
  {
    id: 5,
    name: 'Zaid',
  },
  {
    id: 6,
    name: 'Abdo',
  },
  {
    id: 7,
    name: 'Balal',
  },
  {
    id: 8,
    name: 'Ahmed',
  },
  {
    id: 9,
    name: 'Ali',
  },
  {
    id: 10,
    name: 'Amr',
  },
]

const Forms: FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <form>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <label
              htmlFor='phone'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Phone number
            </label>
            <input
              type='tel'
              id='phone'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='+20-123-4579'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
            />
          </div>

          <div>
            <label
              htmlFor='visitors'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Age
            </label>
            <input
              type='number'
              id='visitors'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder=''
            />
          </div>
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email address
          </label>
          <input
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='name@company.com'
          />
        </div>

        <div className='col-span-full py-3'>
          <label
            htmlFor='about'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            About
          </label>
          <div className='mb-2'>
            <textarea
              id='about'
              name='about'
              rows={3}
              className='block w-full rounded-md border-0 py-1.5 shadow-sm   sm:text-sm sm:leading-6 bg-gray-50   border-gray-300 text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              defaultValue={''}
            />
          </div>
        </div>

        <div>
          <div className='mb-6'>
            <input
              type='text'
              id='success'
              className='bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500'
              placeholder='Success input'
            />
            <p className='mt-2 text-sm text-green-600 dark:text-green-500'>
              Some success message.
            </p>
          </div>
          <div>
            <input
              type='text'
              id='error'
              className='bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
              placeholder='Error input'
            />
            <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
              Some error message.
            </p>
          </div>
        </div>

        <div className='py-5'>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Save
          </button>
        </div>
      </form>
    </>
  )
}

export default Forms
