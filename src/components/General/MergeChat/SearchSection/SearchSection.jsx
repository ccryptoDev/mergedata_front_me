import SearchModal from '@/components/General/MergeChat/SearchModal/SearchModal';

const SearchSection = ({
	handleSearchChange,
	searchTerm,
	isSearching,
	searchResults,
}) => {
	return (
		<div style={{ position: 'relative' }}>
			<input
				type='text'
				className='search-box'
				value={searchTerm}
				onChange={handleSearchChange}
				placeholder='Search Messages'
			/>
			{searchTerm && (
				<SearchModal isSearching={isSearching} searchResults={searchResults} />
			)}
		</div>
	);
};

export default SearchSection;
