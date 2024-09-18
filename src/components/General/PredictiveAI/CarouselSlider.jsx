import { useEffect, useState } from 'react'
import nextArrow from '@/assets/svg/nextArrow.svg'
import prevArrow from '@/assets/svg/prevArrow.svg'

export default function CarouselSlider({ swiperPosition }) {

  const [swiper, setSwiper] = useState(0)
  const slideQty = 3;

  const swiperHandlePrev = () => {
    setSwiper(swiper - 1)
    if (swiper <= 0) {
      setSwiper(slideQty)
    } else {
      null
    }
  }

  const swiperHandleNext = () => {
    setSwiper(swiper + 1)
    if (swiper >= slideQty) {
      setSwiper(0)
    } else {
      null
    }
  }

  const bulletsUnselected = 'w-[0.5em] h-[0.5em] rounded-full border border-[#FFFFFF] border-opacity-95 bg-transparent hover:bg-[#FFFFFF] hover:bg-opacity-95'
  const bulletsSelected = 'w-[3.375em] h-[0.5em] rounded-full border border-[#FFFFFF] border-opacity-10 bg-[#FFFFFF] bg-opacity-95'

  useEffect(() => {
    const sliderFourSession = swiper
    swiperPosition(sliderFourSession)
  }, [swiper])
  

  return (
    <div>
      <div className='w-[12.875em] h-[1.5em] bg-[#05081E] flex flex-row justify-between items-center'>
        <button className='w-[1.5em] h-[1.5em] flex justify-center items-center'
          onClick={() => { swiperHandlePrev() }}>
          <img src={prevArrow} alt="" />
        </button>

        <div className='w-[22.5em] h-[2.125em] flex flex-row items-center justify-between px-[1.125em] gap-x-[0.5em]'>
          <div className={swiper === 0 ? bulletsSelected : bulletsUnselected} onClick={() => { setSwiper(0) }} ></div>
          <div className={swiper === 1 ? bulletsSelected : bulletsUnselected} onClick={() => { setSwiper(1) }} ></div>
          <div className={swiper === 2 ? bulletsSelected : bulletsUnselected} onClick={() => { setSwiper(2) }} ></div>
          <div className={swiper === 3 ? bulletsSelected : bulletsUnselected} onClick={() => { setSwiper(3) }} ></div>
        </div>

        <button className='w-[1.5em] h-[1.5em] flex justify-center items-center'
          onClick={() => { swiperHandleNext() }}>
          <img src={nextArrow} alt="" />
        </button>
      </div>
    </div>
  )
}

