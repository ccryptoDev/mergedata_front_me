
function Slider({
    sliderwidth = 'w-[177px]',
    sliderheight = 'h-1',
    slidervalue = 'w-[100px]',
    slotheight = 'h-0.5',
    slotwidth = 'w-[177px]',
    slotbg = 'bg-[#05050F]',
    sliderbg = 'bg-[#FFFFFF]',
    targetValue = 'left-2/3',
    showBall = true
}) {
    return (
        <div>
            <div className={`relative mt-0 ${slotwidth} h-[24px] flex items-center`}>
                <div className={`z-0 relative ${slotbg} ${slotwidth} ${slotheight} rounded flex items-center`}>
                </div>
                {/* ball */}
                {showBall && (
                    <div className={`z-20 absolute ${targetValue} w-3 h-3 border-[2px] border-[#E5E8EF] bg-[#3E4761] rounded-full flex items-center justify-center`}>
                        <div className='z-40 w-1 h-1 bg-[#E5E8EF] rounded-full'></div>
                    </div>
                )}
                <div className={`z-10 absolute left-0 ${sliderwidth} ${slidervalue} ${sliderheight} ${sliderbg} rounded-full`}></div>
            </div>
        </div>
    )
}

export default Slider;