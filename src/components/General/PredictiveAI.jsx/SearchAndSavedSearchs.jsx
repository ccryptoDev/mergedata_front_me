import React, { useState } from "react";
import LupeIcon from '@/components/General/Icons/LupeIcon';
import Decision from "@/components/General/Icons/Decision";
import TaskIcon from '@/components/General/Icons/TaskIcon';
import FlameIcon from '@/components/General/Icons/FlameIcon';

export default function SearchAndSavedSearchs() {

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
        { icon: 'Save', text: 'Sales trends 2025' },
        { icon: 'Save', text: 'Update luxury car inventory' },
        { icon: 'Save', text: 'Improve sales system' },
        { icon: 'Save', text: 'What are the cons of my inventory' },
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
                        onMouseEnter={() => lhButtonOnClick? null : setTaskIconColor('#F9FAFB')}
                        onMouseLeave={() => lhButtonOnClick? null : setTaskIconColor('#B5B9C1')}
                        onClick={() => { handleClickLh() }}>
                        <TaskIcon taskIconColor={taskIconColor} />
                        <p className={`${lhButtonOnClick ? 'text-[#F9FAFB]' : 'text-[#B5B9C1]'} transition duration-50 ease delay-50 group-hover:text-[#F9FAFB]`}>Task</p>
                    </button>
                </div>
                <div className='group'>
                    <button
                        type="button"
                        className={`${rhButtonOnClick ? buttonsOn : buttonsOff} rounded-r-xl rounded-l-lg`}
                        onMouseEnter={() => rhButtonOnClick? null : setFlameIconColor('#F9FAFB')}
                        onMouseLeave={() => rhButtonOnClick? null : setFlameIconColor('#B5B9C1')}
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
                            <div className='flex flex-row items-center text-[#FFF] gap-x-2 mt-5'>
                                <Decision name={item.icon} />
                                <p className='text-base font-sans text-[#F0F2F5]'>{item.text}</p>

                            </div>
                        )
                    })}
            </div>
        </div >
    );
}

