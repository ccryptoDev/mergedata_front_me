import NotificationsCard from '@/components/General/Contest/NotificationsCard';
import SharedLayout from '@/components/General/SharedLayout';
import FilterDates from '@/components/Target/FilterDates';
import ResultResumeCard from '@/components/Target/New/ResultResumeCard';
import GravatarTable from '@/components/Target/New/GravatarTable';
import StorePicker from '@/components/General/StorePicker/StorePicker';

function Contest() {
	return (
		<SharedLayout bgColor='bg-[#05081E]'>
			<div className='z-10 flex justify-between items-center ml-12 mr-[70px] mt-[30px]'>
				<div className='flex flex-col'>
					<p className='text-[#FFFFFF] font-public text-[12px]'>All</p>
					<h3 className='text-[#FFFFFF] font-baloo text-[32px] font-bold'>
						Contest
					</h3>
				</div>
				<div className='z-20 flex items-center gap-12 uppercase'>
					<FilterDates />
				</div>
				<div className='flex'>
					<button className='px-4 py-[14px] bg-primary-purple-700 text-white rounded-[5px] mr-5 font-baloo font-semibold text-[14px]'>
						New Contest
					</button>
					<StorePicker />
				</div>
			</div>
			<div className='flex mt-4 ml-12'>
				<section className='mr-6'>
					<ResultResumeCard />
				</section>
				<section className='mr-6'>
					<GravatarTable
						bgColor='#05081E'
						bgColorTable='#05081E'
						rowColor='#0D102C'
					/>
				</section>
				<section>
					<NotificationsCard />
				</section>
			</div>
		</SharedLayout>
	);
}

export default Contest;
