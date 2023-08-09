const DetailTotalRow = ({ total }) => {
	const values = total?.map(row => row.values);

	const renderTotalRow = values => {
		const amount = values?.map(value => value[1]);
		const count = values?.map(value => value[3]);
		return (
			<div className='h-[56px] px-5 flex justify-between text-neutrals-00 text-sm'>
				<div className='flex items-center gap-5'>
					<h6>Total Amount:</h6>
					<p> {amount}</p>
				</div>
				<div className='flex items-center gap-5'>
					<h6>Total Count:</h6>
					<p className='h-[42px] min-w-[126px] flex items-center justify-center bg-neutrals-1000 rounded-lg'>
						{count}
					</p>
				</div>
			</div>
		);
	};

	return (
		<div className='w-[94%] bg-neutrals-700 text-neutrals-00 rounded-xl absolute bottom-0'>
			{renderTotalRow(values)}
		</div>
	);
};

export default DetailTotalRow;
