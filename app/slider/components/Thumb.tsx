import { FC, useState } from 'react'
import { Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

const thumb: FC = () => {
  return (
    <div className='lg:mx-auto max-w-5xl mx-[1.5rem]'>
      <h1 className='font-bold underline pb-3'>Thumbs</h1>
      <div className='border-8 bg-white border-white'>
        return (
        <SwiperSlide key={index}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '50%',
            }}
          >
            <Image
              className='rounded-lg'
              src={p.img}
              alt=''
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
      </div>
    </div>
  )
}

export default thumb

//  layout='fill'
//  objectFit='cover'
