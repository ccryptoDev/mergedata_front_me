import { ResponsiveContainer, LineChart, Line, ReferenceDot } from 'recharts';

const data = [
	{
		name: 'Page A',
		uv: 0,
		pv: 260,

	},
	{
		name: 'Page A',
		uv: 300,
		pv: 480,

	},
	{
		name: 'Page B',
		uv: 700,
		pv: 940,

	},
	{
		name: 'Page B',
		uv: 1800,
		pv: 2590,

	},
	{
		name: 'Page C',
		uv: 1860,
		pv: 3300,
	},
	{
		name: 'Page C',
		uv: 3000,
		pv: 3200,
	},
	{
		name: 'Page D',
		uv: 5800,
		pv: 3000,
	},
	{
		name: 'Page D',
		uv: 6600,
		pv: 4000,
	},
	{
		name: 'Page E',
		uv: 6100,
		pv: 6508,
	},
	{
		name: 'Page E',
		uv: 4800,
		pv: 8608,
	},
	{
		name: 'Page F',
		uv: 3890,
		pv: 9200,
	},
	{
		name: 'Page F',
		uv: 3890,
		pv: 8700,
	},
	{
		name: 'Page G',
		uv: 3390,
		pv: 7200,
	},
	{
		name: 'Page G',
		uv: 2090,
		pv: 5000,
	},
	{
		name: 'Page H',
		uv: 1590,
		pv: 3600,
	},
	{
		name: 'Page H',
		uv: 1780,
		pv: 3300,
	},
	{
		name: 'Page I',
		uv: 1750,
		pv: 3400,
	},
	{
		name: 'Page I',
		uv: 1290,
		pv: 2900,
	},
	{
		name: 'Page J',
		uv: 490,
		pv: 1600,
	},
	{
		name: 'Page J',
		uv: 200,
		pv: 1290,
	},

];

export default function LineGraph() {
	return (
			<ResponsiveContainer width={277} height={50} >
				<LineChart data={data}>
					<defs>
						<linearGradient id='a1'>
							<stop offset='0%' stopColor='#E323FF' stopOpacity={1} />
							<stop offset='100%' stopColor='#7517F8' stopOpacity={1} />
						</linearGradient>
						<linearGradient id='a2'>
							<stop offset='0%' stopColor='#FFD422' stopOpacity={1} />
							<stop offset='100%' stopColor='#FF7D05' stopOpacity={1} />
						</linearGradient>
					</defs>
					{/* <ReferenceLine y={250} stroke="#D6DBE8" strokeWidth={2} isFront={true} alwaysShow={true} /> */}

					<Line
						type='monotone'
						dataKey='pv'
						dot={false}
						stroke='url(#a1)'
						strokeWidth={3.72}
						strokeLinecap='round'
					/>
					<Line
						type='monotone'
						dot={false}
						dataKey='uv'
						stroke='url(#a2)'
						strokeWidth={3.72}
						strokeLinecap='round'
					/>
				</LineChart>
			</ResponsiveContainer>
	);
}
