import Decision from "@/components/General/Icons/Decision"
import heart from '@/assets/svg/heart.svg';

export default function DailyRecommendations() {

    return (
        <div className='flex flex-col'>
            <div className='w-[461px] h-[58px] bg-[#0D102C] flex flex-row justify-between' >
                <div className='w-[44px] h-[44px] mt-[3px] ml-[1px] bg-[#6043DD] rounded-full flex justify-center items-center'>
                    <Decision name='LeftArrow' />
                </div>
                <div className='flex flex-col'>
                    <p className='text-[#FFFFFF] text-[12px] leading-[18px]'>Sales Department</p>
                    <p className='text-[#FFFFFF] font-bold font-baloo text-[32px] leading-[36px]'>Daily Recommendations</p>
                </div>
                <div className=' mt-3 bg-[#161A3E] rounded-lg w-[28px] h-[30px] flex items-center justify-center shadow-xl'>
                    <img src={heart} className='w-[14px] h-[12px]' />
                </div>
            </div>

        </div>

    )
}
