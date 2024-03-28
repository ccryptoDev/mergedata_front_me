import { ScatterChart, Scatter, XAxis, YAxis, LabelList } from 'recharts';
import Decision from '@/components/General/Icons/Decision';
import nextArrow from '@/assets/svg/next_arrow.svg';

export default function BubbleGraphCard ({
	iconName = 'ArrowFatUpDown',
	width = 500,
	height = 300,
	data = [],
	handleClick = () => { },
	personalizedStyle = { width: 'w-[500px]', height: 'h-[330px]', calcWidth: 'w-[calc(330px)]', calcHeight: 'h-[calc(330px)]' },
	name = 'Inventory',
	description = 'Aging Analysis',
}) {

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
		return Math.sqrt(quantity) * 8;
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

	return (
		<div onClick={handleClick} className={`${personalizedStyle.width} ${personalizedStyle.height} bg-[#212A43] rounded-[1em] py-[1.5em]`}>

			<div className='relative w-[90%] h-[3.75em] flex flex-col mx-[2em]'>
				<div className='w-[9.375em] h-[2em] flex flex-row items-center justify-start'>
					<p className='text-[#FFFFFF] font-baloo font-bold text-2xl pr-2'>
						{name}
					</p>
					<div className='w-[0.64em] h-[0.425em]'>
						<Decision name={iconName} />
					</div>
					<p className='font-baloo text-[#5EFF5A] text-sm'>10%</p>
				</div>
				<div className=''>
					<p className='text-sm text-neutrals-500'>{description}</p>
				</div>
				<div className='absolute right-[-0.5em] top-[-0.5em] w-[2em] h-[2em] rounded-full hover:bg-primary-purple-200 hover:ring-2'>
					<img src={nextArrow} />
				</div>
			</div>
			<div className={`${personalizedStyle.width} ${personalizedStyle.height} mx-[2em] mt-[1em] `}>

				<ScatterChart width={width - 67} height={height - 95} >
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
						className='text-red-600 font-bold font-baloo text-[1.5rem]'
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
						domain={[-20, 340]}
						strokeOpacity={0}
						tickMargin={3}
						tick={false}
					/>
					<YAxis
						dataKey='agingIncrease'
						type='number'
						domain={[-7, 9]}
						strokeOpacity={0}
						tickMargin={3}
						tick={false}
					/>
				</ScatterChart>
			</div>
		</div>
	);
}
