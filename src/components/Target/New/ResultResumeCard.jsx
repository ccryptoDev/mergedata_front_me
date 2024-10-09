// import Decision from '@/components/General/Icons/Decision';
import ResultResume from '@/components/Target/New/ResultResume';

export default function ResultResumeCard ({ summaries, handleSummaryClick }) {
	return (
		<div className='w-[23%] bg-[#05081E] flex flex-col items-start px-3 gap-y-3'>
			{/* <div className='w-[293px] h-8 flex flex-row items-center justify-between'>
				<div className='w-[209px] h-[32px] flex flex-row border700 rounded-[6px] bg-neutrals-800 items-center justify-between border border-neutrals-900 px-4'>
					<p className='font-semibold text-base text-[#EEECF1]  font-baloo'>
						Search
					</p>
					<Decision name='Lupe' />
				</div>
				<div className='gap-x-[4px] flex flex-row'>
					<div className='w-9 h-8 rounded-[6px] bg-neutrals-800 border border-neutrals-900 flex items-center justify-center'>
						<div className='flex items-center justify-center w-[10px] h-[12px]'>
							<Decision name='Filter' />
						</div>
					</div>
					<div className='w-9 h-8 rounded-[6px] bg-neutrals-800 border border-neutrals-900 flex items-center justify-center'>
						<div className='flex items-center justify-center w-[10px] h-[12px]'>
							<Decision name='DoubleArrowVertical' />
						</div>
					</div>
				</div>
			</div> */}
			<div className='flex flex-col'>
				{summaries?.map((summary, index) => (
					<ResultResume
						key={index}
						title={summary.reportConfig.name}
						description={summary.reportConfig.description}
						qty={summary.reportConfig.qty}
						onclick={() => handleSummaryClick(summary.reportConfig)}
					/>
				))}
			</div>
		</div>
	);
}
