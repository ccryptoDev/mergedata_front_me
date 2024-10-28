import { useState } from 'react';
import Layout from '@/components/General/Layout';
import { useStore } from '@/store/store';
import Header from '@/components/General/Header/Header';
import SideMenu from '@/components/Admin/SideMenu/SideMenu';
import addIcon from '@/assets/svg/admin/add-icon.svg';
import checkIcon from '@/assets/svg/admin/check-icon.svg';
import ReadMode from '@/components/Admin/Views/ReadMode/ReadMode';
import CreateMode from '@/components/Admin/Views/CreateMode/CreateMode';

export default function Admin() {
	const [isHovered, setIsHovered] = useState(false);

	const adminSection = useStore(state => state.adminSection);
	const viewMode = useStore(state => state.viewMode);
	const setViewMode = useStore(state => state.setViewMode);

	const handleClick = () => {
		setViewMode('create');
	};

	const handleCancel = () => {
		setViewMode('read');
	};

	return (
		<Layout className='bg-bg-dark-accent-dark'>
			<Header />
			<div className='mx-auto w-[98%] h-[calc(100vh-156px)] flex gap-6 overflow-auto'>
				<SideMenu />
				{viewMode === 'read' ? (
					<div className='w-[78%] h-[calc(100vh-156px)] bg-neutrals-900 rounded-3xl'>
						<div className='flex flex-col gap-4 h-full py-8'>
							{/* ribbon */}
							<div className='px-8 h-[50px] flex items-center justify-between'>
								<div className='font-baloo'>
									<h6 className='text-neutrals-00 leading-[26px] text-2xl'>
										{adminSection}
									</h6>
									<p className='text-xs text-primary-purple-100 font-public'>
										Total: 112
									</p>
								</div>
								<button
									type='button'
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
									onClick={handleClick}
									className='h-12 px-4 py-3 flex items-center gap-1 justify-center bg-primary-purple-600 rounded-md font-baloo text-neutrals-00 hover:bg-primary-purple-800 transition-all duration-300 ease-in-out'
								>
									<p className='text-sm'>Add {adminSection}</p>
									{isHovered ? (
										<img src={checkIcon} alt='icon' />
									) : (
										<img src={addIcon} alt='icon' />
									)}
								</button>
							</div>
							{/* mode render */}
							<ReadMode />
						</div>
					</div>
				) : (
					<div className='w-[78%] h-[calc(100vh-156px)] bg-neutrals-900 rounded-3xl'>
						<div className='flex flex-col gap-4 h-full p-8'>
							{/* ribbon */}
							<div className='h-[50px] flex items-center justify-between'>
								<h6 className='w-fit text-neutrals-00 leading-[26px] text-2xl whitespace-nowrap'>
									Add {adminSection}
								</h6>
								{/* tabs */}
								<div className='w-4/5 h-12 rounded-xl bg-dark-accent-00 flex gap-4'>
									<button
										type='button'
										className='w-[128px] h-12 rounded-xl bg-primary-purple-700 text-neutrals-50 text-sm'
									>
										Details
									</button>
									<button
										type='button'
										className='w-[128px] h-12 rounded-xl text-neutrals-400 text-sm'
									>
										Stores
									</button>
								</div>
							</div>
							{/* mode render */}
							<CreateMode />
							{/* buttons */}
							<div className='h-[70px] p-3 rounded-xl bg-dark-accent-00 flex justify-end gap-3'>
								<button
									type='button'
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
									onClick={handleCancel}
									className='h-[44px] px-4 py-3 flex items-center gap-1 justify-center bg-neutrals-600 rounded-md font-baloo text-neutrals-00 hover:bg-primary-green-700 transition-all duration-300 ease-in-out'
								>
									<p className='text-sm'>Cancel</p>

									<img src={addIcon} alt='icon' />
								</button>
								<button
									type='button'
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
									onClick={handleClick}
									className='h-[44px] px-4 py-3 flex items-center gap-1 justify-center bg-primary-purple-600 rounded-md font-baloo text-neutrals-00 hover:bg-primary-purple-800 transition-all duration-300 ease-in-out'
								>
									<p className='text-sm'>Save and Continue</p>

									<img src={checkIcon} alt='icon' />
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
}
