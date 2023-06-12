import heart from '@/assets/svg/heart.svg';
import BackLink from '@/components/General/Buttons/BackLink';

export default function DailyRecommendations() {

    return (
        <div className='flex flex-col'>
            <div className='w-[461px] h-[58px] bg-[#0D102C] flex flex-row justify-between' >
                <BackLink />
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
