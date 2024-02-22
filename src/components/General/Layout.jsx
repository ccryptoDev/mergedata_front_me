export default function Layout({ children, bgColor = 'bg-dark-popup-00' }) {
	return (
		<div
			className={`w-screen h-screen flex flex-col relative ${bgColor} justify-between overflow-hidden`}
		>
			<div className='max-w-[1440px] h-full mx-auto pb-8 w-full'>
				<div className='h-full flex justify-between flex-col gap-5'>
					{children}
				</div>
			</div>
		</div>
	);
}
