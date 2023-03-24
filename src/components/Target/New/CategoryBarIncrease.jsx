import Card from '@/components/Target/New/Card';
import NameIncreaseDropdown from '@/components/Target/New/NameIncreaseDropdown';
import IconNameBarIncreaseTable from '@/components/Target/New/IconNameBarIncreaseTable';
import IconNameBarIncrease from '@/components/Target/New/IconNameBarIncrease';


const CategoryBarIncrease = () => {
	return (
		<Card>
			<NameIncreaseDropdown />
			<IconNameBarIncreaseTable>
				<IconNameBarIncrease />
				<IconNameBarIncrease
					title='Fleet'
					percentage='24'
					result='up'
					value='424'
				/>
				<IconNameBarIncrease
					title='New Other'
					percentage='0.5'
					result='neutral'
					value='534'
				/>
				<IconNameBarIncrease
					title='F&I'
					percentage='12'
					result='up'
					value='4454'
				/>
			</IconNameBarIncreaseTable>
		</Card>
	);
};

export default CategoryBarIncrease;
