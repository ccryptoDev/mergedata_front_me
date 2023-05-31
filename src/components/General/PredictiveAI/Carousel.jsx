import { useState } from 'react'
import nextArrow from '@/assets/svg/nextArrow.svg'
import prevArrow from '@/assets/svg/prevArrow.svg'

export default function Carousel() {

  const [swiper, setSwiper] = useState(0)
  const slideQty = 3;

  const swiperHandlePrev = () => {
    setSwiper(swiper - 1)
    if (swiper <= 0) {
      setSwiper(slideQty)
    } else {
      null
    }
    console.log(swiper)
  }

  const swiperHandleNext = () => {
    setSwiper(swiper + 1)
    if (swiper >= slideQty) {
      setSwiper(0)
    } else {
      null
    }
    console.log(swiper)
  }

  const bulletsUnselected = 'w-2 h-2 rounded-full border border-[#FFFFFF] border-opacity-95 bg-transparent hover:bg-[#FFFFFF] hover:bg-opacity-95'
  const bulletsSelected = 'w-[54px] h-2 rounded-full border border-[#FFFFFF] border-opacity-10 bg-[#FFFFFF] bg-opacity-95'

  return (
    <div>
      <div className='w-[206px] h-[24px] bg-[#05081E] flex flex-row justify-between items-center'>
        <button className='w-6 h-6 flex justify-center items-center'
          onClick={() => { swiperHandlePrev() }}>
          <img src={prevArrow} alt="" />
        </button>

        <div className='w-[360px] h-[34px] flex flex-row items-center justify-between px-[18px] gap-x-2'>
          <div className={swiper === 0 ? bulletsSelected : bulletsUnselected} onClick={() => { setSwiper(0) }} ></div>
          <div className={swiper === 1 ? bulletsSelected : bulletsUnselected} onClick={() => { setSwiper(1) }} ></div>
          <div className={swiper === 2 ? bulletsSelected : bulletsUnselected} onClick={() => { setSwiper(2) }} ></div>
          <div className={swiper === 3 ? bulletsSelected : bulletsUnselected} onClick={() => { setSwiper(3) }} ></div>
        </div>

        <button className='w-6 h-6 flex justify-center items-center'
          onClick={() => { swiperHandleNext() }}>
          <img src={nextArrow} alt="" />
        </button>
      </div>
    </div>
  )
}

