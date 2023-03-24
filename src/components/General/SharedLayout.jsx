import menuButton from '@/assets/svg/menu_button.svg';
import mergeDataLogo from '@/assets/svg/mergedata_logo.svg';
import NavBar from '@/components/General/NavBar';

export default function SharedLayout({
	children,
	bgColor = 'bg-dark-popup-00',
}) {
	const navBarBgColor =
		bgColor === 'bg-dark-popup-00'
			? 'bg-dark-background-00'
			: 'bg-dark-popup-00';
	return (
		<div className={`w-screen flex flex-col h-screen relative ${bgColor}`}>
			<div className='w-[1398px] h-[900px] mx-auto'>
				<header className='mt-3 w-full h-[56px] flex justify-between items-center gap-6'>
					<div className='flex w-[124px] justify-between'>
						<img src={menuButton} alt='menu button' />
						<img
							src={mergeDataLogo}
							alt='merge data logo'
							className='w-23 h-8'
						/>
					</div>
					<NavBar navBarBgColor={navBarBgColor} />
				</header>
				<div>{children}</div>
			</div>
		</div>
	);
}
