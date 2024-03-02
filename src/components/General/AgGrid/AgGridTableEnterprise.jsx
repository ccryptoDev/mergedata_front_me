import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Loader from '@/components/General/Loader';
import { useStore } from '@/store/store';
import { chatClient } from '@/routes/App';

const AgGridTableEnterprise = ({ showPinnedBottomData = true }) => {
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
	const storeId = useStore(state => state.storeId);
	const storesSelected = useStore(state => state.storesSelected);
	const period = useStore(state => state.period);
	const reportId = useStore(state => state.reportId);
	const byTrend = useStore(state => state.byTrend);
	const byStore = useStore(state => state.byStore);
	const states = useStore(state => state.states);
	const comp = useStore(state => state.comp);
	const viewId = useStore(state => state.viewId);
	const strWhere = useStore(state => state.strWhere);
	const drillReportId = useStore(state => state.drillReportId);
	const toggleDrillMode = useStore(state => state.toggleDrillMode);
	const toggleChatMode = useStore(state => state.toggleChatMode);
	const sourceOfReport = useStore(state => state.sourceOfReport);
	const subSectionName = useStore(state => state.subSectionName);
	const setCurrentChat = useStore(state => state.setCurrentChat);
	const chatToken = useStore(state => state.chatToken);
	const setToggleDrillMode = useStore(state => state.setToggleDrillMode);

	// Paths
	const baseTablePath = 'https://mdadapter.mergedata.io/php/';
	const searchPath = `${baseTablePath}${sourceOfReport}`;
	const servicePath = `${baseTablePath}readReptServiceMS.php`;
	const salesPath = `${baseTablePath}readReptSalesMS.php`;
	const salesDrillDownPath = `${baseTablePath}readReptSalesDrill.php`;

	// get report path according to report selected
	const getReportFetchPath = reportId => {
		if (sourceOfReport?.trim()) return searchPath;
		if (reportId === 80 || reportId === 81) return servicePath;
		return salesPath;
	};

	// fetch reports
	const getReports = async () => {
		setReportLoader(true);
		setToggleDrillMode(false);
		setReportColumnsDrillDown([]);
		setReportRowsDrillDown([]);
		setReportFormattedDrillDown([]);
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

			const response = await axios.post(
				getReportFetchPath(reportId),
				formData,
				{
					headers: {
						'Content-Type':
							'multipart/form-data; boundary=---011000010111000001101001',
					},
				},
			);
			if (response.status === 200) {
				setReportLoader(false);
				setReportFormatted(response.data);
			}
		} catch (error) {
			console.log(error);
			setReportLoader(false);
		}
	};

	// drill down reports
	function drillDownTrim() {
		if (reportId === 82) {
			return 'SalesmanNo';
		} else if (reportId === 83) {
			return 'SalesManagerNo';
		} else if (reportId === 84) {
			return 'FinanceManagerNo';
		}
		return '';
	}

	// get report path according to report selected
	const getReportFetchDrillPath = () => {
		if (sourceOfReport === 'readReptAccMS.php') {
			return `${baseTablePath}readReptAccDrill.php`; // Ask william to add source of report to lines
		} else if (sourceOfReport === 'readReptInvMS.php') {
			return `${baseTablePath}readReptInvDrill.php`;
		}
		return salesDrillDownPath;
	};

	const getReportDrillDown = async empId => {
		setReportDrillDownLoader(true);
		try {
			const formData = new FormData();
			formData.append('clientId', clientId);
			formData.append('storeId[]', storesSelected || storeId);
			formData.append('periodId', period);
			formData.append('reportId', reportId === null ? 82 : reportId);
			formData.append('empId', empId);
			formData.append('drillId', drillReportId);
			let drillWhereValue = null;
			if (sourceOfReport === 'readReptProductsMS.php') {
				drillWhereValue = `and NS."SalesmanNo" = '@@empId' and NS."Condition" = 'New'`;
			} else if (strWhere !== null && sourceOfReport === 'readReptInvMS.php') {
				drillWhereValue = `and NGLT."Control1" like '%@@stkNo%'`;
			} else if (strWhere !== null) {
				drillWhereValue = `and Trim(NS."${drillDownTrim(
					reportId,
				)}") = '@@empId' and NS."Condition" = '${
					strWhere === '' ? 'New' : strWhere
				}'`;
			}
			formData.append('drillWhere', drillWhereValue);
			formData.append('lineId', empId);

			const response = await axios.post(getReportFetchDrillPath(), formData, {
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
	const formatNumberParams = params => {
		return Math.floor(params.value)
			.toString()
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	};
	const formatNumberParamsOneDigit = params => {
		return `${+parseFloat(params.value).toFixed(1)}`;
	};
	const formatNumber = number => {
		return Math.floor(number)
			.toString()
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	};
	const currencyFormatter = params => {
		return '$' + formatNumber(params.value);
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
	const Percentage = ({ value }) => {
		return (
			<div className='flex justify-end items-center gap-2'>
				<p className='self-end'>{`${parseFloat(value).toFixed(2)}%`}</p>
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

	const imageAndNameCellRenderer = params => {
		const name = params.value;
		return name === undefined ? '' : <User name={name} />;
	};
	const rankCellRenderer = params => {
		const value = params.value;
		return value === undefined ? 'Total' : <Rank value={value} />;
	};
	const varianceRenderer = params => {
		const valueFormatter = params.colDef.valueformatter;

		let value = params.value;
		if (value === null && valueFormatter === 'percentage_v') {
			value = '0.00%';
		}
		return value === undefined ? 'Total' : <Percentage value={value} />;
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
	const trackingCellRenderer = params => {
		return params.value === undefined ? 'Total' : <Tracking params={params} />;
	};
	// const totalDrillCellRenderer = params => {
	// 	return params.value === undefined ? <p style={{ fontWeight: 'bold' }}>Total</p> : <p>{params.value}</p>;
	// };

	const createData = () => {
		const result = [];
		// Totals
		const StockNumber = 'Total';
		const Control1 = 'Total';
		// Service Advisor
		let Sales = 0;
		let Gross = 0;
		let pmRo = 0;
		let RoPmT = 0;
		let RoPmV = 0;
		// Technician
		let ELR = 0;
		let Labor = 0;
		let Ro = 0;
		let Hours = 0;
		let pmLabor = 0;
		let LaborPmT = 0;
		let LaborPmV = 0;
		let pmHours = 0;
		let HoursPmT = 0;
		let HoursPmV = 0;
		let pmELR = 0;
		let ELRPmT = 0;
		let ELRPmV = 0;
		// sales
		let FEGross = 0;
		let BEGross = 0;
		let Deal = 0;
		let pmDeal = 0;
		let DealPmT = 0;
		let DealPmV = 0;
		let pmSales = 0;
		let SalesPmT = 0;
		let SalesPmV = 0;
		let pmGross = 0;
		let GrossPmT = 0;
		let GrossPmV = 0;
		let pmFEGross = 0;
		let FEGrossPmT = 0;
		let FEGrossPmV = 0;
		let pmBEGross = 0;
		let BEGrossPmT = 0;
		let BEGrossPmV = 0;
		let FrontGross = 0;
		let BackGross = 0;
		// Accounting
		let MTD = 0;
		let MTDPmT = 0;
		let MTDPmV = 0;
		let YTD = 0;
		let YTDPmT = 0;
		let YTDPmV = 0;
		let pmMTD = 0;
		let pmYTD = 0;
		let pyMTD = 0;
		let pyYTD = 0;
		let VarPm = 0;
		// Accounting By Store
		let st5 = 0;
		let st7 = 0;
		let st8 = 0;
		let st9 = 0;
		let st10 = 0;
		// Accounting By Trend
		let mth1 = 0;
		let mth2 = 0;
		let mth3 = 0;
		let mth4 = 0;
		let mth5 = 0;
		let mth6 = 0;
		let mth7 = 0;
		let mth8 = 0;
		let mth9 = 0;
		let mth10 = 0;
		let mth11 = 0;
		let mth12 = 0;
		let mth13 = 0;
		// inventory New + Used
		let Price = 0;
		let FloorPlan = 0;
		let Postamount = 0;
		// Products
		let PVR = 0;
		let finRes = 0;
		let maint = 0;
		let afterInc = 0;
		let gap = 0;
		let other = 0;
		let finResC = 0;
		let maintC = 0;
		let afterIncC = 0;
		let gapC = 0;
		let otherC = 0;
		let finResP = 0;
		let maintP = 0;
		let afterIncP = 0;
		let gapP = 0;
		let otherP = 0;
		// Models
		let InvCnt = 0;
		let DaysSupply = 0;
		let Countmtd = 0;
		let CountPm = 0;
		let TrackingPm = 0;
		let Amountmtd = 0;
		let AmountPm = 0;
		let AmountPy = 0;
		let TrackingPy = 0;
		let VarPy = 0;
		// Financial Statement
		let MTDPyT = 0;
		let MTDPyV = 0;

		reportFormatted?.reportLines?.forEach(row => {
			Sales += +row.Sales;
			Gross += +row.Gross;
			pmDeal += +row.pmDeal;
			DealPmT += +row.DealPmT;
			DealPmV += +row.DealPmV;
			pmSales += +row.pmSales;
			SalesPmT += +row.SalesPmT;
			SalesPmV += +row.SalesPmV;
			pmGross += +row.pmGross;
			GrossPmT += +row.GrossPmT;
			GrossPmV += +row.GrossPmV;
			pmFEGross += +row.pmFEGross;
			FEGrossPmT += +row.FEGrossPmT;
			FEGrossPmV += +row.FEGrossPmV;
			pmBEGross += +row.pmBEGross;
			BEGrossPmT += +row.BEGrossPmT;
			BEGrossPmV += +row.BEGrossPmV;
			ELR += +row.ELR;
			Labor += +row.Labor;
			Ro += +row.Ro;
			pmRo += +row.pmRo;
			RoPmT += +row.RoPmT;
			RoPmV += +row.RoPmV;
			Hours += +row.Hours;
			pmLabor += +row.pmLabor;
			LaborPmT += +row.LaborPmT;
			LaborPmV += +row.LaborPmV;
			pmHours += +row.pmHours;
			HoursPmT += +row.HoursPmT;
			HoursPmV += +row.HoursPmV;
			pmELR += +row.pmELR;
			ELRPmT += +row.ELRPmT;
			ELRPmV += +row.ELRPmV;
			FEGross += +row.FEGross;
			BEGross += +row.BEGross;
			Deal += +row.Deal;
			FrontGross += +row.FrontGross;
			BackGross += +row.BackGross;
			MTD += +row.MTD;
			MTDPmT += +row.MTDPmT;
			MTDPmV += +row.MTDPmV;
			YTD += +row.YTD;
			YTDPmT += +row.YTDPmT;
			YTDPmV += +row.YTDPmV;
			pmMTD += +row.pmMTD;
			pmYTD += +row.pmYTD;
			pyMTD += +row.pyMTD;
			pyYTD += +row.pyYTD;
			st5 += +row.st5;
			st7 += +row.st7;
			st8 += +row.st8;
			st9 += +row.st9;
			st10 += +row.st10;
			mth1 += +row.mth1;
			mth2 += +row.mth2;
			mth3 += +row.mth3;
			mth4 += +row.mth4;
			mth5 += +row.mth5;
			mth6 += +row.mth6;
			mth7 += +row.mth7;
			mth8 += +row.mth8;
			mth9 += +row.mth9;
			mth10 += +row.mth10;
			mth11 += +row.mth11;
			mth12 += +row.mth12;
			mth13 += +row.mth13;
			Price += +row.Price;
			FloorPlan += +row.FloorPlan;
			Postamount += +row.Postamount;
			VarPm += +row.VarPm;
			PVR += +row.PVR;
			finRes += +row.finRes;
			maint += +row.maint;
			afterInc += +row.afterInc;
			gap += +row.gap;
			other += +row.other;
			finResC += +row.finResC;
			maintC += +row.maintC;
			afterIncC += +row.afterIncC;
			gapC += +row.gapC;
			otherC += +row.otherC;
			finResP += +row.finResP;
			maintP += +row.maintP;
			afterIncP += +row.afterIncP;
			gapP += +row.gapP;
			otherP += +row.otherP;
			InvCnt += +row.InvCnt;
			DaysSupply += +row.DaysSupply;
			Countmtd += +row.Countmtd;
			CountPm += +row.CountPm;
			TrackingPm += +row.TrackingPm;
			Amountmtd += +row.Amountmtd;
			AmountPm += +row.AmountPm;
			AmountPy += +row.AmountPy;
			TrackingPy += +row.TrackingPy;
			VarPy += +row.VarPy;
			MTDPyT += +row.MTDPyT;
			MTDPyV += +row.MTDPyV;
		});
		result.push({
			Sales,
			Gross,
			pmDeal,
			DealPmT,
			DealPmV,
			pmSales,
			SalesPmT,
			SalesPmV,
			pmGross,
			GrossPmT,
			GrossPmV,
			pmFEGross,
			FEGrossPmT,
			FEGrossPmV,
			pmBEGross,
			BEGrossPmT,
			BEGrossPmV,
			ELR,
			Labor,
			Ro,
			pmRo,
			RoPmT,
			RoPmV,
			Hours: Hours.toFixed(1),
			pmLabor,
			LaborPmT,
			LaborPmV,
			pmHours,
			HoursPmT,
			HoursPmV,
			pmELR,
			ELRPmT,
			ELRPmV,
			FEGross,
			BEGross,
			Deal,
			FrontGross,
			BackGross,
			// Accounting
			MTD: '$' + formatNumber(MTD),
			MTDPmT,
			MTDPmV,
			YTD: '$' + formatNumber(YTD),
			YTDPmT,
			YTDPmV,
			pmMTD: '$' + formatNumber(pmMTD),
			pmYTD: '$' + formatNumber(pmYTD),
			pyMTD,
			pyYTD,
			st5: '$' + formatNumber(st5),
			st7: '$' + formatNumber(st7),
			st8: '$' + formatNumber(st8),
			st9: '$' + formatNumber(st9),
			st10: '$' + formatNumber(st10),
			mth1: '$' + formatNumber(mth1),
			mth2: '$' + formatNumber(mth2),
			mth3: '$' + formatNumber(mth3),
			mth4: '$' + formatNumber(mth4),
			mth5: '$' + formatNumber(mth5),
			mth6: '$' + formatNumber(mth6),
			mth7: '$' + formatNumber(mth7),
			mth8: '$' + formatNumber(mth8),
			mth9: '$' + formatNumber(mth9),
			mth10: '$' + formatNumber(mth10),
			mth11: '$' + formatNumber(mth11),
			mth12: '$' + formatNumber(mth12),
			mth13: '$' + formatNumber(mth13),
			Price,
			FloorPlan,
			Postamount,
			StockNumber,
			Control1,
			VarPm,
			// Products
			PVR,
			finRes,
			maint,
			afterInc,
			gap,
			other,
			finResC,
			maintC,
			afterIncC,
			gapC,
			otherC,
			finResP,
			maintP,
			afterIncP,
			gapP,
			otherP,
			// Models
			InvCnt,
			DaysSupply,
			Countmtd,
			CountPm,
			TrackingPm,
			Amountmtd,
			AmountPm,
			AmountPy,
			TrackingPy,
			VarPy,
			// Financial Statement
			MTDPyT,
			MTDPyV,
		});
		setPinnedBottomRowData(result);
	};
	const createDataDrillDown = () => {
		const result = [];

		let FrontGross = 0;
		let BackGross = 0;
		// Accounting Drill Down
		let Postamount = 0;
		// let StockNumber = 0;
		// let DealDate = 0;
		// let Year = 0;
		// let Make = 0;
		// let Model = 0;
		// let ZipCode = 0;
		// let CustName = 0;

		reportFormattedDrillDown?.reportLines?.forEach(row => {
			FrontGross += +row.FrontGross;
			BackGross += +row.BackGross;
			Postamount += +row.Postamount;
		});
		result.push({
			FrontGross,
			BackGross,
			Postamount,
		});
		setPinnedBottomRowDataDrillDown(result);
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

	const createOrSelectChannel = async (control1, mdType) => {
		await chatClient.connectUser({ id: 'william-md' }, chatToken);

		const channelName = control1;

		try {
			const filter = { type: 'messaging', id: { $eq: channelName } };
			const existingChannels = await chatClient.queryChannels(filter);

			let invChannel;
			if (existingChannels.length > 0) {
				invChannel = existingChannels[0];
			} else {
				invChannel = chatClient.channel('messaging', channelName, {
					name: control1,
					members: ['william-md'],
					mdtype: mdType,
				});
				await invChannel.create();
			}
			// console.log('invChannel', invChannel);
			setCurrentChat(invChannel);
		} catch (error) {
			console.error('Error creating or fetching inventory channel:', error);
		}
	};

	const onSelectionChanged = async () => {
		setReportColumnsDrillDown([]);
		setReportRowsDrillDown([]);
		setReportFormattedDrillDown([]);
		const selectedRows = gridRef.current.api.getSelectedRows();
		if (selectedRows[0].Drillable !== 'f') {
			getReportDrillDown(selectedRows[0].empId || selectedRows[0].Id); // Id for accounting
		} else {
			alert('Drill Down Not Available');
		}
		if (selectedRows[0].StockNumber && subSectionName !== '') {
			await createOrSelectChannel(selectedRows[0].StockNumber, subSectionName);
		}
	};

	useEffect(() => {
		getReports();
	}, [
		reportId,
		byTrend,
		byStore,
		states,
		comp,
		viewId,
		strWhere,
		period,
		storesSelected,
	]);

	useEffect(() => {
		if (reportFormatted && reportFormatted.columns) {
			const updatedColumns = reportFormatted.columns.map(column => {
				if (column.valueformatter === 'dollar') {
					return {
						...column,
						valueFormatter: currencyFormatter,
					};
				}
				if (column.valueformatter === 'integer') {
					return {
						...column,
						valueFormatter: formatNumberParams,
					};
				}
				if (column.valueformatter === 'integer1') {
					return {
						...column,
						valueFormatter: formatNumberParamsOneDigit,
					};
				}
				if (column.cellRenderer === 'imageAndNameCellRenderer') {
					return {
						...column,
						cellRenderer: imageAndNameCellRenderer,
					};
				}
				if (column.cellRenderer === 'rankCellRenderer') {
					return {
						...column,
						cellRenderer: rankCellRenderer,
					};
				}
				if (column.cellRenderer === 'varianceRenderer') {
					return {
						...column,
						cellRenderer: varianceRenderer,
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
				if (column.cellRenderer === 'changeRenderer') {
					return {
						...column,
						cellRenderer: trackingCellRenderer,
					};
				}
				return column;
			});

			setReportColumns(updatedColumns);
		}
		setReportRows(reportFormatted?.reportLines);
		createData();
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
				}
				if (column.cellRenderer === 'imageAndNameCellRenderer') {
					return {
						...column,
						cellRenderer: imageAndNameCellRenderer,
					};
				}
				if (column.cellRenderer === 'rankCellRenderer') {
					return {
						...column,
						cellRenderer: rankCellRenderer,
					};
				}
				if (column.cellRenderer === 'varianceRenderer') {
					return {
						...column,
						cellRenderer: varianceRenderer,
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
				if (column.cellRenderer === 'changeRenderer') {
					return {
						...column,
						cellRenderer: trackingCellRenderer,
					};
				}
				// if (column.field === 'Referenceid') {
				// 	return {
				// 		...column,
				// 		cellRenderer: totalDrillCellRenderer,
				// 	};
				// }
				return column;
			});

			setReportColumnsDrillDown(updatedColumns);
		}
		if (reportFormattedDrillDown && reportFormattedDrillDown.reportLines) {
			const updatedReportLines = reportFormattedDrillDown.reportLines.map(
				reportLine => {
					if (reportLine.valueformatter === 'dollar') {
						return {
							...reportLine,
							valueFormatter: currencyFormatter,
						};
					}
					if (reportLine.cellRenderer === 'imageAndNameCellRenderer') {
						return {
							...reportLine,
							cellRenderer: imageAndNameCellRenderer,
						};
					}
					if (reportLine.cellRenderer === 'rankCellRenderer') {
						return {
							...reportLine,
							cellRenderer: rankCellRenderer,
						};
					}
					return { ...reportLine, Postamount: +reportLine.Postamount };
				},
			);

			setReportRowsDrillDown(updatedReportLines);
		}
		createDataDrillDown();
	}, [reportFormattedDrillDown]);

	// drill down toggle
	useEffect(() => {
		if (
			(toggleDrillMode || toggleChatMode) &&
			sourceOfReport === 'readReptInvMS.php'
		) {
			const hiddenColumns = {
				...reportFormatted,
				columns: reportFormatted?.columns?.map(column => {
					return {
						...column,
						hide:
							column.ColIndex === '0' || column.ColIndex === '7'
								? 'false'
								: 'true',
					};
				}),
			};

			setReportFormatted(hiddenColumns);
		} else if (toggleDrillMode || toggleChatMode) {
			const hiddenColumns = {
				...reportFormatted,
				columns: reportFormatted?.columns?.map(column => {
					return {
						...column,
						hide:
							column.ColIndex === '1' ||
							column.ColIndex === '2' ||
							column.index === '0' ||
							column.index === '1' ||
							column.index === '0' ||
							column.index === '5'
								? 'false'
								: 'true',
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

	const gridOptionsMaster = {
		getRowStyle: function (params) {
			if (params.node.rowPinned || params.data.Style === 'bold') {
				// Apply bold style to the total row (pinned row)
				return { fontWeight: 'bold' };
			}
			// Return null or undefined for rows that do not match the condition
			return null;
		},
	};

	return (
		<div
			className={`ag-theme-alpine-dark flex gap-4 ${
				toggleChatMode ? 'w-[30%]' : 'w-full'
			}`}
		>
			<div className={`${toggleDrillMode ? 'w-[30%]' : 'w-full'}`}>
				{reportLoader ? (
					<div className='w-full h-full flex justify-center items-center bg-[#212a43] rounded-[20px]'>
						<Loader />
					</div>
				) : (
					<AgGridReact
						ref={gridRef}
						columnDefs={reportColumns}
						rowData={reportRows}
						animateRows
						defaultColDef={{
							sortable: true,
							filter: true,
							resizable: true,
							wrapHeaderText: 'true',
							autoHeaderHeight: 'true',
						}}
						overlayLoadingTemplate='<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>'
						pinnedBottomRowData={showPinnedBottomData && pinnedBottomRowData}
						rowSelection={'single'}
						onSelectionChanged={onSelectionChanged}
						gridOptions={gridOptionsMaster}
					/>
				)}
			</div>
			<div className={`${toggleDrillMode ? 'block w-[70%]' : 'hidden'}`}>
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
						defaultColDef={{
							sortable: true,
							filter: true,
							resizable: true,
							wrapHeaderText: 'true',
							autoHeaderHeight: 'true',
						}}
						overlayLoadingTemplate='<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>'
						pinnedBottomRowData={pinnedBottomRowDataDrillDown}
						// rowSelection={'single'}
						// onSelectionChanged={onSelectionChanged}
						autoGroupColumnDef={{ minWidth: 200 }}
						groupDisplayType={'singleColumn'}
					/>
				)}
			</div>
		</div>
	);
};
export default AgGridTableEnterprise;
