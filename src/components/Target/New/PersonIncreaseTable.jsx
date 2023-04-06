const PersonIncreaseTable = ({ children, tailwindStyles }) => {
	return (
		<div
			className={`flex flex-col justify-between w-[309px] gap-2 pb-2 px-[2px] ${tailwindStyles}`}
		>
			{children}
		</div>
	);
};

export default PersonIncreaseTable;
