import arrowupgreen from '@/assets/svg/arrowupgreen.svg';
import neutral from '@/assets/svg/neutral.svg';
import Slider from '@/components/Target/New/Slider';

const InventoryCard = () => {
    return (
        <div className="flex flex-col items-start w-[337px] h-[325px] bg-neutrals-900 rounded-2xl py-6 px-8 gap-3.5">
            <div className="flex flex-col items-start w-[151px] h-[55px]">
                <div className="flex flex-row items-center w-[151px] h-[36px] gap-2">
                    <span className="w-[107px] h-[36px] font-baloo font-bold text-2xl text-white flex items-center">Inventory</span>
                    <div className="flex flex-row items-end w-[37px] h-[14px]">
                        <div className='w-[12px] h-[12px] flex items-center'>
                            <img src={arrowupgreen} className="w-[10px] h-[7px]" />
                        </div>
                        <span className='w-[25px] h-[14px] font-baloo font-bold text-[14px] flex items-center text-[#5EFF5A]'>10%</span>
                    </div>
                </div>
                <span className='w-[151px] h-[19px] text-[14px] text-white tracking-wide opacity-60'>Aging Analysis</span>
            </div>
            <div className='flex flex-col w-[273px] h-[180px] gap-6 justify-end'>
                <div className='flex flex-row items-start w-[273px] h-[74px] gap-6'>
                    <div className='flex flex-col justify-center items-start w-[125px] h-[74px]'>
                        <span className='w-[80px] h-[22px] flex items-center text-white text-sm'>0 - 30 Days</span>
                        <div className='w-[65px] h-[24px] flex flex-row items-center justify-between'>
                            <span className='w-[23px] h-[24px] font-baloo font-bold text-[24px] flex items-center text-white'>61</span>
                            <div className='w-[38px] h-[14px] flex flex-row items-end'>
                                <div className='w-[12px] h-[12px] flex items-center'>
                                    <img src={arrowupgreen} className="w-[10px] h-[7px]" />
                                </div>
                                <span className='w-[26px] h-[14px] font-baloo font-bold text-[14px] flex items-center text-[#5EFF5A]'>55%</span>
                            </div>
                        </div>
                        <Slider sliderwidth='w-[125px]' slidervalue='w-[50%]' targetValue='left-[55%]' sliderheight='h-1' slotwidth='w-[125px]' slotheight='h-0.5' sliderbg='bg-[#D6DBE8]' />
                    </div>
                    <div className='flex flex-col justify-center items-start w-[125px] h-[74px]'>
                        <span className='w-[80px] h-[22px] flex items-center text-white text-sm'>31 - 90 Days</span>
                        <div className='w-[65px] h-[24px] flex flex-row items-center justify-between'>
                            <span className='w-[23px] h-[24px] font-baloo font-bold text-[24px] flex items-center text-white'>77</span>
                            <div className='w-[38px] h-[14px] flex flex-row items-end'>
                                <div className='w-[14px] h-[14px] flex items-center'>
                                    <img src={neutral} className="w-[14px] h-[11px]" />
                                </div>
                                <span className='w-[26px] h-[14px] font-baloo font-bold text-[14px] flex items-center text-[#FFBB0D]'>20%</span>
                            </div>
                        </div>
                        <Slider sliderwidth='w-[125px]' slidervalue='w-[80%]' targetValue='left-[55%]' sliderheight='h-1' slotwidth='w-[125px]' slotheight='h-0.5' sliderbg='bg-[#D6DBE8]' />
                    </div>
                </div>
                <div className='flex flex-row items-start w-[273px] h-[74px] gap-6'>
                    <div className='flex flex-col justify-center items-start w-[125px] h-[74px]'>
                        <span className='w-[90px] h-[22px] flex items-center text-white text-sm'>91 - 180 Days</span>
                        <div className='w-[70px] h-[24px] flex flex-row items-center justify-between'>
                            <span className='w-[23px] h-[24px] font-baloo font-bold text-[24px] flex items-center text-white'>52</span>
                            <div className='w-[38px] h-[14px] flex flex-row items-end'>
                                <div className='w-[12px] h-[12px] flex items-center'>
                                    <img src={arrowupgreen} className="w-[10px] h-[7px]" />
                                </div>
                                <span className='w-[26px] h-[14px] font-baloo font-bold text-[14px] flex items-center text-[#5EFF5A]'>12%</span>
                            </div>
                        </div>
                        <Slider sliderwidth='w-[125px]' slidervalue='w-[95%]' targetValue='left-[55%]' sliderheight='h-1' slotwidth='w-[125px]' slotheight='h-0.5' sliderbg='bg-[#D6DBE8]' />
                    </div>
                    <div className='flex flex-col justify-center items-start w-[125px] h-[74px]'>
                        <span className='w-[80px] h-[22px] flex items-center text-white text-sm'>+180 Days</span>
                        <div className='w-[70px] h-[24px] flex flex-row items-center justify-between'>
                            <span className='w-[23px] h-[24px] font-baloo font-bold text-[24px] flex items-center text-white'>43</span>
                            <div className='w-[38px] h-[14px] flex flex-row items-end'>
                                <div className='w-[12px] h-[12px] flex items-center'>
                                    <img src={arrowupgreen} className="w-[10px] h-[7px]" />
                                </div>
                                <span className='w-[26px] h-[14px] font-baloo font-bold text-[14px] flex items-center text-[#5EFF5A]'>12%</span>
                            </div>
                        </div>
                        <Slider sliderwidth='w-[125px]' slidervalue='w-[95%]' targetValue='left-[55%]' sliderheight='h-1' slotwidth='w-[125px]' slotheight='h-0.5' sliderbg='bg-[#D6DBE8]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryCard;