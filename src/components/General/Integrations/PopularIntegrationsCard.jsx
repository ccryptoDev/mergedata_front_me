import React from 'react';
import Decision from '@/components/General/Icons/Decision';
import cdkGlobal from '@/assets/svg/cdkGlobal.svg';
import cdkGlobal2 from '@/assets/svg/cdkGlobal2.svg';
import dealersOn from '@/assets/svg/dealersOn.svg';
import dealersOn2 from '@/assets/svg/dealersOn2.svg';
import eleadone from '@/assets/svg/eleadone.svg';
import eleadone2 from '@/assets/svg/eleadone2.svg';
import reynolds from '@/assets/svg/reynolds.svg';
import reynolds2 from '@/assets/svg/reynolds2.svg';
import automate from '@/assets/svg/automate.svg';
import automate2 from '@/assets/svg/automate2.svg';
import autosoft from '@/assets/svg/autosoft.svg';
import autosoft2 from '@/assets/svg/autosoft2.svg';
import dealerTrack from '@/assets/svg/dealerTrack.svg';
import dealerTrack2 from '@/assets/svg/dealerTrack2.svg';
import adamSystem from '@/assets/svg/adamSystem.svg';
import adamSystem2 from '@/assets/svg/adamSystem2.svg';
import dealerSocket from '@/assets/svg/dealerSocket.svg';
import dealerSocket2 from '@/assets/svg/dealerSocket2.svg';
import dealerMine from '@/assets/svg/dealerMine.svg';
import dealerMine2 from '@/assets/svg/dealerMine2.svg';


const data = [
  { id: 1, message: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', description: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: reynolds, img2: reynolds2 },
  { id: 2, message: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', description: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: automate, img2: automate2 },
  { id: 3, message: 'Do you need a simple easy way to help you sell more carsA profitable dealership is only possible when you create, manage and nurture good relationships with your customers description Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: autosoft, img2: autosoft2 },
  { id: 4, message: 'Do you need a simple easy way to help you sell more carsA profitable dealership is only possible when you create, manage and nurture good relationships with your customers description Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: dealerTrack, img2: dealerTrack2 },
  { id: 5, message: 'Do you need a simple easy way to help you sell more carsA profitable dealership is only possible when you create, manage and nurture good relationships with your customers description Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: adamSystem, img2: adamSystem2 },
  { id: 6, message: 'Do you need a simple easy way to help you sell more carsA profitable dealership is only possible when you create, manage and nurture good relationships with your customers description Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: dealerSocket, img2: dealerSocket2 },
  { id: 7, message: 'Do you need a simple easy way to help you sell more carsA profitable dealership is only possible when you create, manage and nurture good relationships with your customers description Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: dealerMine, img2: dealerMine2 },
  { id: 2, message: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', description: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: adamSystem, img2: adamSystem2 },
];

export default function PopularIntegrationCard() {
  return (
    <div className='flex flex-row items-center-justify-between w-[1343px] h-[458px] gap-x-6 gap-y-4 flex-wrap'>
      {data.map((item) => (
        <div className='relative bg-[#161A3E] w-[317px] h-[221px] rounded-xl flex flex-col items-center justify-center gap-y-2 p-' key={item.id}>
          <div className='absolute right-4 top-5'>
            <Decision name='ThreeDotsHor' />
          </div>
          <div className='w-[269px] h-[48px] flex flex-row items-center justify-between'>
            <img src={item.img} alt='cdk' />
            <img src={item.img2} alt='cdk logo' />
          </div>
          <div className='w-[269px] h-[60px] overflow-hidden'>
            <p className='text-[#F0F2F5] opacity-80 text-sm font-normal'>{item.message}</p>
          </div>
          <div className='w-[269px] h-[46px] flex flex-row items-center justify-between'>
            <button className='w-[205px] h-[44px] bg-[#6043DD] rounded-[5px] flex flex-row items-center justify-center'>
              <p className='text-[#FFFFFF] opacity-95 text-sm font-normal font-baloo'>Connect now</p>
            </button>
            <div className='w-[46px] h-[46px] border border-[#6043DD] rounded-full flex flex-row items-center justify-center'>
              <Decision name='PurpleCheck' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
