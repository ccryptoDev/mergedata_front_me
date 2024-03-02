import IconSelected from '@/components/General/Icons/Decision';

const TextIconButton = ({
	iconLeft = 'Check',
	text = 'All Department',
	iconRight = '',
	background = 'bg-purple-800',
	width = 'w-[190px]',
	height = 'h-[50px]',
	backgroundHover = '',
	textSize = 'text-lg ',
	textColor = 'text-white',
	textColorHover = '',
	borderColor = 'border border-transparent',
	borderHover = 'hover:border-[#4832A6]',
	gapX = 'gap-x-2',
	rounded = 'rounded-[4px]',
}) => {
	return (
		<div
			className={`${background} ${width} ${height} ${borderColor} ${borderHover} flex flex-row items-center ${rounded} justify-center ${gapX} shadow-[0_13px_25px_-13px_rgba(0,0,0,0.48)] ${backgroundHover} hover:delay-150 transition duration-250`}>
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
		</div>
	);
};

export default TextIconButton;