import React, { useState, useRef, useEffect } from "react";

import photo_8 from '@/assets/svg/photo_8.svg'

import LargeLupeIcon from '@/components/General/Icons/LargeLupeIcon'
import Decision from '@/components/General/Icons/Decision'
import QuickChatCounter from '@/components/General/PredictiveAI/QuickChatCounter'

export default function QuickChatConversation() {

    const [showItems, setShowItems] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [chatHistory, setChatHistory] = useState([])
    const [message, setMessage] = useState('');

    const onChangeSearch = (e) => {
        setSearchText(e.target.value);
        { console.log(searchText) }
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        { console.log(chatText) }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (message === '') {
            return null;
        } else {
            setChatHistory([...chatHistory, message])
            setMessage('');
            { console.log(chatHistory) }
        }
    };

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className='w-[401px] h-[707px] relative'>
            <div className='w-[401px] h-[707px] bg-[#202449] border border-[#DCDCDC] rounded-[17px] pt-[25px] pl-[24px] flex flex-col'>
                <div className='w-[320px] h-[48px] mb-[29px]'>
                    <p className='font-baloo text-[32px] text-[#FFFFFF] font-bold leading-[48px] mb-[29px]'>
                        Jay García
                    </p>
                </div>
                <form className="w-[342px] h-[50px] bg-[#05050F] border-[#212A43] border-[3px] shadow-inner-xl flex flex-row items-center justify-between pl-0 pr-3 mb-[34px] rounded-lg shadow-xl" >
                    <input
                        className="z-10 bg-transparent text-[15px] text-[#EEECF1] placeholder:text-[#EEECF1]/50"
                        onChange={onChangeSearch}
                        value={searchText}
                        type="text"
                        placeholder="Conversation Search..."
                    />
                    <button type="button" className='z-20 cursor-pointer'>
                        <LargeLupeIcon className=''/>
                    </button>
                </form>
                <div className='w-[350px] h-[374px] flex flex-col items-end justify-end gap-x-8 gap-y-[11px] mb-[39px] overflow-y-hidden'>
                    {chatHistory.map((msg, index) => (
                        <div key={index} className='mr-1 w-[304px] h-auto bg-primary-purple-500 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl flex flex-row items-start justify-start px-5 py-5 mb-5'>
                            <p className='text-[14px] text-[#FFFFFF]/80 text-right flex-wrap leading-[22px]'>
                                {msg}
                            </p>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className='z-20 w-[344px] h-[68px] border-[#563CC7] bg-[#161A3E] border-[3px] rounded-[17px] flex flex-row justify-between items-center px-[20px] shadow-xl'>
                    <input
                        className="bg-transparent text-[15px] text-[#EEECF1] placeholder:text-[#EEECF1]/50 flex-wrap"
                        onChange={handleMessageChange}
                        value={message}
                        ref={inputRef}
                        type="text"
                        placeholder="..."
                    />
                    <button type='submit' className='w-8 h-8 flex items-center justify-center'>
                        <Decision name='RightPlaneArrow' />
                    </button>
                </form>
            </div>
            <div className='absolute w-auto h-auto left-[310px] bottom-[683px]'>
                <QuickChatCounter />
            </div>
            <img className='absolute w-[48px] h-[54px] right-8 top-9' src={photo_8} alt="" />
        </div>
    )
}
