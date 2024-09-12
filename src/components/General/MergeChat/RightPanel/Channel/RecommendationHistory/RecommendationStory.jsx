import MessageSalesGpruNavBar from "@/components/General/MergeChat/RightPanel/MessageSalesGpruNavBar";
import RecommendationStoryBody from "@/components/General/MergeChat/RightPanel/Channel/RecommendationHistory/RecommendationStoryBody";


export default function RecommendationStory() {
  return (
    <div className='flex flex-col'>
      <MessageSalesGpruNavBar
        title='#Sales GPRU Task 01 -03022023'
        comment='Salesperson GPRU dropped by more than 20% this week.' 
        selectedButton='Channels'
        />
      <RecommendationStoryBody />
    </div>
  )
}
