import photo_3 from '@/assets/svg/photo_1.svg'
import photo_4 from '@/assets/svg/photo_2.svg'
import photo_7 from '@/assets/svg/photo_8.svg'

import squaredBot from '@/assets/svg/squaredBot.svg'
import TaskStatus from '@/components/General/MergeChat/RightPanel/ChatFileAttachments/TaskStatus'
import ChatUnits from '@/components/General/MergeChat/RightPanel/ChatUnits'
import ChatBodyFooter from '@/components/General/MergeChat/RightPanel/ChatBodyFooter'

export default function MessageBody() {

    const chatData = [
        { id: 1, avatar: photo_3, name: 'Candice Wu', time: '12:45', message: 'Hey @Andi_Lane! just passed you on the leaderboard!', attachment: '' },
        { id: 2, avatar: photo_4 , name: 'Andi Lane', time: '11:56', message: 'Just wait until I get my points approved!! ', attachment: <TaskStatus /> },
        { id: 3, avatar: photo_7, name: 'Vicent Morris', time: '11:56', message: 'Do not forget about me!', attachment: '' },
        { id: 4, avatar: squaredBot, name: 'KAI Virtual Assistant', time: '12:58', message: 'Hey Guys, KAI Here, just wanted to let everyone know the current ranking! keep it up! ', attachment: 'ScoreBoardBestSeller' },
    ]

    return (
        <div className=''>
            <ChatUnits chatData={chatData} />            
            <ChatBodyFooter />
        </div>
    )
}
