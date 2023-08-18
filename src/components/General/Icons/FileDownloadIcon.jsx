const FileDownloadIcon = props => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={props.width || 12}
		height={props.height || 14}
		fill='none'
		{...props}
	>
		<path
			fill={props.fill || '#fff'}
			d='M7.354 7.776a.5.5 0 0 1 .625.781l-1.663 1.33a.498.498 0 0 1-.315.113h-.006a.498.498 0 0 1-.31-.111L4.022 8.557a.5.5 0 0 1 .624-.78l.855.683V6.167a.5.5 0 1 1 1 0V8.46l.854-.684Z'
		/>
		<path
			fill={props.fill || '#fff'}
			fillRule='evenodd'
			d='M2.666.5C1.654.5.833 1.32.833 2.333v9.334c0 1.012.82 1.833 1.833 1.833h6.667c1.012 0 1.833-.82 1.833-1.833V4.465c0-.244-.076-.482-.219-.68L8.94.986A1.167 1.167 0 0 0 7.99.5H2.666Zm-.833 1.833c0-.46.373-.833.833-.833H7.5v2.931a.5.5 0 0 0 .5.5h2.166v6.736c0 .46-.373.833-.833.833H2.666a.833.833 0 0 1-.833-.833V2.333Z'
			clipRule='evenodd'
		/>
	</svg>
);
export default FileDownloadIcon;
