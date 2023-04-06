import RangeBar from '@/components/General/RangeBar';
import { increaseStatus } from '@/utils/helperFunctions';

function ModelsIndividualStatus() {
	const { icon, textColor } = increaseStatus('up');
	return (
		<div className='w-[86px]'>
			<p className='mb-1 text-white text-[14px] leading-5'>Cars</p>
			<div className='flex gap-2 mb-3'>
				<span className='font-bold font-baloo text-[24px] text-[#FFFFFF]'>
					1,614
				</span>
				<div className='flex items-end pb-1'>
					<img src={icon} className='pb-[6px] pr-1' />
					<span className={`font-bold font-baloo text-sm  ${textColor}`}>
						21%
					</span>
				</div>
			</div>
			<RangeBar />
		</div>
	);
}

export default ModelsIndividualStatus;
