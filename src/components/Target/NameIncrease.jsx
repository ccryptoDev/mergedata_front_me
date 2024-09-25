import { increaseStatus } from '@/utils/helperFunctions';


function NameIncrease ({
	title,
	bigPercentage,
	smallPercentage,
}) {
	const { icon, textColor } = increaseStatus(smallPercentage?.includes('-') ? 'down' : 'up');
	return (
		<div className='font-baloo w-[110px] h-[34px] flex flex-col items-center'>
			<p className='font-medium text-xs text-center text-white truncate w-[150px]'>{title}</p>
			<div className='flex h-[20px] items-center'>
				<p className='font-bold text-[20px] pr-1 text-white'>
					{bigPercentage}
				</p>
				<div className='flex items-center'>
					<img src={icon} href='increase icon' />
					<p className={`font-bold text-[10px] ${textColor}`} >
						{smallPercentage}
					</p>
				</div>
			</div>
		</div>
	);
}

export default NameIncrease;
