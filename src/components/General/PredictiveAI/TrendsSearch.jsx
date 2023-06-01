import React, { useState } from "react";

import Avatar1 from '@/assets/svg/Avatar1.svg';
import Avatar2 from '@/assets/svg/Avatar2.svg';
import Avatar3 from '@/assets/svg/Avatar3.svg';
import Avatar4 from '@/assets/svg/Avatar4.svg';
import Avatar5 from '@/assets/svg/Avatar5.svg';
import Avatar6 from '@/assets/svg/Avatar6.svg';
import Avatar7 from '@/assets/svg/Avatar7.svg';
import Avatar8 from '@/assets/svg/Avatar8.svg';
import Avatar9 from '@/assets/svg/Avatar9.svg';
import Avatar10 from '@/assets/svg/Avatar10.svg';
import Avatar11 from '@/assets/svg/Avatar11.svg';
import Avatar12 from '@/assets/svg/Avatar12.svg';
import Avatar13 from '@/assets/svg/Avatar13.svg';
import Avatar14 from '@/assets/svg/Avatar14.svg';
import Avatar15 from '@/assets/svg/Avatar15.svg';

import LupeIcon from '@/components/General/Icons/LupeIcon';
import Decision from "@/components/General/Icons/Decision";
import TaskIcon from '@/components/General/Icons/TaskIcon';
import FlameIcon from '@/components/General/Icons/FlameIcon';
import Line13 from '@/assets/svg/Line13.svg';

