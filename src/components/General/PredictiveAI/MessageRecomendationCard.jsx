import { useState } from 'react';
import TextInputChat from '@/components/General/PredictiveAI/TextInputChat';
import Graphs from '@/assets/svg/Graphs.svg'
import bot3 from '@/assets/svg/bot3.svg'
import NameInitials from '@/components/General/NameInitials';
import Decision from '@/components/General/Icons/Decision'
import TextIconButton from '@/components/General/Buttons/TextIconButton';


export default function MessageRecomendationCard() {

    const [showFlag, setShowFlag] = useState(false);

    return (
        <div className='relative z-10 w-[1070px] h-[786px] bg-[#0D102C] rounded-xl p-6 flex flex-col items-center justify-between gap-y-6'>
            <div className='z-20 w-[1022px] h-[58px] bg-[#05081E] flex justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='w-auto h-[58px] flex flex-row justify-between' >
                        <div className='w-[44px] h-[44px] mt-[3px] ml-[1px] mr-3 bg-[#6043DD] rounded-full flex justify-center items-center'>
                            <Decision name='LeftArrow' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[#FFFFFF] text-[12px] leading-[18px]'>Inventory Department</p>
                            <p className='text-[#FFFFFF] font-bold font-baloo text-[32px] pr-4   bg-[#0D102C] leading-[36px] z-30'>Improve Inventory Supply</p>
                        </div>

                        <div className='w-auto h-auto flex flex-row'>
                            <div
                                onMouseOver={() => setShowFlag(true)}
                                onMouseLeave={() => setShowFlag(false)}
                                className='bg-[#161A3E] rounded-[8px] w-[30px] h-[30px] text-[#ffffff] flex flex-row justify-center items-center mt-5 z-20'
                            >
                                <Decision name='Heart' />
                            </div>
                            <div className={`bg-[#161A3E] w-auto px-3 rounded-r-[10px] h-[30px] text-[#ffffff] flex justify-center items-center mt-5 text-[14px] ml-[-5px] ${showFlag ? 'translate-x-0 opacity-70' : 'translate-x-[-140px] opacity-0'} easy-in-out duration-500 z-10`}>
                                Add as favorite
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-auto h-[58px] flex justify-center items-center bg-[#05081E] rounded-full gap-x-4'>
                    <TextIconButton
                        iconLeft=''
                        text='Start Task'
                        iconRight='PurpleNote'
                        background='bg-[#EFECFC]'
                        width='w-[123px]'
                        height='h-[44px]'
                        backgroundHover='bg-[#EFECFC]'
                        textSize='text-sm'
                        textColor='text-[#4832A6]'
                        textColorHover=''
                        borderColor='border border-transparent'
                        gapX='gap-x-2'
                        rounded='rounded-[4px]'
                    />
                    <TextIconButton
                        iconLeft=''
                        text='Quick Chat'
                        iconRight='QuickChatCounter'
                        background='bg-purple-700'
                        width='w-[123px]'
                        height='h-[44px]'
                        backgroundHover='bg-[#EFECFC]'
                        textSize='text-sm'
                        textColor='text-[#FFFFFF]'
                        textColorHover=''
                        borderColor='border border-transparent'
                        gapX='gap-x-2'
                        rounded='rounded-[4px]'
                    />
                </div>
            </div>
            <div className='w-[1022px] h-[564px] bg-[#05081E] rounded-xl flex flex-col  justify-between items-center p-8 pb-9'>
                <div className='w-[958px] h-[46px] flex items-center gap-x-2'>
                    <NameInitials />
                    <div className='w-[500px] h-[46px] flex flex-col justify-between items-start'>
                        <span className='text-lg text-[#FFFFFF] font-baloo leading-[28px]'>
                            How to improve my inventory day supplies
                        </span>
                        <span className='text-[#8B93A9] text-base leading-[18px]'>
                            2 hrs ago
                        </span>
                    </div>
                </div>
                <hr className='w-[958px] h-[1px] border border-[#6B748E]/50 my-2' />
                <div className='w-[958px] h-[90px] flex items-center gap-x-2'>
                    <div className='w-[104px] h-[90px] flex flex-col items-center justify-between'>
                        <img src={bot3} alt="bot3" className='' />
                        <div className='w-[104px] h-6 flex items-center justify-between px-1'>
                            <div className='flex flex-row w-[40px] gap-x-2'>
                                <Decision name='ThumbLarge' />
                                <span className='text-[#FFFFFF] text-base leading-[18px]'>
                                    12
                                </span>
                            </div>
                            <div className='flex flex-row w-[40px] gap-x-2'>
                                <Decision name='ThumbLargeInverted' />
                                <span className='text-[#FFFFFF] text-base leading-[18px]'>
                                    2
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[90px] flex flex-col justify-between items-start'>
                        <span className='text-base text-[#f2efef] leading-[22px] opacity-80'>
                            It’s important to keep a close eye on your inventory turnover ratio so you can understand how efficient you are at doing this. The inventory turnover calculation helps measure your inventory management efficiency, as it shows the number of times you buy and replace (or turn) inventory over a certain period of time, usually a yourintegrationcard
                        </span>
                    </div>
                </div>
                <div className='w-[958px] h-[496px] flex items-center justify-center gap-x-2'>
                    <img src={Graphs} alt="Graphs" className='opacity-80' />
                </div>
            </div>
            <div className='z-40'>
                <TextInputChat />
            </div>
            <div className='absolute z-30 bottom-[18px] w-[966px] h-[247px] bg-[#05081E] flex flex-col justify-between items-start rounded-[17px] p-6 gap-y-3 leading-4 shadow-primary-slate-900 shadow-sm-light drop-shadow-sm opacity-90'>
                <p className='text-base text-[#A6ACBD]'>
                    Can you tell me about different ways aside from the ones you are telling me about?
                </p>
                <p className='text-base text-[#A6ACBD]'>
                    Improve my inventory days supply
                </p>
                <p className='text-base text-[#A6ACBD]'>
                    Worst performing stores in inventory
                </p>
                <p className='text-base text-[#A6ACBD]'>
                    Floor plan issues in inventory
                </p>
                <p className='text-base text-[#A6ACBD]'>
                    Worst performing stores in inventory
                </p>
                <p className='text-base text-[#A6ACBD]'>
                    Floor plan issues in inventory
                </p>

            </div>
        </div>
    )
}
