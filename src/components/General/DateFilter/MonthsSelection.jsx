import classNames from 'classnames';

const MonthsSelection = ({ item, selectDateHandler }) => {
	const classes = classNames(
		'flex justify-between items-center px-3 py-2 leading-4 rounded cursor-pointer',
		{
			'bg-[rgba(144,123,231,0.20)]': item.isActive,
			'hover:bg-[#4832A6]': !item.isActive,
		},
	);
	return (
		<div
			key={item.name}
			onClick={e => selectDateHandler(e, item)}
			className={classes}
		>
			<span className='leading-6 font-semibold'>{item.name}</span>
			<span className='leading-6'>{item.year}</span>
		</div>
	);
};

export default MonthsSelection;
