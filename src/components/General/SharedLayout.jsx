import Header from '@/components/General/Header/Header';

export default function SharedLayout({
	children,
	bgColor = 'bg-dark-popup-00',
	height = 'h-screen',
	isHome = false,
  }) {
	const navBarBgColor =
	  bgColor === 'bg-dark-popup-00'
		? 'bg-dark-background-00'
		: 'bg-dark-popup-00';
	return (
	  <div className={`z-0w-screen ${height} flex flex-col items-center justify-center ${bgColor} pb-[1.25rem] gap-y-[0.75rem]`}>
		<div className='z-50 w-11/12'>
		  <Header isHome={false} />
		</div>
		<div className='z-10 w-11/12 h-[calc(100%-3.5em)] '>
		  {children}
		</div>
	  </div>
	);
  }
  
