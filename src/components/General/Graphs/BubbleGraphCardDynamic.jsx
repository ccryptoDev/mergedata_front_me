import { ScatterChart, Scatter, XAxis, YAxis, LabelList } from 'recharts';
import nextArrow from '@/assets/svg/next_arrow.svg';

export default function BubbleGraphCardDynamic ({
	width = 500,
	height = 300,
	data = [],
	handleClick = () => { },
	personalizedStyle = {
		width: 'w-[500px]',
		height: 'h-[330px]',
		calcWidth: 'w-[calc(330px)]',
		calcHeight: 'h-[calc(330px)]',
	},
	name = 'Inventory',
	description = 'Aging Analysis',
}) {
	const getColor = id => {
		if (id === 1) {
			return 'url(#-30)';
		}
		if (id === 2) {
			return 'url(#-90)';
		}
		if (id === 3) {
			return 'url(#-180)';
		}
		if (id === 4) {
			return 'url(#+180)';
		}
		if (id === 5) {
			return 'url(#neutral1)';
		}
		return 'url(#neutral2)';
	};

	let multiplier = 12;

	const getRadius = quantity => {
		return Math.sqrt(quantity) * multiplier;
	};

	const getCount = ({ quantity }) => {
		return `${quantity}`;
	};

	const getRange = ({ name }) => {
		return `${name}`;
	};

	const getAmount = ({ sumAmount }) => {
		return `${sumAmount}`;
	};

	function calculateXAxisPosition (range1, range2) {
		if (range1 >= 0 && range2 <= 30) {
			return 30;
		} else if (range1 >= 31 && range2 <= 90) {
			return 40;
		} else if (range1 >= 91 && range2 <= 180) {
			return 10;
		} else if (range1 >= 181) {
			return 70;
		} else {
			// random number between 35 and 65
			const random = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
			if (random === 30 || random === 40 || random === 10 || random === 70) {
				return random + 30;
			}
			return random;
		}
	}

	function calculateYAxisPosition (range1, range2) {
		if (range1 >= 0 && range2 <= 30) {
			return 25;
		} else if (range1 >= 31 && range2 <= 90) {
			return 65;
		} else if (range1 >= 91 && range2 <= 180) {
			return 60;
		} else if (range1 >= 181) {
			return 40;
		} else {
			// return a random integer number between 15 and 80 that is not included in the above returns
			const random = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
			if (random === 25 || random === 65 || random === 60 || random === 40) {
				return random + 30;
			}
			return random;
		}
	}

	const bubbles = data.map((row, index) => {
		const range1 = parseInt(row?.values[0]?.split('-')[0]);
		const range2 = parseInt(
			row?.values[0]?.split('-')[1]?.trim().split(' ')[0],
		);
		const name = row.values[0];
		const quantity = parseInt(row.values[1]);
		const value = Math.sqrt(quantity) * multiplier;
		// if value is greater than 150 then change the multiplier to a lower value
		if (value > 150) {
			multiplier = 6;
		}
		const sumAmount = row.values[2];
		const xAxisPosition = calculateXAxisPosition(range1, range2);
		const yAxisPosition = calculateYAxisPosition(range1, range2);

		return {
			id: index,
			range1,
			range2,
			name,
			quantity,
			xAxisPosition,
			yAxisPosition,
			sumAmount,
		};
	});

	return (
		<div
			className={`${personalizedStyle.width} ${personalizedStyle.height} bg-[#212A43] flex flex-col grow rounded-[1em] px-[1.5em] pt-[1.5em] lg:col-span-4 col-span-2 row-span-1 `}
		>
			<div className='relative w-full flex flex-col '>
				<div className='w-full flex flex-row items-center justify-start'>
					<p className='text-[#FFFFFF] font-baloo font-bold text-2xl pr-2'>
						{name}
					</p>
				</div>
				<div>
					<p className='text-sm text-neutrals-500'>{description}</p>
				</div>
				<div
					onClick={handleClick}
					className='absolute right-[-0.5em] cursor-pointer top-[-0.5em] w-[2em] h-[2em] rounded-full hover:bg-primary-purple-200 hover:ring-2'
				>
					<img src={nextArrow} />
				</div>
			</div>
			<div
				className={`${personalizedStyle.width} ${personalizedStyle.height} mx-[2em] mt-[1em] flex flex-1 grow overflow-scroll`}
			>
				<ScatterChart width={width - 67} height={height - 50}>
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
					<Scatter
						data={bubbles}
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
							dataKey={getCount}
							style={{
								fill: 'white',
								fontSize: 27,
								fontWeight: 'bold',
								fontFamily: 'baloo',
							}}
							position='center'
						></LabelList>
						<LabelList
							dataKey={getRange}
							style={{
								fill: 'white',
								fontSize: 14,
								fontWeight: 'semibold',
								fontFamily: 'baloo',
							}}
							width={100}
							position='bottom'
						></LabelList>
						{/* <LabelList
							dataKey={getAmount}
							style={{
								fill: 'white',
								fontSize: 12,
								fontWeight: 'semibold',
								fontFamily: 'baloo',
							}}
							position='bottom'
						></LabelList> */}
					</Scatter>
					<XAxis
						dataKey='xAxisPosition'
						type='number'
						domain={[0, 100]}
						strokeOpacity={0}
						tickMargin={3}
						tick={false}
					/>
					<YAxis
						dataKey='yAxisPosition'
						type='number'
						domain={[0, 110]}
						strokeOpacity={0}
						tickMargin={3}
						tick={false}
					/>
				</ScatterChart>
			</div>
		</div>
	);
}
