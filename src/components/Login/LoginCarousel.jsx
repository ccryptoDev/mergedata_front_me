import bgSlideTarget from '@/assets/svg/slidelogin-2-bg.svg';
import targetImage from '@/assets/images/slidelogin-target@2x.png';
import bgSlideData from '@/assets/svg/slidelogin-1-bg.svg';
import dataImage from '@/assets/images/slidelogin-data@2x.png';
import bgSlideAI from '@/assets/svg/slidelogin-3-bg.svg';
import aiImage from '@/assets/images/login-ai-kai500.gif';
import bgSlideCommunity from '@/assets/svg/slidelogin-4-bg.svg';
import communityImage from '@/assets/images/slidelogin-community@2x.png';

export default function LoginCarousel({ activeButton }) {

	const slide1 = (
		<div className={`w-full h-full flex flex-col`}>
			<div className='grow h-full flex align-center justify-center bg-cover' style={{ backgroundImage: `url(${bgSlideTarget})` }}>
				<div className='flex grow w-full h-full align-center justify-center'>
					<img src={dataImage} className='w-[354px] h-[354px] m-auto' />
				</div>

			</div>
			<div className='mt-[0.75em] text-neutrals-00 p-10'>
				<div className="w-[551px] text-white text-xs font-semibold font-['Public Sans'] uppercase leading-[18px] tracking-[4px] opacity-70">Merge tips</div>
				<h2 className='font-baloo text-[2em]'>
					Disparate Data Sources.
				</h2>
				<p className='max-w-[600px] font-public text-white text-base font-light tracking-[0.5px] opacity-70'>
					Mix & match datasets from your DMS, CRM, and websites to gather
					actionable insights across your entire product ecosystem
				</p>
			</div>
		</div>
	);
	const slide2 = (
		<div className={`w-full h-full flex flex-col`}>
			<div className='grow h-full flex align-center justify-center bg-cover' style={{ backgroundImage: `url(${bgSlideData})` }}>
				<img src={targetImage} className='w-[354px] h-[354px] m-auto' />
			</div>
			<div className='mt-[0.75em] text-neutrals-00 p-10'>
				<div className="w-[551px] text-white text-xs font-semibold font-['Public Sans'] uppercase leading-[18px] tracking-[4px] opacity-70">Merge tips</div>
				<h2 className='font-baloo text-[2em]'>Stay on Target.</h2>
				<p className='max-w-[600px] font-public text-white text-base font-light tracking-[0.5px] opacity-70'>
					Orient your team to enterprise targets on a single version of the
					truth. Easily create goals and track progress daily. Utlize alerts and
					automated messaging for the bottom performers.
				</p>
			</div>
		</div>
	);
	const slide3 = (
		<div className={`w-full h-full flex flex-col`}>
			<div className='grow h-full flex align-center justify-center bg-cover' style={{ backgroundImage: `url(${bgSlideAI})` }}>
				<img src={aiImage} className='w-[354px] h-[354px] m-auto' />
			</div>
			<div className='mt-[0.75em] text-neutrals-00 p-10'>
				<div className="w-[551px] text-white text-xs font-semibold font-['Public Sans'] uppercase leading-[18px] tracking-[4px] opacity-70">Merge tips</div>
				<h2 className='font-baloo text-[2em]'>Predictive AI.</h2>
				<p className='max-w-[600px] font-public text-white text-base font-light tracking-[0.5px] opacity-70'>
					Predict outcomes vs objectives, using cutting edge AI technology. And
					access prescriptions to remedy re-occurring situation quickly and
					effectively.
				</p>
			</div>
		</div>
	);
	const slide4 = (
		<div className={`w-full h-full flex flex-col`}>
			<div className='grow h-full flex align-center justify-center bg-cover' style={{ backgroundImage: `url(${bgSlideCommunity})` }}>
				<img src={communityImage} className='w-[354px] h-[354px] m-auto' />
			</div>
			<div className='mt-[0.75em] text-neutrals-00 p-10'>
				<div className="w-[551px] text-white text-xs font-semibold font-['Public Sans'] uppercase leading-[18px] tracking-[4px] opacity-70">Merge tips</div>
				<h2 className='font-baloo text-[2em]'>
					Reporting built by the community.
				</h2>
				<p className='max-w-[600px] font-public text-white text-base font-light tracking-[0.5px] opacity-70'>
					Data alone, lacks the power to drive change, BI tools without efficient & validated datasets, are often incorrect and slow. Why not have both!.
				</p>
			</div>
		</div>
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
