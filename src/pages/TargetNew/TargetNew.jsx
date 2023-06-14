import LineGraph from '@/components/General/Graphs/LineChart';
import SharedLayout from '@/components/General/SharedLayout';
import Dropdown from '@/components/Target/Dropdown';
import FilterDates from '@/components/Target/FilterDates';
import Card from '@/components/Target/New/Card';
import IconNameBarIncrease from '@/components/Target/New/IconNameBarIncrease';
import IconNameBarIncreaseTable from '@/components/Target/New/IconNameBarIncreaseTable';
import KeyExpensesCard from '@/components/Target/New/KeyExpensesCard';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import NameDropdown from '@/components/Target/New/NameDropdown';
import NameIncreaseDropdown from '@/components/Target/New/NameIncreaseDropdown';
import PersonIncrease from '@/components/Target/New/PersonIncrease';
import PersonIncreaseTable from '@/components/Target/New/PersonIncreaseTable';
import { useNavigate } from 'react-router-dom';
import { increaseStatus } from '@/utils/helperFunctions';
import ModelsIndividualStatus from '@/components/Target/New/ModelsIndividualStatus';
import BubbleGraphCard from '@/components/General/Graphs/BubbleGraphCard';

function TargetNew () {
	const navigate = useNavigate();
	const { icon, textColor } = increaseStatus('up');
	return (
		<SharedLayout>
			<div className='flex justify-between items-center mr-12'>
				<LeftArrowDirectActionHeart
					bgColor='bg-dark-popup-00'
					buttonName='New'
					upperName='Targets'
					onClick={() => navigate(-1)}
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
			<div className='flex justify-between mx-4'>
				<section>
					<Card margin={'mb-6'} onClick={() => navigate('/target/new/financial-statement')}>
						<NameIncreaseDropdown />
						<IconNameBarIncreaseTable>
							<IconNameBarIncrease />
							<IconNameBarIncrease />
							<IconNameBarIncrease />
							<IconNameBarIncrease />
						</IconNameBarIncreaseTable>
					</Card>
					<Card height='h-[309px]'>
						<NameDropdown />
						<PersonIncreaseTable>
							<PersonIncrease />
							<PersonIncrease />
							<PersonIncrease />
						</PersonIncreaseTable>
					</Card>
				</section>
				<section>
					<div className='bg-[#3E4761] w-full h-[666px] rounded-2xl'>
						<Card
							height='h-[500px]'
							onClick={() => navigate('/target/new/models')}
						>
							<div className='w-[192px] mb-10'>
								<NameDropdown
									title='Models'
									dropDownText='All'
									width='w-[192px]'
								/>
								<div className='flex'>
									<div className='flex w-[31px] items-center justify-center mb-3'>
										<img src={icon} />
										<p
											className={`font-baloo ${textColor} text-[12px] font-bold`}
										>
											10%
										</p>
									</div>
									<p className='text-white text-[14px] leading-4 ml-3 w-[143px] opacity-60'>
										Compared to
										<br />
										$21,490 last year
									</p>
								</div>
							</div>
							<LineGraph />
							<IconNameBarIncreaseTable
								tailwindStyles={'mt-9'}
								paddingVertical='pb-8'
							>
								<IconNameBarIncrease donutIcon={true} />
								<IconNameBarIncrease donutIcon={true} />
								<IconNameBarIncrease donutIcon={true} />
							</IconNameBarIncreaseTable>
						</Card>
						<div className='flex justify-between mx-8 mt-10'>
							<ModelsIndividualStatus />
							<ModelsIndividualStatus />
							<ModelsIndividualStatus />
						</div>
					</div>
				</section>
				<section>
					<BubbleGraphCard />
					<div className='mt-6'>
						<KeyExpensesCard
							onClick={() => navigate('/target/new/expenses')}
						/>
					</div>
				</section>
			</div>
		</SharedLayout>
	);
}

export default TargetNew;
