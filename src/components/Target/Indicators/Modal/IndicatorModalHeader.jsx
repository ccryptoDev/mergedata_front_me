import { FactoryIcon } from '@/components/General/Icons/targets/TargetsIcons';
import { calculatePercentage, formatMoney } from '@/utils/helperFunctions';

const IndicatorModalHeader = ({ lineName, percentage, amount, closeModal }) => {
	return (
		<section className='w-full flex justify-between items-center'>
			<div className='flex items-center gap-10'>
				<div className='flex items-center gap-2'>
					<FactoryIcon width={32} height={32} />
					<p className='text-2xl font-baloo text-neutrals-00'>{lineName}</p>
				</div>
				<div className='flex items-center gap-1 text-2xl font-baloo text-neutrals-00'>
					<p className='text-neutrals-400'>{formatMoney.format(amount)}</p>
					<img src={calculatePercentage(percentage).icon} alt='icon' />
					<p
						className={`text-xs flex items-center ${
							calculatePercentage(percentage).color
						}`}
					>
						{calculatePercentage(percentage).number}
					</p>
				</div>
			</div>
			<button
				type='button'
				onClick={() => closeModal(false)}
				className='p-[10px] font-baloo bg-primary-purple-600 rounded-lg text-neutrals-00 hover:bg-primary-purple-800'
			>
				Close
			</button>
		</section>
	);
};

export default IndicatorModalHeader;
