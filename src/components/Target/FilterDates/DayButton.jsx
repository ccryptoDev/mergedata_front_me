import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';

export default function DayButton({
    date,
    handleCalendar,
    selectedShortMonth,
    selectedYear,
    reset,
    clickOk
}) {
    return (
        <button
            className='w-[17.875em] h-[2.625em] rounded-[0.75em] flex flex-row px-[0.9em] items-center justify-between bg-[#35257A] z-80 overflow-visible z-10 '
            onClick={() => handleCalendar()}>
            < span className='font-medium font-baloo  text-center text-[1rem] uppercase text-[#F4F4F4]' >
                DAY
            </span >
            <span className='text-[#F4F4F4] text-[1rem] w-[1rem] font-medium'>|</span>
            {
                ((Array.isArray(date)) && (date[0] !== date[1]) && !reset) &&
                <span className={`text-[#F4F4F4] text-[0.9rem] font-medium font-baloo ${clickOk ? 'opacity-100 font-semibold' : 'opacity-70'}`}>
                    {date[0].getDate().toString().padStart(2, '0') + '/' + (date[0].getMonth() + 1).toString().padStart(2, '0') + '/' + date[0].getFullYear() + ' - ' + date[1].getDate().toString().padStart(2, '0') + '/' + (date[1].getMonth() + 1).toString().padStart(2, '0') + '/' + date[1].getFullYear()}
                </span>
            }
            {
                (!Array.isArray(date)) &&
                <div className='w-[11.25em] h-[1.625em] flex flex-row items-center justify-center bg-[#35257A]'>
                    <span className='text-[1rem] tracking-[0px] text-center leading-[1rem] text-[#F4F4F4] font-medium font-baloo'>
                        {date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getFullYear()}
                    </span>
                </div>
            }
            {
                ((Array.isArray(date)) && (date[0] === date[1])) &&
                <span className='text-[1rem] text-[#F4F4F4] font-baloo px-6'>
                    {selectedShortMonth + ' - ' + selectedYear}
                </span>
            }
            <div className='w-[1rem] h-6  pt-[0.5rem] flex justify-end'>
                <ArrowDownIcon />
            </div>
        </button>
    )
}
