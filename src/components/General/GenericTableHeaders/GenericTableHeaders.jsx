import ToggleSwitch from '@/components/Target/ToggleSwitch';
import {
	removeSpecialCases,
	exportPDF,
	exportCSV,
} from '@/utils/helperFunctions';
import { CSVLink } from 'react-csv';
import SplitIcon from '../Icons/SplitIcon';
import DownloadIconTable from '../Icons/DownloadIconTable';
import ShareIcon from '../Icons/ShareIcon';
import HeaderDropdown from './HeaderDropdown';
import { useState } from 'react';

export const GenericTableHeaders = ({
	report,
	headers = '',
	withShare = false,
	onShare = '',
	share = '',
	withDownload = false,
	withSplit = false,
	onSplit = '',
	split = '',
}) => {
	const [downloadToggle, setDownloadToggle] = useState(false);

	const rows = removeSpecialCases(report?.rows);
	const csvData = exportCSV(report?.columns, rows);
	const downloadPDF = () => {
		exportPDF(report?.columns, rows, report?.name);
	};

	const renderFilters = header => {
		const { icon, placeholder, onAction, action, items } = header;
		return (
			<HeaderDropdown
				isIcon
				icon={icon}
				placeholder={placeholder}
				onAction={onAction}
				action={action}
				items={items}
			/>
		);
	};

	const renderSelect = header => {
		const { placeholder, onAction, action, items } = header;
		return (
			<HeaderDropdown
				placeholder={placeholder}
				onAction={onAction}
				action={action}
				items={items}
			/>
		);
	};

	const renderSlider = header => {
		const { placeholder, onAction } = header;
		return (
			<ToggleSwitch
				className='border cursor-pointer'
				name1={placeholder}
				name2=''
				handleClick={onAction}
			/>
		);
	};

	const renderShare = () => {
		return (
			<button>
				<div
					className={`${
						share && 'ring ring-neutrals-50'
					} w-[40px] h-[40px] flex items-center justify-center hover:ring hover:ring-neutrals-50 rounded-full `}
				>
					<div
						className={`${
							share && 'bg-primary-purple-200'
						} w-[32px] h-[32px] flex items-center justify-center hover:bg-primary-purple-200 rounded-full`}
					>
						<ShareIcon fill={`${split ? '#000' : '#fff'}`} />
					</div>
				</div>
			</button>
		);
	};

	const renderDownload = () => {
		return (
			<div className='flex flex-row gap-x-2 relative z-20'>
				<button onClick={() => setDownloadToggle(!downloadToggle)}>
					<div
						className={`${
							downloadToggle && 'ring ring-neutrals-50'
						} w-[40px] h-[40px] flex items-center justify-center hover:ring hover:ring-neutrals-50 rounded-full `}
					>
						<div
							className={`${
								downloadToggle && 'bg-primary-purple-200'
							} w-[32px] h-[32px] flex items-center justify-center hover:bg-primary-purple-200 rounded-full`}
						>
							<DownloadIconTable fill={`${downloadToggle ? '#000' : '#fff'}`} />
						</div>
					</div>
				</button>
				{downloadToggle && (
					<div className='absolute top-[52px] right-0 flex flex-col gap-2 items-start p-2 bg-[#05081E] rounded-[12px]'>
						{csvData && (
							<button className='w-full h-[32px] font-baloo font-[600] text-sm text-[#FFFFFF] px-3 text-center whitespace-nowrap rounded-md z-10 hover:bg-primary-purple-600'>
								<CSVLink
									data={csvData}
									target='_blank'
									filename='mergeDataTable.csv'
								>
									CSV
								</CSVLink>
							</button>
						)}
						<button
							type='button'
							onClick={downloadPDF}
							className='w-full h-[32px] font-baloo font-[600] text-sm text-[#FFFFFF] px-3 text-center whitespace-nowrap rounded-md hover:bg-primary-purple-600'
						>
							PDF
						</button>
					</div>
				)}
			</div>
		);
	};

	const renderSplit = () => {
		return (
			<button onClick={onSplit}>
				<div
					className={`${
						split && 'ring ring-neutrals-50'
					} w-[40px] h-[40px] flex items-center justify-center hover:ring hover:ring-neutrals-50 rounded-full `}
				>
					<div
						className={`${
							split && 'bg-primary-purple-200'
						} w-[32px] h-[32px] flex items-center justify-center hover:bg-primary-purple-200 rounded-full`}
					>
						<SplitIcon fill={`${split ? '#000' : '#fff'}`} />
					</div>
				</div>
			</button>
		);
	};

	return (
		<div className='h-[50px] flex justify-between items-center mb-5 px-[1rem]'>
			<div className='flex items-center gap-5'>
				{headers?.map((header, index) => {
					return header.type === 'filter' && !split
						? renderFilters(header)
						: header.type === 'select' && !split
						? renderSelect(header)
						: header.type === 'slide' && renderSlider(header);
				})}
			</div>
			<div className='flex items-center  gap-3'>
				{withShare && renderShare()}
				{withDownload && renderDownload()}
				{withSplit && renderSplit()}
			</div>
		</div>
	);
};
