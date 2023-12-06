import { useState } from 'react';
import MenuBar from '@/components/Contest/ContestAdd/MenuBar/MenuBar';
import Settings from '@/components/Contest/ContestAdd/Settings/Settings';
import ButtonsLayout from '@/components/Contest/ContestAdd/Settings/ButtonsLayout/ButtonsLayout';
import Participants from '@/components/Contest/ContestAdd/Participants/Participants';
import Points from '@/components/Contest/ContestAdd/Points/Points';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import { useNavigate } from 'react-router-dom';

const ContestAddSection = () => {
	const navigate = useNavigate();
	const [activeMenu, setActiveMenu] = useState('Settings');

	const isPointsMenu = activeMenu === 'Points';

	return (
		<div className='flex flex-col justify-between h-[90%] gap-6'>
			<LeftArrowDirectActionHeart
				bgColor='bg-[#05081E]'
				buttonName={'Contets'}
				upperName={'New Contests'}
				onClick={() => navigate(-1)}
				heartLike={false}
			/>
			<MenuBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
			<div className='flex grow'>
				<div
					className={`px-6 pb-6 flex flex-col w-[50%] grow ${
						isPointsMenu ? 'opacity-20' : ''
					}`}
				>
					{activeMenu === 'Settings' ? (
						<Settings activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
					) : (
						<Participants />
					)}
					{!isPointsMenu ? (
						<ButtonsLayout
							activeMenu={activeMenu}
							setActiveMenu={setActiveMenu}
							cancelClick={() => navigate(-1)}
						/>
					) : null}
				</div>
				<div
					className={`px-6 pb-6 flex flex-col w-[50%] grow ${
						isPointsMenu ? '' : 'opacity-20'
					}`}
				>
					<Points />
					{isPointsMenu ? (
						<ButtonsLayout
							activeMenu={activeMenu}
							setActiveMenu={setActiveMenu}
							cancelClick={() => navigate('/contests')}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ContestAddSection;
