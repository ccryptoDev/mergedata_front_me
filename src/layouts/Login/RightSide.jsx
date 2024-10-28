import { useState, useEffect } from 'react';

import LoginCarousel from '@/components/Login/LoginCarousel';
import mergeDataIcon from '@/assets/svg/mergedata_icon.svg';
import messageIconBlack from '@/assets/svg/message_icon_bg_black.svg';
import rightElementLogin from '@/assets/images/gradient-element-min.png';


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
		<section className={`relative md:w-[53%] w-full h-full relative grow flex flex-col justify-between p-8`}>
			<div className={`${width - 2} overflow-hidden relative rounded-[32px] bg-gradient-to-br from-[#343650] to-[#242650] justify-start flex flex-col grow`}>
				<img
					src={rightElementLogin}
					alt='Shape element'
					className='absolute shape-right-login'
				/>
				<div className='absolute top-[2.5em] right-[2.5em] w-full h-[3.75em] flex justify-end z-50'>
					<img
						src={mergeDataIcon}
						alt='MergeData icon'
						className='w-[2.125rem] h-[3.5rem]'
					/>
				</div>
				<div className={'flex h-full'}>
					<LoginCarousel activeButton={activeButton} />
				</div>
				<div className='pb-10 px-5 flex gap-[0.75em] ml-[1.5em]'>
					<button
						className={`w-[4em] h-1 rounded-lg ${activeButton !== 1 ? 'bg-neutrals-800' : 'bg-neutrals-00'
							}`}
						id='1'
						onClick={event => handleSlide(event.target.id)}
					></button>
					<button
						className={`w-[4em] h-1 rounded-lg ${activeButton !== 2 ? 'bg-neutrals-800' : 'bg-neutrals-00'
							}`}
						id='2'
						onClick={event => handleSlide(event.target.id)}
					></button>
					<button
						className={`w-[4em] h-1 rounded-lg ${activeButton !== 3 ? 'bg-neutrals-800' : 'bg-neutrals-00'
							}`}
						id='3'
						onClick={event => handleSlide(event.target.id)}
					></button>
					<button
						className={`w-[4em] h-1 rounded-lg ${activeButton !== 4 ? 'bg-neutrals-800' : 'bg-neutrals-00'
							}`}
						id='4'
						onClick={event => handleSlide(event.target.id)}
					></button>
				</div>
				<div className='absolute bottom-[1.5em] right-[1.5em]'>
					<img src={messageIconBlack} alt='' />
				</div>
			</div>
		</section>
	);
}
