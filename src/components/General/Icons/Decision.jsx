import TargetIcon from '@/components/General/Icons/TargetIcon';
import HomeIcon from '@/components/General/Icons/HomeIcon';
import CheckIcon from '@/components/General/Icons/CheckIcon';
import RightArrowIcon from '@/components/General/Icons/RightArrowIcon';
import LeftArrowIcon from  '@/components/General/Icons/LeftArrowIcon';
import SaveIcon from       '@/components/General/Icons/SaveIcon';
import ArrowDownIcon from       '@/components/General/Icons/ArrowDownIcon';
import LockIcon from '@/components/General/Icons/LockIcon';
import BuildingIcon from '@/components/General/Icons/BuildingIcon';
import Building2Icon from '@/components/General/Icons/Building2Icon';
import Building3Icon from '@/components/General/Icons/Building3Icon';
import Building4Icon from '@/components/General/Icons/Building4Icon';
import MenIcon from '@/components/General/Icons/MenIcon';
import DownloadIcon from '@components/General/Icons/DownloadIcon';
import DoubleArrowIcon from '@components/General/Icons/DoubleArrowIcon';
import CrossIcon from '@components/General/Icons/CrossIcon';


const Decision = ({ name }) => {
    if (name === 'Target') return <TargetIcon />;
    if (name === 'Home') return <HomeIcon />;
    if (name === 'Check') return <CheckIcon />;
    if (name === 'RightArrow') return <RightArrowIcon />;
    if (name === 'LeftArrow') return <LeftArrowIcon />;
    if (name === 'Save') return <SaveIcon />;
    if (name === 'ArrowDown') return <ArrowDownIcon />;
	if (name === 'Lock') return <LockIcon />;
	if (name === 'Building') return <BuildingIcon />;
    if (name === 'Building2') return <Building2Icon />;
    if (name === 'Building3') return <Building3Icon />;
    if (name === 'Building4') return <Building4Icon />;
    if (name === 'Men') return <MenIcon />;
    if (name === 'Download') return <DownloadIcon />;
    if (name === 'DoubleArrow') return <DoubleArrowIcon />;
    if (name === 'Cross') return <CrossIcon />;

	return null;
};

export default Decision;
