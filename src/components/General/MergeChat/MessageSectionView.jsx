import MessageSalesGpruNavBar from "@/components/General/MergeChat/MessageSalesGpruNavBar";
import MessageBody from "@/components/General/MergeChat/MessageBody";

export default function MessageSectionView() {
  return (
    <div className='flex flex-col'>
        <MessageSalesGpruNavBar />
        <MessageBody />
    </div>
  )
}
