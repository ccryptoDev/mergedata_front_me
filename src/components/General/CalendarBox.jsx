import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import "@/css/Calendar.css";

export default function CalendarBox({ settledMonth, settledYear, onHandleDate, selectedRange }) {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(settledMonth);
  const [selectedYear, setSelectedYear] = useState(settledYear);
  const [selectedRange1, setSelectedRange1] = useState(selectedRange);

  const handleDayClick = (value) => {
    onHandleDate(value);
    setSelectedDate(selectedDate);

    if (selectedRange.length === 1) {
      setSelectedRange1([selectedRange[0], value]);
    } else {
      setSelectedRange1([value]);
    }
    onHandleDate(selectedRange1);
  };

  useEffect(() => {
    selectedDate.setFullYear(selectedYear);
    setSelectedDate(selectedDate);
  }, [settledYear]);

  useEffect(() => {
    const monthMap = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12
    };

    const numericMonth = monthMap[selectedMonth];
    const newDate = new Date(selectedDate);
    newDate.setMonth(numericMonth - 1);
    setSelectedDate(newDate);
  }, [selectedMonth]);

  return (
    <>
      <div className="bg-[#35257A] z-10 w-[207.5px] h-auto flex justify-center rounded-b-xl pt-2">
        <div className="text-[8.2px] w-[206x]">
          <Calendar
            onChange={handleDayClick}
            value={selectedRange}
            hoverRange={selectedRange}
            activeStartDate={selectedDate}
            maxDetail='month'
            minDetail='month'
            className="bg-[#35257A] w-[190px] h-[180px] flex flex-col justify-center items-center font-bold text-center z-20"
            selectRange={true}
            selectedRange={selectedRange}
            showNeighboringMonth={true}
            showDoubleView={false}
            showNavigation={true}
            showFixedNumberOfWeeks={false}
            showWeekNumbers={false}
            next2Label={null}
            prev2Label={null}
            nextLabel={null}
            prevLabel={null}
            onClickMonth={null}
            onClickWeekNumber={null}
            onClickYear={null}
            navigationLabel={() => {
              return (selectedMonth)
            }}

            formatDay={(locale, date) => {
              const day = date.toLocaleDateString(locale, { day: 'numeric' });
              return (day)
            }}

            formatShortWeekday={(locale, date) => {
              const weekday = date.toLocaleDateString(locale, { weekday: 'short' });
              const formattedShortWeekday = weekday.slice(0, 1).toUpperCase() + weekday.slice(1, 2).toLowerCase();
              return (formattedShortWeekday)
            }}
          />
        </div>
      </div>
    </>
  )
}
