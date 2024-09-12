import photo_1 from '@/assets/svg/photo_1.svg'
import photo_2 from '@/assets/svg/photo_2.svg'
import photo_8 from '@/assets/svg/photo_8.svg'

import squaredBot from '@/assets/svg/squaredBot.svg'
import ChatUnits from '@/components/General/MergeChat/RightPanel/ChatUnits'
import ChatBodyFooter from '@/components/General/MergeChat/RightPanel/ChatBodyFooter'

export default function MessageBody() {

    const chatData = [
        { id: 1, avatar: photo_8, name: 'Jay Garcia', time: '12:45', message: 'Really need to give some kudos to @KAI for helping out with the Recommendation, it’s been really interesting to get to know and nurture this impressive AI', attachment: '' },
        { id: 2, avatar: squaredBot, name: 'KAI Virtual Assistant', time: '11:56', message: 'Thank you for your kind words! Im glad to hear that my recommendations have been helpful. Although there are still tasks left to complete, I trust that you and your team are working diligently to finish them efficiently. Your support means a lot to me, and Im excited to continue working with you.', attachment: 'TaskStatus' },
        { id: 3, avatar: photo_1, name: 'Koray Okumus', time: '11:56', message: 'Yes sir, I Just assigned Kate Morrison to Supervise @Eduard_Monte & @Wendy_Smith, I’m trying to communicate with miss @April_Graner in order to assign her her previous supervisor when she first entered the group since it hasn\'t been too long since she was incorporated', attachment: '' },
        { id: 4, avatar: photo_2, name: 'April Graner', time: '12:58', message: 'Hi @Koray_Okumus, I think the person you are referring to is no longer working at this store, he was placed on HQ, here are some notes he left before he was moved to the other location', attachment: 'ExcelAttachment' },
    ]

    return (
        <div className='flex flex-col justify-between'>
            <ChatUnits chatData={chatData}/>
            <ChatBodyFooter />
        </div>
    )
}
