import { useContext } from 'react';

import ReportsContext from '@/context/ReportsProvider';
import { useReport } from '@/hooks/useReport';
import { increaseStatus } from '@/utils/helperFunctions';
import Loader from '@components/General/Loader';
import './GenericTableStyles.css';

const GenericTable = ({
	withTotal = true,
	columns,
	rows,
	onReduce,
	getTier1Data,
	resetTier2,
}) => {
	const { getDrillDown } = useReport();
	const { report } = useContext(ReportsContext);
	const rowsWithoutTotal = withTotal ? rows?.slice(0, -1) : rows;
	const totalRow = rows?.slice(-1);
	const getLine = async data => {
		const drillDown = await getDrillDown({
			level: 1,
			reportLineId: data.id,
			storeId: report?.storeId,
			period: report?.period,
		});
		getTier1Data(drillDown.data);
	};

	function varianceCell(cell, index) {
		const { icon, textColor } = increaseStatus(cell.split('::')[0]);
		return (
			<td key={index} className='genericTable_tableData'>
				<div className='variance_cell'>
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
				<table className='genericTable'>
					<thead className='genericTable_tableHead'>
						<tr className='genericTable_tableRow table_header'>
							{columns?.map((column, index) => (
								<th key={index} className='genericTable_tableHeader'>
									{column}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rowsWithoutTotal?.map((row, index) => (
							<tr key={`row-${index}`} className='genericTable_tableRow'>
								{row.style === 'Title' ? (
									<td
										key={`line-description-${index}`}
										className='genericTable_tableData title_cell'
									>
										{row.name}
									</td>
								) : (
									<td
										key={`line-description-${index}`}
										className='genericTable_tableData'
									>
										{row.name}
									</td>
								)}
								{row?.values?.map((cell, index) =>
									typeof cell === 'string' && cell.includes('::') ? (
										varianceCell(cell, index)
									) : index === 0 ? (
										<td
											key={`cell-${index}`}
											className={`${
												index === 0 ? 'cursor-pointer' : ''
											} genericTable_tableData`}
											onClick={() => {
												getLine(row);
												onReduce(true);
												resetTier2(false);
											}}
										>
											{cell}
										</td>
									) : (
										<td
											key={`cell-${index}`}
											className={`${
												index === 0 ? 'cursor-pointer' : ''
											} genericTable_tableData`}
										>
											{cell}
										</td>
									),
								)}
							</tr>
						))}
						{withTotal &&
							totalRow?.slice(-1).map((row, index) => (
								<tr
									key={`row-total-${index}`}
									className='genericTable_tableRow total_row'
									onClick={() => {
										getLine(row);
									}}
								>
									<td
										key={`line-description-total-${index}`}
										className='genericTable_tableData'
									>
										{row.name}
									</td>
									{row?.values?.map((cell, index) =>
										typeof cell === 'string' && cell.includes('::') ? (
											varianceCell(cell, index)
										) : (
											<td
												key={`cell-total-${index}`}
												className='genericTable_tableData'
											>
												{cell}
											</td>
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
