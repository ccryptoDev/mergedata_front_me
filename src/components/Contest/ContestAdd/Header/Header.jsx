import CheckIcon from '@/components/General/Icons/CheckIcon';

const Header = () => {
	return (
		<div className='flex items-center gap-3'>
			<div className='p-4 bg-primary-purple-600 rounded-[12.5rem]'>
				<CheckIcon width={24} height={24} />
			</div>
			<div className='flex flex-col'>
				<p className='leading-[1.125rem] text-[0.75rem] text-white'>Contest</p>
				<h2 className='leading-[3rem] text-[2rem] text-white font-bold'>
					New Contests
				</h2>
			</div>
		</div>
	);
};

export default Header;
