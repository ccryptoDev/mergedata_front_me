import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Loader from '@/components/General/Loader';
import { useStore } from '@/store/store';

const AgGridTable = ({ withTotalRow = true }) => {
	const [reportFormatted, setReportFormatted] = useState([]);
	const [reportLoader, setReportLoader] = useState(false);
	const [reportColumns, setReportColumns] = useState([]);
	const [reportRows, setReportRows] = useState([]);
	const [pinnedBottomRowData, setPinnedBottomRowData] = useState([]);
	const [reportFormattedDrillDown, setReportFormattedDrillDown] = useState([]);
	const [reportDrillDownLoader, setReportDrillDownLoader] = useState(false);
	const [reportColumnsDrillDown, setReportColumnsDrillDown] = useState([]);
	const [reportRowsDrillDown, setReportRowsDrillDown] = useState([]);
	const [pinnedBottomRowDataDrillDown, setPinnedBottomRowDataDrillDown] =
		useState([]);

	const gridRef = useRef();

	const clientId = useStore(state => state.clientId);
	const storesSelected = useStore(state => state.storesSelected);
	const period = useStore(state => state.period);
	const reportId = useStore(state => state.reportId);
	const reportLineId = useStore(state => state.reportLineId);
	const byTrend = useStore(state => state.byTrend);
	const byStore = useStore(state => state.byStore);
	const states = useStore(state => state.states);
	const comp = useStore(state => state.comp);
	const viewId = useStore(state => state.viewId);
	const strWhere = useStore(state => state.strWhere);
	const drillReportId = useStore(state => state.drillReportId);
	const drillWhere = useStore(state => state.drillWhere);
	const toggleDrillMode = useStore(state => state.toggleDrillMode);
	const toggleChatMode = useStore(state => state.toggleChatMode);
	const sourceOfReport = useStore(state => state.sourceOfReport);

	const sourceOfDrill = useStore(state => state.sourceOfDrill);

	// Paths
	const baseTablePath = 'https://mdadapter.mergedata.io/php/';
	const searchPath = `${baseTablePath}/${sourceOfReport}`;
	let drillPath = `${baseTablePath}/${sourceOfDrill}`;

	// grid settings
	const defaultColDef = useMemo(() => ({
		sortable: true,
		filter: true,
		resizable: true,
		wrapHeaderText: 'true',
		autoHeaderHeight: 'true',
		filterParams: {
			buttons: ['reset'],
		},
	}));

	// fetch reports
	const getReports = async () => {
		setReportLoader(true);

		if (storesSelected === null) return;
		try {
			const formData = new FormData();
			formData.append('clientId', clientId);
			formData.append('storeId[]', storesSelected);
			formData.append('periodId', period);
			formData.append('reportId', reportId);
			formData.append('byTrend', byTrend);
			formData.append('byStore', byStore);
			formData.append('states', states.value);
			formData.append('comp', comp);
			formData.append('viewId', viewId);
			formData.append('strWhere', strWhere);
			formData.append('drillMode', 0);
			formData.append('reportLineId', reportLineId);
			const response = await axios.post(searchPath, formData, {
				headers: {
					'Content-Type':
						'multipart/form-data; boundary=---011000010111000001101001',
				},
			});
			if (response.status === 200) {
				setReportLoader(false);
				setReportFormatted(response.data);
			}
		} catch (error) {
			console.log(error);
			setReportLoader(false);
		}
	};

	const getReportDrillDown = async empId => {
		setReportDrillDownLoader(true);
		if (searchPath === 'https://mdadapter.mergedata.io/php//') {
			drillPath = `${baseTablePath}/readReptSalesDrill.php`;
		}
		try {
			const formData = new FormData();
			formData.append('clientId', clientId);
			formData.append('storeId[]', storesSelected);
			formData.append('periodId', period);
			formData.append('reportId', reportId);
			formData.append('empId', empId);
			formData.append('drillId', drillReportId || 903);
			formData.append('lineId', empId);
			if (searchPath === 'https://mdadapter.mergedata.io/php//') {
				formData.append(
					'drillWhere',
					`and Trim(NS."SalesmanNo") = '@@empId' and NS."Condition" = 'New'`,
				);
			} else {
				formData.append('drillWhere', drillWhere);
			}
			const response = await axios.post(drillPath, formData, {
				headers: {
					'Content-Type':
						'multipart/form-data; boundary=---011000010111000001101001',
				},
			});
			if (response.status === 200) {
				setReportDrillDownLoader(false);
				setReportFormattedDrillDown(response.data);
			}
		} catch (error) {
			console.log(error);
			setReportDrillDownLoader(false);
		}
	};

	// table formatting
	const formatNumber = number => {
		return Math.floor(number)
			.toString()
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	};

	const currencyFormatter = params => {
		return '$' + formatNumber(params.value);
	};

	const accFormatter = params => {
		// const strCol = params.colDef.field;
		const strType = 'strType';

		if (params.data[strType] === 'dollar') {
			return currencyFormatter(params);
		}
		if (params.data[strType] === 'integer') {
			return formatNumber(params.value);
		}
		if (params.data[strType] === 'percentage_v') {
			return varianceRenderer(params);
		}
	};

	const User = ({ name }) => {
		const imageSrc = '/images/salesperson-default-avatar.png';
		return (
			<div className='flex items-center gap-2'>
				<img src={imageSrc} className='w-7 h-7 rounded-full' />
				<p>{name}</p>
			</div>
		);
	};

	const Rank = ({ value }) => {
		return (
			<div className='flex items-center gap-2'>
				<p>{value}</p>
				{value >= 0 && value <= 3 ? (
					<>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6.79776 8.59545C6.39763 9.1245 5.60271 9.12449 5.20259 8.59544L2.06985 4.45323C1.57167 3.79451 2.04154 2.85002 2.86744 2.85002L9.13296 2.85002C9.95886 2.85002 10.4287 3.79452 9.93054 4.45324L6.79776 8.59545Z'
								fill='#FF8181'
							/>
						</svg>
					</>
				) : value >= 4 && value <= 7 ? (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							viewBox='0 0 8 8'
							fill='none'
						>
							<rect x='3' y='3' width='2' height='2' rx='1' fill='#FFBB0D' />
						</svg>
					</>
				) : (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							height='12'
							viewBox='0 0 9 8'
							fill='none'
						>
							<path
								d='M3.98038 2.9546C4.3805 2.42555 5.17542 2.42555 5.57554 2.95461L6.99401 4.83015C7.49219 5.48887 7.02232 6.43336 6.19642 6.43336H3.35947C2.53357 6.43336 2.06369 5.48886 2.56189 4.83014L3.98038 2.9546Z'
								fill='#5EFF5A'
							/>
						</svg>
					</>
				)}
			</div>
		);
	};
	const Tracking = ({ params }) => {
		const valueToShow =
			accFormatter(params) || '$' + formatNumber(params.value);
		const value = params.value;
		return (
			<div className='flex items-center gap-2 justify-end'>
				<p>{valueToShow}</p>
				{value < 0 ? (
					<>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6.79776 8.59545C6.39763 9.1245 5.60271 9.12449 5.20259 8.59544L2.06985 4.45323C1.57167 3.79451 2.04154 2.85002 2.86744 2.85002L9.13296 2.85002C9.95886 2.85002 10.4287 3.79452 9.93054 4.45324L6.79776 8.59545Z'
								fill='#FF8181'
							/>
						</svg>
					</>
				) : value === 0 || value === '0' || value === '$0' ? (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							viewBox='0 0 8 8'
							fill='none'
						>
							<rect x='3' y='3' width='2' height='2' rx='1' fill='#FFBB0D' />
						</svg>
					</>
				) : (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							height='12'
							viewBox='0 0 9 8'
							fill='none'
						>
							<path
								d='M3.98038 2.9546C4.3805 2.42555 5.17542 2.42555 5.57554 2.95461L6.99401 4.83015C7.49219 5.48887 7.02232 6.43336 6.19642 6.43336H3.35947C2.53357 6.43336 2.06369 5.48886 2.56189 4.83014L3.98038 2.9546Z'
								fill='#5EFF5A'
							/>
						</svg>
					</>
				)}
			</div>
		);
	};

	const Percentage = ({ value }) => {
		return (
			<div className='flex justify-end items-center gap-2'>
				<p className='self-end'>{`${parseInt(value).toFixed(2)}%`}</p>
				{value >= '0' && value <= '3' ? (
					<>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6.79776 8.59545C6.39763 9.1245 5.60271 9.12449 5.20259 8.59544L2.06985 4.45323C1.57167 3.79451 2.04154 2.85002 2.86744 2.85002L9.13296 2.85002C9.95886 2.85002 10.4287 3.79452 9.93054 4.45324L6.79776 8.59545Z'
								fill='#FF8181'
							/>
						</svg>
					</>
				) : value >= '4' && value <= '7' ? (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							viewBox='0 0 8 8'
							fill='none'
						>
							<rect x='3' y='3' width='2' height='2' rx='1' fill='#FFBB0D' />
						</svg>
					</>
				) : (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							height='12'
							viewBox='0 0 9 8'
							fill='none'
						>
							<path
								d='M3.98038 2.9546C4.3805 2.42555 5.17542 2.42555 5.57554 2.95461L6.99401 4.83015C7.49219 5.48887 7.02232 6.43336 6.19642 6.43336H3.35947C2.53357 6.43336 2.06369 5.48886 2.56189 4.83014L3.98038 2.9546Z'
								fill='#5EFF5A'
							/>
						</svg>
					</>
				)}
			</div>
		);
	};

	const ImageAndNameCellRenderer = params => {
		const name = params.value;
		return name === undefined ? '' : <User name={name} />;
	};

	const RankCellRenderer = params => {
		const value = params.value;
		return value === undefined || value === 'Total' ? (
			'Total'
		) : (
			<Rank value={value} />
		);
	};

	const VarianceRenderer = params => {
		const valueFormatter = params.colDef.valueformatter;

		let value = params.value;
		if (value === null && valueFormatter === 'percentage_v') {
			value = '0.00%';
		}
		return value === undefined ? 'Total' : <Percentage value={value} />;
	};
	const varianceRenderer = params => {
		const valueFormatter = params.colDef.valueformatter;

		let value = params.value;
		if (value === null && valueFormatter === 'percentage_v') {
			value = '0.00%';
		}
		return value === undefined ? 'Total' : <Percentage value={value} />;
	};

	const trackingCellRenderer = params => {
		return params.value === undefined ? 'Total' : <Tracking params={params} />;
	};

	const cellClickedListener = useCallback(() => {
		const selectedRows = gridRef.current.api.getSelectedRows();
		getReportDrillDown(selectedRows[0].empId || selectedRows[0].Id);
	});

	// const clickMe = useCallback(event => {
	// 	console.log('clicked');
	// 	console.log(gridRef.current);
	// 	gridRef.current.api.deselectAll();
	// });

	const calculateTotal = (data, columnNames, variant) => {
		if (!data || !columnNames) return;
		const totalRow = {};
		let hasTotalRow = false;
		const firstField = columnNames[0]?.field;

		columnNames.forEach(column => {
			if (column.totalRow && column.visible !== 'false') {
				if (column.valueformatter === 'percentage_v') {
					const sum = data.reduce(
						(acc, row) => acc + (parseFloat(row[column.field]) || 0),
						0,
					);
					totalRow[column.field] = (sum / data.length || 0).toFixed(2) + '%';
				} else if (column.valueformatter === 'date') {
					totalRow[column.field] = '';
				} else {
					totalRow[column.field] = data.reduce((sum, row) => {
						const value = parseFloat(row[column.field]) || 0;
						return sum + value;
					}, 0);
				}
				hasTotalRow = true;
			} else {
				totalRow[column.field] = column.field === firstField ? 'Total' : '';
			}
		});

		variant === 'drill'
			? setPinnedBottomRowDataDrillDown([totalRow])
			: setPinnedBottomRowData([totalRow]);

		return hasTotalRow ? totalRow : null;
	};

	const onFilterChanged = () => {
		const totalRow = calculateFilteredTotals(reportFormatted.columns);
		gridRef.current.api.setPinnedBottomRowData([totalRow]);
	};

	const calculateFilteredTotals = columns => {
		const totalRow = {};
		const firstField = columns[0].field;

		const filteredData = [];
		gridRef.current.api.forEachNodeAfterFilter(node => {
			filteredData.push(node.data);
		});

		columns.forEach(colDef => {
			if (colDef.totalRow && colDef.visible !== false) {
				totalRow[colDef.field] = filteredData.reduce((sum, row) => {
					const value = parseFloat(row[colDef.field]) || 0;
					return sum + value;
				}, 0);
			} else {
				totalRow[colDef.field] = colDef.field === firstField ? 'Total' : '';
			}
		});
		return totalRow;
	};

	useEffect(() => {
		getReports();
	}, [
		storesSelected,
		reportId,
		byTrend,
		byStore,
		states,
		comp,
		viewId,
		strWhere,
		period,
	]);

	useEffect(() => {
		if (reportFormatted && reportFormatted.columns) {
			const updatedColumns = reportFormatted.columns.map(column => {
				if (column.valueformatter === 'dollar') {
					return {
						...column,
						valueFormatter: currencyFormatter,
					};
				} else if (column.cellRenderer === 'imageAndNameCellRenderer') {
					return {
						...column,
						cellRenderer: memo(ImageAndNameCellRenderer),
					};
				} else if (column.cellRenderer === 'rankCellRenderer') {
					return {
						...column,
						cellRenderer: memo(RankCellRenderer),
					};
				} else if (column.cellRenderer === 'varianceRenderer') {
					return {
						...column,
						cellRenderer: memo(VarianceRenderer),
					};
				}
				if (column.valueformatter === 'accFormatter') {
					return {
						...column,
						valueFormatter: accFormatter,
						cellRenderer:
							column.cellRenderer === 'changeRenderer'
								? trackingCellRenderer
								: null,
					};
				}
				return column;
			});

			setReportColumns(updatedColumns);
		}
		setReportRows(reportFormatted?.reportLines);
		calculateTotal(reportFormatted?.reportLines, reportFormatted?.columns);
	}, [reportFormatted]);

	// drill down
	useEffect(() => {
		if (reportFormattedDrillDown && reportFormattedDrillDown.columns) {
			const updatedColumns = reportFormattedDrillDown.columns.map(column => {
				if (column.valueformatter === 'dollar') {
					return {
						...column,
						valueFormatter: currencyFormatter,
					};
				} else if (column.cellRenderer === 'imageAndNameCellRenderer') {
					return {
						...column,
						cellRenderer: ImageAndNameCellRenderer,
					};
				} else if (column.cellRenderer === 'rankCellRenderer') {
					return {
						...column,
						cellRenderer: RankCellRenderer,
					};
				}
				return column;
			});

			setReportColumnsDrillDown(updatedColumns);
		}
		setReportRowsDrillDown(reportFormattedDrillDown?.reportLines);
		calculateTotal(
			reportFormattedDrillDown?.reportLines,
			reportFormattedDrillDown?.columns,
			'drill',
		);
	}, [reportFormattedDrillDown]);

	// drill down toggle
	useEffect(() => {
		if (toggleDrillMode || toggleChatMode) {
			const hiddenColumns = {
				...reportFormatted,
				columns: reportFormatted?.columns?.map((column, index) => {
					return {
						...column,
						hide: index !== 0 && index !== 2 ? 'true' : 'false',
					};
				}),
			};

			setReportFormatted(hiddenColumns);
		} else {
			const hiddenColumns = {
				...reportFormatted,
				columns: reportFormatted?.columns?.map((column, index) => {
					return {
						...column,
						hide: 'false',
					};
				}),
			};

			setReportFormatted(hiddenColumns);
		}
	}, [toggleDrillMode, toggleChatMode]);

	return (
		<div
			className={`ag-theme-alpine-dark ${
				toggleChatMode ? 'w-[30%]' : 'w-full'
			} flex gap-4 h-full`}
		>
			<div className={`${toggleDrillMode ? 'w-[25%]' : 'w-full'}`}>
				{reportLoader ? (
					<div className='w-full h-full flex justify-center items-center bg-[#212a43] rounded-[20px]'>
						<Loader />
					</div>
				) : (
					<>
						<AgGridReact
							ref={gridRef}
							columnDefs={reportColumns}
							rowData={reportRows}
							animateRows
							defaultColDef={defaultColDef}
							overlayLoadingTemplate='<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>'
							pinnedBottomRowData={withTotalRow && pinnedBottomRowData}
							onFilterChanged={onFilterChanged}
							rowSelection={'single'}
							onCellClicked={cellClickedListener}
						/>
					</>
				)}
			</div>
			<div className={`${toggleDrillMode ? 'block w-[75%]' : 'hidden'}`}>
				{reportDrillDownLoader ? (
					<div className='w-full h-full flex justify-center items-center bg-[#212a43] rounded-[20px]'>
						<Loader />
					</div>
				) : (
					<AgGridReact
						// ref={gridRef}
						columnDefs={reportColumnsDrillDown}
						rowData={reportRowsDrillDown}
						animateRows
						defaultColDef={defaultColDef}
						overlayLoadingTemplate='<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>'
						pinnedBottomRowData={pinnedBottomRowDataDrillDown}
						// rowSelection={'single'}
						// onSelectionChanged={onSelectionChanged}
					/>
				)}
			</div>
		</div>
	);
};
export default AgGridTable;
