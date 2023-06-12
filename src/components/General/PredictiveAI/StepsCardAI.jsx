
export default function StepsCardAI({
    step,
    backGroundColor,
    width,
    height,
    textColor,
    text,
}) {
    return (
        <div className={`relative ${width} ${height} rounded-lg overflow-hidden ${backGroundColor} flex items-start justify-center pt-4`}>
            <div className='absolute right-[3px] top-[2px] w-4 h-4 rounded-full bg-[#282828] flex items-center justify-center'>
                <p className={`w-[12px] h-[10px] border border-transparent text-center ${textColor} text-[4px] leading-[4.5px]`}>
                    {step} Step
                </p>
            </div>
            <div className='w-[160px] h-[74px] overflow-y-hidden'>
                <p className='text-[10px] text-[#282828] leading-[11px] '>
                    {text}
                </p>
            </div>
        </div>
    )
}
