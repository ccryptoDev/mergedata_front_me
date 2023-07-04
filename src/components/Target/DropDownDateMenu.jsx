import { useState } from 'react';

export default function DropDownDateMenu({ onInputYear }) {

  const currentYear = new Date().getFullYear();
  const previousYears = [currentYear, currentYear - 1, currentYear - 2];
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleClickedYear = (year) => {
    setSelectedYear(year);
    onInputYear(year);
  }

  return (
    <div className='w-40 h-[192px] rounded-xl bg-[#05081E] py-3 px-2'>
      <div className='w-36 h-10 bg-[#6043DD] hover:bg-[#5f43ddaa] rounded-md flex items-center justify-center mb-2'>
        <p className='text-[#FFFFFF] font-baloo text-sm'>
          {selectedYear}
        </p>
      </div>

      <div className='w-36 h-[124px] flex flex-col items-start justify-start overflow-y-scroll'>
        <div className='w-32 h-[180px]'>
          {
            previousYears.map((item) => {
              return (
                <button 
                key={item.id} 
                className={`w-[133px] h-9 ${ item === selectedYear ? 'bg-[#35257A]' : null } rounded-md flex items-center justify-start px-3 mb-1`}
                onClick={() => {handleClickedYear(item)}}
                >
                  <p className='text-[#FFFFFF] font-baloo text-[13px]'>
                    {item}
                  </p>
                </button>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}
