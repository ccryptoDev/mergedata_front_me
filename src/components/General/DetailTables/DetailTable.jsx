import { useEffect } from 'react';

import { useDrillDown } from '@/hooks/useDrillDown';
import { useReportData } from '@/hooks/useReportData';
import DetailTotalRow from './DetailTotalRow';
import styles from './DetailTable.module.css';


const DetailTable = ({
	withTotal = true,
	lineInfo,
	onShowDetailTable2,
	formattedReport,
	setFormattedReport,
	getTier2Data,
}) => {
	const { getDrillDown } = useDrillDown();
	const { formatReport } = useReportData();

	const rowsWithoutTotal = withTotal
		? formattedReport?.rows?.slice(0, -1)
		: formattedReport?.rows;
	const totalRow = formattedReport?.rows?.slice(-1);
	const getLine = async data => {
		const drillDown = await getDrillDown({
			level: 2,
			accountNo: data.values[0],
		});
		getTier2Data(drillDown.data);
	};

	useEffect(() => {
		lineInfo && setFormattedReport(formatReport(lineInfo, false));
	}, [lineInfo]);

	return (
		<div>
			<table className={styles.detailTable}>
				<thead className={styles.detailTable_tableHead}>
					<tr className={styles.detailTable_tableRow}>
						{formattedReport?.columns?.map((column, index) => (
							<th key={index} className={styles.detailTable_tableHeader}>
								{column}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rowsWithoutTotal?.map((row, index) => (
						<tr
							key={`row-${index}`}
							onClick={() => {
								getLine(row);
								onShowDetailTable2(true);
							}}
							className={styles.detailTable_tableRow}
						>
							{row?.values?.map((cell, index) => (
								<td
									key={`cell-${index}`}
									className={styles.detailTable_tableData}
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<DetailTotalRow total={totalRow} />
		</div>
	);
};

export default DetailTable;
