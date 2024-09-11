import BookMark from '@/assets/svg/BookmarkSm.svg'

export default function ChannelButton() {
    return (
        <div className="w-[77px] h-[28px] py-[4px] px-[8px] rounded-[4px] bg-[#4832A6] flex flex-row items-center gap-x-[7px]">
            <p className='text-[#FFFFFF] text-[12px]'>ADVJJ3</p>
            <img src={BookMark} alt="" />
        </div>
    )
}
