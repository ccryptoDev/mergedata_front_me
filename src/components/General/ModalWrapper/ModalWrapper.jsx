import ReactDOM from 'react-dom';

const ModalWrapper = ({ children }) => {
	return ReactDOM.createPortal(
		<div className='absolute left-0 inset-0 z-[999] w-screen h-screen flex flex-col justify-center items-center bg-dark-popup-00/[.9] transition ease-in-out duration-500'>
			{children}
		</div>,
		document.getElementById('modal'),
	);
};

export default ModalWrapper;
