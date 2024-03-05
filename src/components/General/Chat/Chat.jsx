import {
	Chat,
	Channel,
	ChannelHeader,
	MessageInput,
	MessageList,
	Window,
} from 'stream-chat-react';
import { EmojiPicker } from 'stream-chat-react/emojis';

const WrappedEmojiPicker = () => {
	return <EmojiPicker pickerProps={'dark'} />;
};

const ChatComponent = ({ client, currentChannel }) => {
	return (
		<div className='chat-container'>
			<Chat client={client} theme='messaging dark'>
				<Channel
					channel={currentChannel}
					TypingIndicator={() => null}
					EmojiPicker={WrappedEmojiPicker}
				>
					<Window>
						<ChannelHeader />
						<MessageList />
						<MessageInput></MessageInput>
					</Window>
				</Channel>
			</Chat>
		</div>
	);
};

export default ChatComponent;
