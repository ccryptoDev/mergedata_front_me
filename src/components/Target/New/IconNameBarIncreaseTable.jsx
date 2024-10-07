const IconNameBarIncreaseTable = ({
	children,
	paddingVertical = 'py-2',
	tailwindStyles,
}) => {
	return (
		<div
			className={`flex flex-col gap-4 ${paddingVertical} justify-between ${tailwindStyles}`}
		>
			{children}
		</div>
	);
};

export default IconNameBarIncreaseTable;
