import { useState } from 'react';

import DetailTable from '@/components/General/DetailTables/DetailTable';
import DetailTableTier2 from '@/components/General/DetailTables/DetailTableTier2';
import GenericTable from '@/components/General/GenericTable/GenericTable';
import { GenericTableHeaders } from '@/components/General/GenericTableHeaders/GenericTableHeaders';


export default function TableToggleIncreaseDynamic ({ report, leftHeaders }) {
	const [reduce, setReduce] = useState(false);
	const [onCloseTier1, setOnCloseTier1] = useState(false);
	const [onCloseTier2, setOnCloseTier2] = useState(false);
	const [showDetailTable2, setShowDetailTable2] = useState(false);
	const [expandDetailTable2, setExpandDetailTable2] = useState(false);
	const [tier1Data, setTier1Data] = useState(null);
	const [tier2Data, setTier2Data] = useState(null);
	const [formattedReportTier1, setFormattedReportTier1] = useState();
	const [formattedReportTier2, setFormattedReportTier2] = useState();

	return (
		<div className='flex gap-2 h-[calc(100dvh-180px)] overflow-hidden'>
			<div
				className={`relative bg-[#212A43] px-6 pt-2 flex flex-col h-full rounded-2xl ${!reduce ? 'w-full' : 'w-2/5'
					} transition-all duration-500 ease-in-out`}
			>
				<GenericTableHeaders
					report={report}
					headers={leftHeaders}
					withShare={false}
					withDownload
					withSplit={report?.drilldownEnabled}
					onSplit={() => setReduce(!reduce)}
					split={reduce}
				/>
				<div className='transition-opacity delay-[4000ms]'>
					<div>
						<div className='overflow-scroll h-[calc(100dvh-270px)]'>
							<GenericTable
								columns={report?.columns}
								rows={report?.rows}
								reportType={report?.reportType}
								getTier1Data={data => setTier1Data(data)}
								// onReduce={boolean => setReduce(boolean)}
								onReduce={() => setReduce(false)}
								reduce={reduce}
								resetTier2={boolean => {
									setShowDetailTable2(boolean);
									setExpandDetailTable2(boolean);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* detail tables tier 1 and tier 2 */}
			{reduce && (
				<div className='w-full flex flex-col gap-5'>
					<div
						className={`${!showDetailTable2 && !expandDetailTable2
							? 'h-full'
							: showDetailTable2 && !expandDetailTable2
								? 'h-2/5'
								: 'h-1/5'
							} relative bg-[#212A43] px-6 pt-6 flex flex-col rounded-2xl transition-all duration-500 ease-in-out`}
					>
						{/* tier 1 table */}
						<GenericTableHeaders
							report={formattedReportTier1}
							withShare
							withDownload
							withSplit
							onClose={() => {
								setOnCloseTier1(false);
								setReduce(!reduce);
							}}
							close={onCloseTier1}
							isDetailHeaders
							detailHeadersTitle={
								tier1Data?.reportConfig?.name || 'Header Item'
							}
							detailHeaderItem='GL Detail'
						/>
						<div className='overflow-scroll'>
							<DetailTable
								onShowDetailTable2={boolean => setShowDetailTable2(boolean)}
								showDetailTable2={showDetailTable2}
								lineInfo={tier1Data}
								formattedReport={formattedReportTier1}
								setFormattedReport={report => setFormattedReportTier1(report)}
								getTier2Data={data => setTier2Data(data)}
							/>
						</div>
					</div>
					{/* TODO: tier two table goes here */}
					{showDetailTable2 && (
						<div
							className={`h-full relative bg-[#202449] px-6 pt-6 flex flex-col rounded-2xl transition-all duration-500 ease-in-out`}
						>
							<GenericTableHeaders
								report={formattedReportTier1}
								withShare
								withDownload
								withSplit
								onClose={() => {
									setOnCloseTier2(false);
									setShowDetailTable2(false);
									setExpandDetailTable2(false);
								}}
								close={onCloseTier2}
								isDetailHeaders
								detailHeadersTitle='Transaction Detail'
								detailHeaderItem={tier2Data?.reportConfig?.name || 'GL Detail'}
								withExpand
								expand={expandDetailTable2}
								onExpand={() => setExpandDetailTable2(!expandDetailTable2)}
							/>
							<div className='overflow-scroll'>
								<DetailTableTier2
									lineInfo={tier2Data}
									formattedReport={formattedReportTier2}
									setFormattedReport={report => setFormattedReportTier2(report)}
								/>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
