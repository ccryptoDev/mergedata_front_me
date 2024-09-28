
export default function MonthScrollableList({
	previousYearsList,
	handleClickedYearFromList,
	selectedYear,
}) {

	return (
		<div className='w-[158px] h-[180px] rounded-xl bg-[#05081E] py-[6px] px-2 z-100'>
			<div className='w-[143px] h-[36px] bg-[#6043DD] hover:bg-[#5f43ddaa] rounded-md flex items-center justify-center mb-2'>
				<p className='text-[#FFFFFF] font-baloo text-sm'>
					{selectedYear}
				</p>
			</div>
			<div className='w-[142px] h-[124px] flex flex-col items-start justify-start overflow-y-scroll overflow-x-hidden '>
				<div className='w-32 h-[180px]'>
					{
						previousYearsList.map((item) => {
							return (
								<button
									key={item.id}
									className='w-[133px] h-9 focus:bg-[#35257A] rounded-md flex items-center justify-start px-2 mb-1'
									onClick={() => { handleClickedYearFromList(item.year) }}
								>
									<p className='text-[#FFFFFF] font-baloo text-[13px]'>
										<span> {item.year} </span>
									</p>
								</button>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}
