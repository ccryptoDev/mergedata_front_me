import CardGradient from '@/components/Target/CardGradient';
import ValueBarIncrease from '@/components/Target/ValueBarIncrease';
import IncreaseBarName from '@/components/Target/IncreaseBarName';
import ContainerNameIncrease from '@/components/Target/ContainerNameIncrease';
import { usePage } from '@/hooks/usePage';

const Card = ({ title, text, data, gradient, subTitle, typeOfCard }) => {
	const { moveToPage } = usePage();
	return (
		<CardGradient gradient={gradient}>
			<div
				className='w-[306px] h-[40px] cursor-pointer'
				onClick={() => moveToPage(`/targets/${title.toLowerCase()}`)}
			>
				<h1 className='text-[28px] leading-7 font-bold text-neutrals-00'>
					{title}
				</h1>
				<p
					className={subTitle === 'na' ? 'text-xs text-neutrals-300' : 'hidden'}
				>
					{text}
				</p>
				{subTitle !== 'na' && (
					<p className='text-sm font-bold text-white'>{subTitle}</p>
				)}
			</div>
			{typeOfCard === 1 ? (
				<div className='flex items-center gap-6'>
					{data.map(item => {
						return <ValueBarIncrease {...item} key={item.dataValue} />;
					})}
				</div>
			) : (
				<>
					<div className='flex items-center gap-6'>
						<IncreaseBarName
							value='204'
							increase='down'
							percentage='5'
							name='Product'
							targetValue={100}
							realValue={40}
						/>
						<IncreaseBarName
							value='603'
							increase='up'
							percentage='2'
							name='Finance Reserve'
							targetValue={60}
							realValue={45}
						/>
					</div>
					<ContainerNameIncrease />
				</>
			)}
		</CardGradient>
	);
};

export default Card;
