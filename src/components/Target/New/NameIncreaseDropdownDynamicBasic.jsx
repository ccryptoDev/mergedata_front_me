const NameIncreaseDropdownDynamic = ({
	title = 'Financial Statement',
}) => {
	return (
		<div className='flex flex-col'>
			<div className='flex'>
				<h4 className='h-[36px] font-baloo font-bold text-[24px] text-white'>
					{title}
				</h4>
			</div>
		</div>
	);
};

export default NameIncreaseDropdownDynamic;
