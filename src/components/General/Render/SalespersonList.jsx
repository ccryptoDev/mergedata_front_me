// import { useState } from 'react';
import Card from '@/components/Target/New/Card';
import arrowDown from '@/assets/svg/arrow_fat_down_icon.svg';
import arrowUp from '@/assets/svg/arrow_fat_up_icon.svg';
import { Tooltip } from 'react-tooltip';
import NameIncreaseDropdownDynamic from '@/components/Target/New/NameIncreaseDropdownDynamic';
import { useEffect, useState } from 'react';
import { useSumariesForASubSection } from '@/hooks/useSumariesForASubSection';
import { formatMoney, truncateString } from '@/utils/helperFunctions';
import { useLocation } from 'react-router-dom';

// Item component
const Item = ({ row, index, selection }) => {
	const location = useLocation();
	const path = location.pathname;
	const calculatePercentage = string => {
		const number = string === null ? 0 : parseFloat(string).toFixed(0);
		if (number >= 100) {
			return {
				number: `${number}%`,
				color: 'text-[#5EFF5A]',
				icon: arrowUp,
			};
		} else {
			return {
				number: `${number}%`,
				color: 'text-[#FF8181]',
				icon: arrowDown,
			};
		}
	};

	const getUnitsAmount = value => {
		if (value === null) return 0;
		if (path === '/targets/f&i') return formatMoney.format(value);
		if (selection[1] === 1 || selection.length <= 0) return value;
		return formatMoney.format(value);
	};

	const tooltipStyles = {
		backgroundColor: '#6043DD',
		color: '#fff',
		borderRadius: '0.5rem',
		fontSize: '12px',
	};

	return (
		<div className='h-[auto] flex items-center gap-2 text-neutrals-00'>
			<div className='flex items-center gap-2'>
				<p className='w-[12px] font-baloo text-sm'>{index + 1}</p>
				<div className='w-[30px] h-[30px] bg-neutrals-100 flex justify-center items-center rounded-full'>
					<p className='text-sm font-baloo text-purple-700'>{row.values[0]}</p>
				</div>
			</div>
			{/* person name */}
			<p className='w-[170px] pr-3 text-sm whitespace-nowrap border-r border-r-dashed border-r-neutrals-800'>
				{row.values[1]?.length > 32 ? (
					<>
						<Tooltip id={row.values[1]} style={tooltipStyles} />
						<p
							data-tooltip-id={row.values[1]}
							data-tooltip-content={row.values[1]}
							data-tooltip-place='top'
						>
							{truncateString(row.values[1])}
						</p>
					</>
				) : (
					row.values[1]
				)}
			</p>
			{/* person statistic */}
			<div className='w-[140px] flex items-center justify-end gap-2 '>
				<p className='font-baloo'>{getUnitsAmount(row.values[2])}</p>
				<div className='w-[50px] flex justify-end items-center gap-1'>
					<img src={calculatePercentage(row.values[3]).icon} alt='icon' />
					<p
						className={`text-xs flex items-center ${
							calculatePercentage(parseInt(row.values[3]).toFixed(0)).color
						}`}
					>
						{calculatePercentage(row.values[3]).number}
					</p>
				</div>
			</div>
		</div>
	);
};

const SalespersonList = ({ summary, onClick }) => {
	const [summaryUpdatedRows, setSummaryUpdatedRows] = useState(summary.rows);
	const [selection, setSelection] = useState([]);

	const { getReportUpdated } = useSumariesForASubSection();

	const getNewSummary = async selectedOptions => {
		const newSummary = await getReportUpdated({
			reportId: summary.reportConfig.id,
			selectedOptions,
		});
		setSummaryUpdatedRows(newSummary.rows);
	};

	useEffect(() => {
		setSummaryUpdatedRows(summary.rows);
	}, [summary]);

	return (
		<Card onClick={() => onClick()}>
			<div className='flex items-center gap-3'>
				<NameIncreaseDropdownDynamic
					changeSelectedOptions={selectedOptions => {
						getNewSummary(selectedOptions);
						setSelection(selectedOptions);
					}}
					title={summary.reportConfig.name}
					columns={summary.columns}
				/>
			</div>

			<div className='py-4 flex flex-col h-full justify-between gap-3'>
				{summaryUpdatedRows?.map((row, index) => (
					<Item key={index} row={row} index={index} selection={selection} />
				))}
			</div>
		</Card>
	);
};

export default SalespersonList;
