import CustomDropdown from '../CustomDropdown/CustomDropdown';

const Notification = () => {
	const options = ['Every Day', 'Every Week', 'Every Month', 'Every Year'];
	return (
		<div className='flex flex-col justify-between gap-3'>
			<h4 className='leading-[1.875rem]'>3. Notifications</h4>
			<div className='flex flex-col gap-2'>
				<label className='flex flex-col leading-6'>
					<p className='text-[0.75rem] leading-3 tracking-[0.00938rem]'>
						Frequency
					</p>
				</label>
				<CustomDropdown options={options} position='top'/>
			</div>
		</div>
	);
};

export default Notification;
