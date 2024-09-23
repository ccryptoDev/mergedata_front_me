import { useState } from 'react';
import HeartIcon from '@/components/General/Icons/HeartIcon';
import LeftIcon from '@/components/General/Icons/LeftArrowIcon';
import { usePage } from '@/hooks/usePage';

const Ribbon = ({ title, subtitle, withIconBack, children, showAddFavorite = true }) => {
	const { returnOnePage } = usePage();
	const [btnHover, setBtnHover] = useState(false);

	return (
		<div className='h-[50px] px-4 flex justify-between items-center'>
			<div className='flex items-center gap-7'>
				{withIconBack && (
					<button
						onClick={returnOnePage}
						type='button'
						className='w-11 h-11 flex justify-center items-center rounded-full bg-primary-purple-600 hover:bg-primary-purple-800'
					>
						<LeftIcon />
					</button>
				)}
				<div className='text-neutrals-00'>
					<p className='text-xs'>{subtitle}</p>
					<h3 className='text-[32px] leading-8'>{title}</h3>
				</div>
				{showAddFavorite && (
					<button
						type='button'
						onMouseEnter={() => setBtnHover(true)}
						onMouseLeave={() => setBtnHover(false)}
						className={`p-2 h-[30px] flex items-center bg-dark-accent-00 rounded-lg ${btnHover && 'gap-2'
							}`}
					>
						<div className='w-[20px] h-[20px] flex justify-center items-center'>
							<HeartIcon />
						</div>
						{btnHover && (
							<p className='font-public text-sm text-neutrals-200'>
								Add as favorite
							</p>
						)}
					</button>
				)}
			</div>
			<div className='flex items-center gap-4 text-neutrals-00'>{children}</div>
		</div>
	);
};

export default Ribbon;
