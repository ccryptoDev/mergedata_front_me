import { useState, useContext, useEffect } from 'react';
import { useDate } from '@/hooks/useDate';
import ReportsContext from '@/context/ReportsProvider';
import { useStore } from '@/store/store';

const useDateLists = () => {
  const { setReport } = useContext(ReportsContext);
  const user = useStore(state => state.user);
  const { getDates } = useDate();
  const [datesBQ, setDatesBQ] = useState(null);
  const currentDateBQ = datesBQ?.currentDate;
  const yearsBackwardBQ = datesBQ?.yearsBackward;
  const currentDateBQS = currentDateBQ?.split('T')[0];
  const currentDate = new Date(currentDateBQS);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString('default', { month: 'short' });
  const monthNameToNumber =
    { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' };
  const currentNumericMonth = parseInt(monthNameToNumber[currentMonth]);
  const backwardMonths = (yearsBackwardBQ * 12) + 1;
  const previousMonthsList = [];
  const previousYearsList = [];

  const obtainDates = async clientId => {
    const datesBQ = await getDates(clientId);
    setDatesBQ(datesBQ);
  };

  useEffect(() => {
    obtainDates(user.clients[0].clientId);
  }, [])

  useEffect(() => {
    if (currentYear) {
      const formattedDateInitial = [`${currentYear}`];

      setReport((prevReport) => ({
        ...prevReport,
        period: formattedDateInitial,
      }));
    }
  }, [currentYear]);

  for (let i = 1; i < backwardMonths; i++) {
    const tempMonth = currentNumericMonth - i;
    const monthObject = {};
    const month = (tempMonth % 12 + 12) % 12;
    monthObject.id = i;
    monthObject.month = new Date(0, month).toLocaleString('en-US', { month: 'long' });
    const yearDiff = Math.floor(tempMonth / 12);
    monthObject.year = currentYear + yearDiff;
    previousMonthsList.push(monthObject);
  }

  for (let i = 0; i < yearsBackwardBQ; i++) {
    const tempYear = currentYear - i;
    const yearObject = {};
    yearObject.id = i;
    yearObject.year = tempYear;
    previousYearsList.push(yearObject);
  }

  return {
    previousMonthsList,
    previousYearsList,
    currentDate,
    currentYear,
    currentMonth,
  };

}

export { useDateLists };


