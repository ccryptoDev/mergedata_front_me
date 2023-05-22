import SharedLayout from '@/components/General/SharedLayout';
import Dropdown from '@/components/Target/Dropdown';
import FilterDates from '@/components/Target/FilterDates';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import TableToggleIncrease from '@/components/Target/New/TableToggleIncrease';
import { useNavigate } from 'react-router';

function Expenses() {
	const navigate = useNavigate();
	return (
		<SharedLayout>
			<div className='flex justify-between items-center mr-12'>
				<LeftArrowDirectActionHeart
					bgColor='bg-dark-popup-00'
					buttonName='Expenses'
					upperName='Targets/New'
					onClick={() => navigate(-1)}
				/>
				<div className='flex items-center gap-12 uppercase'>
					<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
						Day
					</h6>
					<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
						Month
					</h6>
					<FilterDates />
				</div>
				<Dropdown name='Home' />
			</div>
			<TableToggleIncrease />
		</SharedLayout>
	);
}

export default Expenses;
