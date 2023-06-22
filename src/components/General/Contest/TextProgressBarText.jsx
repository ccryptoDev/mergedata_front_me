import Slider from '@/components/Target/New/Slider';

export default function TextProgressBarText({
    txtSize = 'text-xs',
    sliderwidth = 'w-[50px]',
    sliderheight = 'h-2',
    slidervalue = '',
    sliderbg = 'bg-[#32E5CB]',
    slotheight = 'h-2',
    slotbg = 'bg-neutrals-500',
    slotwidth = 'w-[177px]',
    targetValue = '',
    showBall = false,
}) {
    return (
        <div className='w-auto h-[18px] flex flex-row items-center gap-x-2'>
            <p className={`${txtSize} text-[#32E5CB]`}>Platinum</p>
            <Slider
                sliderwidth={sliderwidth}
                sliderheight={sliderheight}
                slidervalue={slidervalue}
                sliderbg={sliderbg}
                slotheight={slotheight}
                slotbg={slotbg}
                slotwidth={slotwidth}
                targetValue={targetValue}
                showBall={showBall}
            />
            <p className={`${txtSize} text-[#32E5CB]`}>Diamond</p>
        </div>
    )
}
