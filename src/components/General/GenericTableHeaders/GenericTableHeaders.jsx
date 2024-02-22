import ToggleSwitch from '@/components/Target/ToggleSwitch';
import {
	exportCSV,
	exportPDF,
	removeSpecialCases,
} from '@/utils/helperFunctions';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import CloseIcon from '../Icons/CloseIcon';
import DownloadIconTable from '../Icons/DownloadIconTable';
import FileDownloadIcon from '../Icons/FileUploadIcon';
import ShareIcon from '../Icons/ShareIcon';
import SplitIcon from '../Icons/SplitIcon';
import HeaderDropdown from './HeaderDropdown';
import ExpandIcon from '../Icons/ExpandIcon';

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
	isDetailHeaders = false,
	detailHeadersTitle = '',
	detailHeaderItem = '',
	onClose = '',
	close = '',
	withExpand = '',
	expand = '',
	onExpand = '',
}) => {
	const [downloadToggle, setDownloadToggle] = useState(false);

	const rows = removeSpecialCases(
		report?.rows?.map(row => [row.name, ...row.values]),
	);
	// const rows = removeSpecialCases(report?.rows.map(row => row.values));
	const csvData = exportCSV(report?.columns, rows);
	const downloadPDF = () => {
		exportPDF(
			report?.columns,
			rows,
			report?.name,
			report?.reportName,
			report?.timelapse,
			report?.storesName,
			report?.periodName,
			report?.target,
		);
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
				key={`header-drop-${items[0].name}`}
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
				key={`header-drop-${items[0].name}`}
			/>
		);
	};

	const renderSlider = header => {
		const { placeholder, onAction, action } = header;
		return (
			<ToggleSwitch
				className='cursor-pointer'
				action={action}
				name1={placeholder}
				name2=''
				handleClick={onAction}
				key={`header-drop-${placeholder.replaceAll(' ', '')}`}
			/>
		);
	};

	const renderShare = () => {
		return (
			<button>
				<div
					className={`${share && 'ring ring-neutrals-50'
						} w-[40px] h-[40px] flex items-center justify-center hover:ring hover:ring-neutrals-50 rounded-full `}
				>
					<div
						className={`${share && 'bg-primary-purple-200'
							} w-[32px] h-[32px] flex items-center justify-center hover:bg-primary-purple-200 rounded-full`}
					>
						<ShareIcon fill={`${split ? '#000' : '#fff'}`} />
					</div>
				</div>
			</button>
		);
	};

	const renderDownload = () => {
		const [isDownloading, setIsDownloading] = useState(false);

		const handleDownload = () => {
			setIsDownloading(true);
			downloadPDF();
			setTimeout(() => {
				setIsDownloading(false);
				setDownloadToggle(false);
			}, 1000);
		};

		return (
			<div className='flex flex-row gap-x-2 relative z-20'>
				<button onClick={() => setDownloadToggle(!downloadToggle)}>
					<div
						className={`${downloadToggle && 'ring ring-neutrals-50'
							} w-[40px] h-[40px] flex items-center justify-center hover:ring hover:ring-neutrals-50 rounded-full `}
					>
						<div
							className={`${downloadToggle && 'bg-primary-purple-200'
								} w-[32px] h-[32px] flex items-center justify-center hover:bg-primary-purple-200 rounded-full`}
						>
							<DownloadIconTable fill={`${downloadToggle ? '#000' : '#fff'}`} />
						</div>
					</div>
				</button>
				{downloadToggle && (
					<div className='px-2 w-[180px] h-[96px] absolute top-[52px] right-0 flex flex-col gap-2 justify-center items-start p-2 bg-[#05081E] rounded-[12px]'>
						<button
							type='button'
							onClick={handleDownload}
							disabled={isDownloading}
							className={`w-full h-[32px] flex items-center gap-2 font-baloo font-[600] text-sm text-[#FFFFFF] px-3 text-left whitespace-nowrap rounded-md hover:bg-primary-purple-600 ${isDownloading && 'cursor-not-allowed opacity-40'
								}`}
						>
							<FileDownloadIcon />
							PDF
						</button>
						{csvData && (
							<button
								type='button'
								onClick={handleDownload}
								disabled={isDownloading}
								className={`w-full h-[32px] flex items-center gap-2 font-baloo font-[600] text-sm text-[#FFFFFF] px-3 text-left whitespace-nowrap rounded-md z-10 hover:bg-primary-purple-600 ${isDownloading && 'cursor-not-allowed opacity-40'
									}`}
							>
								<CSVLink
									data={csvData}
									target='_blank'
									filename={`${report?.name}.csv` || 'mergeDataTable.csv'}
									className='flex items-center gap-2'
									onClick={() => setIsDownloading(true)}
									onMouseLeave={() => setIsDownloading(false)}
								>
									<FileDownloadIcon />
									Excel
								</CSVLink>
							</button>
						)}
					</div>
				)}
			</div>
		);
	};


	const renderSplit = () => {
		return (
			<button onClick={onSplit}>
				<div
					className={`${split && 'ring ring-neutrals-50'
						} w-[40px] h-[40px] flex items-center justify-center hover:ring hover:ring-neutrals-50 rounded-full `}
				>
					<div
						className={`${split && 'bg-primary-purple-200'
							} w-[32px] h-[32px] flex items-center justify-center hover:bg-primary-purple-200 rounded-full`}
					>
						<SplitIcon fill={`${split ? '#000' : '#fff'}`} />
					</div>
				</div>
			</button>
		);
	};

	const renderExpandIcon = () => {
		return (
			<button onClick={onExpand}>
				<div
					className={`${expand && 'ring ring-neutrals-50'
						} w-[40px] h-[40px] flex items-center justify-center hover:ring hover:ring-neutrals-50 rounded-full `}
				>
					<div
						className={`${expand && 'bg-primary-purple-200'
							} w-[32px] h-[32px] flex items-center justify-center hover:bg-primary-purple-200 rounded-full`}
					>
						<ExpandIcon />
					</div>
				</div>
			</button>
		);
	};
	const renderCloseIcon = () => {
		return (
			<button onClick={onClose}>
				<div
					className={`${close && 'ring ring-neutrals-50'
						} w-[40px] h-[40px] flex items-center justify-center hover:ring hover:ring-neutrals-50 rounded-full `}
				>
					<div
						className={`${close && 'bg-primary-purple-200'
							} w-[32px] h-[32px] flex items-center justify-center hover:bg-primary-purple-200 rounded-full`}
					>
						<CloseIcon />
					</div>
				</div>
			</button>
		);
	};

	return (
		<div className='h-[50px] flex justify-between items-center mb-5 px-[1rem]'>
			<div className='flex items-center gap-5'>
				{!isDetailHeaders && headers
					? headers?.map(header => {
						if (!header.show) return false;
						return header.type === 'filter' && !split
							? renderFilters(header)
							: header.type === 'select' && !split
								? renderSelect(header)
								: header.type === 'slide' && renderSlider(header);
					})
					: isDetailHeaders && (
						<div className='flex items-center gap-2 text-neutrals-50'>
							<h4 className='mr-4'>{detailHeadersTitle || 'Title'}</h4>
							<span className='h-[24px] w-1 border-r border-r-primary-purple-50 border-dashed'></span>
							<p className='ml-4 text-xs'>{detailHeaderItem || 'Item'}</p>
						</div>
					)}
			</div>
			<div className='flex items-center gap-3'>
				{withShare && renderShare()}
				{withDownload && renderDownload()}
				{!isDetailHeaders && withSplit && renderSplit()}
				{withExpand && renderExpandIcon()}
				{isDetailHeaders && renderCloseIcon()}
			</div>
		</div>
	);
};
