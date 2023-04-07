import Slider from '@/components/Target/New/Slider';
import Avatar1 from '@/assets/svg/Avatar1.svg';
import Avatar2 from '@/assets/svg/Avatar2.svg';
import Avatar3 from '@/assets/svg/Avatar3.svg';

export default function ResultResume({
    title ='',
    qty ='3'
}) {

    return (
        
        <div className='w-[293px] h-[72px] px-4 py-3 gap-y-[2px] bg-[#05081E]'>
            <div className='w-full h-7 flex flex-row justify-between items-center'>
                <div className='w-full h-7 mr-9'>
                    <p className='font-baloo font-bold text-base text-neutrals-00'>{title}</p>
                </div>
                <div className='relative w-[145px] h-7 flex flex-row items-center justify-end'>
                    <img src={Avatar1} className='z-0 absolute left-0 w-[26px] h-[26px]' />
                    <img src={Avatar2} className='z-10 absolute left-[18px] w-[26px] h-[26px]' />
                    <img src={Avatar3} className='z-20 absolute left-[36px] w-[26px] h-[26px]' />
                    <div className='z-30 absolute left-[54px] w-[26px] h-[26px] rounded-full bg-neutrals-900 flex items-center justify-center'>
                        <p className='text-neutrals-100 text-xs'>{qty}</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[18px] flex flex-row justify-between items-center'>
                <div className='w-6 h-[18px]'>
                    <p className='font-sans text-xs text-green-400'>10%</p>
                </div>
                <div className='w-[229px] h-[18px] flex items-center justify-center'>
                    <Slider
                        sliderwidth='w-[50px]'
                        sliderheight='h-2'
                        slidervalue=''
                        sliderbg='bg-[#32E5CB]'
                        slotheight='h-2'
                        slotbg='bg-neutrals-500'
                        slotwidth='w-[229px]'
                        targetValue='left-2/3'
                        showBall={false}
                    />
                </div>
            </div>
        </div>
    )
}
