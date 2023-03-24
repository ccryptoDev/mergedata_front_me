import NameIncrease from '@/components/Target/NameIncrease';


function ContainerNameIncrease () {
	return (
		<div className='flex justify-between rounded-lg h-[50px] w-[305px] py-2 px-6 bg-purple-700'>
			<NameIncrease
				title='Product Penetration'
				bigPercentage='13'
				smallPercentage='3'
				increase='down'
			/>
			<NameIncrease
				title='Finance Penetration'
				bigPercentage='19'
				smallPercentage='6'
				increase='up'
			/>
		</div>
	);
}

export default ContainerNameIncrease;
