import SharedLayout from '@/components/General/SharedLayout';
import CardAddTargetsPresets from '@/components/Target/CardAddTargetsPresets';
import CardPreset from '@/components/Target/CardPreset';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import { useNavigate } from 'react-router-dom';

function TargetPreset() {
	const navigate = useNavigate();
	return (
		<SharedLayout bgColor='bg-dark-background-00'>
			<LeftArrowDirectActionHeart
				upperName='Target'
				buttonName='Preset'
				onClick={() => navigate(-1)}
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
