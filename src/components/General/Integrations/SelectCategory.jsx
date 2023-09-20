
export default function SelectCategory() {
    return (
        <div className='w-[432px] h-[136px] rounded-3xl bg-[#161A3E] px-6 py-7 flex flex-col gap-y-[2px]'>
            <p className='text-[#FFF] font-bold text-[15px]'>Select a category: </p>
            <div className='text-[#FFF] font-semibold text-[12px] flex flex-row justify-between px-4'>
                <span>
                    Unable to connect to source
                </span>
                <span>
                    Unable to connect to source
                </span>
            </div>
            <div className='text-[#FFF] font-semibold text-[12px] flex flex-row justify-between px-4'>
                <span>
                    Issues with custom mapping
                </span>
                <span>
                    Issues with custom mapping
                </span>
            </div>
        </div>
    )
}
