import { useState, useEffect } from 'react';

import CalendarBox from '@/components/Target/FilterDates/CalendarBox';
import DayButton from '@/components/Target/FilterDates/DayButton';
import CalendarButtons from '@/components/Target/FilterDates/CalendarButtons';

export default function CalendarFilter({
  selectedButton,
  selectedMonth,
  selectedYear,
  selectedShortMonth,
  confirmCancel,
  confirmDate,
  reset,
}) {

  const [selectedNumMonth,] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState([selectedDate, selectedDate]);
  const [clickOk, setClickOk] = useState(false);
  const [clickCancel, setClickCancel] = useState(false);

  const handleCalendar = () => {
    setShowCalendar(true);
  }

  const onHandleDate = (value) => {
    setDate(value);
  };

  const handleOkButton = () => {
    if ((date.length === 2) && (date[0] !== date[1])) {
      setClickOk(true);
      confirmDate(date);
      setShowCalendar(false);
    } else {
      null;
    }
  };

  const handleCancelButton = () => {
    setClickCancel(true);
    confirmCancel(clickCancel);
    setShowCalendar(false);
  };

  //Takes the selected month and year from the MonthFilter/YearFilter and sets the date to the first day of the month in the CalendarBox component
  useEffect(() => {
    const tempDate = new Date(`${selectedShortMonth} , ${selectedYear}`);
    setSelectedDate(tempDate);
  }, [selectedShortMonth, selectedYear]);

  return (
    <div>
      {selectedButton === 'day' ?
        <div className='relative'>
          <DayButton
            date={date}
            handleCalendar={handleCalendar}
            selectedShortMonth={selectedShortMonth}
            selectedYear={selectedYear}
            reset={reset}
            clickOk={clickOk}
          />
          <div className='absolute top-[16px] left-0 z-0'>
            {showCalendar &&
              <div className='relative w-[287px] h-[368px] flex flex-col'>
                <CalendarBox
                  onHandleDate={onHandleDate} //This handle the selected date comming from CalendarBox component
                  selectedDate={selectedDate}
                  settledMonth={selectedNumMonth}
                  selectedShortMonth={selectedShortMonth}
                  selectedMonth={selectedMonth}
                  selectedYear={selectedYear}
                  settledYear={selectedYear}
                  confirmDate={confirmDate}
                  upLoadDate={false}
                />
                {/*  buttons panel: cancel and ok */}
                <CalendarButtons
                  handleOkButton={handleOkButton}
                  handleCancelButton={handleCancelButton}
                />
              </div>}
          </div>
        </div>
        :
        <button
          className='text-white h-[42px] py-1 px-4 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'
        // onClick={() => selectDayButton()}
        >
          <p className='text-[15px] font-baloo'>DAY</p>
        </button>
      }
    </div>
  )
}
