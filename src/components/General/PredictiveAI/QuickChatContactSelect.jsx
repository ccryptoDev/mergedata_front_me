import { useState } from "react";
import photo_1 from '@/assets/svg/photo_1.svg'
import photo_2 from '@/assets/svg/photo_2.svg'
import photo_3 from '@/assets/svg/photo_3.svg'
import photo_4 from '@/assets/svg/photo_4.svg'
import photo_5 from '@/assets/svg/photo_5.svg'
import photo_6 from '@/assets/svg/photo_6.svg'
import photo_7 from '@/assets/svg/photo_7.svg'
import photo_8 from '@/assets/svg/photo_8.svg'
import photo_9 from '@/assets/svg/photo_9.svg'
import LargeLupeIcon from '@/components/General/Icons/LargeLupeIcon'

import Decision from '@/components/General/Icons/Decision'
import QuickChatCounter from '@/components/General/PredictiveAI/QuickChatCounter'

export default function QuickChatContactSelect() {

    const cardData = [
        { photo: photo_1, name: 'Coray Okumus' },
        { photo: photo_2, name: 'Andy Lane' },
        { photo: photo_3, name: 'Natali Craig' },
        { photo: photo_4, name: 'Isabella Maine' },
        { photo: photo_5, name: 'Phoenix Baker' },
        { photo: photo_6, name: 'Kate Morrison' },
        { photo: photo_7, name: 'Bruce Clark' },
        { photo: photo_8, name: 'Jay García' },
        { photo: photo_9, name: 'Zahir Jhonson' },
    ]

    const onChange = (e) => {
        setSearchText(e.target.value);
        { console.log(searchText) }
    };

    const [searchText, setSearchText] = useState('');

    const [showItems, setShowItems] = useState(false);

    return (
        <div className='w-[401px] h-[707px] relative'>
            <div className='w-[401px] h-[707px] bg-[#202449] border border-[#DCDCDC] rounded-[17px] pt-[25px] pl-[24px] flex flex-col'>
                <div className='w-[320px] h-[48px] mb-[29px]'>
                    <p className='font-baloo text-[32px] text-[#FFFFFF] font-bold leading-[48px] mb-[29px]'>
                        Who to Quick Chat?
                    </p>
                </div>

                <form className="w-[342px] h-[50px] bg-[#05050F] flex flex-row items-center justify-between pl-0 pr-3 mb-[34px] rounded-lg shadow-xl" >
                    <input
                        className="bg-transparent text-[15px] text-[#EEECF1] placeholder:text-[#EEECF1]/50"
                        onChange={onChange}
                        value={searchText}
                        type="text"
                        placeholder="Chat Search..."
                    />
                    <button type="button" className='cursor-pointer' onClick={() => setShowItems(!showItems)}>
                        <LargeLupeIcon className={`duration-300 ${showItems ? 'rotate-180' : ''}`} />
                    </button>
                </form>

                <div className='w-[350px] h-[374px] flex flex-wrap gap-x-8 gap-y-[11px] mb-[39px]'>
                    {cardData.map((item, index) => (
                        <div key={index} className='w-[95px] h-auto flex flex-col justify-center items-center'>
                            <img src={item.photo} alt="" className='shadow-xl' />
                            <p className='text-[10px] leading-[18px] font-normal font-sans text-[#A6ACBD] flex items-center justify-center'>{item.name}</p>
                        </div>
                    ))}
                </div>

                <div className='z-20 w-[344px] h-[68px] border-[#563CC7] bg-[#161A3E] border-[3px] rounded-[17px] flex flex-row justify-between items-center px-[27px] shadow-xl'>
                    <p className='text-[16px] font-normal font-sans text-[#A6ACBD]/60 flex items-center justify-start '>Hey, Quicker!...</p>
                    <button className='w-8 h-8 flex items-center justify-center' onClick={() => setShowList(!showList)}>
                        <Decision name='RightPlaneArrow' />
                    </button>
                </div>
            </div>
            <div className='absolute w-auto h-auto left-[310px] bottom-[683px]'>
                <QuickChatCounter />
            </div>
        </div>
    )
}
