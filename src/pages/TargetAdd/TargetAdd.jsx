import SharedLayout from '@/components/General/SharedLayout';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import BasicInformation from '@/components/Target/Preset/BasicInformation';
import PresetContainer from '@/components/Target/Preset/PresetContainer';
import { useNavigate } from 'react-router-dom';

function TargetAdd() {
	const navigate = useNavigate();

	return (
		<SharedLayout bgColor='bg-dark-background-00'>
			<LeftArrowDirectActionHeart
				bgColor='bg-dark-background-00'
				buttonName='Add Target'
				upperName='Targets / Presets'
				onClick={() => navigate(-1)}
			/>
			<PresetContainer>
				<BasicInformation />
			</PresetContainer>
		</SharedLayout>
	);
}

export default TargetAdd;
