import NotificationsCard from '@/components/General/Contest/NotificationsCard';
import SharedLayout from '@/components/General/SharedLayout';
import Dropdown from '@/components/Target/Dropdown';
import FilterDates from '@/components/Target/FilterDates';
import ResultResumeCard from '@/components/Target/New/ResultResumeCard';
import GravatarTable from '@/components/Target/New/GravatarTable';

function Contest() {
	return (
		<SharedLayout bgColor='bg-[#05081E]'>
			<div className='flex justify-between items-center ml-12 mr-[70px] mt-[30px]'>
				<div className='flex flex-col'>
					<p className='text-[#FFFFFF] font-public text-[12px]'>All</p>
					<h3 className='text-[#FFFFFF] font-baloo text-[32px] font-bold'>
						Contest
					</h3>
				</div>
				<div className='flex items-center gap-12 uppercase'>
					<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
						Day
					</h6>
					<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
						Month
					</h6>
					<FilterDates />
				</div>
				<div className='flex'>
					<button className='px-4 py-[14px] bg-primary-purple-700 text-white rounded-[5px] mr-5 font-baloo font-semibold text-[14px]'>
						New Contest
					</button>
					<Dropdown name='Home' />
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
