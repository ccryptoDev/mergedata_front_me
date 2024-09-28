
export default function MonthScrollableList({
  handleClickedMonthFromList,
  selectedShortMonth,
  selectedYear,
  previousMonthsList
}) {

  return (
    <div className='h-[180px] rounded-xl bg-[#05081E] py-[6px] px-2 z-100'>
      <div className='w-[189px] h-[36px] bg-[#6043DD] hover:bg-[#5f43ddaa] rounded-md flex items-center justify-center mb-2'>
        <p className='text-[#f4f4f4] font-baloo text-sm'>
          {selectedShortMonth + ' - ' + selectedYear}
        </p>
      </div>
      <div className='w-[186px] h-[124px] flex flex-col items-start justify-start overflow-y-scroll'>
        <div className='w-32 h-[180px]'>
          {
            previousMonthsList.map((item) => {
              return (
                <button
                  key={item.id}
                  className='w-[176px] h-9 focus:bg-[#35257A] rounded-md flex items-center justify-start px-3 mb-1'
                  onClick={() => { handleClickedMonthFromList(item.month, item.year) }}>
                  <p className='text-[#f4f4f4] font-baloo text-[13px]'><span> {item.month} - {item.year} </span></p>
                </button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
