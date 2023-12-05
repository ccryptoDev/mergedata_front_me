import communityReportTileImg from '@/assets/images/communityReportTileImg.png';

import { InitialsCircle } from '@/components/General/InitialsCircle';
import ShareIcon from '@/components/General/Icons/ShareIcon';
import InfoIcon from '@/components/General/Icons/InfoIcon';


const CommunityReportTile = ({ withInfoIcon = true, report, handleClick }) => {
	return (
		<div onClick={handleClick} className='min-w-[195px] min-h-[271px] rounded-xl p-[22px] flex flex-col justify-between bg-[#2E3650] hover:scale-[0.98] hover:bg-neutrals-900 cursor-pointer'>
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
					src={communityReportTileImg}
					alt='char example image'
					className='w-full h-auto'
				/>
			</div>

			{/* tile info */}
			<div className='max-w-[154px]'>
				<p className='font-public text-sm font-semibold truncate text-primary-purple-50'>
					{report?.name || 'Inventory'}
				</p>
				<p className='text-xs text-primary-purple-200'>{report?.description || 'Misc Doc'}</p>
			</div>

			<div className='flex justify-between items-center gap-2'>
				<InitialsCircle firstName={report?.createdBy[0] || 'Roger'} lastName={report?.createdBy[1] || 'Garcia'} />
				<div className='text-xs'>
					<p className='text-primary-purple-50 font-bold'>Created On:</p>
					<p className='text-xs text-primary-purple-200'>{report?.createdOn?.split('T')[0] || '06/07/2023'}</p>
				</div>
			</div>
		</div>
	);
};

export default CommunityReportTile;
