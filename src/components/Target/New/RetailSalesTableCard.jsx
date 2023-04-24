import vector from '@/assets/svg/vector.svg'
import Table3 from '@/components/Target/New/Table3'

export default function RetailSalesTableCard() {
    return (
        <div className='relative w-[780px] h-[664px] bg-[#212A43] rounded-2xl px-5 pt-5 flex flex-col'>
            <div className='w-full h-14 flex flex-row items-center pl-4 pr-4'>
                <div className='w-auto h-12 flex flex-col'>
                    <p className='font-sans font-normal text-sm text-[#FFFFFF]'>GL Detail</p>
                    <p className='font-baloo font-bold text-2xl text-[#FFFFFF]'>Retail Sales</p>
                </div>
                <div className='w-0 h-10 border-r-2 border-dashed border-neutrals-500 mx-3'></div>
                <div className='w-auto h-12 flex flex-col items-center'>
                    <p className='font-sans font-normal text-base text-[#FFFFFF]'>Amount</p>
                    <p className='font-baloo font-semibold text-base text-[#FFFFFF]'>-$3,153</p>
                </div>
                <div className='w-auto h-12 flex flex-col items-start ml-3'>
                    <p className='font-sans font-normal text-base text-[#FFFFFF]'>Count</p>
                    <p className='font-baloo font-semibold text-base text-[#FFFFFF]'>68</p>
                </div>
                <div className='absolute right-[34px] top-[20px] w-[29px] h-[29px] flex items-center justify-center'>
                    <div className='w-[14px] h-[14px] flex justify-center items-center' >
                        <img src={vector} className='w-[14px] h-[14px]' />
                    </div>
                </div>
            </div>
            <div className='w-full h-fit text-[#FFFFFF]'>
                <Table3/>
            </div>
        </div>
    )
}
