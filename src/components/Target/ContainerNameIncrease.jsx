import NameIncrease from '@/components/Target/NameIncrease';


function ContainerNameIncrease ({ item = [], item1 = [] }) {
	return (
		<div className='flex justify-between rounded-lg h-[50px] w-[305px] py-2 px-6 bg-purple-700 group-hover:bg-[rgba(255,255,255,0.4)]'>
			<NameIncrease
				title={item[1]}
				bigPercentage={item[0]}
				smallPercentage={item[2]}
			/>
			<NameIncrease
				title={item1[1]}
				bigPercentage={item1[0]}
				smallPercentage={item1[2]}
			/>
		</div>
	);
}

export default ContainerNameIncrease;
