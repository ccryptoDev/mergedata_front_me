import Dropdown from '@/components/Target/Dropdown';
import { increaseStatus } from '@/utils/helperFunctions';

const NameIncreaseDropdown = ({
	title = 'Financial Statement',
	value = '6,466',
	percentage = '10%',
	increase = 'up',
}) => {
	const { icon, textColor } = increaseStatus(increase);
	return (
		<div className='h-[auto] mb-2 flex flex-col'>
			<div className='flex'>
				<h4 className='h-[36px] font-baloo font-bold text-[24px] text-white'>
					{title}
				</h4>
			</div>
			<div className='h-[42px] flex justify-between items-center'>
				<div className='flex gap-[6%]'>
					<p className='font-baloo text-white text-[32px] font-bold tall:text-[22px]'>{value}</p>
					<div className='flex items-center justify-center'>
						<img src={icon} className='w-[15px] h-[12px]' />
						<p className={`${textColor} font-baloo font-bold text-[14px] tall:text-[10px]`}>
							{percentage}
						</p>
					</div>
				</div>
				<Dropdown name='Units' hight='h-[42px]' width='w-[80%]' />
			</div>
		</div>
	);
};

export default NameIncreaseDropdown;
