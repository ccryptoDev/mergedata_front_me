import { useEffect, useState } from 'react';
import { useStore } from '@/store/store';
import axios from 'axios';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
} from 'recharts';
import IndicatorModalHeader from './IndicatorModalHeader';
import IndicatorModalTabs from './IndicatorModalTabs';
import Loader from '@/components/General/Loader';
import AgGridTable from '@/components/General/AgGrid/AgGridTable';
import ChatComponent from '@/components/General/Chat/Chat';
import { chatClient } from '@/routes/App';
import '../../../../css/miniChat.css';

const IndicatorModal = ({
	lineName,
	amount,
	percentage,
	closeModal,
	reportLineId,
}) => {
	const [tabSelector, setTabSelector] = useState(0);
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const clientId = useStore(state => state.user.clients[0].clientId);
	const period = useStore(state => state.period);
	const storesSelected = useStore(state => state.storesSelected);
	const setComp = useStore(state => state.setComp);
	const setView = useStore(state => state.setView);
	const setSourceOfReport = useStore(state => state.setSourceOfReport);
	const setReportLineId = useStore(state => state.setReportLineId);
	const currentChat = useStore(state => state.currentChat);
	const setCurrentChat = useStore(state => state.setCurrentChat);
	const chatToken = useStore(state => state.chatToken);

	const handleSetIndicatorsChannel = async () => {
		chatClient.connectUser({ id: 'william-md' }, chatToken);

		const newChannel = chatClient.channel('messaging', 'indicators', {
			name: 'Indicators Chat',
		});
		setCurrentChat(newChannel);
	};

	const getChartData = async () => {
		setIsLoading(true);
		try {
			const formData = new FormData();
			formData.append('clientId', clientId);
			formData.append('reportLineId', reportLineId);
			formData.append('periodId', period);
			formData.append('storeId[]', storesSelected);

			const response = await axios.post(
				`${import.meta.env.VITE_URL_BACK_PHP}indicators/readIndTrendChart.php`,
				formData,
				{
					headers: {
						'Content-Type':
							'multipart/form-data; boundary=---011000010111000001101001',
					},
				},
			);
			if (response.status === 200) {
				setData(response.data);
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
		return null;
	};
	// const getGridData = async () => {
	// 	setIsLoading(true);
	// 	try {
	// 		const formData = new FormData();
	// 		formData.append('clientId', clientId);
	// 		formData.append('reportLineId', reportLineId);
	// 		formData.append('comp', 1);
	// 		formData.append('viewId', 925);
	// 		formData.append('periodId', period);
	// 		formData.append('storeId[]', storesSelected);

	// 		const response = await axios.post(
	// 			`${import.meta.env.VITE_URL_BACK_PHP}indicators/readIndDataGrid.php`,
	// 			formData,
	// 			{
	// 				headers: {
	// 					'Content-Type':
	// 						'multipart/form-data; boundary=---011000010111000001101001',
	// 				},
	// 			},
	// 		);
	// 		if (response.status === 200) {
	// 			setData(response.data);
	// 			setIsLoading(false);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 		setIsLoading(false);
	// 	}
	// 	return null;
	// };

	const getGridData = () => {
		setComp(1);
		setView(925);
		setSourceOfReport('indicators/readIndDataGrid.php');
		setReportLineId(reportLineId);
	};
	useEffect(() => {
		if (tabSelector === 0) {
			getChartData();
		} else if (tabSelector === 1) {
			getGridData();
		} else {
			console.log('messages');
		}
	}, [tabSelector, storesSelected, period]);

	// TODO: clean console logs
	console.log({ data });

	const dataTest = [
		{ period: '2023-01', s10: 0 },
		{ period: '2021-02', s10: 0 },
		{ period: '2021-03', s10: 0 },
		{ period: '2021-04', s10: 0 },
		{ period: '2021-05', s10: 0 },
		{ period: '2021-06', s10: 0 },
		{ period: '2021-07', s10: 752560.41 },
		{ period: '2021-08', s10: 636013.8 },
		{ period: '2021-09', s10: 716187.57 },
		{ period: '2021-10', s10: 562765.45 },
	];

	useEffect(() => {
		if (tabSelector === 2) {
			handleSetIndicatorsChannel();
		}
	}, [tabSelector]);

	return (
		<div className='w-[80vw] h-[80vh] flex flex-col gap-5 p-8 bg-background-dark-background rounded-2xl'>
			{/* header */}
			<IndicatorModalHeader
				lineName={lineName}
				amount={amount}
				percentage={percentage}
				closeModal={closeModal}
			/>
			{/* tabs */}
			<IndicatorModalTabs
				tabSelector={tabSelector}
				onTabSelector={tabId => setTabSelector(tabId)}
			/>
			{/* tabs */}
			<>
				{tabSelector === 0 ? (
					<div className='w-full h-full flex items-center justify-center bg-dark-popup-00 rounded-lg text-neutrals-50'>
						{isLoading ? (
							<Loader />
						) : (
							<div className='w-full h-full p-10 flex flex-col justify-between'>
								<div className='flex items-center gap-2'>
									<div className='w-3 h-3 rounded-full bg-primary-green-600'></div>
									<h6>{data.storeShortNames}</h6>
								</div>
								<ResponsiveContainer width='100%' height='80%'>
									<LineChart
										data={dataTest}
										margin={{ left: 10, right: 0, top: 10, bottom: 20 }}
										style={{ width: '100%' }}
									>
										<CartesianGrid stroke='#161A3E' strokeDasharray='1 1' />
										<XAxis
											dataKey='period'
											tickLine={false}
											tick={{
												fill: '#FFF',
												opacity: 0.8,
												fontSize: '12px',
												fontWeight: 400,
											}}
											padding={{ right: 0, left: 0 }}
										/>
										<YAxis
											dataKey={'s10'}
											tickLine={true}
											tick={{
												fill: '#9B96B6',
												fontSize: '12px',
												fontWeight: 400,
											}}
											padding={{ bottom: 40 }}
										/>
										<Tooltip
											contentStyle={{
												backgroundColor: '#161A3E',
												borderRadius: '0.5rem',
												border: 'none',
												color: '#FFF',
												fontSize: '0.875rem',
												boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
											}}
											cursor={false}
										/>
										<Line
											type='natural'
											dataKey='s10'
											stroke='#02B2AF'
											strokeWidth={6}
											dot={false}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>
						)}
					</div>
				) : tabSelector === 1 ? (
					<div className='w-full h-full p-5 flex items-center justify-center bg-dark-popup-00 rounded-lg text-neutrals-50'>
						<AgGridTable />
					</div>
				) : (
					<div
						id='indicator-chat'
						className='w-full h-full flex items-center justify-center bg-dark-popup-00 rounded-lg text-neutrals-50'
					>
						<ChatComponent client={chatClient} currentChannel={currentChat} />
						{/* message */}
					</div>
				)}
			</>
		</div>
	);
};

export default IndicatorModal;
