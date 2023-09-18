import { useState } from 'react';
import Decision from '@/components/General/Icons/Decision';

export default function IntegrationsMainTitle({
  upperTittle = 'Settings',
  mainTittle = 'Integrations',
}) {

  const [showFlag, setShowFlag] = useState(false);

  return (
    <div className='flex flex-col'>
      <div className='w-auto h-[58px] flex flex-row justify-between' >
        <div className='w-[44px] h-[44px] mt-[3px] ml-[1px] mr-3 bg-[#6043DD] rounded-full flex justify-center items-center'>
          <Decision name='Check' />
        </div>
        <div className='flex flex-col'>
          <p className='text-[#FFFFFF] text-[12px] leading-[18px]'>{upperTittle}</p>
          <p className='text-[#FFFFFF] font-bold font-baloo text-[32px] pr-4   bg-[#202449] leading-[36px] z-30'>{mainTittle}</p>
        </div>

        <div className='w-auto h-auto flex flex-row'>
          <div
            onMouseOver={() => setShowFlag(true)}
            onMouseLeave={() => setShowFlag(false)}
            className='bg-[#161A3E] rounded-[8px] w-[30px] h-[30px] text-[#ffffff] flex flex-row justify-center items-center mt-5 z-20'
          >
            <Decision name='Heart' />
          </div>
          <div className={`bg-[#161A3E] w-auto px-3 rounded-r-[10px] h-[30px] text-[#ffffff] flex justify-center items-center mt-5 text-[14px] ml-[-5px] ${showFlag ? 'translate-x-0 opacity-70' : 'translate-x-[-140px] opacity-0' } easy-in-out duration-500 z-10`}>
            Add as favorite
          </div>
        </div>

      </div>
    </div>
  )
}

