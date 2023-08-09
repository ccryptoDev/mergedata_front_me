import menuButton from '@/assets/svg/menu_button.svg';
import mergeDataLogo from '@/assets/svg/mergedata_logo.svg';
import NavBar from '@/components/General/NavBar';

export default function SharedLayout ({
	children,
	bgColor = 'bg-dark-popup-00',
	isHome = false,
}) {
	const navBarBgColor =
		bgColor === 'bg-dark-popup-00'
			? 'bg-dark-background-00'
			: 'bg-dark-popup-00';
	return (
		<div className={`w-screen flex flex-col h-screen relative ${bgColor}`}>
			<div className='w-[1440px] h-full flex justify-between flex-col mx-auto pb-5'>
				<header className='mt-3 w-full h-[56px] flex justify-between items-center gap-6'>
					<div className='flex w-[124px] justify-between'>
						<img src={menuButton} alt='menu button' />
						<img
							src={mergeDataLogo}
							alt='merge data logo'
							className='w-23 h-8'
						/>
					</div>
					{!isHome && <NavBar navBarBgColor={navBarBgColor} />}
				</header>
				<div className='h-[calc(100%-56px)]'>{children}</div>
			</div>
		</div>
	);
}
