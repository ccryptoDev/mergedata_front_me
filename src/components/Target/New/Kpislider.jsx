import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';
import Slider from '@/components/Target/New/Slider';

function Kpislider(props) {
    return (
        <div className='w-[177px] h-full'>
            <p className='my-1 h-[22px] text-[#FFFFFF] font-sans font-normal text-sm flex items-center'>
                {props.title}
            </p>
            <div className='h-[24px] text-[#FFFFFF] flex flex-row items-center'>
                <span className=' text-[#FFFFFF] font-baloo font-bold text-2xl flex items-center mr-1'>
                    {props.value}
                </span>
                <div className='flex flex-row items-center h-[16px]'>

                    {props.percentage < '0' ?
                        <div className='bg-[#FFBB0D] w-[4px] h-[4px] rounded-full'></div>
                        :
                        <img src={arrowUpGreen} className='mt-[3px] w-[9px] h-[6px]' />}
                    <span className={`ml-[1px] ${props.percentage < '0' ? 'text-[#FFBB0D]' : 'text-[#5EFF5A]'} font-baloo font-bold text-xs flex items-center`}>
                        {props.percentage}
                    </span>
                </div>
            </div>
            {/* progress bar */}
            <Slider slidervalue={props.slidervalue} />
        </div>
    )
}
export default Kpislider