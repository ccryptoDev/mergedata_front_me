import PlusIcon from '@/components/General/Icons/PlusIcon';

export default function CardAddTargetsPresets() {
	return (
		<div className='w-[430.67px] h-[304px] bg-[#161A3E] rounded-[12px] flex flex-col items-center justify-center'>
			<div className='mb-[6px] font-baloo font-base font-[700] text-[18px] leading-[28px] text-[#FFFFFF]'>
				Add Target
			</div>
			<div>
				<div className='border-2 border-[#ffffff] rounded-full w-[55px] h-[55px] flex items-center justify-center cursor-pointer'>
					<PlusIcon />
				</div>
			</div>
		</div>
	);
}
