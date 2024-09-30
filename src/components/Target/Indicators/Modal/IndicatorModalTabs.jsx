import { INDICATORS_TABS } from '@/constants/constants';

const IndicatorModalTabs = ({ tabSelector, onTabSelector }) => {
	return (
		<section className='w-full flex items-center justify-end gap-5 border-b border-b-primary-purple-600'>
			{INDICATORS_TABS.map(tab => (
				<button
					type='button'
					onClick={() => onTabSelector(tab.id)}
					key={tab.id}
					className={`font-baloo text-lg  ${
						tabSelector === tab.id
							? 'text-neutrals-00 border-b-2 border-b-primary-purple-600'
							: 'text-neutrals-700'
					}`}
				>
					{tab.name}
				</button>
			))}
		</section>
	);
};
export default IndicatorModalTabs;
