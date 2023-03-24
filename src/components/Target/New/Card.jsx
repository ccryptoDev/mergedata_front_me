import nextIcon from '@/assets/svg/next_arrow.svg';


const Card = ({ children }) => {
	return (
		<div className='w-[373px] h-[333px] bg-[#212A43] relative flex flex-col px-8 py-6 rounded-2xl'>
			<div>{children}</div>
			<img
				src={nextIcon}
				className='absolute top-[16px] left-[311px] w-[32px] h-[32px] group-hover:bg-[rgba(255,255,255,0.4)] rounded-full'
			/>
		</div>
	);
};

export default Card;
