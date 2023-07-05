import SharedLayout from '@/components/General/SharedLayout';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import BasicInformation from '@/components/Target/Preset/BasicInformation';
import PresetContainer from '@/components/Target/Preset/PresetContainer';
import { usePage } from '@/hooks/usePage';

function TargetAdd () {
	const { returnOnePage } = usePage();

	return (
		<SharedLayout bgColor='bg-dark-background-00'>
			<LeftArrowDirectActionHeart
				bgColor='bg-dark-background-00'
				buttonName='Add Target'
				upperName='Targets / Presets'
				onClick={returnOnePage}
			/>
			<PresetContainer>
				<BasicInformation />
			</PresetContainer>
		</SharedLayout>
	);
}

export default TargetAdd;
