import photo_1 from '@/assets/svg/photo_1.svg'
import photo_2 from '@/assets/svg/photo_2.svg'
import photo_8 from '@/assets/svg/photo_8.svg'
import excelAttachment from '@/assets/svg/excelAttachment.svg';
import threeBullets from '@/assets/svg/threeBullets.svg'
import threeIcons from '@/assets/svg/threeIcons.svg'
import squaredBot from '@/assets/svg/squaredBot.svg'
import TaskStatus from '@/components/General/MergeChat/TaskStatus'

export default function MessageBody() {

    const chat = [
        { id: 1, avatar: photo_8, name: 'Jay Garcia', time: '12:45', message: 'Really need to give some kudos to @KAI for helping out with the Recommendation, it’s been really interesting to get to know and nurture this impressive AI', attachment: '' },
        { id: 2, avatar: squaredBot, name: 'KAI Virtual Assistant', time: '11:56', message: 'Thank you for your kind words! Im glad to hear that my recommendations have been helpful. Although there are still tasks left to complete, I trust that you and your team are working diligently to finish them efficiently. Your support means a lot to me, and Im excited to continue working with you.', attachment: <TaskStatus /> },
        { id: 3, avatar: photo_1, name: 'Koray Okumus', time: '11:56', message: 'Yes sir, I Just assigned Kate Morrison to Supervise @Eduard_Monte & @Wendy_Smith, I’m trying to communicate with miss @April_Graner in order to assign her her previous supervisor when she first entered the group since it hasn\'t been too long since she was incorporated', attachment: '' },
        { id: 4, avatar: photo_2, name: 'April Graner', time: '12:58', message: 'Hi @Koray_Okumus, I think the person you are referring to is no longer working at this store, he was placed on HQ, here are some notes he left before he was moved to the other location', attachment: '' },
    ]

    return (
        <div className=''>
            <div className='w-[1055px] h-[520px] bg-[#0D102C] flex flex-col items-start justify-start pl-[14px] px-[18px] gap-y-[3px]'>
                {chat.map((item) => (
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
                            {item.attachment}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-[#0D102C] pl-16 flex flex-row h-[36px]">
                <img src={excelAttachment} alt="excel-attachment" />
                <div className="flex flex-col">
                    <p className="text-[#EFECFC] text-[13px] font-medium font-baloo leading-[22px] pl-2">Patrick_Starr_notes_on_new_salespersons.xlsx</p>
                    <p className="text-[#EFECFC] opacity-70 text-[11px] font-medium font-baloo leading-[22px] pl-2">Last edited just 11/24/2022</p>
                </div>
            </div>
            <div className='w-[1055px] h-[90px] bg-[#0D102C] rounded-b-2xl flex items-center justify-center'>
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
        </div>
    )
}
