import nextArrow from '@/assets/svg/next_arrow.svg';
import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';
import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton';
import Slider from '@/components/Target/New/Slider';

const KeyExpensesCard = ({ onClick }) => {
	return (
		<div
			className='bg-[#212A43] h-[17.625rem] rounded-2xl flex flex-col items-start px-8 py-8 relative '
			onClick={onClick}
		>
			<div className='w-[14.9em] h-[5em] flex flex-col items-center justify-center'>
				<div className='w-[14.9em] h-[2.6rem] flex flex-row items-center justify-between'>
					<span className='flex items-center font-baloo text-[1.5rem] font-bold text-[#FFFFFF]'>
						Key Expenses
					</span>
					<span>
						<IconNameIconDropdownButton
							width='w-[5.4em]'
							height='h-[2.6em]'
							text='Top 3'
							iconName=''
						/>
					</span>
				</div>
				<div className='w-[11.9em] h-[2em] flex flex-row items-center'>
					<span className='font-baloo text-[2em] text-[#FFFFFF] font-bold tall:text-[1.39em]'>
						23,538,661
					</span>
					<div className='flex flex-row items-center ml-[0.5em]'>
						<img src={neutral} />
						<span className='text-[#FFBB0D] font-baloo font-bold text-[0.875em] flex items-center'>
							21%
						</span>
					</div>
				</div>
			</div>
			<div className='w-[30em] h-[7.8em] flex flex-col items-center justify-end'>
				<div className='w-[30em] h-[2.25em] flex flex-row items-center justify-between'>
					<span className='text-[#FFFFFF] font-[Public_Sans] text-[1em] w-[8.2em] tall:text-[0.7em] overflow-hidden'>
						Advertising
					</span>
					<span>
						<Slider
							slidervalue='w-[20%]'
							sliderwidth='w-[20%]'
							sliderheight='h-2'
							slotwidth='w-[11.9em]'
							slotheight='h-1'
							sliderbg='bg-gradient-to-l from-white to-gray-300'
						/>
					</span>
					<span className='font-baloo font-bold text-[1.156em] text-[#FFFFFF] w-[5.9em] flex justify-end tall:text-[0.80519rem]'>
						2,666,134
					</span>
					<div className='flex flex-row items-center'>
						<img src={arrowFatDownIcon} />
						<span className='font-baloo font-bold text-[0.75em] text-[#FF8181]'>
							13%
						</span>
					</div>
				</div>
				<div className='w-[30em] h-[2.25em] flex flex-row items-center justify-between'>
					<span className='text-[#FFFFFF] font-[Public_Sans] text-[1em] w-[8.1875em] tall:text-[0.69625rem]'>
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
					<span className='font-baloo font-bold text-[18.5px] text-[#FFFFFF] w-[95px] flex justify-end tall:text-[0.80519rem]'>
						1,211,171
					</span>
					<div className='flex flex-row items-center'>
						<img src={neutral} />
						<span className='font-baloo font-bold text-[0.75em] text-[#FFBB0D]'>
							0.5%
						</span>
					</div>
				</div>
				<div className='w-[30em] h-[2.25em] flex flex-row items-center justify-between'>
					<span className='text-[#FFFFFF] font-[Public_Sans] text-[16px] w-[8.2em] tall:text-[0.69625rem]'>
						Outside Services
					</span>
					<span>
						<Slider
							slidervalue='w-[95%]'
							sliderwidth='w-[95%]'
							sliderheight='h-2'
							slotwidth='w-[11.87em]'
							slotheight='h-1'
							sliderbg='bg-gradient-to-l from-white to-gray-300'
						/>
					</span>
					<span className='font-baloo font-bold text-[1.15em] text-[#FFFFFF] w-[5.93em] flex justify-end tall:text-[0.80519rem]'>
						1,911,324
					</span>
					<div className='flex flex-row items-center'>
						<img src={arrowUpGreen} />
						<span className='font-baloo font-bold text-[0.75em] text-[#5EFF5A]'>
							24%
						</span>
					</div>
				</div>
			</div>
			<div className='absolute self-end mt-[-0.9375em] mr-[-1.25em] w-[2em] h-[2em] rounded-full hover:bg-primary-purple-200 hover:ring-2'>
				<img src={nextArrow} />
			</div>
		</div>
	);
};

export default KeyExpensesCard;
