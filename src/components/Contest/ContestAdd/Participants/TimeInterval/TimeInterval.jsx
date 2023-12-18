const TimeInterval = () => {
	return (
		<div className='gap-2 flex flex-col'>
			<h4 className='leading-[1.875rem]'> 5. Time Interval</h4>
			<div className='flex w-full gap-3'>
				<div className='flex flex-col grow gap-1'>
					<label
						htmlFor='dateFrom'
						className='text-[0.75rem] leading-3 tracking-[0.00938rem] px-1'
					>
						From
					</label>
					<input
						type='text'
						id='dateFrom'
						className='bg-dark-popup-00 border rounded py-4 px-3'
						placeholder='DD/MM/YYYY'
						style={{
							borderColor: '#E5E8EF',
							borderWidth: '1px',
						}}
					/>
				</div>
				<div className='flex flex-col grow gap-1'>
					<label
						htmlFor='dateTo'
						className='text-[0.75rem] leading-3 tracking-[0.00938rem] px-1'
					>
						To
					</label>
					<input
						type='text'
						id='dateTo'
						className='bg-dark-popup-00 border rounded py-4 px-3'
						placeholder='DD/MM/YYYY'
						style={{
							borderColor: '#E5E8EF',
							borderWidth: '1px',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default TimeInterval;
