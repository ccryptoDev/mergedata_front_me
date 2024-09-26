import { Tooltip } from 'react-tooltip';

import PercentageBar from '@/components/General/Render/PercentageBar';
import { increaseStatus } from '@/utils/helperFunctions';


const tooltipStyles = {
	backgroundColor: 'bg-dark-accent-00',
	color: '#000',
	borderRadius: '0.5rem',
};

const ValueBarIncrease = ({ item }) => {
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
	const tooltipId = `targets-main-${percentageStyle}-${Math.random()}`;
	return (
		<div className='flex flex-col w-[86px] h-[62px]'>
			<p className='truncate font-baloo text-[18px] leading-5 font-bold mb-[12px] w-[80px] h-[20px] text-neutrals-00'>
				{item[0]}
			</p>
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
			<div className='flex justify-between mt-[12px] h-[10px] items-center'>
				<p className='font-baloo font-normal text-[14px] leading-[14px] text-neutrals-00'>
					{item[1]}
				</p>
				<div className='flex w-[27px] h-[12px] items-center justify-between'>
					<img src={icon} />
					<p className={`font-baloo text-[10px] leading-3 font-bold ${textColor}`}>
						{item[2]}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ValueBarIncrease;
