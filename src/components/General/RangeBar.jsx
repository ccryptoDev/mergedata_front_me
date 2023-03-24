import rangeIndicator from '@/assets/svg/range_indicator.svg';


export default function RangeBar ({
	targetValue = 'left-[50%]',
	realValue = 'w-[50%]',
	barColor = 'bg-neutrals-00',
}) {
	return (
		<div className=' flex justify-center items-center h-3 w-full relative '>
			<div className='flex items-center w-full bg-neutrals-1000 rounded-full h-0.5 dark:bg-gray-700'>
				<div className={`${barColor} h-1 rounded-full ${realValue}`}></div>
			</div>
			<img src={rangeIndicator} className={`absolute w-3 h-3 ${targetValue}`} />
		</div>
	);
}
