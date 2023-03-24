import Dropdown from '@/components/Target/Dropdown';


const NameDropdown = ({ title = 'Salesperson' }) => {
	return (
		<div className='w-[244px] h-[42px] flex justify-between text-center items-center mb-[20px]'>
			<h4 className='font-baloo font-bold text-white text-[24px]'>
				{title}
			</h4>
			<div className='mr-[18px]'>
				<Dropdown name='Top 3' hight='h-[42px]' width='w-[87px]' />
			</div>
		</div>
	);
};

export default NameDropdown;
