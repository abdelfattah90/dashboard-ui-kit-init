import { FC } from 'react'
import Link from 'next/link'

const NotFound: FC = () => {
  return (
    <main>
      <div className='max-w-screen-xl mx-auto px-4 flex items-center justify-start md:px-8 pt-5'>
        <div className='max-w-lg mx-auto text-center'>
          <h3 className='text-gray-800 text-2xl font-semibold sm:text-5xl'>
            Page not found
          </h3>
          <p className='text-gray-600 mt-3'>
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <Link
              href='/'
              className='m-3 block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg'
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound
