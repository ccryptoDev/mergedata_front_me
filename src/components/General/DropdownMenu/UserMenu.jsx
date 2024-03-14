import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLoginForm } from '@/hooks/useLoginForm';
import LogoutIcon from '@/components/General/Icons/LogoutIcon';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Profile800 from '@/assets/images/Profile800.png';


const UserMenu = () => {
	const { handleLogout } = useLoginForm();
	const [linkSelect, setLinkSelect] = useState('/integrations');
	const activeStyle = {
		backgroundColor: '#6043DD',
	};
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			{openModal && (
				<ModalWrapper>
					<div
						className='max-h-[750px] max-w-[950px]'
						onClick={() => setOpenModal(false)}
					>
						<img
							src={Profile800}
							alt='Profile'
							className='w-full h-full rounded-t-lg'
						/>
					</div>
				</ModalWrapper>
			)}
			<div className='w-[130px] h-[170px] bg-[#05081E] rounded-lg justify-center items-center'>
				<ul className='w-[130px] flex flex-col  text-white font-baloo text-[13px] leading-4'>
					<li
						className='pl-4 hover:bg-primary-purple-600 rounded-sm flex items-center justify-left cursor-pointer py-[8px]'
						onClick={() => setOpenModal(true)}
					>
						Profile
					</li>
					<li className='pl-4 hover:bg-primary-purple-600 rounded-sm flex items-center justify-left cursor-pointer py-[8px]'>
						Settings
					</li>
					<li className='pl-4 hover:bg-primary-purple-600 rounded-sm flex items-center justify-left cursor-pointer py-[8px]'>
						<NavLink to={`/integrations`}>Integrations</NavLink>
					</li>
					<li className='pl-4 hover:bg-primary-purple-600 rounded-sm flex items-center justify-left cursor-pointer py-[8px]'>
						<NavLink to={`/admin`}>Admin</NavLink>
					</li>
				</ul>
				<div
					onClick={handleLogout}
					className='flex items-center-dashed border-[#5F5F5F] border-t-[2px] mx-3 cursor-pointer'
				>
					<div className='mt-3 mr-2'>
						<LogoutIcon />
					</div>
					<p className='text-white font-baloo text-[13px] mt-3 leading-4'>
						Log Out
					</p>
				</div>
			</div>
		</>
	);
};

export default UserMenu;
