import TextField from '../../Forms/shared/TextField';

const ClientForm = () => {
	return (
		<form>
			{/* basic info */}
			<div className='pb-10 flex flex-col gap-5 border-b border-b-neutrals-700'>
				<h5 className='font-baloo text-neutrals-50'>Basic Info</h5>
				<TextField
					label='Client Name'
					type='text'
					placeholder='Client Name'
					icon='greyUser'
				/>
			</div>
			{/* Primary contact */}
			<div className='flex flex-col gap-3'>
				<h5 className='font-baloo text-neutrals-50'>Primary Contact</h5>
				{/* first input line */}
				<div className='flex  items-center gap-4'>
					{/* input 1 */}
					<TextField
						label='First Name'
						type='text'
						placeholder='User First Name'
						icon='greyUser'
					/>
					{/* input 2 */}
					<TextField
						label='Last Name'
						type='text'
						placeholder='User Last Name'
						icon='greyUser'
					/>
				</div>
				<h5 className='font-baloo text-neutrals-50'>Primary Contact</h5>
				{/* second input line */}
				<div className='flex  items-center gap-4'>
					{/* input 1 */}
					<TextField
						label='Email'
						type='text'
						placeholder='User Company Email'
						icon='email'
					/>
					{/* input 2 */}
					<TextField
						label='Phone'
						type='text'
						placeholder='User Phone'
						icon='phone'
					/>
				</div>
			</div>
		</form>
	);
};
export default ClientForm;
