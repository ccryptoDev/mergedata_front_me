
import TextInputChat from '@/components/General/PredictiveAI/TextInputChat';
import NavBarAI from '@/components/General/PredictiveAI/NavBarAI';
import CardSlider from '@/components/General/PredictiveAI/CardSlider';

export default function ChatScreen() {
  return (
    <div className='w-[1070px] h-[786px] bg-[#0D102C] p-6 flex flex-col justify-between items-center' >
      <NavBarAI />
      <body className='z-10'>
        <CardSlider />
      </body>
      <footer className='z-20'>
        <TextInputChat />
      </footer>
    </div>
  )
}

