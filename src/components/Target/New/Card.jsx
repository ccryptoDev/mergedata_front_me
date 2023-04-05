import nextIcon from '@/assets/svg/next_arrow.svg';

const Card = ({
	children,
	height = 'h-[333px]',
	width = 'w-[373px] ',
	bgColor = 'bg-[#212A43]',
	margin,
}) => {
	return (
		<div
			className={`${width} ${height} ${bgColor} relative flex flex-col px-8 py-6 rounded-2xl ${margin}`}
		>
			<div>{children}</div>
			<img
				src={nextIcon}
				className='absolute top-[16px] right-[16px] w-[32px] h-[32px] group-hover:bg-[rgba(255,255,255,0.4)] rounded-full'
			/>
		</div>
	);
};

export default Card;
