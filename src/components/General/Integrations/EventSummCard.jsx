import Decision from '@/components/General/Icons/Decision'
import VinSolutions from '@/assets/svg/VinSolutionsLogo.svg'
import Reynolds from '@/assets/svg/ReynoldsLogo.svg'
import AutoSoft from '@/assets/svg/AutoSoftLogo.svg'
import CDKGlobal from '@/assets/svg/CDKGlobalLogo.svg'

export default function () {

    const data = [
        { id: 1, companyLogo: Reynolds, companyName: 'Reynolds & Reynolds', Events: 5, Companies: 3, Issues: 0 },
        { id: 2, companyLogo: VinSolutions, companyName: 'Vin Solutions', Events: 5, Companies: 3, Issues: 0 },
        { id: 3, companyLogo: AutoSoft, companyName: 'Auto Soft', Events: 5, Companies: 3, Issues: 0 },
        { id: 4, companyLogo: CDKGlobal, companyName: 'CDK Global', Events: 5, Companies: 3, Issues: 0 },
    ]

    return (
        <div className='w-[1330px] h-[186px] gap-x-5 flex flex-row items-center justify-between' >
            {data.map((item) => (
                <div key={item.id} className='relative w-[317px] h-[184px] bg-[#161A3E] rounded-xl flex flex-col items-center justify-center gap-y-2'>
                    <div className='absolute right-4 top-5'>
                        <Decision name='ThreeDotsHor' />
                    </div>
                    <div className='w-[160px] h-[25px] text-[#9eaec7] text-xs flex items-center gap-x-2'>
                        <img src={item.companyLogo} alt='companyLogo' />
                    </div>
                    <div className='w-[200px] h-[26px] flex items-center justify-center gap-x-2'>
                        <span className='text-[#F0F2F5] text-base'>{item.companyName}</span>
                    </div>
                    <div className='w-[269px] h-[56px] flex items-center justify-around gap-x-2'>
                        <div className='w-auto h-[56px] flex flex-col items-center justify-between'>
                            <span className='text-[#fff] font-baloo text-[14px]'>{item.Events}</span>
                            <span className='text-[#fff] font-baloo text-[14px]'>Events</span>
                        </div>
                        <div className='w-auto h-[56px] flex flex-col items-center justify-between'>
                            <span className='text-[#fff] font-baloo text-[14px]'>{item.Companies}</span>
                            <span className='text-[#fff] font-baloo text-[14px]'>Companies</span>
                        </div>
                        <div className='w-auto h-[56px] flex flex-col items-center justify-between'>
                            <span className='text-[#fff] font-baloo text-[14px]'>{item.Issues}</span>
                            <span className='text-[#fff] font-baloo text-[14px]'>Issues</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
