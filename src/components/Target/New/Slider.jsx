
function Slider({
    sliderheight = 'h-1',
    slidervalue = '',
    slotheight = 'h-0.5',
    slotwidth = 'w-[177px]',
    sliderbg = 'bg-[#FFFFFF]',
}) {
    return (
        <div>
            <div className='relative mt-0 w-[177px] h-[24px] flex items-center'>
                <div className={`z-0 relative bg-[#05050F] ${slotwidth} ${slotheight} rounded flex items-center`}>
                </div>
                {/* ball */}
                <div className='z-20 absolute left-2/3 w-3 h-3 border-[2px] border-[#E5E8EF] bg-[#3E4761] rounded-full flex items-center justify-center'>
                    <div className='z-40 w-1 h-1 bg-[#E5E8EF] rounded-full'></div>
                </div>
                <div className={`z-10 absolute left-0 ${slidervalue} ${sliderheight} ${sliderbg} rounded-full`}></div>
            </div>
        </div>
    )
}

export default Slider;