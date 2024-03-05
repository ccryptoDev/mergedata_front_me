import { PieChart, Pie, Label, Cell, ResponsiveContainer } from 'recharts';
import mouse from '@/assets/svg/mouse.svg';

const data = [
	{ name: 'Group B', value: 75 },
	{ name: 'Group D', value: 25 },
];

const COLORS = ['#FF7D05', '#785FE2'];

const CustomLabel = ({ viewBox, labelText, value }) => {
	const { cx, cy } = viewBox;
	return (
		<g>
			<text
				x={cx}
				y={cy}
				className='recharts-text recharts-label'
				textAnchor='middle'
				dominantBaseline='central'
				alignmentBaseline='central'
				fill='#FFFFFF'
				fontSize='20'
				fontWeight='700'
				fontFamily='baloo'
			>
				{value}
			</text>
		</g>
	);
};

export default function ProgressPieResume({
	endAngle = 360,
	value = '75%',
	gameNumber = 1,
	initialDate = '01/12/2022',
	endDate = '01/03/2023',
}) {
	return (
		<div className='flex items-center px-3 py-2 min-h-[19%] tall:min-h-[33%]'>
			<ResponsiveContainer width={'30%'}>
				<PieChart>
					<Pie
						data={data}
						cx={25}
						cy={25}
						innerRadius={23}
						outerRadius={29}
						// fill='#785FE2'
						paddingAngle={-10}
						dataKey='value'
						stroke='none'
						legendType='circle'
						startAngle={0}
						endAngle={endAngle}
						cornerRadius={100}
						labelLine={false}
						isAnimationActive={true}
						// label={}
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
						<Label
							content={<CustomLabel labelText='' value={value} />}
							position='center'
						/>
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<div className='flex flex-col'>
				<div className='text-[#FFFFFF] font-semibold leading-6'>{`Game  ${gameNumber}`}</div>
				<div className='text-[#FFFFFF] flex items-center gap-x-2'>
					<div className='w-3 h-3'>
						<img src={mouse} />
					</div>
					<div className='text-[#8B93A9] text-[0.75rem] leading-[1.125rem]'>
						{initialDate} - {endDate}
					</div>
				</div>
			</div>
		</div>
	);
}
