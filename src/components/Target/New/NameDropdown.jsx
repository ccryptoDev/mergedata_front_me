import Dropdown from '@/components/Target/Dropdown';

const NameDropdown = ({
	title = 'Salesperson',
	dropDownText = 'Top 3',
	width = 'w-[244px]',
	margin = 'mb-[20px]',
}) => {
	return (
		<div
			className={`${width} h-[42px] flex justify-between text-center items-center ${margin}`}
		>
			<h4 className='font-baloo font-bold text-white text-[24px]'>{title}</h4>
			<div className='mr-[18px]'>
				<Dropdown name={`${dropDownText}`} hight='h-[42px]' width='w-[87px]' />
			</div>
		</div>
	);
};

export default NameDropdown;
