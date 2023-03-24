import avatar from '@/assets/images/Ellipse16.png';
import { increaseStatus } from '@/utils/helperFunctions';


const PersonIncrease = ({
	name = 'John Doe',
	job = 'Corporate Manager',
	percentage = '96',
	increase = 'up',
}) => {
	const { icon, textColor } = increaseStatus(increase);
	return (
		<div className='w-[293px] h-[61px] flex justify-between items-center'>
			<p className='font-baloo font-extrabold text-white text-[14px]'>1</p>
			<img src={avatar} alt='' />
			<div className='leading-tight w-[126px] truncate'>
				<p className='font-public font-normal text-white text-[14px]'>{name}</p>
				<p className='font-public font-normal text-[#6B748E] text-[12px]'>
					{job}
				</p>
			</div>
			<div className='border-l-[#3E4761] border-l-[1px] py-[16px]'></div>
			<div className='leading-tight'>
				<p className='font-public font-normal text-white text-[12px]'>Goal</p>
				<p className='font-baloo font-bold text-white text-[18px]'>
					{percentage}%
				</p>
			</div>
			<div className='flex items-center'>
				<img src={icon} alt='' className='h-2 w-3' />
				<p className={`${textColor} font-baloo font-bold text-[14px]`}>10%</p>
			</div>
		</div>
	);
};

export default PersonIncrease;
