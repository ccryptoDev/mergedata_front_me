
import threeBullets from '@/assets/svg/threeBullets.svg'
import threeIcons from '@/assets/svg/threeIcons.svg'

export default function ChatBodyFooter() {
    return (
        <div className='w-[1055px] h-[90px] bg-[#0D102C] rounded-b-2xl flex items-center justify-center '>
            <div className='w-[1019px] h-[64px]'>
                <div className='h-[38px]  bg-[#05081E] flex items-center justify-start'>
                    <p className='text-[#EFECFC] font-[500px] text-[13px] opacity-70'>Message #GRPU-Task-03022023</p>
                </div>
                <div className='h-[26px] flex items-center justify-between px-2 '>
                    <div className='w-[70px] h-[14px] '>
                        <img src={threeBullets} />
                    </div>
                    <div className='w-[70px] h-[14px] '>
                        <img src={threeIcons} />
                    </div>
                </div>
            </div>
        </div>
    )
}



