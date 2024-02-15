import { useState } from 'react';

import QuickChatCounter from '@/components/General/PredictiveAI/QuickChatCounter'
import LargeLupeIcon from '@/components/General/Icons/LargeLupeIcon'
import TextIconButton from '@components/General/Buttons/TextIconButton'
import SingleButton from '@/components/General/Buttons/SingleButton';

import photo_1 from '@/assets/svg/photo_1.svg'
import photo_2 from '@/assets/svg/photo_2.svg'
import photo_3 from '@/assets/svg/photo_3.svg'
import photo_4 from '@/assets/svg/photo_4.svg'
import photo_5 from '@/assets/svg/photo_5.svg'
import photo_6 from '@/assets/svg/photo_6.svg'
import photo_7 from '@/assets/svg/photo_7.svg'
import photo_8 from '@/assets/svg/photo_8.svg'

export default function AssignAnOwnerSelection() {

    const onChangeSearch = (e) => {
        setSearchText(e.target.value);
    };

    const [searchText, setSearchText] = useState('');

    const cardData = [
        { photo: photo_1, name: 'Andy Lane' },
        { photo: photo_2, name: 'Natali Craig' },
        { photo: photo_3, name: 'Isabella Maine' },
        { photo: photo_4, name: 'Phoenix Baker' },
        { photo: photo_5, name: 'Kate Morrison' },
        { photo: photo_6, name: 'Bruce Clark' },
        { photo: photo_7, name: 'Jay García' },
        { photo: photo_8, name: 'Zahir Jhonson' },
    ]

    return (
        <div className='w-[626px] h-[509px] rounded-[10px] bg-[#35257A] flex flex-col items-start justify-start pt-[21px] pl-[24px] shadow-md'>
            <div className='w-[574px] h-[41px] flex flex-row items-center justify-between mb-5'>
                <div className='w-96 h-9 flex flex-row justify-between items-center'>
                    <p className='font-baloo font-bold text-[#FFFFFF] text-2xl'>Assign an Owner for this Task</p>
                </div>
                <QuickChatCounter />
            </div>
            <form className='w-[574px] h-[50px] bg-[#05050F] border-[#212A43] border-[3px] shadow-inner-xl flex flex-row items-center justify-between pl-0 pr-3 mb-[26px] rounded-lg ' >
                <input
                    className='z-10 bg-transparent text-[15px] text-[#EEECF1] placeholder:text-[#EEECF1]/50'
                    onChange={onChangeSearch}
                    value={searchText}
                    type='text'
                    placeholder='Employee Search...'
                    autoFocus={true}
                />
                <button type='button' className='z-20 cursor-pointer'>
                    <LargeLupeIcon className='' />
                </button>
            </form>

            <div className='w-[574px] h-[251px] mb-6 flex flex-wrap gap-x-[25px] gap-y-[10-px]'>
                <div className='flex flex-col'>
                    <div className='w-[92px] h-[104px] rounded-t-lg rounded-l-lg flex flex-col justify-center items-center bg-primary-purple-50/90 border-[1px] border-primary-purple-700/20 box-content shadow-lg transition-transform duration-250 hover:scale-105'>
                        <div className='w-[58px] h-[58px] rounded-full bg-[#E5E8EF] border-[3px] border-[#FFFFFF] flex justify-center items-center'>
                            <p className='text-[#563CC7] text-[20px] font-extrabold'>
                                JC
                            </p>
                        </div>
                    </div>
                    <p className='text-[10px] leading-[18px] font-normal font-sans text-[#A6ACBD] flex items-center justify-center'>You</p>
                </div>
                {cardData.map((item, index) => (
                    <div key={index} className='w-[94px] h-[121px] flex flex-col justify-center items-center transition-transform duration-250 hover:scale-105'>
                        <img src={item.photo} alt={item.name} className='shadow-xl w-[92px] h-[104px]' />
                        <p className='text-[10px] leading-[18px] font-normal font-sans text-[#A6ACBD] flex items-center justify-center'>{item.name}</p>
                    </div>
                ))}
                <div className='flex flex-col'>
                    <div className='w-[92px] h-[104px] rounded-s-lg rounded-se-lg flex flex-col justify-center items-center bg-[#A6ACBD] border-[1.2px] border-primary-purple-700/10 box-content shadow-lg transition-transform duration-250 hover:scale-105'>
                        <div className='w-[29px] h-[29px] rounded-full bg-[#242B42] flex justify-center items-center shadow-lg'>
                            <p className='text-[#E5E8EF] text-base font-bold '>
                                +
                            </p>
                        </div>
                    </div>
                    <p className='text-[14px] leading-[18px] font-semibold font-baloo text-[#e5edef] flex items-center justify-center'>Load More</p>
                </div>
            </div>

            <div className='w-[574px] h-[46px] flex flex-row justify-end gap-x-5'>
                <TextIconButton
                    iconRight='TaskLg'
                    iconLeft=''
                    background='bg-[#563CC7]'
                    text='Create Task'
                    width='w-[132px]'
                    height='h-[44px]'
                    textSize='text-[14px]'
                    borderHover=''
                    backgroundHover='hover:bg-[#44DDFF]'
                />
                <SingleButton
                    icon='ThumbLargeInverted'
                    width='w-[50px]'
                    height='h-[46px]'
                    background='bg-[#202449]'
                    borderHover=''
                    backgroundHover='hover:bg-red-600'
                />
                <SingleButton
                    icon='ThumbLarge'
                    width='w-[50px]'
                    height='h-[46px]'
                    background='bg-[#202449]'
                    borderHover=''
                    backgroundHover='hover:bg-[#92fe53]'
                />
            </div>
        </div >
    )
}
