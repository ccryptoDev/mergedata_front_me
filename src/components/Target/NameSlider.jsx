import BlackTalker from '@/components/Target/BlackTalker';

export default function NameSlider({
  value = 160,
  name = 'Retail Sales',
  cursorlocation = 'left-[70%]',
  sliderwidth = 'w-[126px]',
  sliderbg = 'bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]',
  slidertrackbg = 'bg-[#FFFFFF]',
  slidertracklenght = 'w-[37px]',
  blacktalker = true,
  blacktalkerlocation = 'left-[54%]'
}
) {

  return (

    <div className='w-[261px] h-[60px] bg-[#161A3E] flex flex-row'>

      <div className='ml-3 mt-3 mr-[19px] w-[100px] h-[24px] '>
        <div className='flex items-center justify-start'>
          <p className='text-[#F0F2F5] text-sm font-baloo font-semibold'>{name}</p>
        </div>
      </div>

      <div className={`mt-3 mr-[6px] ${sliderwidth} h-[44px] flex flex-col items-center`}>
        <div className='mb-1 w-full h-[24px] flex items-center justify-center '>
          <div className={`relative w-full h-[12px] rounded-full ${sliderbg} flex items-center justify-center`}>
            <div className={`absolute left-[50%] ${slidertracklenght} h-full ${slidertrackbg}`}></div>
            <div className='absolute left-[45%] w-[18px] h-[18px] bg-[#FFFFFF] rounded-full'></div>
            {/* slider cursor (ball) */}
            <div className={`absolute ${cursorlocation} w-5 h-5 rounded-full bg-neutrals-100 flex items-center justify-center border border-neutrals-200 `}>
              <div className='w-4 h-4 rounded-full bg-neutrals-800 flex items-center justify-center border border-neutrals-200' >
                <div className='w-2 h-2 rounded-full bg-neutrals-100 flex items-center justify-center border border-neutrals-200 '>
                </div>
              </div>
            </div>
            {/* black talker */}
            <div>
              {blacktalker && 
                <div className= {`z-50 absolute top-[-320%]`}>
                  <BlackTalker />
                </div>
              }
            </div>

          </div>
        </div >
        <div className='w-[31px] h-[16px] flex justify-center items-center'>
          <p className='text-[#F0F2F5] text-[13px] font-baloo font-semibold'>100%</p>
        </div >
      </div>

    </div>
  )
}