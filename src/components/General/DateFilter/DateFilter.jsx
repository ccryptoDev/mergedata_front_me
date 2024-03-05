import { useEffect, useState } from 'react';
import ArrowDownIcon from '../Icons/ArrowDownIcon';
import Decision from '../Icons/Decision';
import classNames from 'classnames';
import MonthsSelection from './MonthsSelection';
import { useStore } from '@/store/store';
import moment from 'moment';
import { useDate } from '@/hooks/useDate';
import useClickOutside from '@/hooks/useClickOutside';

const DateFilter = () => {
	const { getDates } = useDate();
	const menu = [
		{
			name: 'Day',
			value: 'day',
			isActive: false,
		},
		{
			name: 'Month',
			value: 'month',
			isActive: true,
		},
	];
	const [menus, setMenus] = useState(menu);

	const [isOpen, setIsOpen] = useState(false);
	const period = useStore(state => state.period);
	const setPeriod = useStore(state => state.setPeriod);
	const setToggleDrillMode = useStore(state => state.setToggleDrillMode);
	const [months, setMonths] = useState([]);
	const mountDatesHandler = () => {
		if (!period[0]) {
			return ({});
		}
		const year = period[0]?.split('-')[0];
		const month = period[0]?.split('-')[1];
		return ({
			value: period[0],
			name: moment(`${year}-${month}-01`).format('MMMM'),
			year,
			month,
		});
	};
	const [selectedDate, setSelectedDate] = useState(mountDatesHandler());
	const { clients } = JSON.parse(localStorage.getItem('permissionsMergeData'));

	const getDatesHandler = async () => {
		const dates = await getDates(clients[0].clientId);
		const monthArray = generateDateArray(dates);
		setMonths(monthArray);
		if (!period[0]) {
			const currentDate = [moment(dates.lastUpdateDate).format('YYYY-MM')];
			setPeriod({ period: currentDate });
			const year = currentDate[0]?.split('-')[0];
			const month = currentDate[0]?.split('-')[1];
			setSelectedDate({
				value: currentDate[0],
				name: moment(`${year}-${month}-01`).format('MMMM'),
				year,
				month,
			});
		}
	};

	function generateDateArray (dates) {
		const currentDate = moment(dates.lastUpdateDate);
		const dateArray = [];

		for (let i = 0; i < dates.yearsBackward * 12; i++) {
			const previousDate = currentDate.clone().subtract(i, 'months');
			const formattedMonthLong = previousDate.format('MMMM');
			const formattedMonthShort = previousDate.format('MM');
			const formattedYear = previousDate.format('YYYY');
			dateArray.push({
				name: formattedMonthLong,
				year: formattedYear,
				isActive: !period[0] ? i === 0 : period[0] === `${formattedYear}-${formattedMonthShort}`,
				value: `${formattedYear}-${formattedMonthShort}`,
			});
		}

		return dateArray;
	}

	const dropdownContainer = classNames(
		`flex items-center gap-4 w-[214px] px-4 h-12 text-[0.875rem] text-[#EEECF1] rounded-xl 
        box-shadow-0px-13px-25px--13px-rgba-0-0-0-0-48 border-2
        hover:border-[#6043DD] hover:bg-[#161A3E)]
        relative z-10 cursor-pointer
        `,
		{
			'border-[#4832A6] bg-[#4832A6]': isOpen,
		},
		{
			'border-[#212A43] bg-dark-popup-00': !isOpen,
		},
	);

	const selectMenuHandler = (e, menu) => {
		e.stopPropagation();
		const updatedMenus = menus.map(item => {
			if (item.value === menu.value) {
				return { ...item, isActive: true };
			} else {
				return { ...item, isActive: false };
			}
		});
		setMenus(updatedMenus);
	};

	const selectDateHandler = (e, date) => {
		e.stopPropagation();
		const newMonths = months.map(item => {
			if (item.value === date.value) {
				return { ...item, isActive: true };
			} else {
				return { ...item, isActive: false };
			}
		});
		setMonths(newMonths);
		setSelectedDate(date);
		setPeriod({ period: [date.value] });
		setToggleDrillMode(false);
		setIsOpen(false);
		setToggleDrillMode(false);
	};

	useEffect(() => {
		getDatesHandler();
	}, []);

	const ref = useClickOutside(() => {
		setIsOpen(false);
	});

	return (
		<div
			className={dropdownContainer}
			onClick={() => setIsOpen(prevState => !prevState)}
			ref={ref}
		>
			<div className='flex gap-2 items-center'>
				<Decision name='Calendar' />
				<span className='leading-6'>Month</span>
			</div>
			<div className='flex font-semibold leading-6 gap-1 items-center'>
				<span>{selectedDate.name?.slice(0, 3)}</span>
				<span>{selectedDate.year}</span>
			</div>
			<ArrowDownIcon
				style={{
					transform: isOpen ? 'rotate(180deg)' : '',
					transition: 'transform 0.3s ease',
				}}
			/>
			{isOpen && (
				<div className='absolute top-14 right-0 w-[150%] bg-[#202449] rounded-xl'>
					<div className='flex flex-col gap-[0.62rem] p-[0.62rem]'>
						<div className='flex gap-4 bg-[#161A3E] rounded-xl'>
							{menus.map(item => (
								<div
									key={item.value}
									className={`flex justify-center items-center p-3 w-[50%] rounded-lg ${item.isActive ? 'bg-[#4832A6]' : ''
										}`}
									onClick={e => selectMenuHandler(e, item)}
								>
									<span>{item.name}</span>
								</div>
							))}
						</div>
						<div className='flex flex-col gap-2 px-2 py-3 font-baloo text-[0.8125rem] h-72 overflow-y-auto'>
							{menus[1].isActive
								? months.map(item => (
									<MonthsSelection
										key={item.name + item.year}
										item={item}
										selectDateHandler={selectDateHandler}
									/>
								))
								: null}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DateFilter;
