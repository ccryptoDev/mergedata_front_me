const Headers = () => {
	return (
		<div className='grid grid-cols-[2.5fr,1.5fr,1fr,1fr,1fr,1fr] px-2 py-3 gap-x-1'>
			<p className='text-[#FFFFFF] font-public text-[0.75rem] leading-5 border-r border-neutrals-800'>
				Resource and position
			</p>
			<p className='text-[#FFFFFF] font-public text-[0.75rem] leading-5 border-r border-neutrals-800 text-center'>
				Total points
			</p>
			<p className='text-[#FFFFFF] font-public text-[0.75rem] leading-5 border-r border-neutrals-800 text-center'>
				Level
			</p>
			<p className='text-[#FFFFFF] font-public text-[0.75rem] leading-5 border-r border-neutrals-800 text-center'>
				MTD
			</p>
			<p className='text-[#FFFFFF] font-public text-[0.75rem] leading-5 border-r border-neutrals-800 text-center'>
				Daily
			</p>
			<p className='text-[#FFFFFF] font-public text-[0.75rem] leading-5 text-center'>
				Reward
			</p>
		</div>
	);
};

export default Headers;
