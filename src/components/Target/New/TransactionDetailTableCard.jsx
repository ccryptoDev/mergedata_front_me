
import vector from '@/assets/svg/vector.svg'
import Decision from '@/components/General/Icons/Decision'
import Table4 from '@/components/Target/New/Table4'

export default function TransactionDetailTableCard() {
    return (
        <div className='relative w-[780px] h-[368px] bg-[#202449] rounded-2xl px-5 pt-5 flex flex-col'>
            <div className='w-full h-14 flex flex-row items-center pl-4 pr-4'>
                <div className='w-auto h-12 flex flex-col'>
                    <p className='font-sans font-normal text-sm text-[#FFFFFF]'>43012</p>
                    <p className='font-baloo font-bold text-2xl text-[#FFFFFF]'>Transaction Detail</p>
                </div>
                <div className='w-0 h-10 border-r-2 border-dashed border-neutrals-500 mx-3'></div>
                <div className='w-auto h-12 flex flex-col items-center'>
                    <p className='font-sans font-normal text-base text-[#FFFFFF]'>Amount</p>
                    <p className='font-baloo font-semibold text-base text-[#FFFFFF]'>-$218,094</p>
                </div>
                <div className='w-auto h-12 flex flex-col items-start ml-3'>
                    <p className='font-sans font-normal text-base text-[#FFFFFF]'>Count</p>
                    <p className='font-baloo font-semibold text-base text-[#FFFFFF]'>6</p>
                </div>
                <div className='absolute top-[22px] right-[32px] flex flex-row gap-x-[16px]'>

                    <div className='w-[29px] h-[29px] flex items-center justify-center'>
                        <div className='w-[14px] h-[14px] flex justify-center items-center' >
                            <Decision name='Share' />
                        </div>
                    </div>
                    <div className='w-[29px] h-[29px] flex items-center justify-center'>
                        <div className='w-[14px] h-[14px] flex justify-center items-center' >
                            <Decision name='Expand' />
                        </div>
                    </div>
                    <div className='w-[29px] h-[29px] flex items-center justify-center'>
                        <div className='w-[14px] h-[14px] flex justify-center items-center' >
                            <img src={vector} className='w-[14px] h-[14px]' />
                        </div>
                    </div>

                </div>

            </div>
            <div className='w-full h-auto text-[#FFFFFF]'>
                <Table4 />
            </div>
        </div>
    )
}
