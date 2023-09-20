import React from 'react';
import Decision from '@/components/General/Icons/Decision';
import cdkGlobal from '@/assets/svg/cdkGlobal.svg';
import cdkGlobal2 from '@/assets/svg/cdkGlobal2.svg';
import dealersOn from '@/assets/svg/dealersOn.svg';
import dealersOn2 from '@/assets/svg/dealersOn2.svg';
import eleadone from '@/assets/svg/eleadone.svg';
import eleadone2 from '@/assets/svg/eleadone2.svg';


const data = [
  { id: 1, message: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', description: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: dealersOn, img2: dealersOn2 },
  { id: 2, message: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', description: 'Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: cdkGlobal, img2: cdkGlobal2 },
  { id: 3, message: 'Do you need a simple easy way to help you sell more carsA profitable dealership is only possible when you create, manage and nurture good relationships with your customers description Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: eleadone, img2: eleadone2 },
  { id: 4, message: 'Do you need a simple easy way to help you sell more carsA profitable dealership is only possible when you create, manage and nurture good relationships with your customers description Our APIs Are Built on a Modern Stack, Allowing For Deeper Integration and More Opportunities For Automotive Software Innovation', img: eleadone, img2: eleadone2 },
];

export default function YourIntegrationCard() {
  return (
    <div className='flex flex-row items-center-justify-between w-[1343px] h-[180px] gap-x-6'>
      {data.map((item) => (
        <div className='relative bg-[#05081E] w-[317px] h-[180px] rounded-xl flex flex-col items-center justify-center gap-y-2 p-' key={item.id}>
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
        </div>
      ))}
    </div>
  );
}
