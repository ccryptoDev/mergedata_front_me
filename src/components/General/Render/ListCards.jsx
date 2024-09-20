import { useContext } from 'react';
import Card from '@/components/Target/New/Card';
import IconNameBarIncreaseDynamic from '@/components/Target/New/IconNameBarIncreaseDynamic';
import IconNameBarIncreaseTable from '@/components/Target/New/IconNameBarIncreaseTable';
import NameIncreaseDropdownDynamicBasic from '@/components/Target/New/NameIncreaseDropdownDynamicBasic';
import { usePage } from '@/hooks/usePage';
import { useSumariesForASubSection } from '@/hooks/useSumariesForASubSection';
import ReportsContext from '@/context/ReportsProvider';
import ClassicSelectable from '@/components/General/Render/ClassicSelectable';
import Bubble from '@/components/General/Render/Bubble';
import Chart from '@/components/General/Render/Chart';
import Quad from '@/components/General/Render/Quad';
import Dual from '@/components/General/Render/Dual';
import { useStore } from '@/store/store';
import SalespersonList from './SalespersonList';

function ListCards({
	dataToUse = null,
	dataReady = true,
	newStyle = 'flex flex-row flex-wrap gap-4 w-full h-[100%] lg:flex-col  newsummary-container',
}) {
	const { moveToPage } = usePage();
	const { report, setReportFormatted } = useContext(ReportsContext);
	const user = useStore(state => state.user);
	const section = useStore(state => state.section);
	const { summaries } = useSumariesForASubSection();
	const storesSelected = useStore(state => state.storesSelected);
	const setReport = useStore(state => state.setReport);
	const setStrWhere = useStore(state => state.setStrWhere);
	const setSourceOfReport = useStore(state => state.setSourceOfReport);
	const setView = useStore(state => state.setView);
	const setName = useStore(state => state.setName);
	const setStates = useStore(state => state.setStates);
	const setStatesList = useStore(state => state.setStatesList);
	const setReportTitle = useStore(state => state.setReportTitle);
	const setDrillReportId = useStore(state => state.setDrillReportId);
	const setToggleDrillMode = useStore(state => state.setToggleDrillMode);
	const setToggleChatMode = useStore(state => state.setToggleChatMode);

	const handleSummaryClick = reportData => {
		setReportFormatted(reportData);
		const path = reportData.name.toLowerCase();
		// replace all the spaces from path with empty string
		const pathWithSlashes = path.replace(/ /g, '');

		setToggleChatMode(false);
		setToggleDrillMode(false);
		const sourceOfReport = reportData.sourceOfReport.trim();
		setReport(+reportData.id);
		setReportTitle(reportData.name);
		setView(reportData.viewId || reportData.id);
		setStrWhere(reportData.strWhere);
		if (sourceOfReport === 'readReptProductsMS.php') {
			setDrillReportId(903);
		} else {
			setDrillReportId(900); // For Accounting Reports
		}
		setName(reportData.name);
		setSourceOfReport(sourceOfReport || 'readReptAccMS.php'); // It's not arriving the correct data
		const states = reportData.states
			? JSON.parse(reportData.states)
			: { name: 'Overview', value: 'default' };
		setStatesList(states);
		if (sourceOfReport === 'readReptModelsMS.php') {
			setStates({ name: 'Count', value: 'count' });
		} else if (
			sourceOfReport === 'readReptInvMS.php' ||
			sourceOfReport === 'readReptCITMS.php'
		) {
			setStates({ name: 'Overview', value: 'default' });
		} else if (
			sourceOfReport === 'readReptProductsMS.php' ||
			sourceOfReport === 'readReptSalesMS.php'
		) {
			setStates({ name: 'Default', value: 'default' });
		} else {
			setStates({ name: 'MTD', value: 'mtd' });
		}

		moveToPage(`/${section.name.toLowerCase()}/reports/${pathWithSlashes}`, {
			reportInfo: {
				id: reportData.id,
				clientId: user?.clientSelected,
				storeId: storesSelected,
				period: report.period,
				name: reportData.name,
				byTrend: false,
				isYTD: true,
				sourceOfReport: reportData.sourceOfReport,
			},
		});
	};

	const summariesToUse = dataToUse || summaries;

	return (
		<div className={newStyle}>
			{dataReady &&
				summariesToUse.map((summary, bigIndex) => {
					if (summary.style === 'bubble') {
						return (
							<Bubble
								key={`bubble-${bigIndex}-${summary.reportConfig.id}`}
								summary={summary}
								handleClick={() => handleSummaryClick(summary.reportConfig)}
							/>
						);
					}
					if (summary.style === 'chart') {
						return (
							<Chart
								key={`chart-${bigIndex}-${summary.reportConfig.id}`}
								summary={summary}
								handleSummaryClick={handleSummaryClick}
							/>
						);
					}
					if (summary.style === 'classic') {
						return (
							<Card
								key={`classic-${bigIndex}-${summary.reportConfig.id}`}
								height='h-[20.8em]'
								width='w-[23.3em]'
								margin={'mb-0'}
								gapY='gap-y-[1.5em]'
								onClick={() => handleSummaryClick(summary.reportConfig)}
							>
								<NameIncreaseDropdownDynamicBasic
									title={summary.reportConfig.name}
								/>
								{summary.rows && (
									<IconNameBarIncreaseTable>
										{summary.rows.map((row, index) => {
											return (
												<IconNameBarIncreaseDynamic
													key={index}
													title={row.name}
													value={row.values[0]}
													percentage={row.values[1]}
												/>
											);
										})}
									</IconNameBarIncreaseTable>
								)}
							</Card>
						);
					}
					if (summary.style === 'classic_selectable') {
						return (
							<ClassicSelectable
								key={`classic_selectable-${bigIndex}-${summary.reportConfig.id}`}
								summary={summary}
								handleSummaryClick={handleSummaryClick}
							/>
						);
					}
					if (summary.style === 'quad') {
						return (
							<Quad
								key={`quad-${bigIndex}-${summary.reportConfig.id}`}
								summary={summary}
							/>
						);
					}
					if (summary.style === 'dual') {
						return (
							<Dual
								key={`dual-${bigIndex}-${summary.reportConfig.id}`}
								summary={summary}
							/>
						);
					}
					if (summary.style === 'persons_list') {
						return (
							<SalespersonList
								key={`personList-${bigIndex}-${summary.reportConfig.id}`}
								summary={summary}
								onClick={() => handleSummaryClick(summary.reportConfig)}
							/>
						);
					}
					return <>No Card For That Style</>;
				})}
		</div>
	);
}

export default ListCards;
