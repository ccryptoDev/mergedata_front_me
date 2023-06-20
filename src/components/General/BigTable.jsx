import { increaseStatus } from '@/utils/helperFunctions';

export default function BigTable ({ shouldReduce = false, report }) {
	return (
		<div className='h-[555px] overflow-y-auto'>
			<table className='min-w-full text-left text-sm font-light '>
				<thead className='sticky top-0 bg-neutrals-900 z-10'>
					<tr className='h-[54px] text-primary-purple-50 font-public font-bold text-md'>
						{report?.columns.map((column, index) => {
							return (
								<th
									key={index}
									className={`${index === 0
											? 'text-left max-w-[190px] px-4'
											: 'text-right px-4'
										}`}
								>
									{column}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody className='overflow-y-auto h-[555px]'>
					{report?.rows.map((row, index) => {
						return (
							<tr
								key={index}
								className={`h-[54px] text-primary-purple-50 font-public text-base hover:bg-neutrals-800 ${index % 2 && 'bg-[#151F39] '
									}`}
							>
								{row.map((text, index) => {
									if (text.includes('::')) {
										const { icon, textColor } = increaseStatus(
											text.split('::')[0],
										);
										return (
											<td
												key={index}
												className={
													'whitespace-nowrap text-neutrals-100 text-base rounded-r-2xl max-w-[126px]'
												}
											>
												<div className='h-[48px] flex flex-row justify-center items-center bg-[#000000] brightness-90 rounded-l-2xl rounded-r-2xl px-2 ml-4'>
													<p className='pr-1'>
														<img src={icon} />
													</p>
													<p className={`flex items-center ${textColor}`}>
														{text.split('::')[1]}
													</p>
												</div>
											</td>
										);
									}
									if (index === 0) {
										return (
											<td
												key={index}
												className={`${index === 0 &&
													'text-left max-w-[190px] px-4 rounded-l-2xl truncate'
													}`}
											>
												{text}
											</td>
										);
									} else {
										return (
											<td key={index} className={'text-right px-4'}>
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
