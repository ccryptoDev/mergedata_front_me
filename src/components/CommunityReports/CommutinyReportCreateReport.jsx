import generateReport from '@/assets/svg/generateReport.svg';
import { useNavigate } from 'react-router-dom';

export default function CommunityReportCreateReport() {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate('/community/report-generator')}
			className='w-[195px] h-[271px] rounded-xl p-[22px] flex flex-col items-center justify-center bg-[linear-gradient(308.89deg,_#35257A_15.4%,_#563CC7_102.05%)] hover:scale-[0.98] hover:bg-[linear-gradient(308.89deg,_#563CC7_15.4%,_#35257A_102.05%)] cursor-pointer'
		>
			<div className='flex flex-col gap-4 text-center'>
				<img src={generateReport} alt='generate report icon' />
				<p className='text-primary-purple-50 font-baloo'>
					Report <br /> Generator
				</p>
			</div>
		</div>
	);
}
