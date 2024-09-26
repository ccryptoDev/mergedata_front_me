import { useState } from 'react';
import Calendar from 'react-calendar';
import '@/components/Target/FilterDates/css/Calendar.css';

export default function CalendarBox({
  onHandleDate,
  selectedDate,
  currentDate,
  yearsBackwardBQ,
}) {

  const [date, setDate] = useState([selectedDate, selectedDate]);
  //Capture date and ranges from the calendar to be send to the FilterDates component
  const handleDayClick = (date) => {
    setDate(date);
    onHandleDate(date);
  };
  const maxDateBQ = new Date(currentDate);
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - yearsBackwardBQ);
  const minDateBQ = minDate;

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
            const LongMonth = date.toLocaleDateString('default', { month: 'long' });
            const month = LongMonth.slice(0, 3);
            const year = date.toLocaleDateString('default', { year: 'numeric' });
            return (
              <div onClick={null}>
                <p className='text-[#C2C8D7] text-[13px]'>{`${month} ${year}`}</p>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}