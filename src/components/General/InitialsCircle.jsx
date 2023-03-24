export const InitialsCircle = ({ firstName, lastName, isOnline }) => {
	return (
		<div className='relative'>
			<div className='w-8 h-8 flex justify-center items-center border-[1px] border-neutrals-00 bg-neutrals-100 rounded-full'>
				<h4 className='font-baloo text-sm leading-6 text-purple-700'>
					{firstName.charAt(0) + lastName.charAt(0)}
				</h4>
			</div>
			{isOnline && (
				<div className='absolute w-2 h-2 border-[1px] border-neutrals-00 rounded-full bg-[#60CB82] bottom-0 right-0'></div>
			)}
		</div>
	);
};
