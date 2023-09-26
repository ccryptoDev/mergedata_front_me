const ModalWrapper = ({ children, action, onAction }) => {
	return (
		<div
			onClick={() => onAction(!action)}
			className='absolute inset-0 z-50 w-screen h-screen flex flex-col justify-center items-center bg-dark-popup-00/[.9] transition ease-in-out duration-500'
		>
			{children}
		</div>
	);
};

export default ModalWrapper;
