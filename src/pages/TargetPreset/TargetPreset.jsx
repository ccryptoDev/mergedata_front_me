import Header from '@/components/General/Header/Header';
import Layout from '@/components/General/Layout';
import Ribbon from '@/components/General/Ribbon/Ribbon';
import CardAddTargetsPresets from '@/components/Target/CardAddTargetsPresets';
import CardPreset from '@/components/Target/CardPreset';

function TargetPreset() {
	return (
		<Layout bgColor='bg-[#05081E]'>
			<Header />
			<Ribbon withIconBack title={'Targets'} subtitle={'Presets'}></Ribbon>
			<div className='flex flex-col justify-around items-center h-[calc(100vh-156px)]'>
				<div className='flex gap-6'>
					<CardPreset
						title={"Josh's Optimal Budget"}
						description={
							'Navigate automotive finance with precision. Practical insights for effective budgeting.'
						}
					/>
					<CardPreset
						title={'2023 Budget'}
						description={
							'Strategize your finances with precision. Practical insights for effective budgeting.'
						}
						isPrivate={true}
					/>
					<CardPreset
						title={'Pessimistic Outlook Budget'}
						description={
							'Navigate financial challenges with practical insights. Strategic budgeting for uncertain times.'
						}
						isPrivate={true}
					/>
				</div>
				<div className='flex gap-6'>
					<CardPreset
						title={'Average for last month'}
						description={
							'Assess your financial standing with a practical overview. Evaluate expenses and plan strategically for the future.'
						}
					/>
					<CardPreset
						title={'Used by Year'}
						description={
							'Analyze your annual spending patterns. Gain insights to optimize budgeting and financial planning.'
						}
					/>
					<CardAddTargetsPresets />
				</div>
			</div>
		</Layout>
	);
}

export default TargetPreset;
