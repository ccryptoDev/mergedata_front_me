const CloseIcon = props => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={props.width || 25}
		height={props.height || 25}
		fill='none'
		{...props}
	>
		<path
			stroke={props.fill || '#fff'}
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m7.608 17.392 10-10M7.608 7.392l10 10'
		/>
	</svg>
);
export default CloseIcon;
