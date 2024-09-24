import { useState } from 'react';
import { Link } from 'react-router-dom';

import CheckIcon from '@/components/General/Icons/CheckIcon';
import Loader from '@/components/General/Loader';
import { useLoginForm } from '@/hooks/useLoginForm';

import arrowRight from '@/assets/svg/arrowright_icon.svg';

export default function LoginForm() {
	const { form, handleChange, handleSubmit, loading, errorMessage } =
		useLoginForm();
	const [showCheck, setShowCheck] = useState(false);

	return (
		<form className='max-w-[380px] w-full mx-auto flex flex-col gap-1 z-50'>
			<h4 className='text-primary-purple-200 mb-8'>Welcome</h4>

			{errorMessage ? (
				<div className='flex w-full justify-center'>
					<div className='bg-red-600 py-2 rounded-md flex justify-center mb-4 w-[550px]'>
						<h3 className='text-white font-bold text-[15px]'>{errorMessage}</h3>
					</div>
				</div>
			) : null}
			<div>
				<label htmlFor='user' className='w-[72px] block text-neutrals-100 font-baloo'>User</label>
				<div className='w-full h-[56px] px-3 py-4 bg-dark-background-00 rounded-lg border border-neutrals-600 hover:border-neutrals-200 justify-between items-center inline-flex focus-within:border-2 focus-within:border-primary-purple-500'>
					<svg className='w-[18px] h-[18px] fill-neutrals-100' fill="none"><path fillRule="evenodd" d="M3.75 4.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM8 1.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM4 11.75A2.25 2.25 0 0 0 1.75 14v1.188c0 .018.013.034.031.037 4.119.672 8.32.672 12.438 0a.037.037 0 0 0 .031-.037V14A2.25 2.25 0 0 0 12 11.75h-.34a.253.253 0 0 0-.079.012l-.865.283a8.751 8.751 0 0 1-5.432 0l-.866-.283a.252.252 0 0 0-.077-.012H4ZM.25 14A3.75 3.75 0 0 1 4 10.25h.34c.185 0 .369.03.544.086l.866.283a7.251 7.251 0 0 0 4.5 0l.866-.283c.175-.057.359-.086.543-.086H12A3.75 3.75 0 0 1 15.75 14v1.188c0 .753-.546 1.396-1.29 1.517a40.095 40.095 0 0 1-12.92 0 1.537 1.537 0 0 1-1.29-1.517V14Z" clipRule="evenodd"/></svg>
					<input className='font-baloo w-full bg-transparent text-neutrals-300 focus-within:text-white'
						type='text'
						id='name'
						name='name'
						value={form.name}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className='mt-4'>
				<label htmlFor='pwd' className='w-[72px] block text-neutrals-100 font-baloo'>Password</label>
				<div className='w-full h-[56px] px-3 py-4 bg-dark-background-00 rounded-lg border border-neutrals-600 hover:border-neutrals-200 justify-between items-center inline-flex focus-within:border-2 focus-within:border-primary-purple-500'>
					<svg className='w-[24px] h-[12px] fill-neutrals-100' fill="none">
						<path d="M6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4Z"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M6 0.25C2.82436 0.25 0.25 2.82436 0.25 6C0.25 9.17564 2.82436 11.75 6 11.75C8.18057 11.75 10.0762 10.5363 11.0508 8.75H14.25V11C14.25 11.4142 14.5858 11.75 15 11.75H18.5C18.9142 11.75 19.25 11.4142 19.25 11V8.75H21C21.4142 8.75 21.75 8.41421 21.75 8V5C21.75 4.0335 20.9665 3.25 20 3.25H11.0508C10.0762 1.46371 8.18057 0.25 6 0.25ZM1.75 6C1.75 3.65279 3.65279 1.75 6 1.75C7.74161 1.75 9.24018 2.79769 9.89669 4.30028C10.016 4.57345 10.2859 4.75 10.584 4.75H20C20.1381 4.75 20.25 4.86193 20.25 5V7.25H18.5C18.0858 7.25 17.75 7.58579 17.75 8V10.25H15.75V8C15.75 7.58579 15.4142 7.25 15 7.25H10.584C10.2859 7.25 10.016 7.42655 9.89669 7.69972C9.24018 9.20231 7.74161 10.25 6 10.25C3.65279 10.25 1.75 8.34721 1.75 6Z"/>
					</svg>
					<input
						className='font-baloo w-full bg-transparent text-neutrals-300 focus-within:text-white'
						type='password'
						name='pwd'
						id='pwd'
						value={form.pwd}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className='mt-5 flex justify-between items-center pb-6 border-b-2 border-dashed border-neutrals-700'>
				<Link to='/recover' className='text-neutrals-300 text-xs underline'>
					Recover password
				</Link>

				<button
					onClick={handleSubmit}
					onMouseEnter={() =>
						setTimeout(() => {
							setShowCheck(true);
						}, 300)
					}
					onMouseLeave={() =>
						setTimeout(() => {
							setShowCheck(false);
						}, 300)
					}
					className='w-[97px] h-[44px] flex justify-center items-center gap-2 bg-primary-purple-600 text-neutrals-00 rounded hover:scale-[.95] hover:bg-primary-purple-800'
				>
					{loading ? (
						<Loader />
					) : (
						<>
							Login
							{showCheck ? (
								<CheckIcon />
							) : (
								<img src={arrowRight} alt='arrow right' />
							)}
						</>
					)}
				</button>
			</div>
		</form>
	);
}
