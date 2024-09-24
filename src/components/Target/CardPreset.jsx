import TextIconButton from '@/components/General/Buttons/TextIconButton';
import GroupIcon from '../General/Icons/GroupIcon';
import LockPrivIcon from '../General/Icons/LockPrivIcon';
import ShareIcon from '../General/Icons/ShareIcon';
import Avatar2 from '@/assets/svg/Avatar2.svg';

const CardPreset = ({ title, description, isPrivate }) => {
	return (
		<div className='w-[27rem] h-[19rem] flex flex-col bg-[#0D102C] rounded-xl'>
			<div className='h-[5.4rem] flex flex-col p-6 mb-6'>
				<div className='flex justify-between items-center'>
					<p className='text-[#A6ACBD] font-sans font-normal	text-xs	leading-[18px]'>
						Target Name
					</p>
					<div className='flex items-center gap-3'>
						<ShareIcon />
						<div
							className={`flex gap-1 items-center px-[8px] rounded-[3px] font-semibold text-[9px] shadow-sm ${
								!isPrivate
									? 'bg-[#CFC7F5] text-[#212A43]'
									: 'bg-[#3E4761] text-[#C2C8D7]'
							}`}
						>
							{!isPrivate ? (
								<GroupIcon />
							) : (
								<div className='flex justify-center items-center mb-[2px]'>
									<LockPrivIcon />
								</div>
							)}
							<span>{isPrivate ? 'Private' : 'Public'}</span>
						</div>
					</div>
				</div>
				<p className='text-[#FFFFFF] font-baloo font-bold text-lg'>{title}</p>
				<p className='text-[#F0F2F5] font-sans text-[14px] leading-[20px] tracking-[0.3px]'>
					{description}
				</p>
			</div>
			<hr className='w-[382.67px] border-dotted border-0.5 border-[#505A78] m-6'></hr>
			<div className='flex justify-between items-center px-6'>
				<div className='flex items-center gap-2'>
					<img
						src={Avatar2}
						alt='avatar'
						className='w-7 h-7 rounded-full'
					/>
					<div className='flex flex-col'>
						<p className='text-[#E5E8EF] text-[14px] leading-[14px]'>
							William Page
						</p>
						<p className='text-[#B0A1EE] text-[12px] leading-[14px]'>
							Sales Manager
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-start'>
					<p className='text-[#A6ACBD] text-[12px] leading-[14px]'>
						Date created
					</p>
					<p className='text-[#E5E8EF] text-[14px] leading-[22px]'>05/22/23</p>
				</div>
			</div>
			<div className='flex flex-row justify-between items-center m-6 w-96 h-14'>
				<TextIconButton
					text='Remove'
					background='bg-base'
					width='w-[161px]'
					height='h-[50px]'
					backgroundHover='hover:bg-white'
					textColor='text-purple-600'
					textSize='text-lg'
					iconLeft={null}
				/>
				<TextIconButton text='Edit' iconRight='RightArrow' iconLeft={null} />
			</div>
		</div>
	);
};
export default CardPreset;
