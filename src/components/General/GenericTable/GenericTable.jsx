import { useContext } from 'react';

import { increaseStatus } from '@/utils/helperFunctions';
import Loader from '@components/General/Loader';
import { useReport } from '@/hooks/useReport';
import ReportsContext from '@/context/ReportsProvider';
import './GenericTableStyles.css';


const GenericTable = ({ withTotal = true, columns, rows }) => {
	const { getDrillDown } = useReport();
	const { report } = useContext(ReportsContext);
	const rowsWithoutTotal = withTotal ? rows?.slice(0, -1) : rows;
	const totalRow = rows?.slice(-1);
	const getLine = id => {
		const drillDown = getDrillDown({
			level: 1,
			reportLineId: id,
			storeId: report?.storeId,
			period: report?.period,
		});
		console.log('drillDown', drillDown);
	}

	function varianceCell (cell, index) {
		const { icon, textColor } = increaseStatus(cell.split('::')[0]);
		return (
			<td key={index}>
				<div className='variance-cell'>
					<p className=''>
						<img src={icon} />
					</p>
					<p className={`${textColor}`}>{cell.split('::')[1]}</p>
				</div>
			</td>
		);
	}

	return (
		<div>
			{columns ? (
				<table>
					<thead>
						<tr className='table-header'>
							{columns?.map((column, index) => (
								<th key={index}>{column}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rowsWithoutTotal?.map((row, index) => (
							<tr
								key={`row-${index}`}
								onClick={() => { getLine(row); }}
							>
								{row.style === 'Title' ? (
									<td key={`line-description-${index}`} className='title-cell'>
										{row.name}
									</td>
								) : (
									<td key={`line-description-${index}`}>{row.name}</td>
								)}
								{row?.values?.map((cell, index) =>
									typeof cell === 'string' && cell.includes('::') ? (
										varianceCell(cell, index)
									) : (
										<td key={`cell-${index}`}>{cell}</td>
									),
								)}
							</tr>
						))}
						{withTotal &&
							totalRow?.slice(-1).map((row, index) => (
								<tr
									key={`row-total-${index}`}
									className='total-row'
									onClick={() => { getLine(row); }}
								>
									<td key={`line-description-total-${index}`}>{row.name}</td>
									{row?.values?.map((cell, index) =>
										typeof cell === 'string' && cell.includes('::') ? (
											varianceCell(cell, index)
										) : (
											<td key={`cell-total-${index}`}>{cell}</td>
										),
									)}
								</tr>
							))}
					</tbody>
				</table>
			) : columns && columns.length === 0 ? (
				<p className='font-public text-sm text-neutrals-00'>
					There&apos;s no data to show =(
				</p>
			) : (
				<div className='w-full min-h-[550px] flex justify-center items-center'>
					<Loader size={'large'} />
				</div>
			)}
		</div>
	);
};

export default GenericTable;
