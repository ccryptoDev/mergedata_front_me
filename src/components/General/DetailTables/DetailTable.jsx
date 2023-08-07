import ReportsContext from '@/context/ReportsProvider';
import { useReport } from '@/hooks/useReport';
import {
	formatReportsTable,
	periodDate,
	typePeriod,
} from '@/utils/helperFunctions';
import { useContext, useEffect } from 'react';
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
	const { getDrillDown } = useReport();
	const { section, stores, storesSelected, report, target } =
		useContext(ReportsContext);

	const formatReport = async () => {
		const sectionName = section?.name || 'Community';
		const reportName = lineInfo?.name || 'Misc/DOC';

		const timelapse = 'MTD'; // MTD or YTD
		const storesNames = [];
		for (let i = 0; i < stores.length; i++) {
			if (storesSelected.includes(stores[i].storeId)) {
				storesNames.push(stores[i].name);
			}
		}
		const storesName =
			storesNames?.toString().length <= 16
				? storesNames?.toString()
				: 'Multiple';
		const periodName = periodDate(
			report?.period,
			typePeriod(report?.period[0]),
		);
		setFormattedReport({
			...formatReportsTable(lineInfo, false),
			name: `${sectionName.replace(/\s/g, '_')}-${reportName.replace(
				/\s/g,
				'_',
			)}_${storesName}_${periodName.replace(/\s/g, '_')}`,
			reportName,
			timelapse,
			storesName,
			periodName,
			target: target.name,
		});
	};

	const rowsWithoutTotal = withTotal
		? formattedReport?.rows?.slice(0, -1)
		: formattedReport?.rows;
	const totalRow = formattedReport?.rows?.slice(-1);
	const getLine = async data => {
		const drillDown = await getDrillDown({
			level: 2,
			accountNo: data.values[0],
			storeId: report?.storeId,
			period: report?.period,
		});
		getTier2Data(drillDown.data);
	};

	useEffect(() => {
		lineInfo && formatReport();
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
