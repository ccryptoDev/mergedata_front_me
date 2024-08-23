import Decision from '@/components/General/Icons/Decision';
import ContestChatIcon from '../../Icons/ContestChatIcon';

const ChannelItem = ({
	channel,
	currentChannel,
	handleChannelSelect,
	isSchedule = true,
}) => {
	const isSelected = currentChannel && channel.id === currentChannel.id;

	return (
		<div
			key={channel.id}
			onClick={() => handleChannelSelect(channel)}
			className={`channel-item ${
				isSelected ? 'selected' : ''
			} text-white text-[0.875rem] flex items-center gap-3`} // Add 'selected' class if the channel is selected
		>
			{isSchedule ? <Decision name='Calendar' /> : <ContestChatIcon />}
			{channel.data.name}
		</div>
	);
};

export default ChannelItem;
