import { useState } from 'react';
import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton';
import SingleButton from '@/components/General/Buttons/SingleButton';
import Table6 from '@/components/Target/New/Table6';
import Table6Total from '@/components/Target/New/Table6Total';

export default function ModelsTable ({ setShowModel }) {
	const [reduce, setReduce] = useState(false);

	return (
		<div
			className={`relative bg-neutrals-900 px-[26px] pt-[20px] ${!reduce ? 'w-[962px]' : 'w-[805px]'
				} h-[666px] rounded-2xl`}
		>
			<div className='h-[50px] w-full border-neutrals-700 flex flex-row items-center justify-between'>
				<div className='flex flex-row gap-x-3'>
					<button>
						<SingleButton />
					</button>
					<button>
						<IconNameIconDropdownButton
							text='All Models'
							iconName=''
							background='bg-neutrals-800'
							width='w-[128px]'
							border='border border-[2px] border-neutrals-900'
							height='h-[50px]'
							backgroundHover='hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300'
							borderHover='hover:border-purple-600'
							radius='rounded-xl'
						/>
					</button>
				</div>
				{/* <div className='flex flex-row gap-x-2'>
					<button>
						<SingleButton
							icon='Share'
							background=''
							width='w-[50px]'
							border=''
							height='h-[50px]'
							backgroundHover='hover:bg-purple-300 transition duration-100 delay-150 hover:delay-300'
							borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
							radius=''
						/>
					</button>

					<button
						onClick={() => {
							setReduce(!reduce);
							setShowModel(!reduce);
						}}
					>
						{reduce ? (
							<SingleButton
								icon='Pause'
								background='bg-purple-100 bg-opacity-70'
								width='w-[50px]'
								border='ring ring-purple-100 ring-opacity-70 border-[4px] border-neutrals-900'
								height='h-[50px]'
								backgroundHover='hover:bg-purple-300 bg-opacity-70 transition duration-100 delay-150 hover:delay-300'
								borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
								radius=''
							/>
						) : (
							<SingleButton
								icon='Pause'
								background=''
								width='w-[50px]'
								border=''
								height='h-[50px]'
								backgroundHover='hover:bg-purple-300 transition duration-100 delay-150 hover:delay-300'
								borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
								radius=''
							/>
						)}
					</button>
				</div> */}
			</div>
			<div className='w-auto'>
				<div className='min-w-full py-4 sm:px-0 lg:px-1'>
					<div className='overflow-hidden'>
						<Table6
							shouldReduce={reduce}
							setShowModel={setShowModel}
							setReduce={setReduce}
						/>
					</div>
					<div className='absolute top-[594px] left-0 w-full rounded-[50px]'>
						<Table6Total
							shouldReduce={reduce}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
