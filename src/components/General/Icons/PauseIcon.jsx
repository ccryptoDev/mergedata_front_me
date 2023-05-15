
export default function PauseIcon(
    fill = 'border-neutrals-00',
) {
    return (
        <div className='flex flex-row gap-x-[1.56px] items-center justify-center'>
            <div className={`w-[6.22px] h-[14px] border ${fill} bg-[#FFFFFF] rounded-[3px]`}>
            </div>
            <div className='w-[6.22px] h-[14px] border rounded-[3px]'>
            </div>
        </div>
    )
}
