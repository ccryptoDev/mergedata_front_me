const IconNameBarIncreaseTable = ({
	children,
	paddingVertical = 'py-2',
	tailwindStyles,
}) => {
	return (
		<div
			className={`w-[309px] h-[164px] mt-[30px] ${paddingVertical} flex flex-col justify-between ${tailwindStyles}`}
		>
			{children}
		</div>
	);
};

export default IconNameBarIncreaseTable;
