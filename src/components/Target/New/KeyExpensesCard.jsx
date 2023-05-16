import nextArrow from '@/assets/svg/next_arrow.svg';
import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';
import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton';
import Slider from '@/components/Target/New/Slider';

const KeyExpensesCard = ({ onClick }) => {
	return (
		<div
			className='w-[544px] h-[277px] bg-[#212A43] rounded-2xl flex flex-col items-start px-8 py-6 relative'
			onClick={onClick}
		>
			<div className='w-[239px] h-[80px] flex flex-col items-start'>
				<div className='w-[239px] h-[42px] flex flex-row items-center justify-between'>
					<span className='flex items-center font-baloo text-[24px] font-bold text-[#FFFFFF]'>
						Key Expenses
					</span>
					<span>
						<IconNameIconDropdownButton
							width='w-[87px]'
							height='h-[42px]'
							text='Top 3'
							iconName=''
						/>
					</span>
				</div>
				<div className='w-[190px] h-[32px] flex flex-row items-center'>
					<span className='font-baloo text-[32px] text-[#FFFFFF] font-bold'>
						23,538,661
					</span>
					<div className='flex flex-row items-center ml-2'>
						<img src={neutral} />
						<span className='text-[#FFBB0D] font-baloo font-bold text-[14px] flex items-center'>
							21%
						</span>
					</div>
				</div>
			</div>
			<div className='w-[480px] h-[125px] flex flex-col items-center justify-end'>
				<div className='w-[480px] h-[36px] flex flex-row items-center justify-between'>
					<span className='text-[#FFFFFF] font-[Public_Sans] text-[16px] w-[131px]'>
						Advertising
					</span>
					<span>
						<Slider
							slidervalue='w-[20%]'
							sliderwidth='w-[20%]'
							sliderheight='h-2'
							slotwidth='w-[190px]'
							slotheight='h-1'
							sliderbg='bg-gradient-to-l from-white to-gray-300'
						/>
					</span>
					<span className='font-baloo font-bold text-[18.5px] text-[#FFFFFF] w-[95px] flex justify-end'>
						2,666,134
					</span>
					<div className='flex flex-row items-center'>
						<img src={arrowFatDownIcon} />
						<span className='font-baloo font-bold text-[12px] text-[#FF8181]'>
							13%
						</span>
					</div>
				</div>
				<div className='w-[480px] h-[36px] flex flex-row items-center justify-between'>
					<span className='text-[#FFFFFF] font-[Public_Sans] text-[16px] w-[131px]'>
						Sales Comp.
					</span>
					<span>
						<Slider
							slidervalue='w-[45%]'
							sliderwidth='w-[45%]'
							sliderheight='h-2'
							slotwidth='w-[190px]'
							slotheight='h-1'
							sliderbg='bg-gradient-to-l from-white to-gray-300'
						/>
					</span>
					<span className='font-baloo font-bold text-[18.5px] text-[#FFFFFF] w-[95px] flex justify-end'>
						1,211,171
					</span>
					<div className='flex flex-row items-center'>
						<img src={neutral} />
						<span className='font-baloo font-bold text-[12px] text-[#FFBB0D]'>
							0.5%
						</span>
					</div>
				</div>
				<div className='w-[480px] h-[36px] flex flex-row items-center justify-between'>
					<span className='text-[#FFFFFF] font-[Public_Sans] text-[16px] w-[131px]'>
						Outside Services
					</span>
					<span>
						<Slider
							slidervalue='w-[95%]'
							sliderwidth='w-[95%]'
							sliderheight='h-2'
							slotwidth='w-[190px]'
							slotheight='h-1'
							sliderbg='bg-gradient-to-l from-white to-gray-300'
						/>
					</span>
					<span className='font-baloo font-bold text-[18.5px] text-[#FFFFFF] w-[95px] flex justify-end'>
						1,911,324
					</span>
					<div className='flex flex-row items-center'>
						<img src={arrowUpGreen} />
						<span className='font-baloo font-bold text-[12px] text-[#5EFF5A]'>
							24%
						</span>
					</div>
				</div>
			</div>
			<div className='absolute self-end mt-[-15px] mr-[-20px] w-[33px] h-[33px] rounded-full hover:bg-primary-purple-200 hover:ring-2'>
				<img src={nextArrow} />
			</div>
		</div>
	);
};

export default KeyExpensesCard;
