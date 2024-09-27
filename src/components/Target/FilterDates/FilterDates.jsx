import { useState, useContext, useEffect } from 'react';
import { useDateLists } from '@/components/Target/FilterDates/useDateLists';
import ReportsContext from '@/context/ReportsProvider';
import YearFilter from '@/components/Target/FilterDates/YearFilter';
import MonthFilter from '@/components/Target/FilterDates/MonthFilter';
import CalendarFilter from '@/components/Target/FilterDates/CalendarFilter';

export default function FilterDates ({ daySelectorEnabled = false, monthSelectorEnabled = false, yearSelectorEnabled = false }) {

	const localeOptions = {
		month: 'long',
		year: 'numeric',
		day: 'numeric'
	};
	const { currentDate, currentYear, currentMonth, previousMonthsList, previousYearsList } = useDateLists();
	const { setReport } = useContext(ReportsContext);

	const [reset, setReset] = useState(false);
	const [ok, setOk] = useState(false);

	const [date, setDate] = useState([new Date]);
	const [selectedButton, setSelectedButton] = useState('year');
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	useEffect(() => {
		if (currentYear) {
			setSelectedYear(currentYear);
		}
	}, [currentYear]);
	const [selectedMonth, setSelectedMonth] = useState(new Date().toLocaleString('en-US', localeOptions, { month: 'long' }));
	// setSelectedMonth(tempDate.toLocaleString('en-US', localeOptions));
	useEffect(() => {
		if (currentMonth) {
			setSelectedMonth(currentMonth);
		}
	}, [currentMonth]);
	const [selectedShortMonth, setSelectedShortMonth] = useState(new Date().toLocaleString('en-US', localeOptions, { month: 'short' }));
	useEffect(() => {
		if (currentMonth) {
			setSelectedShortMonth(currentMonth.slice(0, 3));
		}
	}, [currentMonth]);

	useEffect(() => {
		if (currentMonth) {
			const shortMonth = currentMonth.slice(0, 3);
			setSelectedShortMonth(shortMonth);
		}
	}, [currentMonth]);

	const onHandleDate = (value) => {
		const tempDate = value;
		setDate(tempDate);
	};

	const confirmDate = (date) => {

		if ((date.length === 2) && (date[0] !== date[1])) {
			setOk(true);
			setReset(false)
			const tempDate = date;
			setDate(tempDate)
		} else { null }
	}
	const confirmCancel = (clickCancel) => {
		setTimeout(() => {
			onClickedYearFilterButton();
			setReset(clickCancel);
			setOk(false);
		}, 0);
	};

	//Send the initial date to the ReportContext
	useEffect(() => {
		if (currentYear) {
			const formattedDateInitial = [`${currentYear}`];
			setReport((prevReport) => ({
				...prevReport,
				period: formattedDateInitial,
			}));
		}
	}, [currentYear]);

	useEffect(() => {
		setSelectedShortMonth(selectedMonth.slice(0, 3));
	}, [selectedMonth]);

	//Send the Date to the ReportContext, depending on the selectedButton, anytime the date changes
	useEffect(() => {
		if (selectedButton === 'year') {
			const formattedDateY = [`${selectedYear}`];
			setReport((prevReport) => ({
				...prevReport,
				period: formattedDateY,
			}));
		} else if (selectedButton === 'month') {
			const monthDate = new Date(`${selectedMonth} 1, 2021`);
			const numMonth = (monthDate.getMonth() + 1).toString().padStart(2, '0');
			const formattedDateM = [`${selectedYear}-${numMonth}`];
			setReport((prevReport) => ({
				...prevReport,
				period: formattedDateM,
			}));
		} else if (selectedButton === 'day' && date.length === 2) {
			const formattedDateD = date.map((d) => {
				const year = d.getFullYear();
				const month = String(d.getMonth() + 1).padStart(2, '0');
				const day = String(d.getDate()).padStart(2, '0');
				return `${year}-${month}-${day}`;
			});
			setReport((prevReport) => ({
				...prevReport,
				period: [formattedDateD],
			}));
		}
	}, [selectedYear, selectedMonth, selectedButton, ok, date]);
	// This bring the selected Year from the YearFilter component to the FilterDates component
	const onHandleSelectedYearFromList = (clickedYearFromList) => {
		setSelectedYear(clickedYearFromList);
	}
	// This bring the selected Month clicked from the MonthFilter list to the FilterDates component
	const onHandleSelectedMonthFromList = (month, year) => {
		setSelectedMonth(month);
		setSelectedYear(year);
	}
	// This change the status of the selectedButton to month when the MonthFilter component is clicked
	const onClickedMonthFilterButton = () => {
		setSelectedButton('month');
		setReset(false);
		setOk(false);
	}
	// This change the status of the selectedButton to year when the YearFilter component is clicked
	const onClickedYearFilterButton = () => {
		setSelectedButton('year');
		setReset(false);
		setOk(false);
	}
	// This change the status of the selectedButton to day when the CalendarFilter component is clicked
	const onClickedDayFilterButton = () => {
		setSelectedButton('day');
		setReset(false);
	}
	

	return (

		<div className='relative flex flex-row items-center justify-between gap-x-[3em] w-auto h-[2.1875em]'  >
			{daySelectorEnabled && (
				<div onClick={onClickedDayFilterButton} >
					<CalendarFilter
						onHandleDate={onHandleDate}
						selectedButton={selectedButton}
						selectedMonth={selectedMonth}
						selectedYear={selectedYear}
						selectedShortMonth={selectedShortMonth}
						confirmCancel={confirmCancel}
						confirmDate={confirmDate}
						ok={ok}
						reset={reset}
					/>
				</div>
			)}
			{monthSelectorEnabled && (
				<div onClick={onClickedMonthFilterButton} >
					<MonthFilter
						currentDate={currentDate}
						currentYear={currentYear}
						currentMonth={currentMonth}
						selectedButton={selectedButton}
						onHandleSelectedMonthFromList={onHandleSelectedMonthFromList}
						selectedYear={selectedYear}
						selectedMonth={selectedMonth}
						selectedShortMonth={selectedShortMonth}
						previousMonthsList={previousMonthsList}
					/>
				</div>
			)}
			{yearSelectorEnabled && (
				<div onClick={onClickedYearFilterButton} >
					<YearFilter
						currentDate={currentDate}
						selectedButton={selectedButton}
						onHandleSelectedYearFromList={onHandleSelectedYearFromList}
						selectedYear={selectedYear}
						onClick={onClickedYearFilterButton}
						previousYearsList={previousYearsList}
					/>
				</div>
			)}
		</div>
	);
}
