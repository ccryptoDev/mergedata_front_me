export default function CalendarButtons({
    handleOkButton,
    handleCancelButton
}) {

    return (

        <div className="absolute right-[1.3125em] bottom-[1.3125em] w-[6.5625em] h-[2em] flex justify-between items-center">
            <div onClick={() => handleCancelButton()} className='w-[3.9375em] h-[2em] cursor-pointer flex flex-row items-center justify-center mr-[0.25em]'>
                <p className="text-[#6143e5] text-[0.875rem] font-medium tracking-[1px]shadow-lg hover:text-[#7c61f8]">
                    Cancel
                </p>
            </div>
            <button onClick={() => handleOkButton()} className="w-[2.5em] h-[2em] cursor-pointer rounded-full bg-primary-purple-400 flex  items-center justify-center shadow-lg hover:bg-primary-purple-300 pt-[2px]">
                <p className='text-[#f4f4f4] text-[1rem] font-baloo shadow-xl'>
                    OK
                </p>
            </button>
        </div>

    )
}
