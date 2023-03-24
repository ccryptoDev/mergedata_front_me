import Card from '@/components/Target/New/Card';
import PersonIncreaseTable from '@/components/Target/New/PersonIncreaseTable';
import NameDropdown from '@/components/Target/New/NameDropdown';
import PersonIncrease from '@/components/Target/New/PersonIncrease';


const CategoryPersonIncrease = () => {
	return (
		<Card>
			<NameDropdown />
			<PersonIncreaseTable>
				<PersonIncrease />
				<PersonIncrease />
				<PersonIncrease />
			</PersonIncreaseTable>
		</Card>
	);
};

export default CategoryPersonIncrease;
