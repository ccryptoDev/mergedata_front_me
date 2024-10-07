import RangeBar from '@/components/General/RangeBar';
import PercentageBar from '@/components/General/Render/PercentageBar';
import { increaseStatus, formatNumbers, nFormatter } from '@/utils/helperFunctions';

function ModelsIndividualStatus ({ name, value, percentage, showRangeBar = true, showPercentageBar = false }) {
	const percentageNum = percentage?.replace('-', '').replace('%', '');
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
		if (percentage?.includes('-')) {
			increase = 'down';
		}
		return increase;
	}
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
	const percentageStyle = `${formatNumbers(visualPercentage?.replace('-', '').replace('%', '')) || '0'}%`;
	let align = '';
	if ((value && !percentage) || (!value && percentage)) align = 'justify-center';

	return (
		<div className='flex flex-col justify-between'>
			<p className='mb-1 text-white text-[14px] leading-5'>{name}</p>
			{(value || percentage) && (
				<div className={`flex gap-2 ${align}`}>
					{value && (
						<span className='font-bold font-baloo text-[24px] text-[#FFFFFF] tall:text-[1.04438rem]'>
							{nFormatter(value)}
						</span>
					)}
					{percentage && (
						<div className='flex items-end pb-1'>
							<img src={icon} className='pb-[6px] pr-1' />
							<span className={`font-bold font-baloo text-sm  ${textColor}`}>
								{formatNumbers(percentage)}%
							</span>
						</div>
					)}
				</div>
			)}
			{showRangeBar && <RangeBar />}
			{showPercentageBar && <PercentageBar color={color} percentageStyle={percentageStyle} />}
		</div>
	);
}

export default ModelsIndividualStatus;
