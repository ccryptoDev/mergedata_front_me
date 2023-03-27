
export default function CommentsItem(props) {
    return (
        <div className='w-[255px] bg-[#161A3E] rounded-xl flex flex-col items-start pt-3 px-4 gap-y-2'>
            <div className='w-[223px] h-6 flex flex-row items-center'>
                <div className='mr-[10px]'>
                    <img src={props.avatar} />
                </div>
                <div className='w-[100px] h-6 mr-6 flex items-center'>
                    <p className='text-xs text-neutrals-200 '>{props.name}</p>
                </div>
                <div className='w-[100px] h-6 text-xs flex items-center justify-end'>
                    <p className='text-neutrals-600 justify-self-end'>{props.date}</p>
                </div>
            </div>

            <div className='w-[223px] h-[1px] border-b-[1px] border-dashed border-neutrals-600'>

            </div>

            <div className='w-[223px] h-full pb-3'>
                <p className='text-neutrals-00 text-[14px]'>{props.message}</p>
            </div>
        </div>
    )
}
