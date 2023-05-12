import lg_avatar from '@/assets/svg/lg_avatar.svg'
import m_email from '@/assets/svg/m_email.svg'
import phone from '@/assets/svg/phone.svg'

export default function UserInfoResume() {
    return (
        <div className='w-[293px] h-[100px] bg-[#161A3E] flex flex-col justify-end mb-[10px]'>
            <div className='w-[293px] h-[86px] flex flex-row gap-x-3'>
                <div className='w-[84px] h-[84px]'>
                    <img src={lg_avatar} />
                </div>
                <div className='w-[192px] h-[84px] flex flex-col'>
                    <div className='w-auto h-[28px] flex items-center'>
                        <p className='text-lg font-bold font-baloo text-[#FFFFFF]'>Vicent Morris</p>
                    </div>
                    <div className='w-auto h-[18px] flex items-center'>
                        <p className='text-sm font-normal text-[#FFFFFF]'>Corporate Manager</p>
                    </div>
                    <div className='w-[190px] h-[18px] flex flex-row items-center gap-x-[6px]'>
                        <img src={m_email} />
                        <p className='text-sm font-normal text-[#FFFFFF]'>morris72@example.com</p>
                    </div>
                    <div className='w-[148px] h-[18px] flex flex-row items-center gap-x-[6px]'>
                        <img src={phone} />
                        <p className='text-sm font-normal text-[#FFFFFF]'>+38 (123) 46 78 90</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
