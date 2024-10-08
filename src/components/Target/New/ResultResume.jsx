import Slider from '@/components/Target/New/Slider';

export default function ResultResume({ title = '', description, onclick }) {
	return (
		<div
			className='flex flex-col px-4 py-3 gap-y-[2px] bg-[#05081E] cursor-pointer'
			onClick={onclick}
		>
			<h6 className='font-baloo font-bold text-neutrals-00'>{title}</h6>

			<p className='font-baloo font-bold text-[0.75rem] text-neutrals-00'>
				{description}
			</p>

			<div className='flex gap-2 justify-between items-center'>
				<div className='w-6 h-[18px]'>
					<p className='font-sans text-xs text-green-400'>10%</p>
				</div>
				<div className='w-[229px] h-[18px] flex items-center justify-center'>
					<Slider
						sliderwidth='w-[50px]'
						sliderheight='h-2'
						slidervalue=''
						sliderbg='bg-[#32E5CB]'
						slotheight='h-2'
						slotbg='bg-neutrals-500'
						slotwidth='w-[229px]'
						targetValue='left-2/3'
						showBall={false}
					/>
				</div>
			</div>
		</div>
	);
}
