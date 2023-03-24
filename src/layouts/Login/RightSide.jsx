import { useState, useEffect } from 'react';

import LoginCarousel from '@/components/Login/LoginCarousel';
import mergeDataIcon from '@/assets/svg/mergedata_icon.svg';
import messageIconBlack from '@/assets/svg/message_icon_bg_black.svg';


export default function RightSide ({ width }) {
	const [activeButton, setActiveButton] = useState(1);

	useEffect(() => {
		const changeCarousel = setTimeout(() => {
			handleSlide(activeButton === 4 ? '1' : `${activeButton + 1}`)
		}, 10000);

		return () => {
			clearTimeout(changeCarousel);
		}
	}, [activeButton])


	const handleSlide = id => {
		setActiveButton(+id);
	};

	return (
		<section className={`${width} relative`}>
			<div className=' pt-[36px] pr-[36px] flex justify-end'>
				<img
					src={mergeDataIcon}
					alt='MergeData icon'
					className='w-[34px] h-14'
				/>
			</div>
			<LoginCarousel activeButton={activeButton} />
			<div className='flex justify-between mt-8 pl-20'>
				<div className=' flex gap-3 ml-6'>
					<button
						className={`w-16 h-1 rounded-lg ${activeButton !== 1 ? 'bg-neutrals-800' : 'bg-neutrals-00'
							}`}
						id='1'
						onClick={event => handleSlide(event.target.id)}
					></button>
					<button
						className={`w-16 h-1 rounded-lg ${activeButton !== 2 ? 'bg-neutrals-800' : 'bg-neutrals-00'
							}`}
						id='2'
						onClick={event => handleSlide(event.target.id)}
					></button>
					<button
						className={`w-16 h-1 rounded-lg ${activeButton !== 3 ? 'bg-neutrals-800' : 'bg-neutrals-00'
							}`}
						id='3'
						onClick={event => handleSlide(event.target.id)}
					></button>
					<button
						className={`w-16 h-1 rounded-lg ${activeButton !== 4 ? 'bg-neutrals-800' : 'bg-neutrals-00'
							}`}
						id='4'
						onClick={event => handleSlide(event.target.id)}
					></button>
				</div>
				<div className='absolute bottom-12 right-12'>
					<img src={messageIconBlack} alt='' />
				</div>
			</div>
		</section>
	);
}
