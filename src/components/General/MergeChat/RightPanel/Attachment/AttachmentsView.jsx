import { useState } from "react";
import AttachmentsSent from "@/components/General/MergeChat/RightPanel/Attachment/AttachmentsSent";
import AttachmentsReceived from "@/components/General/MergeChat/RightPanel/Attachment/AttachmentsReceived";
import MessageSalesGpruNavBar from "@/components/General/MergeChat/RightPanel/MessageSalesGpruNavBar";

export default function AttachmentsView() {
  const [selectedBody, setSelectedBody] = useState('Attachments Sent');

  // Usa una función para actualizar el estado inmediatamente
  const onHandleSelectedNavBarButton = (selectedButtonNavBar) => {
    setSelectedBody(selectedButtonNavBar);
  };

  return (
    <div className='flex flex-col'>
      <MessageSalesGpruNavBar
        title='#Sales GPRU Task 01 -03022023'
        comment='Salesperson GPRU dropped by more than 20% this week.' 
        selectedButton='Attachments'
        onHandleSelectedNavBarButton={onHandleSelectedNavBarButton}
      />
      {selectedBody === 'Attachments Sent' ? <AttachmentsSent /> : null}
      {selectedBody === 'Attachments Received' ? <AttachmentsReceived /> : null}
    </div>
  );
}
