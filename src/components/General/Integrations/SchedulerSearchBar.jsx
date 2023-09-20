import Decision from "../Icons/Decision"

export default function SchedulerSearchBar() {
  return (
  
    <div className='w-[544px] h-[50px] flex flex-row items-center justify-between gap-x-'>
        <div className='w-[408px] h-[50px] flex flex-row items-center justify-between bg-[#3E4761] rounded-md border border-[#212A43] border-opacity-20 px-4 py-3 hover:border-[#6043DD] hover:bg-[#05081E]'>
            <p className='text-[#FFFFFF] font-baloo text-base'>Search</p>
            <Decision name='Lupe'/>
        </div>
        <div className='w-[56px] h-[50px] flex flex-row items-center justify-center bg-[#3E4761] rounded-md border border-[#212A43] px-4 py-3 hover:border-[#6043DD] hover:bg-[#05081E]'>
            <Decision name='Filter'/>
        </div>
        <div className='w-[56px] h-[50px] flex flex-row items-center justify-center bg-[#3E4761] rounded-md border border-[#212A43] px-4 py-3 hover:border-[#6043DD] hover:bg-[#05081E]'>
            <Decision name='DoubleArrowVertical'/>
        </div>
    </div>
  )
}
