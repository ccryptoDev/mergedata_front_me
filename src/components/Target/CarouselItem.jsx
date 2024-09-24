import { useState } from 'react';
import {
	calculatePercentage,
	formatMoney,
	truncateString,
} from '@/utils/helperFunctions';
import { Tooltip } from 'react-tooltip';
import ModalWrapper from '@/components/General/ModalWrapper/ModalWrapper';

import { FavoriteIcon } from '../General/Icons/targets/TargetsIcons';
import IndicatorModal from './Indicators/Modal/IndicatorModal';

export default function CarouselItem({
	name,
	lineName,
	amount,
	percentage,
	reportLineId,
}) {
	const [toggleModal, setToggleModal] = useState(false);
	const tooltipStyles = {
		backgroundColor: '#202449',
		color: '#fff',
		borderRadius: '0.5rem',
		fontSize: '12px',
	};

	return (
		<>
			<button
				type='button'
				onClick={() => setToggleModal(true)}
				className=' w-[300px] p-4 flex items-center gap-4 border-r border-dashed border-r-neutrals-900 hover:bg-neutrals-900 rounded-lg cursor-pointer'
			>
				<div className='w-8 h-8 flex items-center justify-center border border-neutrals-900 rounded-lg hover:bg-neutrals-900 hover:border-neutrals-900'>
					<FavoriteIcon />
				</div>
				<div className='w-[236px] flex flex-col'>
					<div className='w-full flex items-center'>
						<p className='text-xs text-[#6A6A9F]'>{name} - </p>
						{lineName.length > 20 ? (
							<>
								<Tooltip id={lineName} style={tooltipStyles} />
								<p
									data-tooltip-id={lineName}
									data-tooltip-content={lineName}
									data-tooltip-place='top'
									className='text-xs text-[#6A6A9F]'
								>
									{truncateString(lineName, 20)}
								</p>
							</>
						) : (
							<p className='text-xs text-[#6A6A9F]'>{lineName}</p>
						)}
					</div>

					<div className='flex items-center gap-5'>
						<p className='text-2xl text-neutrals-00 font-baloo'>
							{formatMoney.format(amount)}
						</p>
						<div className='flex items-center gap-1'>
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
				</div>
			</button>
			{toggleModal && (
				<ModalWrapper>
					<IndicatorModal
						lineName={lineName}
						amount={amount}
						percentage={percentage}
						closeModal={boolean => setToggleModal(boolean)}
						reportLineId={reportLineId}
					/>
				</ModalWrapper>
			)}
		</>
	);
}
