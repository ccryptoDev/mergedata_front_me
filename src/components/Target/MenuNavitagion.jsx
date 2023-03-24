import nextArrow from '@/assets/svg/arrowright_icon.svg';
import heart from '@/assets/svg/heart.svg';

const MenuNavigation = ({
	title = 'Targets',
	subtitle = 'New',
	bgColor = 'bg-dark-popup-00',
}) => {
	return (
		<>
			<div
				className={`flex items-center justify-center w-[195px] my-[31px] ${bgColor}`}
			>
				<div className='bg-primary-purple-700 w-[44px] h-[44px] rounded-[200px] items-center justify-center flex mr-6'>
					<img src={nextArrow} className='rotate-180' />
				</div>
				<div className='flex flex-col mb-3'>
					<p className='text-[12px] font-public text-white'>{title}</p>
					<h1 className='text-[32px] leading-[24px] font-baloo text-white'>
						{subtitle}
					</h1>
				</div>
				<div className='ml-[29px] mt-4 bg-[#161A3E] rounded-lg w-[28px] h-[30px] flex items-center justify-center'>
					<img src={heart} className='w-[14px] h-[12px]' />
				</div>
			</div>
		</>
	);
};

export default MenuNavigation;
