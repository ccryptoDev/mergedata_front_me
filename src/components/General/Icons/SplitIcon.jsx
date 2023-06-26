const SplitIcon = props => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={34}
		height={34}
		fill={props.fill || '#E5E8EF'}
		{...props}
	>
		<path
			fill={props.fill || '#E5E8EF'}
			fillRule='evenodd'
			d='M11.823 10a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2.223a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2h-2.223Zm7.334 1.556h3.11v10.888h-3.11V11.556Zm-1.556 0c0-.86.697-1.556 1.556-1.556h3.11c.86 0 1.556.696 1.556 1.556v10.888c0 .86-.696 1.556-1.555 1.556h-3.111c-.86 0-1.556-.696-1.556-1.556V11.556Z'
			clipRule='evenodd'
		/>
	</svg>
);
export default SplitIcon;
