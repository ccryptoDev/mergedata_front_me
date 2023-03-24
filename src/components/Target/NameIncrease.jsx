import { increaseStatus } from '@/utils/helperFunctions';


function NameIncrease ({
	title,
	bigPercentage,
	smallPercentage,
	increase,
}) {
	const { icon, textColor } = increaseStatus(increase);
	return (
		<div className='font-baloo w-[110px] h-[34px] flex flex-col items-center'>
			<p className='font-medium text-xs text-white'>{title}</p>
			<div className='flex'>
				<p className='font-bold text-[20px] pr-1 text-white'>
					{bigPercentage}%
				</p>
				<img src={icon} href='increase icon' />
				<p className={`font-bold text-[10px] ${textColor}`} >
					{smallPercentage}%
				</p>
			</div>
		</div>
	);
}

export default NameIncrease;
