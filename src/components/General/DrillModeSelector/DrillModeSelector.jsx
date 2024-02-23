import { useStore } from '@/store/store';
import { CloseDrillModeIcon, OpenDrillModeIcon } from '../Icons/AgGridIcons';

const DrillModeSelector = () => {
	const toggleDrillMode = useStore(state => state.toggleDrillMode);
	const setToggleDrillMode = useStore(state => state.setToggleDrillMode);
	const setToggleChatMode = useStore(state => state.setToggleChatMode);

	return (
		<button
			type='button'
			onClick={() => {
				setToggleChatMode(false);
				setToggleDrillMode(!toggleDrillMode);
			}}
			className={`w-12 h-12 flex justify-center items-center rounded-full border-2 border-neutrals-900 hover:border-primary-purple-600 ${
				toggleDrillMode && 'border-primary-purple-600'
			}}`}
		>
			<div
				className={`w-8 h-8 flex justify-center items-center rounded-full hover:bg-primary-purple-600 ${
					toggleDrillMode ? 'bg-primary-purple-600' : ''
				}`}
			>
				{toggleDrillMode ? <CloseDrillModeIcon /> : <OpenDrillModeIcon />}
			</div>
		</button>
	);
};

export default DrillModeSelector;
