import { useState } from 'react';
import { Link } from 'react-router-dom';

import CheckIcon from '@/components/General/Icons/CheckIcon';
import Loader from '@/components/General/Loader';
import { useLoginForm } from '@/hooks/useLoginForm';
import userIcon from '@/assets/svg/user_icon.svg';
import pwdIcon from '@/assets/svg/pwd_icon.svg';
import arrowRight from '@/assets/svg/arrowright_icon.svg';

export default function LoginForm () {
	const { form, handleChange, handleSubmit, loading, errorMessage } = useLoginForm();
	const [showCheck, setShowCheck] = useState(false);

	return (
		<form className='w-[275px] mx-auto flex flex-col gap-1'>
			<h4 className='text-primary-purple-800 mb-8'>Welcome</h4>

			{errorMessage ? (
				<div className='flex w-full justify-center'>
					<div className='bg-red-600 py-2 rounded-md flex justify-center mb-4 w-[550px]'>
						<h3 className='text-white font-bold text-[15px]'>{errorMessage}</h3>
					</div>
				</div>
			) : null}
			<div>
				<label htmlFor='user'>User</label>
				<div className='w-[275px] h-[56px] p-4 rounded border-[1px] border-neutrals-800 flex items-center focus-within:border-2 focus-within:border-primary-purple-500'>
					<img src={userIcon} alt='user icon' />
					<input
						type='text'
						id='name'
						name='name'
						value={form.name}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className='mt-4'>
				<label htmlFor='pwd'>Password</label>
				<div className='w-[275px] h-[56px] p-4 rounded border-[1px] border-neutrals-800 flex items-center focus-within:border-2 focus-within:border-primary-purple-500'>
					<img src={pwdIcon} alt='password icon' />
					<input
						type='password'
						name='pwd'
						id='pwd'
						value={form.pwd}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className='mt-5 flex justify-between items-center pb-6 border-b-2 border-dashed border-neutrals-700'>
				<Link to='/recover' className='text-neutrals-700 text-xs underline'>
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
