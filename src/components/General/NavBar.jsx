import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useStore } from '@/store/store';
import { useSections } from '@/hooks/useSections';
import UserMenu from '@/components/General/DropdownMenu/UserMenu';
import { InitialsCircle } from '@/components/General/InitialsCircle';
// import Decision from '@/components/General/Icons/Decision'
// import notification from '@/assets/svg/bell_notification.svg';
import downArrow from '@/assets/svg/down_arrow.svg';
import { formatSectionName } from '@/utils/helperFunctions';
import CommentIcon from './Icons/CommentIcon';
// import Hide from '@/components/General/Hide';

export default function NavBar({ navBarBgColor = 'bg-dark-background-00' }) {
	const [showUserMenu, setShowUserMenu] = useState(false);

	const firstName = useStore(state => state.user.firstName);
	const lastName = useStore(state => state.user.lastName);
	const setReport = useStore(state => state.setReport);
	const setView = useStore(state => state.setView);
	const setStates = useStore(state => state.setStates);
	const setSourceOfReport = useStore(state => state.setSourceOfReport);
	const setStrWhere = useStore(state => state.setStrWhere);

	const path = useLocation().pathname;

	const setContestDefault = () => {
		if (path === '/contests') {
			setReport(82);
			setView(82);
			setStates({ name: 'Overview', value: 'default' });
			setSourceOfReport('readReptSalesMS.php');
			setStrWhere(`and NS."Condition" = 'New'`);
		}
	};

	useEffect(() => {
		setContestDefault();
	}, [path]);

	useSections();
	const sections = useStore(state => state.sections);
	const setSection = useStore(state => state.setSection);
	const activeStyle = {
		backgroundColor: '#6043DD',
	};

	return (
		<div className='flex flex-col relative '>
			<nav
				className={`flex items-center justify-between rounded-xl text-white font-baloo ${navBarBgColor} w-full h-[3.5em] p-[0.75em]`}
			>
				<ul className='flex items-center h-[2em] text-[0.875em] gap-3'>
					{sections &&
						sections.map((section, index) => (
							<li className='py-0' key={index}>
								<NavLink
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
									className='hover:bg-primary-purple-600 h-[3em] rounded-[0.5em] px-[2em] flex items-center'
									onClick={() => setSection(section)}
									to={`/${formatSectionName(section.name)}`}
									state={section}
								>
									{section.name}
								</NavLink>
							</li>
						))}
				</ul>
				<div className='flex items-center justify-center gap-[1.75em] '>
					{/* <Hide>
						<ul className='gap-5 flex items-center'>
							<NavLink
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
								onClick={() => { moveToPage('/mergechat') }}
								className='hover:bg-primary-purple-600 w-[1.68em] h-[1.62em] rounded-lg flex items-center justify-center cursor-pointer hover:scale-90'
								to='/mergechat'
							>
								<Decision name='CommunicationGlobe2' />
							</NavLink>
							<li className='cursor-pointer hover:scale-90'>
								<Decision name='HeartLg' />
							</li>
							<li className='hover:scale-90'>
								<NavLink to='/'>
									<img src={notification} />
								</NavLink>
							</li>
						</ul>
					</Hide> */}
					<ul className='flex items-center gap-3'>
						<NavLink
							to={window.location.pathname === '/mergechat' ? -1 : '/mergechat'}
						>
							<CommentIcon
								fill={
									window.location.pathname === '/mergechat'
										? '#6043DD'
										: '#ffffff'
								}
							/>
						</NavLink>

						<li className='flex text-lg mx-4'>{`${firstName} ${lastName}`}</li>
						<li
							className='flex cursor-pointer gap-[0.75em]'
							onClick={() => setShowUserMenu(!showUserMenu)}
						>
							<InitialsCircle
								firstName={firstName}
								lastName={lastName}
								isOnline={true}
							/>
							<img
								src={downArrow}
								style={{
									transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0deg)',
								}}
								className='w-[0.75em]'
							/>
						</li>
					</ul>
				</div>
			</nav>
			{showUserMenu && (
				<div className='absolute right-[0px] top-[3.8em] border border-purple-600'>
					<UserMenu />
				</div>
			)}
		</div>
	);
}
