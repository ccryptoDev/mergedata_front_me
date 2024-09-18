
import TextInputChat from '@/components/General/PredictiveAI/TextInputChat';
import NavBarAI from '@/components/General/PredictiveAI/NavBarAI';
import CardSlider from '@/components/General/PredictiveAI/CardSlider';

export default function ChatScreen() {
  return (
    <div className='w-[66.875em] h-[49.125em] bg-[#0D102C] p-[1,5em] flex flex-col justify-between items-center' >
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

