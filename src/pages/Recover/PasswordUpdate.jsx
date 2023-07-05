import { usePage } from '@/hooks/usePage';
import mergeDataLogo from '@/assets/svg/mergedata_logo.svg';
import mergeDataIcon from '@/assets/svg/mergedata_icon.svg';
import messageIconBlack from '@/assets/svg/message_icon_bg_black.svg';
import backgroundImage from '@/assets/images/Home2.png';
import CheckIcon from '@/assets/svg/check-purple_icon.svg';
import arrowRight from '@/assets/svg/arrowright_icon.svg';

const PasswordUpdate = () => {
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
				<div className='w-full h-screen flex flex-col justify-center items-center'>
					<div className='w-[52px] h-[52px] flex justify-center items-center border-[1px] border-primary-purple-800 rounded-full'>
						<img src={CheckIcon} alt='check icon' className='w-4 h-4' />
					</div>
					<h4 className='mt-6 font-baloo text-purple-700 text-[24px] leading-9'>
						Password updated
					</h4>
					<p className='w-[299px] font-public text-sm text-center text-neutrals-700 leading-[18px]'>
						Your password has been successfully updated. You can now return to
						the login page and sign in with your new password.
					</p>
					<button
						onClick={() => moveToPage('/login')}
						className='w-[97px] h-[44px] mt-[33px] flex justify-center items-center gap-2 bg-primary-purple-600 text-neutrals-00 rounded hover:scale-[.95] hover:bg-primary-purple-400'
					>
						Login
						<img src={arrowRight} alt='arrow right' />
					</button>
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

export default PasswordUpdate;
