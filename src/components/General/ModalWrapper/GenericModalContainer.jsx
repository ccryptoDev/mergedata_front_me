const GenericModalContainer = ({
	onActionClose,
	onActionPrimary,
	title,
	widthCancel,
	primaryBtn,
	children,
}) => {
	return (
		<div className='p-6 min-w-[300px] flex flex-col gap-3 bg-dark-accent-00 rounded-md'>
			<h5 className='text-neutrals-00'>{title}</h5>

			<div className='flex flex-col gap-1'>{children}</div>
			<div className='flex gap-5 justify-end pt-4'>
				{widthCancel && (
					<button
						onClick={onActionClose}
						className='px-8 h-[54px] flex items-center border border-neutrals-00 rounded-md'
					>
						<p className='text-sm text-neutrals-50'>Cancel</p>
					</button>
				)}
				<button
					onClick={onActionPrimary}
					className='px-8 h-[54px] flex items-center bg-primary-purple-800 rounded-md'
				>
					<p className='text-sm text-neutrals-50'>{primaryBtn}</p>
				</button>
			</div>
		</div>
	);
};
export default GenericModalContainer;
