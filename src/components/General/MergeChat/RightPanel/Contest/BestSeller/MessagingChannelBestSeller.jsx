
import React, { useState } from 'react';

import MessageSalesGpruNavBar from "@/components/General/MergeChat/RightPanel/MessageSalesGpruNavBar";
import MessageBodyBestSeller from "@/components/General/MergeChat/RightPanel/Contest/BestSeller/MessageBodyBestSeller";
import ContestInformationView from "@/components/General/MergeChat/RightPanel/Contest/BestSeller/ContestInformation/ContestInformationView";


export default function MessagingChannelBestSeller() {

  const [activeButton, setActiveButton] = useState('Messaging Channel');

  const onHandleSelectedNavBarButton = (button) => {
    const tempButton = button;
    setActiveButton(tempButton);
  }

  return (
    <div className='flex flex-col'>
      <MessageSalesGpruNavBar
        title='#Best Seller Contest 01 -03022023'
        comment='Annual Contest on the best Seller! ' 
        selectedButton='Best Seller'
        onHandleSelectedNavBarButton={onHandleSelectedNavBarButton}
        />
        {
          activeButton === 'Messaging Channel' && <MessageBodyBestSeller />
        }
        {
          activeButton === 'Contest Information' && <ContestInformationView />
        }
      
    </div>
  )
}

