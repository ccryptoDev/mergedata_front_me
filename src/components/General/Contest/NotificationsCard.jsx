import NotificationGroup from '@/components/General/Contest/NotificationGroup';

export default function NotificationsCard() {
	return (
		<div className='w-[23%] h-full bg-[#0D102C] flex rounded-xl px-3 pb-6'>
			<div className='flex flex-col h-full w-full'>
				<div className='flex my-3'>
					<div className='w-full p-3 bg-[#563CC7] rounded-lg flex items-center justify-center gap-x-2'>
						<p className='text-[13px] text-[#FFFFFF] text-semibold '>
							Notifications
						</p>
						<div className='border-[0.13rem] border-white bg-primary-purple-300 rounded-[6.25rem] px-[0.31rem]'>
							<p className='text-[0.5625rem] text-[#FFFFFF] font-semibold leading-[17px]'>
								99
							</p>
						</div>
					</div>
				</div>
				<div className='h-[calc(100vh-310px)] overflow-auto flex flex-col justify-between'>
					<NotificationGroup contestStatus='1 Days to finishing Game' />
					<NotificationGroup contestStatus='3 Days to finishing Game' />
					<NotificationGroup contestStatus='7 Days to finishing Game' />
				</div>
			</div>
		</div>
	);
}
