import CardGradient from '@/components/Target/CardGradient';
import ValueBarIncrease from '@/components/Target/ValueBarIncrease';
import IncreaseBarName from '@/components/Target/IncreaseBarName';
import ContainerNameIncrease from '@/components/Target/ContainerNameIncrease';
import { usePage } from '@/hooks/usePage';
import { useStore } from '@/store/store';


const Card = ({ title, gradient, description = '', typeOfCard, subSectionData = {}, subSectionInfo = {} }) => {
	const setSubSection = useStore(state => state.setSubSection);
	const { moveToPage } = usePage();

	const selectSection = () => {
		setSubSection(subSectionInfo)
		moveToPage(`/targets/${title.toLowerCase()}`)
	}
	return (

		<CardGradient gradient={gradient} onClick={selectSection}>
			<div className='w-[19.6em] h-[10.75em] flex flex-col items-center gap-y-[0.6em] justify-between '>
				<div className='w-[19.6em] h-[3.5em]'>
					<h1 className='text-[1.75em] leading-[1.75em] font-bold text-neutrals-00'>
						{title}
					</h1>
					<p
						className={`${description !== 'na' ? 'text-xs text-neutrals-300' : 'hidden'}`}
					>
						{description}
					</p>
				</div>
				{typeOfCard === 1 ? (
					<div className='flex items-center gap-[1.5em] '>
						{subSectionData.map((item, index) => {
							return <ValueBarIncrease item={item.values} key={`target-${index}`} />;
						})}
					</div>
				) : (
					<>
						<div className='flex items-center h-full gap-x-[1em]'>
							<IncreaseBarName
								item={subSectionData[0]?.values}
							/>
							<IncreaseBarName
								item={subSectionData[1]?.values}
							/>
						</div>
						<ContainerNameIncrease item={subSectionData[2]?.values} item1={subSectionData[3]?.values} />
					</>
				)}
			</div>
		</CardGradient>
	);
};

export default Card;
