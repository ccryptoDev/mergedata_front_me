const GenericArrow = props => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='14'
		height='10'
		fill='none'
		viewBox='0 0 14 10'
		{...props}
	>
		<path
			fill={props.color}
			d='M8.47 1.53A.75.75 0 019.53.47l4 4a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06-1.06l2.72-2.72H1.5a.75.75 0 010-1.5h9.69L8.47 1.53z'
		></path>
	</svg>
);

export default GenericArrow;
