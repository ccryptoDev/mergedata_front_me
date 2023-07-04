import { useEffect, useState } from 'react';

import EqualIcon from '@/components/General/Icons/DivideIcon';

import SortBy from '@/components/General/Icons/DoubleArrowVerticalIcon';
import FilterIcon from '@/components/General/Icons/FilterIcon';
import SearchIcon from '@/components/General/Icons/LupeIcon';
import SharedLayout from '@/components/General/SharedLayout';
import CommunityReportTile from '@/components/CommunityReports/CommunityReportTile';
import CommunityReportCreateReport from '@/components/CommunityReports/CommutinyReportCreateReport';
import Loader from '@/components/General/Loader';
import { useReport } from '@/hooks/useReport';
import { usePage } from '@/hooks/usePage';

function CommunityReports () {
	const { getSummariesForASection } = useReport('reporter');
	const { previousState, moveToPage } = usePage();
	const [reportsSummary, setReportsSummary] = useState();

	const getCommunityReports = async section => {
		const user = JSON.parse(localStorage.getItem('permissionsMergeData'));
		const summaries = await getSummariesForASection({ ...section, userId: user?.userId, clientId: user?.client?.clientId });
		if (summaries) setReportsSummary(...summaries);
	};

	const handleSummaryClick = report => {
		moveToPage('/community-table', {
			reportInfo: {
				id: report.id,
				clientId: previousState.user.client.clientId,
				storeId: previousState.user.store.storeId,
				period: ['2023-05'],
				name: report.name,
			},
		});
	};

	useEffect(() => {
		if (previousState?.section.id) getCommunityReports(previousState.section);
	}, [previousState]);

	return (
		<SharedLayout>
			<main className='max-w-[1299px] h-[calc(800px-62px)] mt-6 flex flex-col justify-center mx-auto gap-9 overflow-hidden'>
				{/* filters section */}
				<section className='h-[50px] flex justify-between gap-6'>
					<h3 className='text-primary-purple-50'>Community</h3>
					<div className='px-4 flex grow items-center border-2 border-neutrals-900 rounded-lg bg-[#05050F] focus-within:border-2 focus-within:border-primary-purple-500'>
						<input
							type='text'
							name=''
							id=''
							placeholder='Report Search'
							className='bg-transparent border-none w-full text-primary-purple-100'
						/>
						<SearchIcon width='21' height='21' />
					</div>
					<div className='flex gap-3'>
						<div className='w-[56px] h-[50px] bg-neutrals-800 flex items-center justify-center rounded-lg hover:bg-neutrals-900'>
							<EqualIcon />
						</div>
						<div className='w-[56px] h-[50px] bg-neutrals-800 flex items-center justify-center rounded-lg hover:bg-neutrals-900'>
							<SortBy />
						</div>
						<div className='w-[56px] h-[50px] bg-neutrals-800 flex items-center justify-center rounded-lg hover:bg-neutrals-900'>
							<FilterIcon />
						</div>
					</div>
				</section>

				{/* tiles container */}
				<section className='h-[80%] flex flex-wrap items-start gap-6 overflow-x-scroll'>
					<CommunityReportCreateReport />
					{reportsSummary ? (
						reportsSummary.map((reportSummary, index) => (
							<CommunityReportTile
								key={index}
								withInfoIcon={false}
								report={reportSummary}
								handleClick={() => handleSummaryClick(reportSummary)}
							/>
						))
					) : (
						<Loader />
					)}
				</section>

				{/* count section */}
				<section className='w-full text-right text-purple-50 pr-4'>
					<p>
						11/64 <span className='text-neutrals-400'>Community</span>{' '}
						<span className='text-primary-purple-300'>- Load More</span>
					</p>
				</section>
			</main>
		</SharedLayout>
	);
}

export default CommunityReports;
