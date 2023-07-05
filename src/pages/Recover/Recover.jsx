import { useState } from 'react';

import { usePage } from '@/hooks/usePage';
import GenericArrow from '@/components/General/Icons/GenericArrow';
import Loader from '@/components/General/Loader';
import { useLoginForm } from '@/hooks/useLoginForm';
import mergeDataLogo from '@/assets/svg/mergedata_logo.svg';
import mergeDataIcon from '@/assets/svg/mergedata_icon.svg';
import messageIconBlack from '@/assets/svg/message_icon_bg_black.svg';
import UserIcon from '@/assets/svg/user_icon.svg';
import backgroundImage from '@/assets/images/Home2.png';
import arrowRight from '@/assets/svg/arrowright_icon.svg';

const Recover = () => {
	const [email, setEmail] = useState('');
	const { handleSentEmail, errorMessage, loading } = useLoginForm();
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
							onClick={() => moveToPage('/login')}
						>
							<div className='w-[34px] h-[34px] flex justify-center items-center rotate-180 bg-purple-50 rounded-full hover:bg-purple-100 hover:scale-110'>
								<GenericArrow color='#000' />
							</div>
							<p className='font-public text-neutrals-700'>Back to Login</p>
						</button>
						<div className='mt-[72px] flex flex-col'>
							{errorMessage ? (
								<div className='flex justify-center'>
									<div className='bg-red-600 py-2 rounded-md flex justify-center mb-4 w-full'>
										<h3 className='text-white font-bold text-[15px]'>
											{errorMessage}
										</h3>
									</div>
								</div>
							) : null}
							<h4 className='font-baloo text-purple-700 text-[24px] leading-9'>
								Recover password
							</h4>
							<p className='font-public text-sm text-neutrals-700 leading-[18px]'>
								Enter your registered email address to send you an email with
								the recovery link.
							</p>
							<div className='mt-[23px] flex flex-col'>
								<label
									htmlFor='email'
									className='text-[#1A1A1A] font-public text-sm'
								>
									Email
								</label>
								<div className='h-[56px] p-4 rounded border-[1px] border-neutrals-800 flex items-center focus-within:border-2 focus-within:border-primary-purple-500'>
									<img src={UserIcon} alt='user icon' />
									<input
										type='text'
										name='email'
										value={email}
										onChange={event => setEmail(event.target.value)}
									/>
								</div>
								<button
									onClick={event => handleSentEmail(event, email)}
									className='mt-[17px] w-[97px] h-[44px] self-end flex justify-center items-center gap-2 bg-primary-purple-600 text-neutrals-00 rounded hover:scale-[.95] hover:bg-primary-purple-400'
								>
									{loading ? (
										<Loader />
									) : (
										<>
											Send
											<img src={arrowRight} alt='arrow right' />
										</>
									)}
								</button>
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

export default Recover;
