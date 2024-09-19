import { useState } from 'react'
import Decision from '@/components/General/Icons/Decision'
import bot1 from '@/assets/svg/bot1.svg'

export default function TextInputChat() {

  const data = [    {id:1, option: 'Inventory trends'},     {id:2, option: 'Improve my inventory'},     {id:3, option: 'Future of inventory'},    {id:4, option: 'Future of stocks'},  ]

  const [showList, setShowList] = useState(false)

  return (
    <div className='relative w-[1022px] h-[68px] bg-[#161A3E] flex flex-row items-center justify-start shadow-md'>
      <div className='z-10 w-[64px] h-[66px] mr-1'>
        <img src={bot1} alt='bot' />
      </div>
      <div className='z-20 w-[948px] h-[66px] border-[#1C2A4E] bg-[#161A3E] border-[7px] rounded-[17px] flex flex-row justify-between items-center px-[27px]'>
        <p className='text-base font-normal font-sans text-[#A6ACBD] flex items-center justify-start '>Hey, let's talk about...</p>
        <button className='w-8 h-8 flex items-center justify-center' onClick={() => setShowList(!showList)}>
          <Decision name='RightPlaneArrow' />
        </button>
      </div>
      <div className={`absolute bottom-1 right-0 z-0 gap-2 items-start bg-[#161A3E] rounded-[12px] w-[1020px] shadow-md transition-h-[opacity] duration-500 ${showList ? 'h-[247px] opacity-100' : 'h-[180px] opacity-0'}`}>
        <ul className='pl-6 pt-6 text-sm flex flex-col space-y-3'>
          {data.map((item) => {
            return(
              <li key={item.id} className='text-[#A6ACBD] h-[26px] text-lg font-sans py-1'>{item.option}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
