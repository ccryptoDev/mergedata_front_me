import { useState } from "react";

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
import photo_9 from '@/assets/svg/photo_9.svg'

import Decision from '@/components/General/Icons/Decision';

export default function AssignToManager() {

    const cardData = [
        { photo: photo_1, name: 'Eduard Monte', role: 'Semi Senior', percentage: '-28%' },
        { photo: photo_2, name: 'Wendy Smith', role: 'Semi Senior', percentage: '-25%' },
        { photo: photo_3, name: 'Miguel Flores', role: 'Junior Salesperson', percentage: '-22%' },
        { photo: photo_4, name: 'April Graner', role: 'Junior Salesperson', percentage: '-21%' },
        { photo: photo_5, name: 'Dale Postman', role: 'General Manger', percentage: '-29%' },
        { photo: photo_6, name: 'Miguel Flores', role: 'Junior Salesperson', percentage: '-22%' },
        { photo: photo_7, name: 'April Graner', role: 'Junior Salesperson', percentage: '-21%' },
        { photo: photo_8, name: 'Miguel Flores', role: 'Junior Salesperson', percentage: '-22%' },
        { photo: photo_9, name: 'April Graner', role: 'Junior Salesperson', percentage: '-21%' },
    ]

    const [checked, setChecked] = useState(false);
    const [endTaskButtonClicked, setEndTaskButtonClicked] = useState(false);
    const [viewTaskButtonClicked, setViewTaskButtonClicked] = useState(false);

    const handleEndTaskClick = () => {
        setEndTaskButtonClicked(!endTaskButtonClicked)
        { console.log(endTaskButtonClicked) }
    }

    const handleViewTaskClick = () => {
        setViewTaskButtonClicked(!viewTaskButtonClicked)
        { console.log(viewTaskButtonClicked) }
    }

    return (
        <div className={`w-[626px] h-[509px] rounded-[10px] flex flex-col items-start justify-start pt-[21px] pl-[24px] shadow-md ${!endTaskButtonClicked ? 'bg-[#35257A]' : 'bg-gradient-to-br from-[#0A79A8] from-4% via-[#015EAA] via-50% to-[#015EB4] to-90%'}`}>
            <div className='w-[380px] h-[72px] flex flex-row items-center justify-between mb-[6px]'>
                <div className='w-96 h-9 flex flex-row justify-between items-center'>
                    <p className='font-baloo font-bold text-[#FFFFFF] text-2xl'>Assign to a manager to dig into the
                        cause of the drop</p>
                </div>
            </div>
            <div className='w-[558px] h-[54px] mb-[10px] flex flex-wrap gap-x-[25px]'>
                <p className='text-[#C2C8D7] text-[13px] leading-[18px]'>
                    By assigning a dedicated manager and scheduling regular one-on-one meetings, you can create a clear line of communication between the employee and the manager, and provide the employee with a dedicated support system to help them succeed.
                </p>
            </div>
            <div className='w-[560px] h-[21px] mb-[10px] flex flex-row items-center justify-center'>
                <div className='w-[18.3px] h-[18.3px] rounded-full bg-[#161A3E] flex items-center justify-center mr-2'>
                    <Decision name='BlueStar' />
                </div>
                <div className='w-[194px] h-[21px] ml-1 flex items-center'>
                    <p className='text-[#FFFFFF]'>Employee</p>
                </div>
                <div className='w-[194px] h-[21px] ml-1 flex items-center pl-4'>
                    <p className='text-[#FFFFFF]'>GRPU</p>
                </div>
                <div className='w-[194px] h-[21px] ml-1 flex items-center justify-center'>
                    <p className='text-[#FFFFFF]'>Action</p>
                </div>
            </div>
            <div className='w-[563px] h-[230px] mb-[23px] flex flex-wrap gap-x-[25px] gap-y-[5px] overflow-y-scroll'>
                {cardData.map((item, index) => (
                    <div key={index} className='w-[563px] h-[42px] rounded-l-full rounded-ee-full bg-[#13132D] flex flex-row items-center '>
                        <div className='w-[42px] h-[42px] rounded-full object-cover overflow-hidden mr-[6px]'>
                            <img src={item.photo} alt='' />
                        </div>
                        <div className='w-[162px] h-[32px] mr-1 flex flex-col'>
                            <p className='font-baloo text-[#FFFFFF] text-[13px] leading-5'>{item.name}</p>
                            <p className='font-baloo text-[#FFFFFF] text-[7.5px] font-thin leading-3'>{item.role}</p>
                        </div>
                        <div className='w-[157px] h-[32px] mr-1 flex items-center'>
                            <p className='font-baloo text-[#FFFFFF] text-[13px] leading-5 pl-3'>{item.percentage}</p>
                        </div>
                        <div className='w-[119px] h-[32px] mr-1 flex items-center'>
                            <p className='font-baloo text-[#FFFFFF] text-[13px] leading-5'>Assign Supervisor</p>
                        </div>
                        <div className='w-[32px] h-[29px] flex items-center justify-center'>
                            <label className='w-4 h-4 flex justify-center items-center '>
                                <input type='checkbox' id='CheckBox' onChange={() => setChecked(checked => !checked)} className='checked:bg-[#6043DD] w-4 h-4 bg-[#202449]/0 border-[#a6bdb1] border-[1.5px] rounded focus:ring-0 focus:ring-offset-0 hover:cursor-pointer shadow-md' />
                            </label>
                        </div>
                    </div>
                ))}

            </div>
            <div className='w-[574px] h-[46px] flex flex-row justify-end gap-x-5'>
                <div className='transition-all duration-1000 delay-200' onClick={() => { handleEndTaskClick() }}>
                    {
                        viewTaskButtonClicked ?
                            <TextIconButton
                                iconRight='TaskLg'
                                iconLeft=''
                                background={`${endTaskButtonClicked ? 'bg-[#56E79E] ' : 'bg-[#563CC7]'}`}
                                text='Create Task'
                                width='w-[132px]'
                                height='h-[44px]'
                                textSize='text-[14px]'
                                borderHover=''
                                backgroundHover='hover:bg-[#56E79E]'
                            />
                            :
                            <TextIconButton
                                iconRight='Check'
                                iconLeft=''
                                background={`${endTaskButtonClicked ? 'bg-[#56E79E] ' : 'bg-[#6B748E]'}`}
                                text='End Task'
                                width='w-[132px]'
                                height='h-[44px]'
                                textSize='text-[14px]'
                                borderHover=''
                                backgroundHover='hover:bg-[#56E79E]'
                            />

                    }

                </div>
                {
                    viewTaskButtonClicked ?
                        <div className='transition-all duration-1000 delay-200 flex flex-row items-center justify-between px-2 w-[132px]'>
                            <SingleButton
                                icon='ThumbLargeInverted'
                                width='w-[50px]'
                                height='h-[46px]'
                                background='bg-[#202449]'
                                borderHover='hover:border-red-600'
                                backgroundHover='hover:bg-red-600'
                            />
                            <SingleButton
                                icon='ThumbLarge'
                                width='w-[50px]'
                                height='h-[46px]'
                                background='bg-[#202449]'
                                borderHover='hover:border-[#92fe53]'
                                backgroundHover='hover:bg-[#92fe53]'
                            />
                        </div>
                        :
                        <div className='w-[132px] h-[44px] flex flex-row transition duration-700 delay-700' onClick={() => { handleViewTaskClick() }}>
                            <TextIconButton
                                iconRight='TaskLg'
                                iconLeft=''
                                background={`${viewTaskButtonClicked ? 'bg-[#56E79E] transition-all duration-500 delay-200' : 'bg-[#563CC7]'}`}
                                text='View Task'
                                width='w-[132px]'
                                height='h-[44px]'
                                textSize='text-[14px]'
                                borderHover=''
                                backgroundHover='hover:bg-[#44DDFF]'
                            />
                        </div>
                }

            </div>
        </div>
    )
}
