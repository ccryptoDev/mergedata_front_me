import generateReport from '@/assets/svg/generateReport.svg';

export default function CommunityReportCreateReport() {
	return (
		<div className='min-w-[195px] min-h-[271px] rounded-xl p-[22px] flex flex-col items-center justify-center bg-[linear-gradient(308.89deg,_#35257A_15.4%,_#563CC7_102.05%)] hover:scale-[0.98] hover:bg-[linear-gradient(308.89deg,_#563CC7_15.4%,_#35257A_102.05%)] '>
			<div className='flex flex-col gap-4 text-center'>
				<img src={generateReport} alt='generate report icon' />
				<p className='text-primary-purple-50 font-baloo'>
					Report <br /> Generator
				</p>
			</div>
		</div>
	);
}
