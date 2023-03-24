import LeftSide from '@/layouts/Login/LeftSide';
import RightSide from '@/layouts/Login/RightSide';

export default function Login() {
	return (
		<div className='bg-dark-background-00 h-screen w-screen overflow-hidden flex'>
			<LeftSide width='w-[40%]' />
			<RightSide width='w-[60%]' />
		</div>
	);
}
