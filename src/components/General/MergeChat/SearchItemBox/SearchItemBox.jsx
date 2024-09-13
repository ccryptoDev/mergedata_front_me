const SearchItemBox = ({
    handleSearchChange,
    searchTerm,
    filteredInventory,
    createOrSelectChannel,
    channelType,
  }) => {
    return (
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search New Inventory"
        />
        {searchTerm && (
          <div className="search-results-popup">
            {filteredInventory.map((item) => (
              <div
                key={item.Control1}
                onClick={() => createOrSelectChannel(item.Control1, channelType)}
                className="search-item"
              >
                Type:&nbsp;{item.Type}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stock No:&nbsp;
                {item.Control1}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default SearchItemBox;