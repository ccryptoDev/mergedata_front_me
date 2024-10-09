import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';

const data = [
	{
		id: 1,
		makeModel: { brand: 'Nissan', model: 'Altima' },
		variance: { value: 12, percent: 2, behavior: 'up' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
	{
		id: 2,
		makeModel: { brand: 'Nissan', model: 'Armada' },
		variance: { value: 19, percent: 13, behavior: 'steady' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
	{
		id: 3,
		makeModel: { brand: 'Nissan', model: 'GT-R' },
		variance: { value: 26, percent: 4, behavior: 'down' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
	{
		id: 4,
		makeModel: { brand: 'Nissan', model: 'Kicks' },
		variance: { value: 21, percent: 8, behavior: 'up' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
	{
		id: 5,
		makeModel: { brand: 'Nissan', model: 'LEAF' },
		variance: { value: 31, percent: 23, behavior: 'up' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
	{
		id: 6,
		makeModel: { brand: 'Nissan', model: 'MAXIMA' },
		variance: { value: 24, percent: 45, behavior: 'steady' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
	{
		id: 7,
		makeModel: { brand: 'Nissan', model: 'Murano' },
		variance: { value: 18, percent: 2, behavior: 'steady' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
	{
		id: 8,
		makeModel: { brand: 'Nissan', model: 'Versa' },
		variance: { value: 23, percent: 15, behavior: 'up' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
	{
		id: 9,
		makeModel: { brand: 'Nissan', model: 'Almera' },
		variance: { value: 31, percent: 7, behavior: 'up' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
	{
		id: 10,
		makeModel: { brand: 'Nissan', model: 'Pathfinder' },
		variance: { value: 34, percent: 10, behavior: 'down' },
		inventory: 28,
		daysSupply: 28,
		totalUnits: 163,
		gp: 11,
		forecast: '12',
		tracking: 27,
		pvrGoal: '-$920',
	},
];

export default function Table6({
	shouldReduce = false,
	setShowModel,
	setReduce,
}) {
	let behaviorTextColor = '';
	const behaviorIcon = { neutral };

	return (
		<div className='overflow-y-hidden h-[550px'>
			<table className='min-w-full text-left text-sm font-light '>
				<thead className='font-medium text-xs leading-[50px] h-10'>
					<tr>
						<th
							scope='col'
							className='text-purple-50 text-sm font-bold text-start pl-2'
						>
							Make/Model
						</th>
						<th
							scope='col'
							className='text-purple-50 text-sm font-bold text-start pl-0'
						>
							Inventory
						</th>
						<th
							scope='col'
							className='text-purple-50 text-sm font-bold text-start pl-0'
						>
							Days Supply
						</th>
						<th
							scope='col'
							className='text-purple-50 text-sm font-bold text-start pl-0'
						>
							Total Units #
						</th>
						<th
							scope='col'
							className='text-purple-50 text-sm font-bold text-start pl-0'
						>
							GP %
						</th>
						{shouldReduce ? null : (
							<th
								scope='col'
								className='text-purple-50 text-sm font-bold text-center pl-0'
							>
								Forecast
							</th>
						)}
						{shouldReduce ? null : (
							<th
								scope='col'
								className='text-purple-50 text-sm font-bold text-start pr-0'
							>
								Tracking
							</th>
						)}
						<th
							scope='col'
							className='text-purple-50 text-sm font-bold text-start pl-8'
						>
							Variance
						</th>
						<th
							scope='col'
							className='text-purple-50 text-sm font-bold text-start pr-0'
						>
							PVR Goal
						</th>
					</tr>
				</thead>
				<tbody className=''>
					{data.map(item => {
						const beHavior = item.variance.behavior;

						function scoreColor() {
							if (beHavior === 'up') {
								behaviorTextColor = 'text-[#5EFF5A]';
							} else if (beHavior === 'down') {
								behaviorTextColor = 'text-[#FF8181]';
							} else {
								behaviorTextColor = 'text-[#FFBB0D]';
							}
							return <img src={behaviorIcon} />;
						}

						function iconSelect() {
							if (beHavior === 'up') {
								return <img src={arrowUpGreen} />;
							} else if (beHavior === 'down') {
								return <img src={arrowFatDownIcon} />;
							} else {
								return <img src={neutral} />;
							}
						}
						return (
							<tr
								className={`border-b-[5px] border-transparent h-auto cursor-pointer ${
									item.id % 2 === 0
										? 'bg-[#151F39] brightness-100 rounded-2xl'
										: null
								}`}
								key={item.id}
								onClick={() => {
									setReduce(!shouldReduce);
									setShowModel(!shouldReduce);
								}}
							>
								<td className='h-[44px] w-min pl-6 items-center justify-start rounded-l-2xl'>
									<p className='text-xs text-purple-300 h-4'>
										{item.makeModel.brand}
									</p>
									<p className='text-base text-neutrals-300 h-5'>
										{item.makeModel.model}
									</p>
								</td>
								<td className='whitespace-nowrap text-neutrals-300 h-auto pl-6 text-base'>
									{item.inventory}
								</td>
								<td className='whitespace-nowrap text-neutrals-300 h-auto text-base'>
									{item.daysSupply}
								</td>
								<td className='whitespace-nowrap text-neutrals-300 h-auto text-base'>
									{item.totalUnits}
								</td>
								<td className='whitespace-nowrap text-neutrals-300 h-auto text-base'>
									{item.gp}%
								</td>
								{shouldReduce ? null : (
									<td className='whitespace-nowrap text-neutrals-300 h-auto text-base text-center'>
										{item.forecast}
									</td>
								)}
								{shouldReduce ? null : (
									<td
										className={`whitespace-nowrap text-neutrals-300 h-auto text-base pl-6 `}
									>
										{item.tracking}
									</td>
								)}

								<td
									className={`whitespace-nowrap text-neutrals-100 h-12 text-base flex flex-row flex-nowrap items-center bg-[#151F39] brightness-90 pl-6 ${
										!item.id % 2 === 0 ? 'rounded-l-2xl' : null
									}`}
								>
									<p className='pr-2 text-base'>{item.variance.value}%</p>
									<p className='pr-1 '>{iconSelect()}</p>
									<p
										className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}
									>
										{item.variance.percent}%
									</p>
								</td>

								<td className='whitespace-nowrap text-neutrals-300 h-12 text-sm text-start pl-4 rounded-r-2xl bg-[#151F39] brightness-90'>
									{item.pvrGoal}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
