import nextIcon from '@/assets/svg/next_arrow.svg';

const Card = ({
	children,
	// height = 'h-[20.8em]',
	bgColor = 'bg-[#212A43]',
	onClick,
	gapY,
}) => {
	return (
		<div
			className={`${bgColor} ${gapY} w-auto relative flex flex-col grow justify-between px-[2em] py-[1.5em] rounded-2xl lg:col-span-4 col-span-2 row-span-1 `}
		>
			<div className={`${gapY} flex flex-col h-full`}>{children}</div>
			<img
				onClick={onClick}
				src={nextIcon}
				className='absolute cursor-pointer top-[1em] right-[1em] w-[2em] h-[2em] hover:bg-primary-purple-200 hover:ring-2 rounded-full'
			/>
		</div>
	);
};

export default Card;
