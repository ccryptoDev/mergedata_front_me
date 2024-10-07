import { Tooltip } from 'react-tooltip';

import {
	increaseStatus,
	nFormatter,
	truncateString,
} from '@/utils/helperFunctions';
import PercentageBar from '@/components/General/Render/PercentageBar';

const tooltipStyles = {
	backgroundColor: 'bg-dark-accent-00',
	color: '#fff',
	borderRadius: '0.5rem',
};

const IconNameBarIncreaseDynamic = ({
	title = null,
	value = null,
	percentage = null,
}) => {
	const percentageNum = percentage?.replace('-', '').replace('%', '');
	// replace all spaces from title with dash
	const titleReplace = title?.replace(/\s/g, '-');
	const tooltipId = `${titleReplace}-${value}-${Math.random()}`;
	const validateIncrease = () => {
		let increase = 'neutral';
		if (+percentageNum > 100) {
			increase = 'up';
		}
		if (+percentageNum < 100) {
			increase = 'down';
		}
		if (+percentageNum === 100) {
			increase = 'neutral';
		}
		if (percentage?.includes('-')) {
			increase = 'down';
		}
		return increase;
	};
	const { icon, textColor, color } = increaseStatus(validateIncrease());
	let visualPercentage = percentage;
	if (+percentageNum > 200) {
		visualPercentage = visualPercentage?.replace(percentageNum, '100');
	} else {
		const percentageNumDivided = (percentageNum / 2).toString();
		visualPercentage = visualPercentage?.replace(
			percentageNum,
			percentageNumDivided,
		);
	}
	const percentageStyle = `${visualPercentage?.replace('-', '') || '0%'}`;
	return (
		<div className='flex justify-between items-center gap-2'>
			<div className='font-public w-[150px] text-white font-normal truncate'>
				{title.length > 20 ? (
					<>
						<Tooltip id={title} style={tooltipStyles} />
						<p
							data-tooltip-id={title}
							data-tooltip-content={title}
							data-tooltip-place='top'
						>
							{truncateString(title)}
						</p>
					</>
				) : (
					<p className='font-public text-white font-normal'>{title}</p>
				)}
			</div>

			<Tooltip id={tooltipId} style={tooltipStyles}>
				{percentage ? (
					<div className='flex w-[31px] items-center justify-center'>
						<img src={icon} />
						<p className={`font-baloo ${textColor} text-[12px] font-bold`}>
							{percentage.replace('-', '')}
						</p>
					</div>
				) : (
					<div className='flex w-[31px] items-center justify-center'>
						<img src={icon} />
						<p className={`font-baloo ${textColor} text-[12px] font-bold`}>
							0.00%
						</p>
					</div>
				)}
			</Tooltip>
			<div data-tooltip-id={tooltipId} data-tooltip-place='top'>
				<PercentageBar color={color} percentageStyle={percentageStyle} />
			</div>
			{value && (
				<p className='w-16 font-baloo text-white text-[19px] font-bold text-right'>
					{nFormatter(value)}
				</p>
			)}
		</div>
	);
};

export default IconNameBarIncreaseDynamic;
