import { Link } from 'react-router-dom';

import LoginForm from '@/components/Login/LoginForm';
import mergeDataLogo from '@/assets/svg/mergedata_logo.svg';
import leftElypseLogin from '@/assets/images/eclipse-min.png';
import oktaLogo from '@/assets/svg/okta_logo.svg';
import infoIcon from '@/assets/svg/info_icon.svg';


export default function LeftSide ({ width }) {
	return (
		<section
			className={`md:w-[47%] w-full rounded-r-3xl flex flex-col justify-between p-16`}
		>
			<img
				src={leftElypseLogin}
				alt='Shape element'
				className='fixed eclipse-left-login'
			/>
			<img
				src={mergeDataLogo}
				alt='MergeData logo'
				className='w-[192px] h-[44px]'
			/>

			

			<LoginForm className="z-50" />

			<>
				<div className='w-[275px] mx-auto z-50'>
					<Link
						to='/oktaLogin'
						className='flex justify-center items-center gap-2 text-xs text-neutrals-300'
					>
						<p className='pt-1'>Or Login with</p>
						<img src={oktaLogo} alt='OKTA logo' />
					</Link>
				</div>
				<div className='w-full flex justify-end'>
					<img src={infoIcon} alt='information icon' />
				</div>
			</>
		</section>
	);
}
