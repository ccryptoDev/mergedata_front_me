import Decision from '@/components/General/Icons/Decision';
import Table1 from '@/components/General/Contest/Table1';

export default function ResultResumeCard({
	bgColor = '#161A3E',
	bgColorTable,
	rowColor,
}) {
	return (
		<div
			className={`w-[658px] h-[684px] bg-[${bgColor}] flex flex-col items-start px-3 gap-y-4`}
		>
			<div className='w-[634px] h-[50px] flex flex-row'>
				<div className='w-full h-9 flex flex-row items-center justify-start'>
					<p className='font-bold text-2xl text-[#EEECF1]  font-baloo'>
						Scoreboard
					</p>
				</div>
				<div className='gap-x-[12px] flex flex-row items-center'>
					<div className='w-[56px] h-[50px] rounded-[6px] bg-neutrals-800 border border-neutrals-900 flex items-center justify-center'>
						<Decision name='Filter' />
					</div>
					<div className='w-[56px] h-[50px] rounded-[6px] bg-neutrals-800 border border-neutrals-900 flex items-center justify-center'>
						<Decision
							name='DoubleArrowVertical'
							className='flex items-stretch justify-stretch w-[13.5px] h-[15.5px]'
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col w-[634px] h-[618px]'>
				<Table1 bgColorTable={bgColorTable} rowColor={rowColor} />
			</div>
		</div>
	);
}
