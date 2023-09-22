const GenericModalContainer = ({
	action,
	onAction,
	title,
	widthCancel,
	primaryBtn,
	children,
}) => {
	return (
		<div className='p-5 min-w-[300px] flex flex-col gap-5 bg-[#151f39] rounded-md'>
			<div className='flex justify-between items-center border-b border-b-neutrals-600 border-dashed'>
				<h5 className='pb-2 text-neutrals-00'>{title}</h5>
				<button
					onClick={() => onAction(!action)}
					className='text-neutrals-00 text-[30px] hover:text-neutrals-800'
				>
					&times;
				</button>
			</div>
			<div className='flex flex-col gap-1'>{children}</div>
			<div className='flex gap-5 justify-end'>
				{widthCancel && (
					<button
						onClick={() => onAction(!action)}
						className='py-1 px-3 rounded-md border border-transparent hover:border-primary-purple-100 hover:scale-95'
					>
						<p className='text-sm text-neutrals-50'>Cancel</p>
					</button>
				)}
				<button
					onClick={() => onAction(!action)}
					className='py-1 px-5 bg-primary-purple-800 rounded-md border-2 border-[#212A43] hover:border-2 hover:border-primary-purple-600 hover:bg-dark-accent-00 hover:scale-95'
				>
					<p className='text-sm text-neutrals-50'>{primaryBtn}</p>
				</button>
			</div>
		</div>
	);
};
export default GenericModalContainer;
