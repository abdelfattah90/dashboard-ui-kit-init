import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination } from 'swiper/modules'
import Image from 'next/image'

const Fade: FC = () => {
  return (
    <section className='py-5'>
      <div className='lg:mx-auto max-w-4xl'>
        <h1 className='font-bold underline pb-3'>Fade</h1>
      </div>
    </section>
  )
}

export default Fade
