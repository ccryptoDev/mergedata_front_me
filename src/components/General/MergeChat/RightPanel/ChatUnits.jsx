import AttachmentSelector from "@/components/General/MergeChat/RightPanel/ChatFileAttachments/AttachmentSelector";


export default function ChatUnits({ chatData }) {

    return (

        <div className='w-[1055px] h-[520px] bg-[#0D102C] flex flex-col items-start justify-start py-[8px] pl-[14px] px-[18px] gap-y-[10px] overflow-hidden'>
            {chatData.map((item) => (
                <div key={item.id} className='flex flex-row w-[1019px] h-auto'>
                    <div className='w-8 h-full'>
                        <img src={item.avatar} alt='' className='w-8 h-8 object-cover rounded' />
                    </div>
                    <div className='w-full h-full flex flex-col'>
                        <div className='w-full h-4 flex flex-row items-center justify-start leading-[12px] mb-[3px]'>
                            <p className='text-[#FFFFFF] text-[13px] font-extrabold font-baloo leading-[22px] pl-2'>{item.name}</p>
                            <p className='text-[#EFECFC] text-[11px] font-medium font-baloo leading-[22px] pl-2'>12:45</p>
                        </div>
                        <div className='w-full'>
                            <p className='text-[#EFECFC] text-[14px] leading-[22px] pl-2 opacity-70'>
                                {item.message}
                            </p>
                        </div>
                        <div className="">
                            <AttachmentSelector name={item.attachment} />
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )
}