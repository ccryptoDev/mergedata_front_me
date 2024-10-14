import { useEffect, useState } from 'react';
import Decision from '@/components/General/Icons/Decision';

export default function SetTargetButtons({ onHandleCard }) {
  const [activeRhButton, setActiveRhButton] = useState(false);
  const [activeLhButton, setActiveLhButton] = useState(true);
  const [showCard, setShowCard] = useState('AllStores');
  const basicButtonStyle = 'w-[10.875em] h-[3.125em] text-[1rem] text-[#FFFFFF] border-[0.16em] rounded-[0.5em]';
  const inactiveButtonStyle = 'bg-[#05081E] hover:bg-[#161A3E] border-[#0D102C] hover:border-[#4832A6] hover:delay-300 ease-in-out ';
  const activeButtonStyle = 'bg-[#6043DD] border-[#6043DD]/50';

  const handleLhButtons = () => {
    setActiveRhButton(false);
    setActiveLhButton(true);
  }
  const handleRhButtons = () => {
    setActiveRhButton(true);
    setActiveLhButton(false);
  }

  useEffect(() => {
    if (activeRhButton) {
      setShowCard('AllStores');
      console.log('AllStores');
    } else {
      setShowCard('ByStore');
      console.log('ByStore');
    }
    
    onHandleCard(showCard);
  }, [activeRhButton, activeLhButton])

  return (
    <div className='w-auto h-auto gap-x-[1.5em] flex items-center justify-between p-[0.25em]'>

      <button className={`${basicButtonStyle} ${activeLhButton ? activeButtonStyle : inactiveButtonStyle}`} onClick={handleLhButtons}>
        <div className='flex items-center justify-center gap-x-2'>
          <div className='w-[1.25em] h-[1.25em]'>
            <Decision name='Nut' />
          </div>
          <div className='text-[1rem]'>All Stores</div>
        </div>
      </button>

      <button className={`${basicButtonStyle} ${activeRhButton ? activeButtonStyle : inactiveButtonStyle}`} onClick={handleRhButtons}>
        <div className='flex items-center justify-center gap-x-2'>
          <div className='w-[1.25em] h-[1.25em]'>
            <Decision name='Nut' />
          </div>
          <div className='text-[1rem]'>By Store</div>
        </div>
      </button>

    </div>
  )
}
