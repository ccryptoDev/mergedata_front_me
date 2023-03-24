import nextIcon from '@/assets/svg/next_arrow.svg';


const Card = ({ children, gradient, button=true }) => {
	const { start, end } = gradient;
	return (
		<div className={`w-[${gradient.sizeCard.width}] h-[204px] flex items-center justify-center hover:p-2 hover:border-[1px] hover:border-light-background-00 hover:rounded-xl relative group hover:shadow-lg hover:shadow-[rgba(255,255,255,0.1)]`}>
			<div
				className={`w-[353px] h-[190px] flex flex-col justify-between p-6 bg-gradient-to-r ${start} ${end} rounded-xl group-hover:bg-gradient-to-r group-hover:to-[rgba(118,117,176,1)] group-hover:from-[rgba(118,117,176,1)]`}
			>
				{children}
			</div>
			{ button && 
						<img
						src={nextIcon}
						className='absolute top-[16px] left-[311px] w-[32px] h-[32px] group-hover:bg-[rgba(255,255,255,0.4)] rounded-full'
					/>
				}
		</div>
	);
};

export default Card;
