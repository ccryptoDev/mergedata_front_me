import { useContext, useEffect, useState } from 'react';
import FilterDates from '@/components/Target/FilterDates/FilterDates';
import Carousel from '@/pages/Target/Carousel';
import CarouselSlider from '@/components/General/PredictiveAI/CarouselSlider';
import SharedLayout from '@/components/General/SharedLayout';
import Card from '@/components/Target/Card';
import ReportsContext from '@/context/ReportsProvider';
import StorePickerDynamic from '@/components/General/StorePicker/StorePickerDynamic';
import TargetSelector from '@/components/General/TargetSelector/TargetSelector';
import Decision from '@/components/General/Icons/Decision';
import { useSubSections } from '@/hooks/useSubSections';

const data1 = [
	{
		variable: 'Units',
		percentage: '29%',
		dataValue: '3,123',
		increase: 'neutral',
		realValue: 'w-[45%]',
		targetValue: 'left-[80%]',
	},
	{
		variable: 'Gross',
		percentage: '33%',
		dataValue: '$12,8MM',
		increase: 'up',
		realValue: 'w-[90%]',
		targetValue: 'left-[80%]',
	},
	{
		variable: 'PVR',
		percentage: '14%',
		dataValue: '4,109',
		increase: 'down',
		realValue: 'w-[13%]',
		targetValue: 'left-[60%]',
	},
];

const gradient1 = {
	start: 'from-purple-900',
	end: 'to-[#4413A6]',
	sizeCard: {
		height: '13.75em',
		width: '22.12em',
	},
};

// const data2 = [
// 	{
// 		variable: 'Units',
// 		percentage: '12%',
// 		dataValue: '4,146',
// 		increase: 'neutral',
// 		realValue: 'w-[45%]',
// 		targetValue: 'left-[80%]',
// 	},
// 	{
// 		variable: 'Gross',
// 		percentage: '21%',
// 		dataValue: '$24,1MM',
// 		increase: 'up',
// 		realValue: 'w-[90%]',
// 		targetValue: 'left-[80%]',
// 	},
// 	{
// 		variable: 'PVR',
// 		percentage: '4%',
// 		dataValue: '5,821',
// 		increase: 'down',
// 		realValue: 'w-[13%]',
// 		targetValue: 'left-[60%]',
// 	},
// ];

// const gradient2 = {
// 	start: 'from-[#4413A6]',
// 	end: 'to-[#D245E9]',
// 	sizeCard: {
// 		height: '13.75em',
// 		width: '22.12em',
// 	},
// };

export default function Target () {
	useSubSections();
	const { subSections } = useContext(ReportsContext);
	const [carouselSession, setCarouselSession] = useState(0);
	const [moveX, setMoveX] = useState('0em');
	const swiperPosition = sliderFourSession => {
		setCarouselSession(sliderFourSession);
	};

	useEffect(() => {
		if (carouselSession === 0) {
			setMoveX('translate-x-[0.1875em]');
		} else if (carouselSession === 1) {
			setMoveX('translate-x-[82.2em]');
		} else if (carouselSession === 2) {
			setMoveX('translate-x-[164.2em]');
		} else if (carouselSession === 3) {
			setMoveX('translate-x-[246.23em]');
		}
	}, [carouselSession]);

	return (
		<SharedLayout className='z-0'>
			<div className='z-10 flex flex-col h-[46.8em] justify-between items-center'>
				<div className='z-30 relative flex flex-row w-full justify-between items-center'>
					<TargetSelector addTarget={true} />
					<FilterDates
						daySelectorEnabled={true}
						monthSelectorEnabled={true}
						yearSelectorEnabled={true}
					/>
					<div className='flex flex-row justify-end items-center w-auto h-[3.3em]'>
						<StorePickerDynamic />
					</div>
				</div>
				<div className='z-20 relative grid grid-cols-2 lg:grid-cols-3 lg:scale-[1.1]  grid-rows-2 gap-x-[1.5em] gap-y-[1.5em] justify-items-center  h-auto w-auto mt-[2.5em] mb-[1.5em]'>
					{subSections.map((subSection, index) => (
						<Card
							key={index}
							title={subSection.name}
							subTitle='na'
							text='Increased by 29%.'
							data={data1}
							gradient={gradient1}
							typeOfCard={1}
							subSection={subSection}
						/>
					))}
				</div>
				<div className='w-[90.5em] h-[12.5em] flex flex-col justify-center items-center mt-[1.5em] pt-[1.1em] px-[3.125em] pb-[1.5em] gap-y-[0.8em]'>
					<div className='relative w-[82.5em] px-[0.25em] h-[8em] py-[0.25em] flex flex-row items-center overflow-hidden'>
						<div
							className={`absolute top-0 right-0 transform ${moveX} transition duration-1000 delay-100`}
						>
							<Carousel />
						</div>
					</div>
					<div className='w-[82em] h-[1.5em] flex flex-row justify-between items-center'>
						<CarouselSlider swiperPosition={swiperPosition} />
						<div className='w-[3.75em] h-[1.5em] flex justify-between '>
							<Decision name='Gallery9Squares' />
							<Decision name='Nut' />
						</div>
					</div>
				</div>
			</div>
		</SharedLayout>
	);
}
