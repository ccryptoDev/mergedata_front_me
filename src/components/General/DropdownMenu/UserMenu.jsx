import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLoginForm } from '@/hooks/useLoginForm';
import LogoutIcon from '@/components/General/Icons/LogoutIcon';

const UserMenu = () => {
	const { handleLogout } = useLoginForm();
	const [linkSelect, setLinkSelect] = useState('/integrations')
	const activeStyle = {
		backgroundColor: '#6043DD',
	};

	return (
		<div className='w-[130px] h-[136px] bg-[#05081E] rounded-lg justify-center items-center'>
			<div className='flex flex-col'>
				<p className='ml-4 mt-4 mb-2 text-white font-baloo text-[13px] leading-4'>
					Profile
				</p>
				<p className='ml-4 mb-2 text-white font-baloo text-[13px] leading-4'>
					Settings
				</p>
				<NavLink
					onClick={() => { setGoToIntegrations(!goToIntegrations) }}
					className='hover:bg-primary-purple-600 rounded-sm flex items-center justify-left cursor-pointer hover:scale-90 py-1'
					to={`${linkSelect}`}
				>
					<p className='ml-4 text-white font-baloo text-[13px] leading-4'>
						Integrations
					</p>
				</NavLink>
			</div>
			<div onClick={handleLogout} className='flex items-center border-dashed border-[#5F5F5F] border-t-[2px] mx-3 cursor-pointer'>
				<div className='mt-3 mr-2'>
					<LogoutIcon />
				</div>
				<p className='text-white font-baloo text-[13px] mt-3 leading-4'>
					Log Out
				</p>
			</div>
		</div>
	);
};

export default UserMenu;
