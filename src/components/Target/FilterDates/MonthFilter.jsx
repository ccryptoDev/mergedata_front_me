import { useState } from 'react';

import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import MonthScrollableList from '@/components/Target/FilterDates/MonthScrollableList';

export default function MonthFilter({
  selectedButton,
  selectedYear,
  selectedShortMonth,
  onHandleSelectedMonthFromList,
  previousMonthsList,
}) {

  const [showMonthList, setShowMonthList] = useState(false);

  //enable and disable the month button
  const handleMonthList = () => {
    setShowMonthList(!showMonthList);
  }

  const handleClickedMonthFromList = (month, year) => {
    setShowMonthList(false);
    onHandleSelectedMonthFromList(month, year);
  };

  return (
    <div>
      {
        selectedButton === 'month' ?

          <div className='relative'>
            <button
              className='w-auto h-[2.625em] rounded-[0.75rem] flex flex-row px-[0.75em] pt-[0.4375rem] gap-x-[0.1875rem] items-start justify-between bg-[#35257A] z-80'
              onClick={() => handleMonthList()}
            >
              < span className='font-semibold font-baloo pl-[2px] text-center text-[1rem] leading-[1.75rem] uppercase text-[#f4f4f4]' >
                MONTH
              </span >

              <span className='text-[#f4f4f4] w-[1rem]'>|
              </span>

              <div className='w-[5.25em] h-[2.25em]'>
                <span className='text-[0.9375em] font-semibold h-[1.375rem] tracking-[1px] text-center leading-[1rem] text-[#f4f4f4] font-baloo inline-block'>
                  {selectedShortMonth + ' - ' + selectedYear}
                </span>
              </div>

              <div className='w-[0.75rem] h-[2em] pt-[0.625rem]'>
                <ArrowDownIcon className='' />
              </div>

            </button>
            <div className='absolute'>
              {showMonthList &&

                <MonthScrollableList 
                  previousMonthsList={previousMonthsList}
                  handleClickedMonthFromList={handleClickedMonthFromList}
                  selectedShortMonth={selectedShortMonth}
                  selectedYear={selectedYear}
                />
              }
            </div>
          </div>
          :
          <button
            className='text-white h-[2.625rem] py-1 px-[0.75em] rounded-[1rem] hover:bg-neutrals-400 transition-colors duration-700'
          >
            <p className='text-[1rem] font-baloo'>MONTH</p>
          </button>
      }
    </div>
  )
}
