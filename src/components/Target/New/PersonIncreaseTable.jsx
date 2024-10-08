const PersonIncreaseTable = ({ children, tailwindStyles }) => {
	return (
		<div
			className={`flex flex-col justify-between w-[19.3em] gap-[0.5em] pb-1 px-[0.125em] ${tailwindStyles}`}
		>
			{children}
		</div>
	);
};

export default PersonIncreaseTable;
