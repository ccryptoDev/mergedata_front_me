
import photo from '@/assets/svg/photo.svg';

export default function NotificationGroup( {contestStatus = 'Paused'} ) {
  return (
    <div className='w-[285px] flex flex-col gap-y-2'>

      <div className='w-[285px] h-[56px] bg-[#0D102C] p-2 flex flex-row gap-x-4'>

        <div className='w-10 h-10'>
          <img src={photo} />
        </div>
        <div className='w-[157px] h-10 flex flex-col'>
          <div className='w-auto h-[22px]  flex items-center'>
            <span className='text-[#FFFFFF] text-[14px] leading-[22px] font-public'>Jones Ferdinand</span>
          </div>
          <div className='w-auto h-[18px] flex items-center'>
            <span className='text-[#6B748E] text-[12px] leading-[18px]  font-public'>Sold a vehicle</span>
          </div>
        </div>
        <div className='w-12 h-10 flex flex-col'>
          <div className='w-auto h-[10px] text-[#6B748E] text-[8px] flex items-center justify-end '>06:00 PM</div>
          <div className='w-auto h-[28px] font-baloo font-bold text-lg text-[#1BE2C5] justify-center '>+42pt</div>
        </div>
      </div>

      <div className='w-[285px] h-[56px] bg-[#0D102C] p-2 flex flex-row gap-x-4'>
        <div className='w-10 h-10'>
          <img src={photo} />
        </div>
        <div className='w-[157px] h-10 flex items-center'>
            <span className='text-[#FFFFFF] text-[14px] leading-[22px] font-public'>Jones is the first</span>
        </div>
      </div>

      <div className='w-[285px] h-[38px] bg-[#0D102C] p-2 flex flex-row gap-x-4'>
        
        <div className='w-[225px] h-10 flex flex-col'>
          <div className='w-auto h-[22px]  flex items-center'>
            <span className='text-[#32e5cb] text-[14px] leading-[22px] font-public'>{contestStatus}</span>
          </div>
        </div>
        <div className='w-12 h-10 flex flex-col'>
          <div className='w-auto h-[10px] text-[#6B748E] text-[8px] flex items-center justify-end '>06:00 PM</div>
          <div className='w-auto h-[28px] font-baloo font-bold text-lg text-[#1BE2C5] justify-center '></div>
        </div>
      </div>

      <div className='w-[285px] h-[38px] bg-[#0D102C] p-2 flex flex-row gap-x-4'>
        <div className='w-[225px] h-10 flex flex-col'>
          <div className='w-auto h-[22px]  flex items-center'>
            <span className='text-[#32e5cb] text-[14px] leading-[22px] font-public'>The contest ended</span>
          </div>
        </div>
        <div className='w-12 h-10 flex flex-col'>
          <div className='w-auto h-[10px] text-[#6B748E] text-[8px] flex items-center justify-end '></div>
          <div className='w-auto h-[28px] font-baloo font-bold text-lg text-[#1BE2C5] justify-center '></div>
        </div>
      </div>

    </div>

  )
}

