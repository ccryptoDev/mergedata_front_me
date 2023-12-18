import CustomDropdown from '@/components/Contest/ContestAdd/Settings/CustomDropdown/CustomDropdown';

const ParticipantsList = () => {
	const participants = ['user1', 'user2', 'user3', 'user4', 'user5'];
	return (
		<div className='gap-2 flex flex-col'>
			<h4 className='leading-[1.875rem]'>4. Participants</h4>
			<div className='flex w-full gap-3'>
				<div className='flex flex-col grow gap-1'>
					<label
						htmlFor='gameTitle'
						className='text-[0.75rem] leading-3 tracking-[0.00938rem] px-1'
					>
						Category of participants
					</label>
					<CustomDropdown options={participants} />
				</div>
			</div>
			<div className='flex w-full gap-3'>
				<div className='flex flex-col grow gap-1'>
					<label
						htmlFor='addParticipants'
						className='text-[0.75rem] leading-3 tracking-[0.00938rem] px-1'
					>
						Add participants
					</label>
					<input
						type='text'
						id='addParticipants'
						className='bg-dark-popup-00 border rounded py-4 px-3'
						style={{
							borderColor: '#E5E8EF',
							borderWidth: '1px',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ParticipantsList;
