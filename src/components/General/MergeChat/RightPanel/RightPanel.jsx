

import MessageChannel from '@/components/General/MergeChat/RightPanel/Channel/MessagingChannel/MessageChannel';
import AttachmentsView from '@/components/General/MergeChat/RightPanel/Attachment/AttachmentsView';
import MessagingChannelBestSeller from '@/components/General/MergeChat/RightPanel/Contest/BestSeller/MessagingChannelBestSeller';

export default function RightPanel({ selectedButton }) {
  const renderContent = () => {
    if (selectedButton === 'Channels') {
      return <MessageChannel selectedButton='Channels' />;
    }
    if (selectedButton === 'Attachments') {
      return <AttachmentsView selectedButton='Attachments' />;
    }
    if (selectedButton === 'Best Seller') {
      return <MessagingChannelBestSeller selectedButton='Best Seller' />;
    }
    return null;
  };

  return (
    <div className='flex flex-col justify-start items-center w-[68.9375em] h-[49.125em] bg-[#202449] pt-[1.5em] rounded-t-[1.4em] '>
      {renderContent()}
    </div>
  );
}
