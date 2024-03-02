import arrowRight from '@/assets/svg/arrowright_icon.svg';
import { useStore } from '@/store/store';

const SideMenuCard = ({ title, count, bgImg }) => {
	const adminSection = useStore(state => state.adminSection);
	const setAdminSection = useStore(state => state.setAdminSection);

	const handleClick = () => {
		setAdminSection(title);
	};
	return (
		<button
			onClick={handleClick}
			type='button'
			className={`relative w-[283px] h-[83px] flex items-center px-5 justify-start border border-background-dark-background rounded-2xl hover:bg-primary-purple-800 ${
				adminSection === title && 'bg-primary-purple-800'
			}`}
		>
			{/* image */}
			<div className='absolute bottom-0 right-3'>
				<img src={bgImg} alt='background image' />
			</div>
			{/* arrow */}
			<div className='absolute top-0 right-0 w-10 h-10 flex items-center justify-center'>
				<img src={arrowRight} alt='arrow to right icon' />
			</div>
			{/* Card info */}
			<div className='text-neutrals-00 pt-4 text-left'>
				<h6 className='leading-none font-baloo text-xl'>{title}</h6>
				<p className='leading-none font-public text-xs text-primary-purple-300'>
					{count}
				</p>
			</div>
		</button>
	);
};
export default SideMenuCard;
