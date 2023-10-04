'use client'
import { FC } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Toast: FC = () => {
  const notify = () => toast.success('Update')

  return (
    <>
      <button
        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded  '
        onClick={notify}
      >
        Update
      </button>
      <Toaster position='bottom-right' reverseOrder={false} />
    </>
  )
}

export default Toast
