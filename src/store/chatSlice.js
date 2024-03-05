import { StreamChat } from 'stream-chat';

const apiKey = `${import.meta.env.VITE_STREAM_API_KEY}`;
const client = StreamChat.getInstance(apiKey);

export const chatSlice = set => ({
	chatClient: client,
	chatToken:
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoid2lsbGlhbS1tZCJ9.TbJ1HR4HAugb9SUCeq_jzMgXtywxuBQh_wOoSRz-dhA',
	userName: '',
	currentChat: null,
	setChatClient: chatClient => set(() => ({ chatClient })),
	setUserName: userName => set(() => ({ userName })),
	setCurrentChat: currentChat => set(() => ({ currentChat })),
});
