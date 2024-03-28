import { useDrillDown } from '@/hooks/useDrillDown';
import { increaseStatus } from '@/utils/helperFunctions';
import Loader from '@components/General/Loader';
import './GenericTableStyles.css';

const NON_ACCOUNTING_REPORT = 2;
const ACCOUNTING_REPORT = 1;

const GenericTable = ({
	columns,
	rows,
	onReduce,
	getTier1Data,
	resetTier2,
	reportType = ACCOUNTING_REPORT,
}) => {
	const { getDrillDown } = useDrillDown();
	const getLine = async data => {
		const drillDown = await getDrillDown({
			level: 1,
			reportLineId: data.id
		});
		getTier1Data(drillDown.data);
	};

	function varianceCell (cell, index) {
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
						{rows?.map((row, index) => {
							if (row.style === 'Total') {
								return (
									<tr
										key={`row-total-${index}`}
										className='genericTable_tableRow total_row'
										onClick={() => {
											getLine(row);
										}}
									>
										{reportType !== 2 && (
											<td
												key={`line-description-total-${index}`}
												className='genericTable_tableData'
											>
												{row.name}
											</td>
										)}
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
								)
							}
							return (
								<tr key={`row-${index}`} className='genericTable_tableRow'>
									{reportType !== NON_ACCOUNTING_REPORT && row.style === 'Title' ? (
										<td
											key={`line-description-${index}`}
											className='genericTable_tableData title_cell'
										>
											{row.name}
										</td>
									) : reportType !== NON_ACCOUNTING_REPORT && (
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
												className={`${index === 0 ? 'cursor-pointer' : ''
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
												className={`${index === 0 ? 'cursor-pointer' : ''
													} genericTable_tableData`}
											>
												{cell}
											</td>
										),
									)}
								</tr>
							)
						})}
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
