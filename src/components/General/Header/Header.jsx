import mergeDataLogo from '@/assets/svg/mergedata_logo.svg';
import NavBar from '@/components/General/NavBar';

const Header = ({ bgColor = 'bg-dark-popup-00', isHome = false }) => {
	const navBarBgColor =
		bgColor === 'bg-dark-popup-00'
			? 'bg-dark-background-00'
			: 'bg-dark-popup-00';
	return (
		<header className='mt-[0.75rem] mx-4 flex justify-between items-center h-[4em] gap-[2.18em] z-50'>
			<div className='flex w-1/12 justify-between items-center'>
				<div className='mr-[1em]'>
					<img src={mergeDataLogo} alt='merge data logo' />
				</div>
			</div>
			<div className='w-full '>
				{!isHome && <NavBar navBarBgColor={navBarBgColor} />}
			</div>
		</header>
	);
};

export default Header;
