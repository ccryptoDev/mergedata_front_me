import Dropdown from '@/components/Target/Dropdown';

const NameDropdown = ({
	title = 'Salesperson',
	dropDownText = 'Top 3',
	width = 'w-[15.25em]',
	margin = 'mb-[1.25em]',
}) => {
	return (
		<div
			className={`${width} h-[2.625em] flex justify-between text-center items-center ${margin} `}
		>
			<h4 className='font-baloo font-bold text-white text-[1.5em] mr-[0.5em]'>{title}</h4>

			<Dropdown name={`${dropDownText}`} hight='h-[2.3em]' width='w-[70%]' iconName = '' />
		</div>
	);
};

export default NameDropdown;
