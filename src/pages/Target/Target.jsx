import Dropdown from '@/components/Target/Dropdown';
import FilterDates from '@/components/Target/FilterDates';
import CarouselItem from '@/components/Target/CarouselItem';
import SharedLayout from '@/components/General/SharedLayout';
import Card from '@/components/Target/Card';
import { useNavigate } from 'react-router-dom';

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
		height: '220px',
		width: '354px',
	},
};

const data2 = [
	{
		variable: 'Units',
		percentage: '12%',
		dataValue: '4,146',
		increase: 'neutral',
		realValue: 'w-[45%]',
		targetValue: 'left-[80%]',
	},
	{
		variable: 'Gross',
		percentage: '21%',
		dataValue: '$24,1MM',
		increase: 'up',
		realValue: 'w-[90%]',
		targetValue: 'left-[80%]',
	},
	{
		variable: 'PVR',
		percentage: '4%',
		dataValue: '5,821',
		increase: 'down',
		realValue: 'w-[13%]',
		targetValue: 'left-[60%]',
	},
];

const gradient2 = {
	start: 'from-[#4413A6]',
	end: 'to-[#D245E9]',
	sizeCard: {
		height: '220px',
		width: '354px',
	},
};

export default function Target() {
	const navigate = useNavigate();
	const items = [
		{
			id: 'dd-item-0',
			name: 'Target 1',
			click: () => console.log('clicked 1'),
			selected: false,
		},
		{
			id: 'dd-item-1',
			name: 'Target 2',
			click: () => console.log('clicked 2'),
			selected: false,
		},
		{
			id: 'dd-item-2',
			name: 'Add Target preset',
			click: () => navigate('/target/preset'),
			selected: true,
		},
	];

	return (
		<SharedLayout>
			<div className='mt-12 flex flex-col items-center'>
				<div className='w-[1109px] h-[50px] flex justify-between items-center mb-6'>
					<Dropdown items={items} />
					<div className='flex items-center gap-12 uppercase'>
						<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
							Day
						</h6>
						<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
							Month
						</h6>
						<FilterDates />
					</div>
					<Dropdown name='Home' />
				</div>
				<div className='w-[1123px] flex flex-wrap gap-3 justify-between'>
					<Card
						title='New'
						subTitle='na'
						text='Increased by 29%.'
						data={data1}
						gradient={gradient1}
						typeOfCard={1}
					/>
					<Card
						title='Used'
						subTitle='na'
						text='Increased by 82%.'
						data={data2}
						gradient={gradient2}
						typeOfCard={1}
					/>
					<Card
						title='F&I'
						subTitle='Dollar per copy'
						text='Increased by 29%.'
						data={data1}
						gradient={gradient1}
						typeOfCard={2}
					/>

					<Card
						title='Used'
						subTitle='na'
						text='Increased by 82%.'
						data={data2}
						gradient={gradient2}
						typeOfCard={1}
					/>
					<Card
						title='New'
						subTitle='na'
						text='Increased by 29%.'
						data={data1}
						gradient={gradient1}
						typeOfCard={1}
					/>
					<Card
						title='Used'
						subTitle='Dollar per copy'
						text='Increased by 82%.'
						data={data2}
						gradient={gradient2}
						typeOfCard={2}
					/>
				</div>
				<div className='flex w-[1270px] mx-auto justify-between mt-12'>
					<CarouselItem />
					<CarouselItem
						name='advertising'
						amount='-1305'
						increase='up'
						percentage='3'
					/>
					<CarouselItem
						name='F&I PVR'
						amount='1455'
						increase='down'
						percentage='2'
					/>
					<CarouselItem
						name='GAP income'
						amount='165'
						increase='up'
						percentage='15'
					/>
				</div>
			</div>
		</SharedLayout>
	);
}
