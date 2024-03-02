import { useState } from 'react';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';

export default function CollapseButton({ onClick }) {
	const [showCard, setShowCard] = useState(false);

	const handleShowCard = () => {
        setShowCard(!showCard);
        onClick(); 
    };

	return (
		<div className='relative'>
			<button
				onClick={handleShowCard}
				className={`flex flex-row px-[0.75em] items-center justify-between w-[102px] h-[32px] bg-neutrals-800 rounded-[0.375em] hover:bg-neutrals-900 transition duration-150 delay-150 hover:delay-150 hover:border-purple-600 ${showCard
					? 'border-primary-purple-600 bg-primary-purple-600'
					: 'bg-[#05081E] border-2 border-[#212A43]'
					} transition-colors shadow-[0_13px_25px_-13px_rgba(0,0,0,0.48)]`}
			>
				<span className='flex flex-align-center font-semibold font-baloo text-[0.875rem] leading-[1.5rem] text-[#EEECF1]'>
					Collapse
				</span>
				<ArrowDownIcon
					className={`duration-300 ${ !showCard ? 'rotate-180' : ''}`}
				/>
			</button>
		</div>
	);
}
