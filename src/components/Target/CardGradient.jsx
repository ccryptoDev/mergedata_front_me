import nextIcon from '@/assets/svg/next_arrow.svg';

const Card = ({ children, gradient, button = true, onClick = () => console.log('clicked!') }) => {
	const { start, end } = gradient;
	return (
		<div className={`flex items-center justify-center group`}>
			<div
				className={
					`relative border-[#0D102C] hover:ring-2 ring-neutrals-500 ring-offset-[0.375em] ring-offset-[#0D102C] dark:ring-offset-[#0D102C] w-[22.1em] h-[13.75em] flex flex-col justify-be between p-[1.25em] bg-gradient-to-r ${end} ${start} rounded-xl group-hover:bg-gradient-to-r group-hover:to-[rgba(118,117,176,1)] group-hover:from-[rgba(118,117,176,1)] `
				}
			>
				{children}

				{button && (
					<div onClick={onClick} className='absolute top-[0.625em] right-[0.75em] w-[2em] h-[2em] cursor-pointer group-hover:bg-[rgba(255,255,255,0.4)] rounded-full'>
						<img src={nextIcon} alt='Next Icon' />
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;

