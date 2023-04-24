import ArrowDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';
import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton';
import Slider from '@/components/Target/New/Slider';

const NewVDPCard = () => {
    return (
        <div className="w-[660px] h-[313px] bg-[#212A43] rounded-2xl flex flex-col items-start px-8 py-6">
            <div className="w-[291px] h-[70px] flex flex-col gap-2">
                <div className="w-[291px] h-[42px] flex flex-row items-center justify-between">
                    <span className='w-[100px] h-[36px] flex items-center font-baloo text-2xl font-bold text-white'>New VDP</span>
                    <IconNameIconDropdownButton width='w-[82px]' height='h-[42px]' text='New' iconName='' />
                    <IconNameIconDropdownButton width='w-[97px]' height='h-[42px]' text='Nissan' iconName='' />
                </div>
                <div className="w-[291px] h-[19px] flex flex-row">
                    <div className='w-[37px] h-[18px] flex flex-row items-end'>
                        <div className='w-[12px] h-[12px] flex items-end pb-0.5'>
                            <img src={arrowUpGreen} className='w-[10px] h-[7px]' />
                        </div>
                        <span className='w-[25px] h-[14px] text-[#5EFF5A] font-baloo font-bold text-[14px] flex items-center'>10%</span>
                    </div>
                    <span className='w-[242px] h-[19px] text-sm tracking-wide opacity-60 text-white ml-3'>Compared to $21,490 last year</span>
                </div>
            </div>
            <div className="w-[596px] h-[200px] flex flex-col items-center justify-center py-2 gap-2">
                <div className="w-[596px] h-[28px] flex flex-row items-center gap-2.5">
                    <span className='w-[96px] h-[24px] flex items-center text-white text-base'>Maxima</span>
                    <Slider sliderwidth='w-[375px]' slidervalue='w-[20%]' targetValue='left-[50%]' sliderheight='h-2' slotwidth='w-[375px]' slotheight='h-1' sliderbg='bg-gradient-to-l from-[#9997FF] to-[#CA96FF]' />
                    <span className='w-[61px] h-[28px] flex flex-row-reverse items-center font-baloo font-bold text-lg text-white'>354</span>
                    <div className='w-[31px] h-[28px] flex flex-row items-center'>
                        <div className='w-[10px] h-[10px] flex items-end pb-0.5'>
                            <img src={arrowUpGreen} className='w-[9px] h-[6px]' />
                        </div>
                        <span className='w-[21px] h-[12px] text-[#5EFF5A] font-baloo font-bold text-xs flex items-center'>12%</span>
                    </div>
                </div>
                <div className="w-[596px] h-[28px] flex flex-row items-center gap-2.5">
                    <span className='w-[96px] h-[24px] flex items-center text-white text-base'>Sentra</span>
                    <Slider sliderwidth='w-[375px]' slidervalue='w-[80%]' targetValue='left-[50%]' sliderheight='h-2' slotwidth='w-[375px]' slotheight='h-1' sliderbg='bg-gradient-to-l from-[#4DFFDF] to-[#4DA1FF]' />
                    <span className='w-[61px] h-[28px] flex flex-row-reverse items-center font-baloo font-bold text-lg text-white'>328</span>
                    <div className='w-[31px] h-[28px] flex flex-row items-center'>
                        <div className='w-[10px] h-[10px] flex items-end pb-0.5'>
                            <img src= {ArrowDownIcon} className='w-[9px] h-[6px]' />
                        </div>
                        <span className='w-[21px] h-[12px] text-[#FF8181] font-baloo font-bold text-xs flex items-center'>13%</span>
                    </div>
                </div>
                <div className="w-[596px] h-[28px] flex flex-row items-center gap-2.5">
                    <span className='w-[96px] h-[24px] flex items-center text-white text-base'>Versa</span>
                    <Slider sliderwidth='w-[375px]' slidervalue='w-[50%]' targetValue='left-[50%]' sliderheight='h-2' slotwidth='w-[375px]' slotheight='h-1' sliderbg='bg-gradient-to-l from-[#94FFBF] to-[#8BEAFF]' />
                    <span className='w-[61px] h-[28px] flex flex-row-reverse items-center font-baloo font-bold text-lg text-white'>234</span>
                    <div className='w-[31px] h-[28px] flex flex-row items-center'>
                        <div className='w-[9px] h-[9px] flex items-end pb-0.5'>
                            <img src={neutral} className='w-[9px] h-[6px]' />
                        </div>
                        <span className='w-[21px] h-[12px] text-[#FFBB0D] font-baloo font-bold text-[11px] flex items-center'>0.5%</span>
                    </div>
                </div>
                <div className="w-[596px] h-[28px] flex flex-row items-center gap-2.5">
                    <span className='w-[96px] h-[24px] flex items-center text-white text-base'>Rogue</span>
                    <Slider sliderwidth='w-[375px]' slidervalue='w-[80%]' targetValue='left-[50%]' sliderheight='h-2' slotwidth='w-[375px]' slotheight='h-1' sliderbg='bg-gradient-to-l from-[#93D8FF] to-[#749BFF]' />
                    <span className='w-[61px] h-[28px] flex flex-row-reverse items-center font-baloo font-bold text-lg text-white'>124</span>
                    <div className='w-[31px] h-[28px] flex flex-row items-center'>
                        <div className='w-[10px] h-[10px] flex items-end pb-0.5'>
                            <img src={arrowUpGreen} className='w-[9px] h-[6px]' />
                        </div>
                        <span className='w-[21px] h-[12px] text-[#5EFF5A] font-baloo font-bold text-xs flex items-center'>24%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewVDPCard;