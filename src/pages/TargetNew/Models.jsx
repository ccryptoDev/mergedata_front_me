import BubbleGraphCard from '@/components/General/Graphs/BubbleGraphCard';
import SharedLayout from '@/components/General/SharedLayout';
import Dropdown from '@/components/Target/Dropdown';
import FilterDates from '@/components/Target/FilterDates';
import Card from '@/components/Target/New/Card';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import ModelsTable from '@/components/Target/New/ModelsTable';
import NameDropdown from '@/components/Target/New/NameDropdown';
import PersonIncrease from '@/components/Target/New/PersonIncrease';
import PersonIncreaseTable from '@/components/Target/New/PersonIncreaseTable';
import ResumeUserCard from '@/components/Target/New/ResumeUserCard';
import { usePage } from '@/hooks/usePage';
import { useState } from 'react';


function Models () {
	const { returnOnePage } = usePage();
	const [showModel, setShowModel] = useState(false);
	return (
		<SharedLayout>
			<div className='flex justify-between items-center mr-12'>
				<LeftArrowDirectActionHeart
					bgColor='bg-dark-popup-00'
					buttonName='Models'
					upperName='Targets/New'
					onClick={returnOnePage}
				/>
				<div className='flex items-center gap-12 uppercase'>
					<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
						Day
					</h6>
					<h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
						Month
					</h6>
					<FilterDates />
				</div>
				<Dropdown name='Home' />
			</div>
			<div className='flex'>
				<section>
					<ModelsTable setShowModel={setShowModel} />
				</section>
				<section className='flex flex-col ml-7 flex-grow'>
					{!showModel ? (
						<>
							<BubbleGraphCard width='w-[373px]' height='h-[333px]' />
							<Card height='h-[309px]' margin='mt-6'>
								<NameDropdown />
								<PersonIncreaseTable>
									<PersonIncrease />
									<PersonIncrease />
									<PersonIncrease />
								</PersonIncreaseTable>
							</Card>
						</>
					) : (
						<ResumeUserCard />
					)}
				</section>
			</div>
		</SharedLayout>
	);
}

export default Models;