export default function TrendsSearch() {

    const [flameIconColor, setFlameIconColor] = useState('#B5B9C1');
    const [taskIconColor, setTaskIconColor] = useState('#B5B9C1');
    const [showItems, setShowItems] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [rhButtonOnClick, setRhButtonOnClick] = useState(false);
    const [lhButtonOnClick, setLhButtonOnClick] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const onChange = (e) => {
        setSearchText(e.target.value);
        { console.log(searchText) }
    };

    const handleClickLh = () => {
        setLhButtonOnClick(!lhButtonOnClick)
        setRhButtonOnClick(false)
        setTaskIconColor('#F9FAFB')
        setFlameIconColor('#B5B9C1')
    }

    const handleClickRh = () => {
        setRhButtonOnClick(!rhButtonOnClick)
        setLhButtonOnClick(false)
        setFlameIconColor('#F9FAFB')
        setTaskIconColor('#B5B9C1')
    }

    const data = [
        { id:1, icon: 'LargeFlame', text: 'Improve sales systems', innerIcon: 'Thumb', value: 1122, avatar1: Avatar1, avatar2: Avatar2, avatar3: Avatar3, visitors: 1223 },
        { id:2, icon: 'LargeFlame', text: 'How to improve the contest system', innerIcon: 'Thumb', value: 532, avatar1: Avatar15, avatar2: Avatar14, avatar3: Avatar13, visitors: 692 },
        { id:3, icon: 'LargeFlame', text: 'Best cars next year', innerIcon: 'Thumb', value: 152, avatar1: Avatar7, avatar2: Avatar8, avatar3: Avatar9, visitors: 221 },
        { id:4, icon: 'LargeFlame', text: 'Market projections', innerIcon: 'Thumb', value: 55, avatar1: Avatar4, avatar2: Avatar5, avatar3: Avatar6, visitors: 113 },
        { id:5, icon: 'LargeFlame', text: 'How to improve my inventory', innerIcon: 'Thumb', value: 12, avatar1: Avatar12, avatar2: Avatar11, avatar3: Avatar10, visitors: 45 },
    ]

    const buttonsOn = 'bg-purple-700 transition duration-50 ease delay-50 hover:bg-purple-1000  w-[139px] h-[40px] flex flex-row items-center justify-center gap-x-2 '

    const buttonsOff = 'bg-transparent transition duration-50 ease delay-50 hover:bg-purple-700  w-[139px] h-[40px] flex flex-row items-center justify-center gap-x-2 '

    const rh = rhButtonOnClick.toString()
    const lh = lhButtonOnClick.toString()

    return (

        <div className="w-[320px] h-[786px] bg-[#05081E] flex flex-col items-center justify-start py-6">
            <div className="cursor-pointer w-[278px] h-[40px] flex flex-row mb-3 bg-[#0D102C] rounded-xl hover:bg-transparent">
                <div className='group'>
                    <button
                        type="button"
                        className={`${lhButtonOnClick ? buttonsOn : buttonsOff} rounded-l-xl rounded-r-lg`}
                        onMouseEnter={() => lhButtonOnClick ? null : setTaskIconColor('#F9FAFB')}
                        onMouseLeave={() => lhButtonOnClick ? null : setTaskIconColor('#B5B9C1')}
                        onClick={() => { handleClickLh() }}>
                        <TaskIcon taskIconColor={taskIconColor} />
                        <p className={`${lhButtonOnClick ? 'text-[#F9FAFB]' : 'text-[#B5B9C1]'} transition duration-50 ease delay-50 group-hover:text-[#F9FAFB]`}>Task</p>
                    </button>
                </div>
                <div className='group'>
                    <button
                        type="button"
                        className={`${rhButtonOnClick ? buttonsOn : buttonsOff} rounded-r-xl rounded-l-lg`}
                        onMouseEnter={() => rhButtonOnClick ? null : setFlameIconColor('#F9FAFB')}
                        onMouseLeave={() => rhButtonOnClick ? null : setFlameIconColor('#B5B9C1')}
                        onClick={() => { handleClickRh() }}>
                        <FlameIcon flameIconColor={flameIconColor} />
                        <p className={`${rhButtonOnClick ? 'text-[#F9FAFB]' : 'text-[#B5B9C1]'} transition duration-50 ease delay-50 group-hover:text-[#F9FAFB]`}>Trends</p>
                    </button>
                </div>
            </div>
            <div>
                <div
                    className={`w-272 h-50 flex flex-row items-center justify-between rounded-lg transition  duration-200 ease delay-200 hover-within: box-border cursor-pointer ${showItems ? 'border-[2px] bg-purple-700 border-purple-700' : 'border-[#3E4761] border-[2px] bg-transparent focus-within:border-2 focus-within:border-primary-purple-700'}`}
                >
                    <form className="w-full h-full flex flex-row items-center justify-between pl-0 pr-3 rounded-lg " >
                        <input
                            className="bg-transparent  text-[#EEECF1] placeholder:text-[#EEECF1]"
                            onChange={onChange}
                            value={searchText}
                            type="text"
                            placeholder="Search"
                        />
                        <button type="button" className='cursor-pointer' onClick={() => setShowItems(!showItems)}>
                            <LupeIcon className={`duration-300 ${showItems ? 'rotate-180' : ''}`} />
                        </button>
                    </form>
                </div>
                {
                    data.map((item) => {
                        return (
                            <div className='flex flex-col ' key={item.id}>
                                <div className='flex flex-row items-center text-[#FFF] gap-x-2 mt-5'>
                                    <Decision name={item.icon} />
                                    <p className='text-sm font-sans text-[#F0F2F5]'>{item.text}</p>
                                </div>
                                <img src={Line13} className='mt-1 mb-2' />
                                <div className='w-auto h-4 flex flex-row justify-between items-center'>
                                    <p className='w-36 h-4 text-[#8B93A9] text-xs'>03/12/2023</p>
                                    <div className='w-28 h-4 flex flex-row items-center justify-end'>
                                        <Decision name={item.innerIcon}/>
                                        <p className='text-[#C2C8D7] text-xs ml-[6.5px] mr-[3px]'>{item.value}</p>
                                        <img src={item.avatar1} className='w-4 h-4 rounded-full' />
                                        <img src={item.avatar2} className='w-4 h-4 rounded-full ml-[-5px]' />
                                        <img src={item.avatar3} className='w-4 h-4 rounded-full ml-[-5px]' />
                                        <div className='w-4 h-4 rounded-full text-[#FFFFFF] bg-[#212A43] flex items-center justify-center ml-[-5px]'>
                                            <p className='text-{#FFFFFF] text-[7px]'>{item.visitors}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div >
    );
}