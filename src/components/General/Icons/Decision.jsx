import TargetIcon from '@/components/General/Icons/TargetIcon';
import HomeIcon from '@/components/General/Icons/HomeIcon';
import CheckIcon from '@/components/General/Icons/CheckIcon';
import RightArrowIcon from '@/components/General/Icons/RightArrowIcon';
import LeftArrowIcon from  '@/components/General/Icons/LeftArrowIcon';
import SaveIcon from '@/components/General/Icons/SaveIcon';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import ArrowFatUpIcon from '@/components/General/Icons/ArrowFatUpIcon';
import LockIcon from '@/components/General/Icons/LockIcon';
import BuildingIcon from '@/components/General/Icons/BuildingIcon';
import Building2Icon from '@/components/General/Icons/Building2Icon';
import Building3Icon from '@/components/General/Icons/Building3Icon';
import Building4Icon from '@/components/General/Icons/Building4Icon';
import MenIcon from '@/components/General/Icons/MenIcon';
import DownloadIcon from '@/components/General/Icons/DownloadIcon';
import DoubleArrowIcon from '@/components/General/Icons/DoubleArrowIcon';
import CrossIcon from '@/components/General/Icons/CrossIcon';
import LupeIcon from '@/components/General/Icons/LupeIcon';
import BigLupeIcon from '@/components/General/Icons/LargeLupeIcon';
import FilterIcon from '@/components/General/Icons/FilterIcon';
import FlameIcon from '@/components/General/Icons/FlameIcon';
import ThumbIcon from '@/components/General/Icons/ThumbIcon';
import ThumbSMIcon from '@/components/General/Icons/ThumbSMIcon';
import ThumbLargeIcon from '@/components/General/Icons/ThumbLargeIcon';
import ThumbLargeInvertedIcon from '@/components/General/Icons/ThumbLargeInvertedIcon';
import ThumbSMInvertedIcon from '@/components/General/Icons/ThumbSMInvertedIcon';
import ThumbMdInvertedIcon from '@/components/General/Icons/ThumbMdInvertedIcon';
import ThumbMdIcon from '@/components/General/Icons/ThumbMdIcon';
import TaskIcon from '@/components/General/Icons/TaskIcon';
import TaskLgIcon from '@/components/General/Icons/TaskLgIcon';
import TaskWhiteIcon from '@/components/General/Icons/TaskWhiteIcon';
import ChatIcon from '@/components/General/Icons/ChatIcon';
import DoubleArrowVerticalIcon from '@/components/General/Icons/DoubleArrowVerticalIcon';
import ExpandIcon from '@/components/General/Icons/ExpandIcon';
import ShareIcon from '@/components/General/Icons/ShareIcon';
import ShareSmIcon from '@/components/General/Icons/ShareSmIcon';
import PauseIcon from '@/components/General/Icons/PauseIcon';
import RightPlaneArrowIcon from '@/components/General/Icons/RightPlaneArrowIcon';
import LargeFlameIcon from '@/components/General/Icons/LargeFlameIcon';
import DivideIcon from '@/components/General/Icons/DivideIcon';
import ReturnIcon from '@/components/General/Icons/ReturnIcon';
import HeartLgIcon from '@/components/General/Icons/HeartLgIcon';
import DownRedArrowIcon from '@/components/General/Icons/DownRedArrowIcon';
import CrownShadowIcon from '@/components/General/Icons/CrownShadowIcon';
import CrownSmIcon from '@/components/General/Icons/CrownSmIcon';
import Gallery4SquaresIcon from '@/components/General/Icons/Gallery4SquaresIcon';
import BlueStarIcon from '@/components/General/Icons/BlueStarIcon';
import ThreeDotsIcon from '@/components/General/Icons/ThreeDotsIcon';
import ProfilePlusIcon from '@/components/General/Icons/ProfilePlusIcon'
import CopyIcon from '@/components/General/Icons/CopyIcon'
import PrivateIcon from '@/components/General/Icons/PrivateIcon'
import BellIcon from '@/components/General/Icons/BellIcon'

const Decision = ({ name }) => {
    if (name === 'Target') return <TargetIcon />;
    if (name === 'Home') return <HomeIcon />;
    if (name === 'Check') return <CheckIcon />;
    if (name === 'RightArrow') return <RightArrowIcon />;
    if (name === 'LeftArrow') return <LeftArrowIcon />;
    if (name === 'Save') return <SaveIcon />;
    if (name === 'ArrowDown') return <ArrowDownIcon />;
    if (name === 'ArrowFatUpDown') return <ArrowFatUpIcon />;
	if (name === 'Lock') return <LockIcon />;
	if (name === 'Building') return <BuildingIcon />;
    if (name === 'Building2') return <Building2Icon />;
    if (name === 'Building3') return <Building3Icon />;
    if (name === 'Building4') return <Building4Icon />;
    if (name === 'Men') return <MenIcon />;
    if (name === 'Download') return <DownloadIcon />;
    if (name === 'DoubleArrow') return <DoubleArrowIcon />;
    if (name === 'Cross') return <CrossIcon />;
    if (name === 'Lupe') return <LupeIcon />;
    if (name === 'BigLupe') return <BigLupeIcon />;
    if (name === 'Filter') return <FilterIcon />; 
    if (name === 'Flame') return <FlameIcon />;
    if (name === 'LargeFlame') return <LargeFlameIcon />;
    if (name === 'Chat') return <ChatIcon />;
    if (name === 'DoubleArrowVertical') return <DoubleArrowVerticalIcon />;
    if (name === 'Expand') return <ExpandIcon />;
    if (name === 'Share') return <ShareIcon />;
    if (name === 'ShareSm') return <ShareSmIcon />;
    if (name === 'Task') return <TaskIcon />;
    if (name === 'TaskLg') return <TaskLgIcon />;
    if (name === 'TaskWhite') return <TaskWhiteIcon />;
    if (name === 'Pause') return <PauseIcon fill = 'border-neutrals-00'/>;
    if (name === 'RightPlaneArrow') return <RightPlaneArrowIcon />;
    if (name === 'Thumb') return <ThumbIcon />;
    if (name === 'ThumbSM') return <ThumbSMIcon />;
    if (name === 'ThumbLarge') return <ThumbLargeIcon />;
    if (name === 'ThumbLargeInverted') return <ThumbLargeInvertedIcon />;
    if (name === 'ThumbSMInverted') return <ThumbSMInvertedIcon />;
    if (name === 'ThumbMdInverted') return <ThumbMdInvertedIcon />;
    if (name === 'ThumbMd') return <ThumbMdIcon />;
    if (name === 'Divide') return <DivideIcon />;
    if (name === 'Return') return <ReturnIcon />;
    if (name === 'HeartLg') return <HeartLgIcon />;
    if (name === 'DownRedArrow') return <DownRedArrowIcon />;
    if (name === 'CrownShadow') return <CrownShadowIcon />;
    if (name === 'CrownSm') return <CrownSmIcon />;
    if (name === 'Gallery4Squares') return <Gallery4SquaresIcon />;
    if (name === 'BlueStar') return <BlueStarIcon />
    if (name === 'ThreeDots') return <ThreeDotsIcon />
    if (name === 'ProfilePlus') return <ProfilePlusIcon />
    if (name === 'Copy') return <CopyIcon />
    if (name === 'Private') return <PrivateIcon />
    if (name === 'Bell') return <BellIcon />

	return null;
};

export default Decision;
