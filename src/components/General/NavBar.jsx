import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import UserMenu from '@/components/General/DropdownMenu/UserMenu';
import { InitialsCircle } from '@/components/General/InitialsCircle';
import heart from '@/assets/svg/heart.svg';
import notification from '@/assets/svg/bell_notification.svg';
import downArrow from '@/assets/svg/down_arrow.svg';

export default function NavBar({ navBarBgColor = 'bg-dark-background-00' }) {
	const [showUserMenu, setShowUserMenu] = useState(false);
	const user = JSON.parse(localStorage.getItem('permissionsMergeData'));
	const activeStyle = {
		backgroundColor: '#6043DD',
	};

	return (
		<div className='flex flex-col relative'>
			<nav
				className={`w-[1240px] h-14 p-5 flex items-center justify-between rounded-xl text-white font-baloo ${navBarBgColor}`}
			>
				<ul className='flex text-sm'>
					<li className='py-1'>
						<NavLink
							className='hover:bg-primary-purple-600 rounded-lg px-3 py-2'
							to='/'
						>
							Predictive AI
						</NavLink>
					</li>
					<li className='py-1 px-3'>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							className='hover:bg-primary-purple-600 rounded-lg px-3 py-2'
							to='/'
						>
							Targets
						</NavLink>
					</li>
					<li className='py-1 px-3'>
						<NavLink
							className='hover:bg-primary-purple-600 rounded-lg px-3 py-2'
							to='/'
						>
							Contests
						</NavLink>
					</li>
					<li className='py-1 px-3'>
						<NavLink
							className='hover:bg-primary-purple-600 rounded-lg px-3 py-2'
							to='/'
						>
							Report Generator
						</NavLink>
					</li>
				</ul>
				<div className='flex items-center gap-7'>
					<ul className='flex gap-5'>
						<li className='cursor-pointer hover:scale-90'>
							<img src={heart} />
						</li>
						<li className='hover:scale-90'>
							<Link to='/'>
								<img src={notification} />
							</Link>
						</li>
					</ul>
					<ul className='flex items-center gap-3'>
						<li className='flex text-lg mx-4'>
							{`${user?.firstName ? user.firstName : ''} ${
								user?.lastName ? user.lastName.charAt(0) : ''
							}`}
						</li>
						<li
							className='flex cursor-pointer gap-3'
							onClick={() => setShowUserMenu(!showUserMenu)}
						>
							<InitialsCircle
								firstName={user?.firstName ? user.firstName : ''}
								lastName={user?.lastName ? user.lastName.charAt(0) : ''}
								isOnline={true}
							/>
							<img
								src={downArrow}
								style={{
									transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0deg)',
								}}
								className='w-3'
							/>
						</li>
					</ul>
				</div>
			</nav>
			{showUserMenu && (
				<div className='absolute right-[0px] top-[61px] z-10'>
					<UserMenu />
				</div>
			)}
		</div>
	);
}
