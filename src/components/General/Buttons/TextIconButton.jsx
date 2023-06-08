import IconSelected from '@/components/General/Icons/Decision';

const TextIconButton = ({
	iconLeft = 'Check',
	text = 'All Department',
	iconRight = '',
	background = 'bg-purple-800',
	width = 'w-[190px]',
	height = 'h-[50px]',
	backgroundHover = '',
	textSize = 'text-lg',
	textColor = 'text-white',
	textColorHover = '',
	borderColor = 'border border-transparent',
}) => {
	return (
		<button className={`${background} ${width} ${height} ${borderColor} flex flex-row items-center rounded-md justify-center gap-x-3 shadow-[0_13px_25px_-13px_rgba(0,0,0,0.48)] ${backgroundHover} hover:delay-250 transition duration-500`}>
			{iconLeft && (
				<span className='w-6 h-6 flex justify-center items-center'>
					<IconSelected name={iconLeft} />
				</span>
			)}
			<span className={`${textSize} ${textColor} font-baloo flex items-center justify-center ${textColorHover}`}>
				{text}
			</span>
			{iconRight && (
				<span className=''>
					<IconSelected name={iconRight} />
				</span>
			)}
		</button>
	);
};

export default TextIconButton;