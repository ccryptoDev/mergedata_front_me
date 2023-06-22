import { increaseStatus } from '@/utils/helperFunctions';
import './GenericTableStyles.css';

const GenericTable = ({ withTotal = true, columns, rows, types }) => {
	console.table(rows);
	const rowsWithoutTotal = withTotal ? rows?.slice(0, -1) : rows;
	const totalRow = rows?.slice(-1);
	function varianceCell(cell, index) {
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
					<tr key={index}>
						{row.map((cell, index) =>
							typeof cell === 'string' && cell.includes('::') ? (
								varianceCell(cell, index)
							) : (
								<td key={index}>{cell}</td>
							),
						)}
					</tr>
				))}
				{withTotal &&
					totalRow?.slice(-1).map((row, index) => (
						<tr key={index} className='total-row'>
							{row.map((cell, index) =>
								typeof cell === 'string' && cell.includes('::') ? (
									varianceCell(cell, index)
								) : (
									<td key={index}>{cell}</td>
								),
							)}
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default GenericTable;
