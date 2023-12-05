const MenuBar = ({ activeMenu,setActiveMenu }) => {

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    }

	return (
		<div className='flex justify-between bg-dark-accent-00 text-white rounded-xl'>
			<div
				className={`p-3 w-[33%] flex justify-center cursor-pointer ${
					activeMenu === 'Settings' ? 'bg-[#6043DD] rounded-lg' : ''
				}`}
                onClick={() => handleMenuClick('Settings')}
			>
				Settings
			</div>
			<div
				className={`p-3 w-[33%] flex justify-center cursor-pointer ${
					activeMenu === 'Participants' ? 'bg-[#6043DD] rounded-lg' : ''
				}`}
                onClick={() => handleMenuClick('Participants')}
			>
				Participants
			</div>
			<div
				className={`p-3 w-[33%] flex justify-center cursor-pointer ${
					activeMenu === 'Points' ? 'bg-[#6043DD] rounded-lg' : ''
				}`}
                onClick={() => handleMenuClick('Points')}
			>
				Points
			</div>
		</div>
	);
};

export default MenuBar;
