import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton';
import AddTargetPresetsTargetInput from '@/components/Target/AddTargetPresetsTargetInput.jsx';

function BasicInformation() {
	return (
		<div className='flex flex-col ml-[61px] pt-10 h-full w-[460px]'>
			<div className='flex flex-col'>
				<div className='flex items-center gap-2 font-baloo text-[24px]'>
					<p className='text-[#8B93A9]'>01</p>
					<h4 className='text-[#EFECFC] font-bold font-baloo'>
						Basic Information
					</h4>
				</div>
				<p className='text-[#A6ACBD] text-[14px] w-[336px] font-public'>
					Fill in the basic information of the Target to identify it by name and
					description in the target list.
				</p>
			</div>
			<div className='mt-[50px] mb-6'>
				<label
					htmlFor='targetName'
					className='text-[#A6ACBD] text-18px] leading-7 font-baloo font-bold inline-block mb-3'
				>
					New Target
				</label>
				<AddTargetPresetsTargetInput />
			</div>
			<div className='mb-6'>
				<label
					htmlFor='description'
					className='text-[#A6ACBD] text-18px] leading-7 font-baloo font-bold inline-block mb-3'
				>
					Description
				</label>
				<textarea
					className='px-3 w-[336px] h-[114px] bg-[#202449] rounded-[4px] border-[1px] border-solid border-[#E5E8EF] flex items-center flex-row'
					name='description'
					placeholder='Label'
				/>
			</div>
			<IconNameIconDropdownButton
				width='w-[336px]'
				text='Private'
				iconName='Lock'
			/>
		</div>
	);
}

export default BasicInformation;
