// https://stackblitz.com/edit/react-ts-ggpeng?file=components%2FCarousel.tsx

'use client'

import { FC } from 'react'
import Fade from './components/Fade'
import Thumb from './components/Thumb'
import GridCollumn from './components/GridCollumn'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/css/effect-coverflow'
import 'swiper/css/mousewheel'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/grid'

import './style.css'

const Slider: FC = () => {
  return (
    <>
      <Fade />
      <hr className='my-5' />
      <Thumb />
      <hr className='my-5' />
      <GridCollumn />
    </>
  )
}

export default Slider
