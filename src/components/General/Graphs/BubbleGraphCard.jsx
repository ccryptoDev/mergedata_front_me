import { ScatterChart, Scatter, XAxis, YAxis, LabelList } from 'recharts';
import Decision from '@/components/General/Icons/Decision';

const data = [
	{
		id: '1',
		name: '0-30',
		daysAgedAverage: 25,
		quantity: 32,
		agingIncrease: 0.2,
	},
	{
		id: '2',
		name: '31-90',
		daysAgedAverage: 110,
		quantity: 120,
		agingIncrease: 0.3,
	},
	{
		id: '3',
		name: '91-180',
		daysAgedAverage: 193,
		quantity: 32,
		agingIncrease: 0.5,
	},
	{
		id: '4',
		name: '+180',
		daysAgedAverage: 160,
		quantity: 24,
		agingIncrease: -3.5,
	},
	{ id: '5', name: 0, daysAgedAverage: 180, quantity: 7, agingIncrease: 4.8 },
	{ id: '6', name: 0, daysAgedAverage: 20, quantity: 7, agingIncrease: -4.5 },
];

const getColor = id => {
	if (id == '1') {
		return 'url(#-30)';
	} else if (id == '2') {
		return 'url(#-90)';
	} else if (id == '3') {
		return 'url(#-180)';
	} else if (id == '4') {
		return 'url(#+180)';
	} else if (id == '5') {
		return 'url(#neutral1)';
	} else {
		return 'url(#neutral2)';
	}
};

const getRadius = quantity => {
	return Math.sqrt(quantity) * 9;
};

const labelStyle1 = {
	fill: 'white',
	fontSize: 27,
	fontWeight: 'bold',
	fontFamily: 'baloo',
};

const labelStyle2 = {
	fill: 'white',
	fontSize: 12,
	fontWeight: 'semibold',
	fontFamily: 'baloo',
};

const getLabel1 = ({ quantity, name }) => {
	if (name === 0) {
		null;
	} else {
		return `${quantity}\n`;
	}
};

const getLabel2 = ({ quantity, name }) => {
	if (name === 0) {
		null;
	} else {
		return `\n${name}`;
	}
};

export default function BubbleGraphCard({
	iconName = 'ArrowFatUpDown',
	width = 'w-[544px]',
	height = 'h-[361px]',
}) {
	return (
		<div className={`${width} ${height} bg-[#212A43] rounded-[16px] pt-6 pl-8`}>
			<div className='w-[152px] h-[60px] flex flex-col'>
				<div className='w-[150px] h-[32px] flex flex-row items-center justify-start'>
					<p className='text-[#FFFFFF] font-baloo font-bold text-2xl pr-2'>
						Inventory
					</p>
					<div className='w-[10.3px] h-[6.8px]'>
						<Decision name={iconName} />
					</div>
					<p className='font-baloo text-[#5EFF5A] text-sm'>10%</p>
				</div>
				<div className=''>
					<p className='text-sm text-neutrals-500'>Aging Analysis</p>
				</div>
			</div>
			<div className='w-[470px] h-[250px]'>
				<ScatterChart width={450} height={280}>
					<defs>
						<linearGradient id='-30'>
							<stop offset='10%' stopColor='#00B899' stopOpacity={0.9} />
							<stop offset='90%' stopColor='#03A5AF' stopOpacity={1} />
						</linearGradient>
						<linearGradient id='-90'>
							<stop offset='10%' stopColor='#FFD81F' stopOpacity={0.7} />
							<stop offset='90%' stopColor='#FFC01F' stopOpacity={1} />
						</linearGradient>
						<linearGradient id='-180'>
							<stop offset='100%' stopColor='#FF7B85' stopOpacity={0.8} />
							<stop offset='90%' stopColor='#FF3C4A' stopOpacity={0.8} />
						</linearGradient>
						<linearGradient id='+180'>
							<stop offset='100%' stopColor='#F4223D' stopOpacity={0.8} />
							<stop offset='90%' stopColor='#F46D22' stopOpacity={0.9} />
							<feDropShadow dx='0' dy='10' stdDeviation='10' />
						</linearGradient>

						<linearGradient id='neutral1'>
							<stop offset='10%' stopColor='#505A78' stopOpacity={1} />
							<stop offset='90%' stopColor='#505A78' stopOpacity={1} />
						</linearGradient>
						<linearGradient id='neutral2'>
							<stop offset='10%' stopColor='#505A78' stopOpacity={1} />
							<stop offset='90%' stopColor='#505A78' stopOpacity={1} />
						</linearGradient>
					</defs>
					<defs>
						<filter id='shadow' x='-40%' y='-20%' width='300%' height='400%'>
							<feOffset result='offOut' in='offOut' dx='0' dy='0' />
							<feGaussianBlur result='blurOut' in='offOut' stdDeviation='8' />
							<feBlend in='blurOut' in2='SourceGraphic' mode='normal' />
						</filter>
					</defs>
					<div
						id='label1'
						className='text-red-600 font-bold font-baloo text-2xl'
					></div>
					<Scatter
						data={data}
						shape={props => {
							const { id, quantity } = props.payload;
							return (
								<circle
									cx={props.cx}
									cy={props.cy}
									r={getRadius(quantity)}
									fill={getColor(id)}
									filter='url(#shadow)'
								/>
							);
						}}
					>
						<LabelList
							dataKey={getLabel1}
							style={labelStyle1}
							position='center'
						></LabelList>
						<LabelList
							dataKey={getLabel2}
							style={labelStyle2}
							position='center'
						></LabelList>
					</Scatter>
					<XAxis
						dataKey='daysAgedAverage'
						type='number'
						domain={[0, 250]}
						strokeOpacity={0}
						tickMargin={3}
						tick={false}
					/>
					<YAxis
						dataKey='agingIncrease'
						type='number'
						domain={[-6, 6]}
						strokeOpacity={0}
						tickMargin={3}
						tick={false}
					/>
				</ScatterChart>
			</div>
		</div>
	);
}
