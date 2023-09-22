import React, { useState } from 'react'
import Decision from '@/components/General/Icons/Decision'

import TextIconButton from '@/components/General/Buttons/TextIconButton'

import photo_1 from "@/assets/svg/photo_1.svg";
import photo_2 from "@/assets/svg/photo_2.svg";
import photo_3 from "@/assets/svg/photo_3.svg";
import photo_4 from "@/assets/svg/photo_4.svg";
import LupeIcon from '@/components/General/Icons/LupeIcon';

export default function MessageSalesGpruNavBar() {

const [showItems, setShowItems] = useState(false);

    return (
        <div className='flex flex-col'>
            <div className='w-[1055px] h-[52px] bg-[#13132D] flex flex-row items-center space-between pl-[14px] rounded-t-2xl '>
                <p className='flex flex-row items-center space-between text-[16px] font-[800px] font-baloo leading-[19px] text-[#907BE7] mr-1'>
                    #Sales GPRU Task 01 -03022023
                </p>
                <Decision name='ArrowDown' />
                <p className='text-xs text-[#fff] opacity-70 ml-2 mr-[50px]'>Salesperson GPRU dropped by more than 20% this week.</p>
                <div className='w-[316px] h-[34px] flex flex-row items-center justify-between gap-x-3 px-2'>
                    <button className='w-[100px] h-[26px] rounded-[4px] flex flex-row items-center justify-center text-[#fff] text-[14px] font-baloo font-[800px] bg-gradient-to-r from-[#F1C300] to-[#EE7302]'>
                        <p className='text-[#fff] font-baloo'>On Going</p>
                    </button>
                    <button className='w-[77px] h-[26px] rounded-[4px] flex flex-row items-center justify-center text-[#fff] text-[14px] font-baloo font-[800px] bg-[#4832A6]'>
                        <p className='text-[#fff] font-baloo'>Private</p>
                    </button>
                    <div className='w-12 h-5 flex flex-row'>
                        <img src={photo_3} alt='photo_1' className='w-full h-full ml-[-6px] border border-[#000000]' />
                        <img src={photo_2} alt='photo_1' className='w-full h-full ml-[-6px] border border-[#000000]' />
                        <img src={photo_1} alt='photo_1' className='w-full h-full ml-[-6px] border border-[#000000]' />
                    </div>
                    <p className='text-[#EFECFC] text-xs'>+4</p>
                    <Decision name='ProfilePlus' />
                </div>
                <div className='w-[70px] h-5 ml-6 flex flex-row items-center justify-between'>
                    <Decision name='Award' />
                    <Decision name='Camera' />
                    <Decision name='Share' />
                </div>
            </div>
            <div className='w-[1055px] h-[42px] bg-[#13132D] flex flex-row items-center space-between pl-4 gap-x-[22px]'>
                <TextIconButton
                    text='Messaging Channel'
                    iconRight=''
                    iconLeft='CommunicationGlobe'
                    background='bg-[#4832A6]'
                    width='w-[160px]'
                    height='h-[29px]'
                    borderColor=''
                    textColor='text-[#fff]'
                    textSize='text-[12px] font-md font-baloo leading-[18px]'
                    gapX='gap-x-0'
                    rounded='rounded-[12px]'
                    textColorHover=''
                    backgroundHover=''
                />
                <TextIconButton
                    text='Recommendation History'
                    iconRight=''
                    iconLeft='SmBot'
                    background='bg-[#4832A6]'
                    width='w-[193px]'
                    height='h-[29px]'
                    borderColor=''
                    textColor='text-[#fff]'
                    textSize='text-[12px] font-md font-baloo leading-[18px]'
                    gapX='gap-x-0'
                    rounded='rounded-[12px]'
                    textColorHover=''
                    backgroundHover=''
                />
                <TextIconButton
                    text='Task Information'
                    iconRight=''
                    iconLeft='PieGraph'
                    background='bg-[#4832A6]'
                    width='w-[136px]'
                    height='h-[29px]'
                    borderColor=''
                    textColor='text-[#fff]'
                    textSize='text-[12px] font-md font-baloo leading-[14px]'
                    gapX='gap-x-0'
                    rounded='rounded-[12px]'
                    textColorHover=''
                    backgroundHover=''
                />
                <TextIconButton
                    text='ADVJJ3'
                    iconRight=''
                    iconLeft='Note'
                    background='bg-gradient-to-r from-[#EE7302] to-[#F1C300]'
                    width='w-[93px]'
                    height='h-[29px]'
                    borderColor=''
                    textColor='text-[#fff]'
                    textSize='text-[12px] font-md font-baloo leading-[14px]'
                    gapX='gap-x-0'
                    rounded='rounded-[6px]'
                    textColorHover=''
                    backgroundHover=''
                />
                <form className="w-[354px] h-[30px] flex flex-row items-center justify-between pl-0 pr-3 rounded-lg border border-[#3E4761]" >
                        <input
                            className="bg-transparent  text-[#EEECF1] placeholder:text-[#505A78]"
                            type="text"
                            placeholder="Search"
                        />
                        <button type="button" className='cursor-pointer' onClick={() => setShowItems(!showItems)}>
                            <LupeIcon className={`duration-300 ${showItems ? 'rotate-180' : ''}`} />
                        </button>
                    </form>
            </div>
        </div>

    )
}