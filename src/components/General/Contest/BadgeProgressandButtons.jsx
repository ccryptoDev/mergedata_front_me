import crown from '@/assets/svg/crown.svg'
import growth from '@/assets/svg/growth.svg'
import Slider from '@/components/Target/New/Slider';

const data = [
    { id: 1, bgColor: 'bg-[#FFBB0D]', value: 3, icon: crown, text: 'AWARDS' },
    { id: 2, bgColor: 'bg-[#1BE2C5]', value: 323, icon: growth, text: 'ALL POINTS' },
    { id: 3, bgColor: 'bg-[#176BF8]', value: 5, icon: crown, text: 'BADGES' },
]

export default function BadgeProgressandButtons() {
    return (
        <div className='w-[317px] h-[182px] bg-[#161A3E] flex flex-col items-center px-3 py-3 mb-2'>
            <div className='w-[293px] h-[18px] flex flex-row items-center gap-x-2 mb-6'>
                <p className='text-xs text-[#32E5CB]'>Platinum</p>
                <Slider
                    sliderwidth='w-[50px]'
                    sliderheight='h-2'
                    slidervalue=''
                    sliderbg='bg-[#32E5CB]'
                    slotheight='h-2'
                    slotbg='bg-neutrals-500'
                    slotwidth='w-[177px]'
                    targetValue=''
                    showBall={false}
                />
                <p className='text-xs text-[#32E5CB]'>Diamond</p>
            </div>
            <div className='w-[293px] h-[58px] flex flex-row gap-x-3'>
                {
                    data.map((item) => {
                        return (
                            <div className={`w-[90px] h-[58px] pt-5 rounded-[5px] ${item.bgColor} flex flex-col items-center justify-center`}>
                                <div className='h-[20px] w-auto flex flex-row items-center justify-center  gap-x-1 '>
                                    <img src={item.icon} className='w-5 h-5 font-bold' />
                                    <p className='font-baloo text-2xl text-[#FFF]'>{item.value}</p>
                                </div>
                                <p className='text-[8px] font-semibold pb-3 text-[#FFF]'>{item.text}</p>
                            </div>
                        )
                    }
                )}

            </div>
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
        </div >
    )
}
