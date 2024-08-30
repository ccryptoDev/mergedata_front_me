import TopMenu from "@/components/General/MergeChat/LeftPanel/TopMenu";
import SearchBox from "@/components/General/MergeChat/LeftPanel/SearchBox";
import useChatData from "@/components/General/MergeChat/LeftPanel/useChatData"
import PlusButton from '@/assets/svg/PlusButton.svg';
import CarouselSlider from '@/components/General/MergeChat/LeftPanel/CarouselSlider';
import PredictiveAITask from "@components/General/MergeChat/LeftPanel/PredictiveAITask";
import Contest from "@components/General/MergeChat/LeftPanel/Contest";
import DirectMessage from "@components/General/MergeChat/LeftPanel/DirectMessage";

export default function LeftPanel( { onHandleActiveButton, onHandleSelectedItemFromList} ) {

  const { predictiveAITaskData, contestData, directMessagesData } = useChatData();

  // console.log('selectedItemFromList', onHandleSelectedItemFromList)
  
  return (
    <div className='w-[320px] h-[49em] flex justify-center'>
      <div className='w-[17em] h-[49.125em] bg-[#202449] flex flex-col justify-start items-center rounded-t-2xl pt-[1.5em] gap-[0.6em] shadow-lg'>
        <SearchBox />
        <TopMenu
          onHandleActiveButton={onHandleActiveButton}
        />
        <div className='w-full h-[28.9375em] flex flex-col justify-start items-start overflow-hidden'>
          <PredictiveAITask
            data={predictiveAITaskData}
          />
          <Contest
            data={contestData}
            onHandleSelectedItemFromList={onHandleSelectedItemFromList}
          />
          <DirectMessage
            data={directMessagesData}
          />
        </div>
        <div className='w-full h-[1.75em] flex flex-row justify-start items-center pl-[1.3em] py-[0.5em] '>
          <img src={PlusButton} />
        </div>
        <div className='w-full h-[6.25em] flex flex-row justify-center items-start '>
          <CarouselSlider
          // swiperPosition={swiperPosition} 
          />
        </div>
      </div>
    </div>
  )
}
