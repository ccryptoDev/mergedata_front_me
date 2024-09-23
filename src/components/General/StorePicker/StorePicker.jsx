import { useContext, useState, useEffect } from 'react';

import ReportsContext from '@/context/ReportsProvider';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import HomeIcon from '@/components/General/Icons/HomeIcon';
import ModalWrapper from '@/components/General/ModalWrapper/ModalWrapper';
import GenericModalContainer from '@/components/General/ModalWrapper/GenericModalContainer';
import { useStoreDB } from '@/hooks/useStoreDB';
import { truncateString } from '@/utils/helperFunctions';

import { Tooltip } from 'react-tooltip';
import SearchIcon from '../Icons/LupeIcon';

const StorePicker = () => {
	const [selectedMultiStores, setSelectedMultiStores] = useState([]);
	const [downloadToggle, setDownloadToggle] = useState(false);
	const {
		user,
		setUser,
		stores,
		setStores,
		storesSelected,
		selectedStoreGroups,
		setSelectedStoreGroups,
		setStoresSelected,
	} = useContext(ReportsContext);
	const { getStores, getStoreGroups, createStoreGroup } = useStoreDB();
	const [selectedItem, setSelectedItem] = useState([]);
	const [storeGroups, setStoreGroups] = useState([]);
	const [storesFetched, setStoresFetched] = useState(false);
	const [showSaveStoreModal, setShowSaveStoreModal] = useState(false);
	const [newStoreGroup, setNewStoreGroup] = useState({
		storeGroupLevel: 1, // Admin could decide if Client 1 otherwise always User 2
		name: '',
	});

	const handleDownloadToggle = () => {
		setDownloadToggle(!downloadToggle);
		!downloadToggle && setSelectedMultiStores([]);
	};

	const handleSelectItem = item => {
		setSelectedItem([item.name]);
		setStoresSelected([item.storeId]);
		setSelectedStoreGroups(null);
		setDownloadToggle(false);
	};

	const handleSelectGroup = storeGroup => {
		setSelectedItem([storeGroup.name]);
		setStoresSelected(storeGroup.storeGroupItems.map(store => store.storeId));
		setSelectedStoreGroups(storeGroup.name);
		setDownloadToggle(false);
	};

	// const handleSelectMultiStores = store => {
	// 	const prevStores = [...selectedMultiStores];

	// 	setSelectedMultiStores(
	// 		prevStores.includes(store)
	// 			? prevStores.filter(item => item !== store)
	// 			: [...prevStores, store],
	// 	);
	// };

	const SaveBtn = () => {
		return (
			<button
				onClick={() => setShowSaveStoreModal(true)}
				className='w-full flex items-center justify-center p-2 bg-background-dark-background rounded-md hover:bg-primary-purple-600'
			>
				<p className='font-baloo text-sm'> Create Group</p>
			</button>
		);
	};

	const updateStoresSelected = storesList => {
		const storesNames = [];
		if (storesSelected === null && selectedStoreGroups === null) {
			storesNames.push(storesList[0].name);
			setStoresSelected([storesList[0].storeId]);
		} else if (selectedStoreGroups !== null) {
			storesNames.push(selectedStoreGroups);
		} else if (storesSelected[0] === 0) {
			storesNames.push(['All Stores']);
		} else {
			for (let i = 0; i < storesList.length; i++) {
				if (storesSelected.includes(storesList[i].storeId)) {
					storesNames.push(storesList[i].name);
				}
			}
		}
		setSelectedItem(storesNames);
	};

	const obtainStores = async () => {
		const storesDB = await getStores(user?.clientSelected);
		const storeGroupsDB = await getStoreGroups(user?.clientSelected);
		setStores(storesDB);
		setStoreGroups(storeGroupsDB);
		updateStoresSelected(storesDB);
		setUser({ ...user, stores: storesDB });
		setStoresFetched(true);
	};

	const onSaveGroup = async () => {
		await createStoreGroup({
			...newStoreGroup,
			clientId: user?.clientSelected,
			storeIds: selectedMultiStores,
		});
		obtainStores();
		setShowSaveStoreModal(false);
	};

	const tooltipStyles = {
		backgroundColor: '#fff',
		color: '#000',
		borderRadius: '0.5rem',
		fontSize: '12px',
	};

	useEffect(() => {
		storesFetched && updateStoresSelected(stores);
	}, [storesFetched, storesSelected]);

	useEffect(() => {
		obtainStores();
	}, []);

	return (
		<div
			className={`${
				downloadToggle
					? 'bg-dark-accent-00 border-primary-purple-600'
					: 'bg-dark-accent-dark border-neutrals-900 '
			} relative w-[212px] h-12 flex items-center px-4 rounded-md border-2 hover:border-2 hover:border-primary-purple-600 hover:bg-dark-accent-00`}
		>
			<button
				onClick={() => handleDownloadToggle()}
				className='relative w-full flex items-center justify-between gap-4 font-baloo font-semibold text-[0.94em] leading-[1.625em] text-neutrals-50'
			>
				<HomeIcon fill='#8B93A9' className='w-7' />

				<div className='w-full whitespace-nowrap text-left'>
					{selectedItem[0]?.length > 16 ? (
						<>
							<Tooltip id={selectedItem[0]} style={tooltipStyles} />
							<p
								data-tooltip-id={selectedItem[0]}
								data-tooltip-content={selectedItem[0]}
								data-tooltip-place='top'
							>
								{truncateString(selectedItem[0])}
							</p>
						</>
					) : (
						selectedItem
					)}
				</div>
				<div
					className={`flex flex-row w-auto h-auto px-[1px] items-center justify-center`}
				>
					<ArrowDownIcon
						className={`duration-300 ${downloadToggle && 'rotate-180'}`}
					/>
				</div>
			</button>
			{downloadToggle && (
				<div
					className={`absolute w-[302px] h-[319px] top-[3.25em] right-0 flex flex-col justify-between gap-2 p-3 text-neutrals-50 bg-dark-accent-dark rounded-md z-30 overflow-hidden`}
				>
					<div className='overflow-auto'>
						<div className='w-[260px]'>
							{/* All stores */}
							{(stores.length || storeGroups.length) && (
								<div className='h-[42px] flex items-center border-b border-b-neutrals-600 border-dashed'>
									<button
										onClick={() =>
											handleSelectItem({ name: 'All Stores', storeId: 0 })
										}
										className={`${
											selectedItem[0] === 'All Stores' &&
											'bg-primary-purple-600'
										} w-full p-2 font-baloo text-left text-sm rounded-md hover:bg-primary-purple-600`}
									>
										All Stores
									</button>
								</div>
							)}
							{/* groups and stores section */}
							<div>
								{storeGroups.map((storeGroup, index) => (
									<div
										key={`${storeGroup.name}-${index}`}
										className={`${
											selectedItem[0] === 'All Stores'
												? 'bg-transparent'
												: selectedItem[0] === storeGroup.name &&
												  'bg-primary-purple-900'
										} flex items-center gap-2 p-2 font-baloo text-left text-sm rounded-md hover:bg-primary-purple-900 z-0`}
									>
										<button
											key={storeGroup.storeGroupId}
											onClick={() => handleSelectGroup(storeGroup)}
										>
											{storeGroup.length > 32 ? (
												<>
													<Tooltip id='storeGroup-name' style={tooltipStyles} />
													<p
														data-tooltip-id='storeGroup-name'
														data-tooltip-content={storeGroup.name}
														data-tooltip-place='top'
													>
														{storeGroup.name}
													</p>
												</>
											) : (
												<p>{storeGroup.name}</p>
											)}
										</button>
									</div>
								))}
								{/* stores section */}
								{stores.map((store, index) => (
									<div
										key={`${store.name}-${index}`}
										className={`${
											selectedItem[0] === 'All Stores'
												? 'bg-transparent'
												: selectedItem[0] === store.name &&
												  'bg-primary-purple-900'
										} flex items-center h-[42px] p-2 font-baloo text-left text-sm rounded-md hover:bg-primary-purple-900`}
									>
										<button
											key={store.storeId}
											onClick={() => handleSelectItem(store)}
										>
											{store.name.length > 32 ? (
												<>
													<Tooltip id='store-name' style={tooltipStyles} />
													<p
														data-tooltip-id='store-name'
														data-tooltip-content={store.name}
														data-tooltip-place='top'
													>
														{store.name}
													</p>
												</>
											) : (
												<p>{store.name}</p>
											)}
										</button>
									</div>
								))}
							</div>
						</div>
					</div>
					<SaveBtn />
				</div>
			)}
			{showSaveStoreModal && (
				<ModalWrapper>
					<GenericModalContainer
						onActionClose={() => setShowSaveStoreModal(!showSaveStoreModal)}
						onActionPrimary={onSaveGroup}
						title='Create Group'
						widthCancel
						primaryBtn='Add Group'
					>
						<div className='w-[426px] flex flex-col gap-3'>
							<div className='rounded-md border border-neutrals-500 bg-background-dark-background focus:border-primary-purple-600'>
								<input
									type='text'
									id='group-name'
									placeholder='Group Name'
									value={newStoreGroup.name}
									onChange={e =>
										setNewStoreGroup({ ...newStoreGroup, name: e.target.value })
									}
									className='w-full text-neutrals-400 bg-transparent text-sm'
								/>
							</div>
							<div className='border-b border-dashed border-b-neutrals-600' />
							<div className='w-full h-[495px] flex flex-col gap-[10px] py-4 px-5 bg-dark-popup-00 rounded-xl'>
								<div className='w-full flex justify-between items-center gap-6 whitespace-nowrap'>
									<p className='font-baloo font-base text-neutrals-00'>
										Stores
									</p>
									<button
										type='button'
										className='text-purple-400 text-sm underline'
									>
										Clear All
									</button>
									<div className='px-4 flex items-center gap-4 bg-dark-accent-dark rounded-[10px] border-2 border-neutrals-900'>
										<SearchIcon width={24} height={24} fill='#8B93A9' />
										<input
											type='text'
											id='stores-search'
											placeholder='Search'
											className='w-full text-neutrals-400 bg-transparent text-sm'
										/>
									</div>
								</div>
								<div className='h-[42px] px-4 flex items-center gap-2'>
									<input
										type='checkbox'
										id='select-all-stores'
										name='select-all-stores'
										className='border-[1px] border-neutrals-600 bg-transparent checked:bg-purple-600 checked:border-transparent accent-primary-purple-900 rounded'
									/>
									<label
										htmlFor='select-all-stores'
										className='text-xs text-neutrals-00'
									>
										Select All
									</label>
								</div>
								<div className='flex flex-col gap-1'>
									{stores.map((store, index) => (
										<div
											key={`${store.name}-${index}`}
											className='h-[42px] px-4 flex items-center gap-2 bg-background-dark-background rounded-lg hover:bg-purple-900'
										>
											<input
												type='checkbox'
												id={store.name}
												name={store.name}
												className='border-[1px] border-neutrals-600 bg-transparent checked:bg-purple-600 checked:border-transparent accent-primary-purple-900 rounded'
											/>
											<label
												htmlFor={store.name}
												className='text-neutrals-00 text-xs'
											>
												{store.name}
											</label>
										</div>
									))}
								</div>
							</div>
						</div>
					</GenericModalContainer>
				</ModalWrapper>
			)}
		</div>
	);
};

export default StorePicker;
