import { Link } from 'react-router-dom';

import { usePage } from '@/hooks/usePage';
import GenericArrow from '@/components/General/Icons/GenericArrow';
import mergeDataLogo from '@/assets/svg/mergedata_logo.svg';
import mergeDataIcon from '@/assets/svg/mergedata_icon.svg';
import messageIconBlack from '@/assets/svg/message_icon_bg_black.svg';
import backgroundImage from '@/assets/images/Home2.png';
import arrowRight from '@/assets/svg/arrowright_icon.svg';
import CheckIcon from '@/assets/svg/check-purple_icon.svg';

const RecoveryLink = () => {
	const { moveToPage } = usePage();

	return (
		<div className='flex bg-dark-accent-00 h-screen'>
			{/* leftSide */}
			<section className='w-[50%] bg-neutrals-00 rounded-r-3xl flex flex-col  p-16'>
				<img
					src={mergeDataLogo}
					alt='MergeData logo'
					className='w-[192px] h-[44px]'
				/>
				<div className='w-full h-screen flex justify-center items-start'>
					<div className='mt-[131px] w-[300px]'>
						<button
							className='flex items-center gap-[10px]'
							onClick={() => moveToPage('/recover')}
						>
							<div className='w-[34px] h-[34px] flex justify-center items-center rotate-180 bg-purple-50 rounded-full hover:bg-purple-100 hover:scale-110'>
								<GenericArrow color='#000' />
							</div>
							<p className='font-public text-neutrals-700'>Back</p>
						</button>
						<div className='mt-[91px] flex items-start'>
							<div className='h-9 flex items-center mr-4'>
								<img src={CheckIcon} alt='check icon' className='w-4 h-4' />
							</div>
							<div>
								<h4 className=' font-baloo text-purple-700 text-[24px] leading-9'>
									Link sent
								</h4>
								<p className='font-public text-sm text-neutrals-700 leading-[18px]'>
									The link to recover your password has been sent to your email.
								</p>
								<div className='mt-[39px] flex justify-between items-center pb-6 '>
									<Link
										to='/recover'
										className='text-neutrals-700 text-xs underline'
									>
										Resend the link
									</Link>
									<button
										onClick={() => moveToPage('/login')}
										className='w-[97px] h-[44px] flex justify-center items-center gap-2 bg-primary-purple-600 text-neutrals-00 rounded hover:scale-[.95] hover:bg-primary-purple-400'
									>
										Login
										<img src={arrowRight} alt='arrow right' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* rightSide */}
			<div className='w-[50%] relative overflow-hidden'>
				<section className={`relative ml-[100px] mt-[187px]`}>
					<img src={backgroundImage} alt='' />
					<div className='w-[504px] h-[190px] text-neutrals-00'>
						<p>MERGE TIPS</p>
						<h2>Disparate Data Sources</h2>
						<div className='w-[340px]'>
							<p>
								Mix & match datasets from your DMS, CRM, and websites to gather
								actionable insights across your entire product ecosystem.
							</p>
						</div>
					</div>
				</section>
				<div className='absolute inset-0 bg-opacity-60 backdrop-blur-[8px]'></div>
				<img
					src={mergeDataIcon}
					alt='MergeData icon'
					className='w-[34px] h-14 absolute top-9 right-9'
				/>
				<div className='absolute bottom-12 right-12'>
					<img src={messageIconBlack} alt='' />
				</div>
			</div>
		</div>
	);
};

export default RecoveryLink;
