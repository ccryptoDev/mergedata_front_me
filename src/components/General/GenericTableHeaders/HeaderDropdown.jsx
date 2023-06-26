import { useState } from 'react';
import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';

const HeaderDropdown = ({
	isIcon,
	icon,
	placeholder = 'MTD',
	onAction,
	action,
	items,
}) => {
	const [selectedItem, setSelectedItem] = useState(placeholder);

	const handleSelectItem = item => {
		setSelectedItem(item);
		onAction(false);
	};

	return (
		<div
			className={`${
				action ? 'bg-primary-purple-800' : 'bg-[#3E4761]'
			} relative h-[36px] flex items-center px-5  rounded-md border-2 border-transparent hover:border-2 hover:border-primary-purple-600 hover:bg-dark-accent-00`}
		>
			<button
				onClick={() => onAction(!action)}
				className='flex items-center gap-4 font-baloo text-sm leading-5 text-neutrals-50 '
			>
				{isIcon ? (
					icon
				) : (
					<>
						{selectedItem}
						<ArrowDownIcon
							className={`duration-300 ${action && 'rotate-180'}`}
						/>
					</>
				)}
			</button>
			{action && (
				<div
					className={`${
						isIcon ? 'whitespace-nowrap' : 'w-full'
					} absolute top-[40px] left-0 flex flex-col gap-2 p-2 text-neutrals-50  bg-[#05081E] rounded-md z-30`}
				>
					{items.map(item => (
						<button
							key={item.value}
							onClick={() => handleSelectItem(item.value)}
							className={`${
								selectedItem === item.name && 'bg-primary-purple-600'
							} p-2 text-left text-xs rounded-md hover:bg-primary-purple-600`}
						>
							{item.name}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default HeaderDropdown;
