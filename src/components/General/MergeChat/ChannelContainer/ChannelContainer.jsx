import SearchItemBox from '@/components/General/MergeChat/SearchItemBox/SearchItemBox';
import ChannelItem from '@/components/General/MergeChat/ChannelItem/ChannelItem';

const ChannelContainer = ({
	label,
	channelType,
	inventoryChannels,
	isInventoryExpanded,
	setIsInventoryExpanded,
	toggleSearch,
	showSearch,
	createOrSelectChannel,
	filteredInventory,
	searchTerm,
	setSearchTerm,
	setFilteredInventory,
	handleInventorySearchChange,
	currentChannel,
	handleChannelSelect,
}) => {
	return (
		<div className='inventory-category'>
			<div className='flex justify-between items-center'>
				<h4
					onClick={() => setIsInventoryExpanded(!isInventoryExpanded)}
					className='text-white text-[0.875rem]'
				>
					{isInventoryExpanded ? '▼' : '►'} {label}
				</h4>
				<button onClick={toggleSearch} className='text-[1.5rem]'>
					+
				</button>
			</div>
			{showSearch && (
				<SearchItemBox
					channelType={channelType}
					createOrSelectChannel={createOrSelectChannel}
					filteredInventory={filteredInventory}
					searchTerm={searchTerm}
					handleSearchChange={event =>
						handleInventorySearchChange(
							event,
							channelType,
							setSearchTerm,
							setFilteredInventory,
						)
					}
				/>
			)}
			{isInventoryExpanded &&
				inventoryChannels?.map(channel => (
					<ChannelItem
						channel={channel}
						currentChannel={currentChannel}
						handleChannelSelect={handleChannelSelect}
						key={channel.id}
					/>
				))}
		</div>
	);
};

export default ChannelContainer;
