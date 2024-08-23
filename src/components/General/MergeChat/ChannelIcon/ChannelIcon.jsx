const ChannelIcon = channel => {
	const imageUrl = channel?.data?.image || '/Icon.png'; // Replace with your default icon URL
	return (
		<img src={imageUrl} alt={channel?.data?.name} className='channel-icon' />
	);
};

export default ChannelIcon;
