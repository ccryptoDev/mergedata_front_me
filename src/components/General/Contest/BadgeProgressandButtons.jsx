import crown from '@/assets/svg/crown.svg'
import growth from '@/assets/svg/growth.svg'
import TextProgressBarText from '@/components/General/Contest/TextProgressBarText';
import BadgeGroup from '@/components/General/Contest/BadgeGroup';

const data = [
    { id: 1, bgColor: 'bg-[#FFBB0D]', value: 3, icon: crown, text: 'AWARDS' },
    { id: 2, bgColor: 'bg-[#1BE2C5]', value: 323, icon: growth, text: 'ALL POINTS' },
    { id: 3, bgColor: 'bg-[#176BF8]', value: 5, icon: crown, text: 'BADGES' },
]

export default function BadgeProgressandButtons() {
    return (
        <div className='w-[317px] h-[182px] bg-[#161A3E] flex flex-col items-center px-3 py-3 mb-2'>
            <TextProgressBarText />
            <BadgeGroup 
                width = 'w-[200px]'
                height = 'h-[58px]'
                roundCorner = 'rounded-[5px]'
                leading = 'leading-3'
                valueSize = 'text-2xl'
                txtSize = 'text-[8px] w-[78px]'
                iconSize = 'w-5 h-5'
                gapX = 'gap-x-[8px]'
                gapY = 'gap-y-1'
                data = {data}
            />
            <div className='w-[293px] h-[42px] flex flex-row mt-3 gap-x-3'>
                <button className='w-[122px] h-[42px] bg-[#35257A] rounded-2xl text-[#FFF] flex flex-row items-center justify-center gap-x-1'>
                    <div className='font-baloo text-[15px] text-[#FFF]'>GAMES</div>
                    <div className='text-[9px] font-semibold border-[3px] h-[19px] rounded-full bg-[#907BE7] px-1 text-[#FFF] flex items-center justify-center '>3</div>
                </button>
                <button className='w-[159px] h-[42px] text-[#FFF] flex flex-row items-center justify-center gap-x-1'>
                    <div className='font-baloo text-[15px] text-[#FFF]'>NOTIFICATIONS</div>
                    <div className='text-[9px] font-semibold border-[3px] h-[19px] rounded-full bg-[#907BE7] px-1 text-[#FFF] flex items-center justify-center '>12</div>
                </button>
            </div>
        </div>
    )
}
