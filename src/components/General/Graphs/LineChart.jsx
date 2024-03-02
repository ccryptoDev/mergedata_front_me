import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{},
];

export default function LineGraph () {
	return (
		<ResponsiveContainer height={200}>
			<LineChart data={data}>
				<defs>
					<linearGradient id='unselected'>
						<stop offset='0%' stopColor='#FFFFFF' stopOpacity={0.2} />
						<stop offset='0%' stopColor='#B9B9B9' stopOpacity={0.2} />
					</linearGradient>
					<linearGradient id='selected'>
						<stop offset='0%' stopColor='#4DFFDF' stopOpacity={1} />
						<stop offset='100%' stopColor='#4DA1FF' stopOpacity={1} />
					</linearGradient>
				</defs>
				{/* <ReferenceLine y={250} stroke="#D6DBE8" strokeWidth={2} isFront={true} alwaysShow={true} /> */}
				<Line
					type='monotone'
					dataKey='pv'
					dot={false}
					stroke='url(#selected)'
					strokeWidth={4}
				/>
				<Line
					type='monotone'
					dot={false}
					dataKey='uv'
					stroke='url(#unselected)'
					strokeWidth={4}
				/>
				<Line
					type='monotone'
					dataKey='amt'
					dot={false}
					stroke='url(#unselected)'
					strokeWidth={4}
				/>
			</LineChart>
		</ResponsiveContainer >
	);
}
