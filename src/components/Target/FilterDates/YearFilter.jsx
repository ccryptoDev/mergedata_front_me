import { useState } from 'react';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import YearScrollableList from '@/components/Target/FilterDates/YearScrollableList';

export default function YearFilter({ 
  selectedButton, 
  selectedYear,
  onHandleSelectedYearFromList,
  previousYearsList
}) {
  
  const [showYearList, setShowYearList] = useState(false);

// enable and disable the year button
  const handleYearList = () => {
    setShowYearList(!showYearList);
  }

  const handleClickedYearFromList = (clickedYearFromList) => {
    setShowYearList(false);
    onHandleSelectedYearFromList(clickedYearFromList);
  }

  return (
    <div>
      {
        selectedButton === 'year' ?
          <div className='relative'>
            <button
              className='w-[9.875em] h-[2.625em] rounded-[0.75rem] flex flex-row px-[0.875rem] pt-[0.4375rem] gap-x-[0.1875rem] items-start justify-between bg-[#35257A] z-80'
              onClick={() => handleYearList()}
            >
              < span className='font-semibold font-baloo pl-[0.375rem] text-center text-[1rem] leading-[1.75rem] uppercase text-[#FFFFFF]' >
                YEAR
              </span >
              <span className='text-[#FFFFFF] w-[1.0625em]'>|
              </span>
              <div className='w-auto h-[2.25em]'>
                <span className='text-[0.9375rem] font-semibold h-[1.375em] tracking-[1px] text-center leading-[1em] text-[#f4f4f4] font-baloo inline-block'>
                  {selectedYear}
                </span>
              </div>
              <div className='w-[0.75em] h-[2em] pt-[0.625rem]'>
                <ArrowDownIcon className='' />
              </div>
            </button>
            <div className='absolute'>
              {showYearList &&
              <YearScrollableList 
                previousYearsList={previousYearsList}
                handleClickedYearFromList={handleClickedYearFromList}
                selectedYear={selectedYear}
              />
              }
            </div>
          </div>
          :
          <button
            className='text-white h-[2.625em] py-1 px-[1rem] rounded-[1rem] hover:bg-neutrals-400 transition-colors duration-700'
          >
            <p className='text-[1rem] font-baloo'>YEAR</p>
          </button>
      }
    </div>
  )
}
