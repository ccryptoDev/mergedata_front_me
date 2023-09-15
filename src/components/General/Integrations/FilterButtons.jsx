import React from 'react'
import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton'
import TextIconButton from '@/components/General/Buttons/TextIconButton';
import AllButton from '@/components/General/Integrations/AllButton';

export default function FilterButtons({ buttonsSet }) {
  return (
    <>
      {
        buttonsSet === 'Integrations' &&
        <div className='flex flex-row gap-x-5'>
          <AllButton />
          <TextIconButton
            text='A - Z'
            iconLeft='DoubleArrowVertical'
            iconRight=''
            background='bg-[#05081E]'
            backgroundHover='hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300'
            textColor='text-[#FFFFFF]'
            width='w-[98px]'
            height='h-[50px]'
            textSize='text-[15px]'
            textColorHover=''
            rounded='rounded-xl'
            borderColor='border border-neutrals-800'
            borderHover='hover:border-purple-600'
          />
        </div>
      }
      {
        buttonsSet === 'Scheduler' &&
        <div className='flex flex-row gap-x-5'>
          <TextIconButton
            text='New Event'
            iconLeft=''
            iconRight=''
            background='bg-[#6043DD]'
            backgroundHover='hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300'
            textColor='text-[#FFFFFF]'
            width='w-[100px]'
            height='h-[54px]'
            textSize='text-[15px]'
            textColorHover=''
            rounded='rounded-xl'
            borderColor='border border-neutrals-800'
            borderHover='hover:border-purple-600'
          />
          <AllButton />
        </div>
      }
      {
        buttonsSet === 'Reports' &&
        <div className='flex flex-row gap-x-5'>
          <TextIconButton
            text='Dec'
            iconLeft='Calendar'
            iconRight=''
            background='bg-[#05081E]'
            backgroundHover='hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300'
            textColor='text-[#FFFFFF]'
            width='w-[98px]'
            height='h-[50px]'
            textSize='text-[15px]'
            textColorHover=''
            rounded='rounded-xl'
            borderColor='border border-neutrals-800'
            borderHover='hover:border-purple-600'
          />
          <IconNameIconDropdownButton
            iconName='Home'
            width='w-[204px]'
            height='h-[50px]'
            text='All stores'
            borderRadius='rounded-xl'
            background='#05081E'
            border='border border-neutrals-800'
            backgroundHover='hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300'
            borderHover='hover:border-purple-600'
          />
        </div>
      }
    </>
  )
}
