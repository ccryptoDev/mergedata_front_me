const SvgComponent = props => (
	<svg
		width={props.width || 19}
		height={props.height || 19}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M11 7.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z'
			fill={props.fill || '#8B93A9'}
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M11 .25a.75.75 0 0 1 .75.75v1.282a8.752 8.752 0 0 1 7.968 7.968H21a.75.75 0 0 1 0 1.5h-1.282a8.752 8.752 0 0 1-7.968 7.968V21a.75.75 0 0 1-1.5 0v-1.282a8.752 8.752 0 0 1-7.968-7.968H1a.75.75 0 0 1 0-1.5h1.282a8.752 8.752 0 0 1 7.968-7.968V1A.75.75 0 0 1 11 .25ZM3.75 11a7.25 7.25 0 1 0 14.5 0 7.25 7.25 0 0 0-14.5 0Z'
			fill={props.fill || '#8B93A9'}
		/>
	</svg>
);

export default SvgComponent;
