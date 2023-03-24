import Home1 from '@/assets/images/Home1.png';
import Home2 from '@/assets/images/Home2.png';
import Home3 from '@/assets/images/Home3.png';
import Home4 from '@/assets/images/Home4.png';

export default function LoginCarousel({ activeButton }) {
	const slide1 = (
		<div className='h-[80%] ml-[100px]'>
			<div className='h-[70%]'>
				<img src={Home1} alt='first image' className='h-full w-full' />
			</div>
			<div className='mt-[27px] text-neutrals-00'>
				<p className='font-public font-bold text-xs'>MERGE TIPS</p>
				<h2 className='w-[80%] font-baloo text-[48px]'>
					Disparate Data Sources.
				</h2>
				<p className='w-[60%] font-public'>
					Mix & match datasets from your DMS, CRM, and websites to gather
					actionable insights across your entire product ecosystem
				</p>
			</div>
		</div>
		// <div className='ml-[105px] overflow-hidden'>
		// 	<div className='w-[900px] h-[477px] flex items-center border-2 border-red'>
		// 		<img className='h-[270px] w-full object-cover' src={Home1} />
		// 	</div>
		// 	<div className='w-[504px] h-[190px] text-neutrals-00'>
		// 		<p>MERGE TIPS</p>
		// 		<h2>Disparate Data Sources</h2>
		// 		<div className='w-[340px]'>
		// 			<p>
		// 				Mix & match datasets from your DMS, CRM, and websites to gather
		// 				actionable insights across your entire product ecosystem.
		// 			</p>
		// 		</div>
		// 	</div>
		// </div>
	);
	const slide2 = (
		<div className='h-[80%] ml-[100px]'>
			<div className='h-[70%]'>
				<img src={Home2} alt='first image' className='h-full w-full' />
			</div>
			<div className='mt-[27px] text-neutrals-00'>
				<p className='font-public font-bold text-xs'>MERGE TIPS</p>
				<h2 className='w-[80%] font-baloo text-[48px]'>Stay on Target.</h2>
				<p className='w-[60%] font-public'>
					Orient your team to enterprise targets on a single version of the
					truth. Easily create goals and track progress daily. Utlize alerts and
					automated messaging for the bottom performers.
				</p>
			</div>
		</div>
		// <div className='ml-[105px] overflow-hidden'>
		// 	<div className='w-[900px] h-[477px] flex items-start'>
		// 		<img className='h-[463px] w-[800px] rounded-lg' src={Home2} />
		// 	</div>
		// 	<div className='w-[504px] text-neutrals-00'>
		// 		<p>MERGE TIPS</p>
		// 		<h2>STAY on Target</h2>
		// 		<div className='w-[340px]'>
		// 			<p>
		// Orient your team to enterprise targets on a single version of the
		// truth. Easily create goals and track progress daily. Utlize alerts
		// and automated messaging for the bottom performers.
		// 			</p>
		// 		</div>
		// 	</div>
		// </div>
	);
	const slide3 = (
		<div className='h-[80%] ml-[100px]'>
			<div className='h-[70%]'>
				<img src={Home3} alt='first image' className='h-full w-full' />
			</div>
			<div className='mt-[27px] text-neutrals-00'>
				<p className='font-public font-bold text-xs'>MERGE TIPS</p>
				<h2 className='w-[80%] font-baloo text-[48px]'>Predictive AI.</h2>
				<p className='w-[60%] font-public'>
					Predict outcomes vs objectives, using cutting edge AI technology. And
					access prescriptions to remedy re-occurring situation quickly and
					effectively.
				</p>
			</div>
		</div>
		// <div className='ml-[105px] overflow-hidden'>
		// 	<div className='w-[900px] h-[477px] flex items-start'>
		// 		<img className='h-[463px] w-[800px] rounded-lg' src={Home3} />
		// 	</div>
		// 	<div className='w-[504px] text-neutrals-00'>
		// 		<br />
		// 		<p>MERGE TIPS</p>
		// 		<h2>Predictive AI</h2>
		// 		<div className='w-[340px] h-[96px]'>
		// 			<p>
		// 				Predict outcomes vs objectives, using cutting edge AI technology.
		// 				And access prescriptions to remedy re-occurring situation quickly
		// 				and effectively.
		// 			</p>
		// 		</div>
		// 	</div>
		// </div>
	);
	const slide4 = (
		<div className='h-[80%] ml-[100px]'>
			<div className='h-[70%]'>
				<img src={Home4} alt='first image' className='h-full w-full' />
			</div>
			<div className='mt-[27px] text-neutrals-00'>
				<p className='font-public font-bold text-xs'>MERGE TIPS</p>
				<h2 className='font-baloo text-[48px]'>
					Reporting built by the community.
				</h2>
				<p className='w-[60%] font-public'>
					Data alone, lacks the power to drive change, BI tools without
					efficient & validated datasets, are often incorrect and slow. Why not
					have both!.
				</p>
			</div>
		</div>
		// <div className='ml-[105px] overflow-hidden'>
		// 	<div className='w-[900px] h-[477px] flex items-start'>
		// 		<img className='h-[463px] w-[800px] rounded-lg' src={Home4} />
		// 	</div>
		// 	<div className='w-[504px] h-[250px] text-neutrals-00'>
		// 		<p>MERGE TIPS</p>
		// 		<h2>Reporting built by the community.</h2>
		// 		<div className='w-[340px]'>
		// 			<p>
		// 				Data alone, lacks the power to drive change, BI tools without
		// 				efficient & validated datasets, are often incorrect and slow. Why
		// 				not have both!.
		// 			</p>
		// 		</div>
		// 	</div>
		// </div>
	);
	return (
		<>
			{activeButton === 1 && slide1}
			{activeButton === 2 && slide2}
			{activeButton === 3 && slide3}
			{activeButton === 4 && slide4}
		</>
	);
}
