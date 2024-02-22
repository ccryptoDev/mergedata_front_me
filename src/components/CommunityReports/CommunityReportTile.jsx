import CommunityInventoryImg from '@/assets/images/community/Community_Inventory.png';
import CommunityNetProfitImg from '@/assets/images/community/Community_NetProfitSummary.png';
import CommunitySalesImg from '@/assets/images/community/Community_Sales.png';
import CommunityServiceImg from '@/assets/images/community/Community_Service.png';

import { useNavigate } from 'react-router-dom';
import { InitialsCircle } from '@/components/General/InitialsCircle';
import ShareIcon from '@/components/General/Icons/ShareIcon';
import InfoIcon from '@/components/General/Icons/InfoIcon';
import { useStore } from '@/store/store';

const CommunityReportTile = ({ withInfoIcon = true, report }) => {
	const navigate = useNavigate();

	const setSourceOfReport = useStore(state => state.setSourceOfReport);
	const setReportTitle = useStore(state => state.setReportTitle);
	const setView = useStore(state => state.setView);
	const setReport = useStore(state => state.setReport);
	const setStates = useStore(state => state.setStates);
	const setStrWhere = useStore(state => state.setStrWhere);

	const handleClick = () => {
		setSourceOfReport(report?.SourceOfReport);
		setReportTitle(report?.text);
		setView(report?.ViewId);
		setReport(report?.value);
		setStates({ name: 'Overview', value: 'default' });
		setStrWhere('');
		navigate('/community/community-detail', {
			state: { report: report?.text },
		});
	};

	const checkImage = () => {
		switch (report?.Description) {
			case 'Sales':
				return CommunitySalesImg;
			case 'Accounting':
				return CommunityNetProfitImg;
			case 'Inventory':
				return CommunityInventoryImg;
			case 'Service':
				return CommunityServiceImg;
			default:
				return CommunityNetProfitImg;
		}
	};

	return (
		<div
			onClick={handleClick}
			className='w-[195px] h-[271px] rounded-xl p-[22px] flex flex-col justify-between bg-[#2E3650] hover:scale-[0.98] hover:bg-neutrals-900 cursor-pointer'
		>
			{/* tile header */}
			<div className='h-[30px] flex justify-between items-center'>
				{withInfoIcon ? <InfoIcon /> : <ShareIcon />}
				<div className='px-2 flex items-center bg-primary-purple-800 text-primary-purple-50 rounded'>
					<p className='font-baloo text-[13px]'>Community</p>
				</div>
			</div>

			{/* tile image */}
			<div className='max-w-[156px] h-[74px] flex items-center justify-center'>
				<img
					src={checkImage()}
					alt='char example image'
					className='w-full h-auto object-scale-down'
				/>
			</div>

			{/* tile info */}
			<div className='max-w-[154px]'>
				<p className='font-public text-sm font-semibold truncate text-primary-purple-50'>
					{report?.text || 'Inventory'}
				</p>
				<p className='text-xs text-primary-purple-200'>
					{report?.Description || 'Misc Doc'}
				</p>
			</div>

			<div className='flex justify-between items-center gap-2'>
				<InitialsCircle
					firstName={
						(report?.CreatedBy && report.CreatedBy.split(' ')[0]) || 'Roger'
					}
					lastName={
						(report?.CreatedBy && report.CreatedBy.split(' ')[1]) || 'Garcia'
					}
				/>
				<div className='text-xs'>
					<p className='text-primary-purple-50 font-bold'>Created On:</p>
					<p className='text-xs text-primary-purple-200'>
						{report?.CreatedOn?.split(' ')[0] || '06/07/2023'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CommunityReportTile;
