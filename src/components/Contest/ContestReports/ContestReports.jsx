import { useEffect, useState } from 'react';
import axios from 'axios';
// import { ToggleCloseIcon } from '@/components/General/Icons/ToggleCloseIcon';
// import { ToggleOpenIcon } from '@/components/General/Icons/ToggleOpenIcon';
import Loader from '@/components/General/Loader';
import { useStore } from '@/store/store';

const ContestReports = () => {
	// const [toggle, setToggle] = useState(false);
	const [sections, setSections] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const clientId = useStore(state => state.user.clients[0].clientId);
	const sectionId = useStore(state => state.sectionId);
	const viewId = useStore(state => state.viewId);
	const setReport = useStore(state => state.setReport);
	const setView = useStore(state => state.setView);
	const setStates = useStore(state => state.setStates);
	const setStrWhere = useStore(state => state.setStrWhere);
	const setDrillReportId = useStore(state => state.setDrillReportId);
	const setDrillWhere = useStore(state => state.setDrillWhere);
	const toggleDrillMode = useStore(state => state.toggleDrillMode);
	const toggleChatMode = useStore(state => state.toggleChatMode);
	const setToggleDrillMode = useStore(state => state.setToggleDrillMode);
	const setToggleChatMode = useStore(state => state.setToggleChatMode);
	const setSourceOfReport = useStore(state => state.setSourceOfReport);
	const setSourceOfDrill = useStore(state => state.setSourceOfDrill);
	const setMessageBoard = useStore(state => state.setMessageBoard);

	// fetch sections
	const getSectionsView = async () => {
		setIsLoading(true);
		try {
			const formData = new FormData();
			formData.append('clientId', clientId);
			formData.append('sectionId', sectionId);

			const response = await axios.post(
				`${import.meta.env.VITE_URL_BACK_PHP}readSectionViews.php`,
				formData,
				{
					headers: {
						'Content-Type':
							'multipart/form-data; boundary=---011000010111000001101001',
					},
				},
			);
			if (response.status === 200) {
				setSections(response.data);
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
		return null;
	};

	const handleViewClick = (
		reportId,
		viewId,
		strWhere,
		sourceOfReport,
		SourceOfDrill,
		DrillReportId,
		DrillWhere,
		MessageBoard,
	) => {
		setStates({ name: 'Overview', value: 'default' });
		setReport(+reportId);
		setView(+viewId);
		setStrWhere(strWhere);
		setDrillReportId(DrillReportId);
		setDrillWhere(DrillWhere);
		setToggleDrillMode(false);
		setToggleChatMode(false);
		setSourceOfReport(sourceOfReport);
		setSourceOfDrill(SourceOfDrill);
		setMessageBoard(MessageBoard);
	};

	useEffect(() => {
		if (viewId === null) {
			setView(82);
		}
		getSectionsView();
	}, []);

	return (
		<div
			className={`relative p-3 h-full bg-neutrals-900 rounded-xl overflow-hidden ${
				toggleDrillMode || toggleChatMode ? 'w-[158px]' : 'w-[288px]'
			}`}
		>
			{isLoading ? (
				<div className='h-full w-full flex justify-center items-center'>
					<Loader />
				</div>
			) : (
				<>
					<div className='pr-2 pb-4 h-[calc(100vh-210px)] overflow-auto'>
						{sections?.map((section, index) => (
							<button
								key={section.ViewId}
								onClick={() =>
									handleViewClick(
										section.value,
										section.ViewId,
										section.strWhere,
										section.SourceOfReport,
										section.SourceOfDrill,
										section.DrillReportId,
										section.DrillWhere,
										section.MessageBoard,
									)
								}
								className={`p-4 w-full ${
									toggleDrillMode || toggleChatMode ? 'h-[80px]' : 'h-[100px]'
								}  flex flex-col gap-3 rounded-xl hover:bg-primary-purple-900 ${
									+section.ViewId === viewId && 'bg-primary-purple-900'
								}`}
								type='button'
							>
								{toggleDrillMode || toggleChatMode ? (
									<p className='text-neutrals-00 text-sm text-left'>
										{section.text}
									</p>
								) : (
									<>
										<p className='text-neutrals-00 text-sm'>{section.text}</p>
										<div className='w-full rounded-full h-3 bg-dark-accent-00'>
											<div
												className={`${
													index % 2 === 0
														? 'bg-primary-green-300'
														: 'bg-primary-purple-300'
												} h-3 w-[30%] rounded-full`}
											></div>
											<div className='mt-2 w-full flex justify-between items-center text-[10px] text-neutrals-00'>
												<p>0%</p>
												<p>100%</p>
												<p>200%</p>
											</div>
										</div>
									</>
								)}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default ContestReports;
