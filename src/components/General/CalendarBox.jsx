import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import '@/css/Calendar.css';

export default function CalendarBox({ onHandleDate, selectedDate, selectedShortMonth, settledYear, confirmReset, confirmDate, currentDate, yearsBackwardBQ }) {
  const [date, setDate] = useState([selectedDate, selectedDate]);
  const [selectedYear, setSelectedYear] = useState(settledYear);
  const [clickOk, setClickOk] = useState(false);
  const [cancel, setCancel] = useState(false);

  const handleDayClick = (date) => {
    setDate(date);
  };

  const reset = () => {
    setCancel(true);
    confirmReset(cancel);
  };

  const handleOkButton = () => {
    if (Array.isArray(date)) {
    setClickOk(true);
    } else {
      setClickOk(false);
    }
  };
  
  useEffect(() => {
    if (clickOk) {
      confirmDate(clickOk);
      onHandleDate(date);
    }
  }, [clickOk, confirmDate, onHandleDate, date]);

  const [maxDateBQ, setMaxDateBQ] = useState(new Date(currentDate));
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - yearsBackwardBQ);
  const [minDateBQ, setMinDateBQ] = useState(minDate);
  
  return (
    <div className='relative'>
      <div className='relative'>
        <Calendar
          onClickDay={handleDayClick}
          onChange={handleDayClick}
          value={date}
          selectRange={true}
          showNeighboringMonth={true}
          formatShortWeekday={(locale, date) => {
            const weekday = date.toLocaleDateString(locale, { weekday: 'short' });
            const formattedShortWeekday = weekday.slice(0, 1).toUpperCase();
            return formattedShortWeekday;
          }}
          firstDayOfWeek={5}
          navigationAriaLabel={null}
          prevAriaLabel={null}
          nextAriaLabel={null}
          prev2AriaLabel={null}
          next2AriaLabel={null}
          next2Label={null}
          prev2Label={null}
          maxDate={maxDateBQ}
          minDate={minDateBQ}
          showFixedNumberOfWeeks={true}
          navigationLabel={({ date, view }) => {
            const month = date.toLocaleDateString('en-US', { month: 'short' });
            const year = date.toLocaleDateString('en-US', { year: 'numeric' });
            return (
              <div onClick={null}>
                <p className='text-[#C2C8D7] text-[13px]'>{`${month} ${year}`}</p>
              </div>
            );
          }}
        />
        <div className="absolute left-[164px] top-[290px] w-[105px] h-[32px] flex justify-between items-center">
          <div onClick={reset} className='w-[63px] h-8 cursor-pointer flex flex-row items-center justify-center mr-1'>
            <p className="text-[#6143e5] text-[14px] font-medium tracking-[1px]shadow-lg hover:text-[#7c61f8]">
              Cancel
            </p>
          </div>
          <button onClick={() => handleOkButton()} className="w-10 h-8 cursor-pointer rounded-full bg-primary-purple-400 flex  items-center justify-center shadow-lg hover:bg-primary-purple-300 pt-[2px]">
            <p className='text-[#f4f4f4] text-[16px] font-[400px] font-baloo shadow-xl'>
              OK
            </p>
          </button>
        </div>
      </div>
      { (Array.isArray(date) | clickOk ) ? (
        <div className='absolute left-[70px] top-[-34px] w-[180px] h-[26px] flex flex-row items-center justify-center text-center leading-[16px] font-baloo bg-[#35257A]'>
          {date[0] === date[1] ? (
            <span className='tracking-[4px] text-[#f4f4f4]'>
              {selectedShortMonth + ' - ' + selectedYear}
            </span>
          ) : (
            <span className={`text-[#f4f4f4] text-[15px] font-medium ${clickOk ? 'opacity-100' : 'opacity-70'}`}>
              {date[0].getDate().toString().padStart(2, '0') + '/' + (date[0].getMonth() + 1).toString().padStart(2, '0') + '/' + date[0].getFullYear() + ' - ' + date[1].getDate().toString().padStart(2, '0') + '/' + (date[1].getMonth() + 1).toString().padStart(2, '0') + '/' + date[1].getFullYear()}
            </span>
          )}
        </div>
      ) : (
        <div className='absolute left-[70px] top-[-33px] w-[180px] text-[15px] font-[600px] h-[26px] flex flex-row items-center justify-center tracking-[0px] text-center leading-[16px] text-[#f4f4f4] font-baloo bg-[#35257A]'>
          <span>
            {date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getFullYear()}
          </span>
        </div>
      )}
    </div>
  );
}