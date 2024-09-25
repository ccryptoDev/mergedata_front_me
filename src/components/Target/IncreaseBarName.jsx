import { Tooltip } from 'react-tooltip';

import PercentageBar from '@/components/General/Render/PercentageBar';
import { increaseStatus } from '@/utils/helperFunctions';


const tooltipStyles = {
	backgroundColor: 'bg-dark-accent-00',
	color: '#000',
	borderRadius: '0.5rem',
};

function IncreaseBarName ({ item }) {
	const percentageNum = item[2]?.replace('-', '').replace('%', '');
	const validateIncrease = () => {
		let increase = '';
		if (+percentageNum > 100) {
			increase = 'up';
		}
		if (+percentageNum < 100) {
			increase = 'down';
		}
		if (+percentageNum === 100) {
			increase = 'neutral';
		}
		if (item[2]?.includes('-')) {
			increase = 'down';
		}
		return increase;
	}
	const { icon, textColor } = increaseStatus(validateIncrease());
	let visualPercentage = item[2];
	if (+percentageNum > 200) {
		visualPercentage = visualPercentage.replace(percentageNum, '100');
	} else {
		const percentageNumDivided = (percentageNum / 2).toString();
		visualPercentage = visualPercentage.replace(percentageNum, percentageNumDivided);
	}
	const percentageStyle = `${visualPercentage?.replace('-', '') || '0%'}`;
	const tooltipId = `targets-main-2-${percentageStyle}-${Math.random()}`;
	return (
		<div className='flex flex-col items-start justify-end w-[9.0625rem] h-[3rem] mt-[0.5em] '>
			<div className='flex flex-row justify-center items-center space-x-[0.5em] font-baloo font-bold text-[20px] text-white'>
				<p>{item[0]}</p>
				<div className='flex flex-row space-x-[0.5em]'>
					<img src={icon} href='increase icon' />
					<p className={`font-bold text-[10px] ${textColor}`} >
						{item[2]}
					</p>
				</div>
			</div>
			<Tooltip id={tooltipId} style={tooltipStyles}>
				{item[2] ? (
					<div className='flex flex-col w-auto items-center justify-center'>
						<div className='flex items-center justify-center'>
							<img src={icon} />
							<p className={`font-baloo ${textColor} text-[12px] font-bold`}>
								{item[2]?.replace('-', '')}
							</p>
						</div>
						<p className={`font-baloo ${textColor} text-[12px]`}>
							Target: {item[3]}
						</p>
					</div>
				) : (
					<div className='flex w-auto items-center justify-center'>
						<img src={icon} />
						<p className={`font-baloo ${textColor} text-[12px] font-bold`}>
							0.00%
						</p>
					</div>
				)}
			</Tooltip>
			<div
				data-tooltip-id={tooltipId}
				data-tooltip-place='top'
			>
				<PercentageBar color='bg-[#FFFFFF]' percentageStyle={percentageStyle} />
			</div>
			<p className='font-medium text-white font-baloo text-[10px] mt-[-0.375em]'>
				{item[1]}
			</p>
		</div>
	);
}

export default IncreaseBarName;
