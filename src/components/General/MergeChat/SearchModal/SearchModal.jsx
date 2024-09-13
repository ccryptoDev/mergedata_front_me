const SearchModal = ({ isSearching, searchResults }) => {
	return (
		<div className='search-results-modal'>
			{isSearching ? (
				<p>Searching...</p>
			) : searchResults && searchResults.length > 0 ? (
				searchResults.map((result, index) => (
					<div key={index} className='search-result-item'>
						<p>Channel: {result?.message?.cid}</p>
						<p>Message: {result?.message?.text}</p>
					</div>
				))
			) : (
				<p>No results found</p>
			)}
		</div>
	);
};

export default SearchModal;
