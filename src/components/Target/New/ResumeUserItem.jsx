import Decision from "@/components/General/Icons/Decision"
import Adam_Smith from '@/assets/svg/Adam_Smith.svg'

function ResumeUserItem() {
    return (
        <div className='w-[491px] h-[110px] pt-3 px-4 bg-neutrals-800 rounded-xl'>
            <div className='w-[459px] h-[46px] flex flex-row justify-between'>
                <div className='w-6 h-6 flex items-center justify-center'>
                    <Decision name='DoubleArrow' />
                </div>
                <div className='w-[100px] h-9'>
                    <div className='w-full h-[18px] text-neutrals-400 text-xs flex items-center'>GL Date</div>
                    <div className='w-full h-[18px]  text-neutrals-00 text-xs flex items-center'>12/08/2022</div>

                </div>
                <div className='w-[100px] h-9'>
                    <div className='w-full h-[18px] text-neutrals-400 text-xs flex items-center'>Journal ID</div>
                    <div className='w-full h-[18px]  text-neutrals-00 text-xs flex items-center'>1</div>

                </div>
                <div className='w-[100px] h-full'>
                    <div className='w-full h-[18px] text-neutrals-400 text-xs flex items-center'>Reference ID</div>
                    <div className='w-full h-[18px]  text-neutrals-00 text-xs flex items-center'>60424</div>

                </div>
                <div className='w-[100px] h-full'>
                    <div className='w-full h-[18px] text-neutrals-400 text-xs flex items-center justify-end'>Post Amount</div>
                    <div className='w-full h-[26px]  text-neutrals-00 text-lg font-bold font-baloo flex items-center justify-end'>$17,024</div>

                </div>
            </div>
            <div className='my-2 w-full h-0 border-t-2 border-dotted border-neutrals-600'>

            </div>
            <div className='w-[full] h-6 flex flex-row justify-between'>
                <div className='flex flex-row items-center'>
                    <div className='w-6 h-6 rounded-full'>
                        <img src={Adam_Smith} />
                    </div>
                    <div className='ml-[10px] w-40 h-6 text-xs text-neutrals-200 flex items-center'>Adam Smith</div>
                </div>
                <div className='w-40 h-6 text-xs text-neutrals-200 flex items-center justify-end'>Comment Here.</div>
            </div>
        </div>
    )
}

export default ResumeUserItem