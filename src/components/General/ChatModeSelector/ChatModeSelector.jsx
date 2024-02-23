import { useStore } from '@/store/store';
import CommentIcon from '../Icons/CommentIcon';

const ChatModeSelector = () => {
	const toggleChatMode = useStore(state => state.toggleChatMode);
	const setToggleChatMode = useStore(state => state.setToggleChatMode);
	const setToggleDrillMode = useStore(state => state.setToggleDrillMode);

	return (
		<button
			type='button'
			onClick={() => {
				setToggleDrillMode(false);
				setToggleChatMode(!toggleChatMode);
			}}
			className={`w-12 h-12 flex justify-center items-center rounded-full border-2 border-neutrals-900 hover:border-primary-purple-600 ${
				toggleChatMode && 'border-primary-purple-600'
			}}`}
		>
			<div
				className={`w-8 h-8 flex justify-center items-center rounded-full hover:bg-primary-purple-600 ${
					toggleChatMode ? 'bg-primary-purple-600' : ''
				}`}
			>
				{toggleChatMode ? <CommentIcon fill={'#3E4761'} /> : <CommentIcon />}
			</div>
		</button>
	);
};

export default ChatModeSelector;
