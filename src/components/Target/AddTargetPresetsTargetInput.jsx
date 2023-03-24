import AdornmentStartIcon from '@/components/General/Icons/AdornmentStartIcon';

const AddTargetPresetsTargetInput = () => {
	return (
		<div className='px-3 w-[336px] h-[50px] bg-[#202449] rounded-[4px] border-[1px] border-solid border-[#E5E8EF] flex items-center flex-row'>
			<div className='mr-2 text-neutral-200'>
				<AdornmentStartIcon className='h-5 w-5' />
			</div>
			<input
				className='font-sans text-base text-[#E5E8EF] text-400 bg-transparent outline-none w-full h-full'
				name='targetName'
				placeholder='Target Name'
			/>
		</div>
	);
};

export default AddTargetPresetsTargetInput;
