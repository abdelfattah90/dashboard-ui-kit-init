import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Grid } from 'swiper/modules'
import Image from 'next/image'

const GridCollumn: FC = () => {
  return (
    <section className='pt-[2rem] pb-[2rem]'>
      <div className='lg:mx-auto max-w-5xl mx-[1.5rem]'>
        <h1 className='font-bold underline pb-3'>Silder Grid</h1>
      </div>
    </section>
  )
}

export default GridCollumn
