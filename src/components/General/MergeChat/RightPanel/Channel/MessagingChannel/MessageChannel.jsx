import React, { useState } from 'react';
import MessageSalesGpruNavBar from "@/components/General/MergeChat/RightPanel/MessageSalesGpruNavBar";
import MessageBodyChannel from "@/components/General/MergeChat/RightPanel/Channel/MessagingChannel/MessageBodyChannel";
import RecommendationStoryBody from "@/components/General/MergeChat/RightPanel/Channel/RecommendationHistory/RecommendationStoryBody";
import TaskInformationView from '@/components/General/MergeChat/RightPanel/Channel/TaskInformation/TaskInformationView';

// import AttachmentsSent from "@/components/General/MergeChat/RightPanel/Attachment/AttachmentsSent";
// import AttachmentsReceived from "@/components/General/MergeChat/RightPanel/Attachment/AttachmentsReceived";

export default function MessageHomeChat() {

  const [selectedBody, setSelectedBody] = useState('Messaging Channel');

  const onHandleSelectedNavBarButton = (selectedButtonNavBar) => {
    const button = selectedButtonNavBar; 
    setSelectedBody(button);
  }

  return (
    <div className='flex flex-col'>
      <MessageSalesGpruNavBar
        title='#Sales GPRU Task 01 -03022023'
        comment='Salesperson GPRU dropped by more than 20% this week.' 
        selectedButton='Channels'
        onHandleSelectedNavBarButton={onHandleSelectedNavBarButton}
      />
      {selectedBody === 'Messaging Channel' ? <MessageBodyChannel /> : null}
      {selectedBody === 'Recommendation History' ? <RecommendationStoryBody /> : null}
      {selectedBody === 'Task Information' ? <TaskInformationView /> : null}
      {/* {selectedBody === 'Attachments Sent' ? <AttachmentsSent /> : null}
      {selectedBody === 'Attachments Received' ? <AttachmentsReceived /> : null} */}
    </div>
  )
}
