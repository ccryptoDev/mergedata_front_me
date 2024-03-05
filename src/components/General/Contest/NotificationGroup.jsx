import photo from '@/assets/svg/photo.svg';

export default function NotificationGroup({ contestStatus = 'Paused' }) {
	return (
		<div className='flex flex-col gap-y-2'>
			<div className='bg-[#0D102C] p-2 flex  gap-x-4 gap-y-2'>
				<div className='w-10 h-10'>
					<img src={photo} />
				</div>
				<div className=' flex flex-col grow'>
					<div className='flex items-center'>
						<span className='text-[#FFFFFF] text-[14px] leading-[22px] font-public'>
							Jones Ferdinand
						</span>
					</div>
					<div className=' flex items-center'>
						<span className='text-[#6B748E] text-[12px] leading-[18px]  font-public'>
							Sold a vehicle
						</span>
					</div>
				</div>
				<div className='flex flex-col'>
					<div className=' text-[#6B748E] text-[8px] self-end leading-[120%]'>
						06:00 PM
					</div>
					<div className=' font-baloo font-bold text-[1.125rem] text-[#1BE2C5] leading-7'>
						+42pt
					</div>
				</div>
			</div>

			<div className='bg-[#0D102C] p-2 flex flex-row gap-x-4'>
				<div className='w-10 h-10'>
					<img src={photo} />
				</div>
				<div className='flex items-center'>
					<span className='text-[#FFFFFF] text-[14px] leading-[22px] font-public'>
						Jones is the first
					</span>
				</div>
			</div>

			<div className='w-full bg-[#0D102C] flex justify-between'>
				<span className='text-[#32e5cb] text-[14px] leading-[1.375rem] font-public'>
					{contestStatus}
				</span>

				<div className='flex flex-col'>
					<div className='text-[#6B748E] text-[8px] flex items-center justify-end '>
						06:00 PM
					</div>
				</div>
			</div>

			<div className='bg-[#0D102C] flex flex-row gap-x-4'>
				<span className='text-[#32e5cb] text-[14px] leading-[22px] font-public'>
					The contest ended
				</span>
			</div>
		</div>
	);
}
