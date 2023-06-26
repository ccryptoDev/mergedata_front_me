const InfoIcon = props => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
		fill='none'
		{...props}
	>
		<path
			fill='#E5E8EF'
			d='M8.793 7.597a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM8.793 5.847a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
		/>
		<path
			fill='#E5E8EF'
			fillRule='evenodd'
			d='M.043 8.847a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Zm8.75-7.25a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5Z'
			clipRule='evenodd'
		/>
	</svg>
);
export default InfoIcon;
