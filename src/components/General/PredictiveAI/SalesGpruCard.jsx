import { useState } from 'react';
import IconSelected from '@/components/General/Icons/Decision';
import Decision from '@/components/General/Icons/Decision';
import SimpleLinesGraph from '@/components/General/PredictiveAI/SimpleLinesGraph';
import GraphsLines from '@/components/General/Images/GraphsLines';
import Winner from '@/components/General/Images/Winner';
import Diamond from '@/components/General/Images/Diamond';

export default function SalesGpruCard() {

    const [firstBoardClicked, setFirstBoardClicked] = useState(false)
    const [secondBoardClicked, setSecondBoardClicked] = useState(false)
    const [thirdBoardClicked, setThirdBoardClicked] = useState(false)

    const handleFirstBoard = () => {
        setFirstBoardClicked(!firstBoardClicked) 
        setSecondBoardClicked(false)
        setThirdBoardClicked(false)
    }
    const handleSecondBoard = () => {
        setFirstBoardClicked(false) 
        setSecondBoardClicked(!secondBoardClicked)
        setThirdBoardClicked(false)
    }
    const handleThirdBoard = () => {
        setFirstBoardClicked(false) 
        setSecondBoardClicked(false)
        setThirdBoardClicked(!thirdBoardClicked)
    }
    const board = 'w-[280px] h-[50px] flex flex-row justify-between items-center rounded-md py-[7px] pl-[5px] pr-[14.5px] cursor-pointer'
    const textContainer = 'w-[202px] h-9 flex flex-row pl-3'
    const textStyle = 'w-[190px] text-[#FFFFFF] text-[11px] leading-4'

    return (
        <div className='w-[20em] h-[33em] bg-[#202449] hover:bg-[#161A3E] flex flex-col items-center justify-between py-6 shadow-md rounded-lg'>
            <div className='w-[280px] h-[145px] flex flex-col justify-between items-center'>
                <div className='w-[280px] h-[30px] flex flex-row justify-between items-center'>
                    <p className="text-[#C2C8D7] text-xl font-baloo font-bold">Sales</p>
                    <div className='w-auto flex flex-row items-center space-x-[6px]'>
                        <div className="space-x-4 mr-2 flex">
                            <IconSelected name='Arrow45Degrees' />
                        </div>
                    </div>
                </div>
                <div className='w-[280px] h-[45px] flex flex-row justify-start items-center'>
                    <p className='font-baloo text-[#FFFFFF] text-[32px] mr-2'>GPRU</p>
                    <Decision name='DownRedArrow' />
                    <p className='text-[#F4392C] text-sm ml-1'>-23.6%</p>
                </div>
                <div className='w-[280px] h-9 flex flex-row justify-between items-start'>
                    <p className='text-xs text-[#FFFFFF]'>Salesperson GPRU dropped by more than 20% this week, compared to other salespersons.</p>
                </div>
            </div>
            { firstBoardClicked ? (
            <div>
            <div className=''>
                <SimpleLinesGraph />
            </div>
            <div className='w-[280px] h-[15px] bg-[#35257A] flex flex-row justify-between items-center rounded-md px-7'>
                <div className='w-[15px] h-[15px] rounded-full bg-gradient-to-r from-[#E74694] to-[#4807EA] flex items-center justify-center'>
                    <p className='text-[#FFFFFF] text-[7px] font-bold '>
                        GR
                    </p>
                </div>
                <p className='text-xs text-[#FFFFFF] leading-[15px]'>
                    Median GPRU
                </p>
                <div className='w-[15px] h-[15px] rounded-full bg-gradient-to-r from-[#EE7302] to-[#F1C300] flex items-center justify-center'>
                </div>
                <p className='text-xs text-[#FFFFFF] '>
                    6 Employees
                </p>
            </div>
            </div>
            )
            :
            <div className='w-[280px] h-[40px]'></div>
            }
            <div className={`${board} ${firstBoardClicked ? 'bg-[#35257A]' : 'bg-[#161A3E]' }`}>
                <div className={`${textContainer}`} onClick={() => { handleFirstBoard() }}>
                    <p className={`${textStyle}`}>
                        Assign to a manager to dig into the cause of the drop
                    </p>
                </div>
                <GraphsLines bgColor={`${firstBoardClicked ? '#907BE7' : '#00000'}`}/>
            </div>
            <div className={`${board} ${secondBoardClicked ? 'bg-[#35257A]' : 'bg-[#161A3E]' }`}>
                <div className={`${textContainer} `}onClick={() => { handleSecondBoard() }}>
                <p className={`${textStyle}`}>
                        Schedule a training session for best practices with top performers
                    </p>
                </div>
                <Winner bgColor={`${secondBoardClicked ? '#907BE7' : '#00000'}`}/>
            </div>
            <div className={`${board} ${thirdBoardClicked ? 'bg-[#35257A]' : 'bg-[#161A3E]' }`}>
                <div className={`${textContainer}`} onClick={() => { handleThirdBoard() }}>
                <p className={`${textStyle}`}>
                        Create a Contest for these individuals for the next week
                    </p>
                </div>
                <Diamond bgColor={`${thirdBoardClicked ? '#907BE7' : '#00000'}`}/>
            </div>
            <div className='w-[280px] h-[75px] flex flex-row justify-between items-center'>
                <div className='w-20 h-[75px] bg-[#13132D] rounded-[5px] flex flex-col justify-center items-center'>
                    <p className='text-2xl leading-9 text-[#FFFFFF] font-baloo font-bold'>
                        4
                    </p>
                    <p className='w-[40px] h-5 leading-3 text-center text-[8px] text-[#FFFFFF] font-baloo font-semibold'>
                        DAY'S TO FIX
                    </p>
                </div>
                <div className='w-20 h-[75px] bg-[#EFECFC] rounded-[5px] flex flex-col justify-center items-center pt-1 gap-y-[1px]'>
                    <div className='w-[47px] h-[47px] rounded-full border-[2px] border-[#FFFFFF] bg-[#E5E8EF] flex items-center justify-center'>
                        <p className='text-xl font-bold text-[#563CC7]' >
                            JC
                        </p>
                    </div>
                    <p className='text-[8px] text-[#212A43] font-semibold'>JUAN C.</p>
                </div>
                <div className='w-20 h-[75px] bg-[#F4392C] rounded-[5px] flex flex-col items-center justify-between pt-4 pb-2'>
                    <Decision name='Delete'/>
                    <p className='text-[#FFFFFF] text-[8px] font-semibold '>
                        DELETE
                    </p>
                </div>
            </div>
        </div>
    )
}
