import SharedLayout from '@/components/General/SharedLayout';
import CardAddTargetsPresets from '@/components/Target/CardAddTargetsPresets';
import CardPreset from '@/components/Target/CardPreset';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import { usePage } from '@/hooks/usePage';

function TargetPreset () {
	const { returnOnePage } = usePage();
	return (
		<SharedLayout bgColor='bg-dark-background-00'>
			<LeftArrowDirectActionHeart
				upperName='Target'
				buttonName='Preset'
				onClick={returnOnePage}
			/>
			<div className='flex gap-6 mb-7'>
				<CardPreset />
				<CardPreset />
				<CardPreset />
			</div>
			<div className='flex gap-6'>
				<CardPreset />
				<CardPreset />
				<CardAddTargetsPresets />
			</div>
		</SharedLayout>
	);
}

export default TargetPreset;
