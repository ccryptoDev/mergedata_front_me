export default function Layout({ children, bgColor = 'bg-dark-popup-00' }) {
	return (
		<div
			className={`w-screen h-screen flex flex-col overflow-hidden relative ${bgColor} justify-between`}
		>
			<div className='max-w-[1440px] h-full mx-auto pb-5'>
				<div className='h-full flex justify-between flex-col'>{children}</div>
			</div>
		</div>
	);
}
