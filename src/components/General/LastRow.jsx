import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';

export default function LastRow({ shouldReduce = false, report }) {
	let behaviorTextColor = '';
	const behaviorIcon = { neutral };
	let beHavior = '';
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
		<div className={`h-[60px] overflow-y-auto`}>
			<table className='min-w-full h-[60px] text-left text-sm font-light bg-[#505A78] rounded-2xl'>
				<tbody className='overflow-y-auto h-[60px]'>
					{report?.rows.slice(-1).map((row, index) => {
						return (
							<tr
								className='rounded-x-2xl h-[54px] text-primary-purple-50 font-public font-bold text-base hover:bg-neutrals-800'
								key={index}
							>
								{row.map((text, index) => {
									if (text.includes('::')) {
										beHavior = text.split('::')[0];
										return (
											<td
												key={`row-item-${index}`}
												className={
													'whitespace-nowrap text-neutrals-100 text-base rounded-r-2xl max-w-[126px]'
												}
											>
												<div className='h-[48px] flex flex-row justify-center items-center bg-[#000000] brightness-90 rounded-l-2xl rounded-r-2xl px-2 mx-2'>
													<p className='pr-1 '>{iconSelect()}</p>
													<p
														className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}
													>
														{text.split('::')[1]}
													</p>
												</div>
											</td>
										);
									}
									if (index === 0) {
										return (
											<td
												key={`row-item-${index}`}
												className='text-left max-w-[190px] px-4 rounded-l-2xl truncate'
											>
												{text}
											</td>
										);
									} else {
										return (
											<td key={index} className={'text-right px-5'}>
												{text}
											</td>
										);
									}
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
