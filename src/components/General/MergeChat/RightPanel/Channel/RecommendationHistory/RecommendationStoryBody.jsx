
import Decision from '@/components/General/Icons/Decision'
import NameInitials from '@/components/General/NameInitials'
import DownRedArrow from '@/components/General/Icons/DownRedArrowIcon'
import Arrow45Degrees from '@/components/General/Icons/Arrow45Degrees'
import img_001 from '@/assets/svg/img_001.svg'

import Avatar1 from '@/assets/svg/Avatar1.svg'
import Avatar2 from '@/assets/svg/Avatar2.svg'
import Avatar3 from '@/assets/svg/Avatar3.svg'
import Avatar4 from '@/assets/svg/Avatar4.svg'
import Avatar5 from '@/assets/svg/Avatar5.svg'


export default function RecommendationStoryBody() {

  const data = [
    { id: 1, avatar: Avatar1, employee: 'Dale Postman', grpu: '-21%', actions: 'Assign supervisor' },
    { id: 2, avatar: Avatar2, employee: 'Miguel Flores', grpu: '-22%', actions: 'Assign supervisor' },
    { id: 3, avatar: Avatar3, employee: 'Eduard Monte', grpu: '-28%', actions: 'Assign supervisor' },
    { id: 4, avatar: Avatar4, employee: 'April Graner', grpu: '-22%', actions: 'Assign supervisor' },
    { id: 5, avatar: Avatar5, employee: 'Wendy Smith', grpu: '-25%', actions: 'Assign supervisor' }
  ]


  return (
    <div className='w-[1055px] h-[644px] flex flex-col justify-start items-center mb-[25px] '>
      <div className='flex flex-col justify-start items-start w-[1055px] h-auto bg-[#05081E] mb-[25px] px-[32px] pt-[32px] pb-[28px]'>
        <div className='w-[788px] h-[32px] flex flex-row justify-start items-center gap-x-[8px] pl-[0.5em] mb-[1em]'>
          <Decision name='ThreeDots' />
          <NameInitials />
          <p className='text-[#FFFFFF] text-[18px] font-baloo font-[700px]'>Salesperson GPRU dropped by more than 20% this week, compared to other salespersons.</p>
        </div>
        <div className='w-[991px] h-[370px] flex flex-row justify-between'>
          <div className='w-[483px] h-[360px] flex items-center '>

            <ol className='text-[#fff] text-[12px] opacity-80'>
              <li className='text-[#fff]'>1. Assign each employee a dedicated manager who will be responsible for overseeing their performance and providing support and guidance.</li>
              <li className='text-[#fff]'>2. Schedule regular one-on-one meetings between the manager and the employee to discuss performance, set goals, and provide feedback.</li>
              <li className='text-[#fff]'>3. Provide the manager with training and resources to help them effectively support their team members.</li>
            </ol>

          </div>
          <div className='w-[483px] h-[366px] bg-[#13132D] rounded-[12px] px-[24px] py-[12px] flex flex-col items-start justify-start'>
            <p className='w-[48px] h-[30px] text-[#C2C8D7] text-[20px] font-baloo font-[700px]'>Sales</p>
            <div className='w-[282px] h-[44px] flex flex-row gap-x-[6px] items-center'>
              <p className='text-[48px] text-[#fff] font-baloo font-[700px] leading-[64px] '>GPRU</p>
              <DownRedArrow />
              <p className='text-[#ef3c3c] text-[14px] font-baloo font-[700px] leading-[64px]'>-23.6%</p>
              <img src={img_001} />
              <Arrow45Degrees />
            </div>
            <div className='w-[435px] h-auto flex flex-col gap-y-[12px]'>
              <div className='w-[435px] h-[19px] flex flex-row justify-between items-center gap-x-[4px]'>
                <Decision name='BlueStar' />
                <p className='w-[231px] text-[#fff] text-[12px] font-[400px]'>Employee</p>
                <p className='w-[82px] text-[#fff] text-[12px] font-[400px]'>GPRU</p>
                <p className='w-[93px] text-[#fff] text-[12px] font-[400px]'>Actions</p>
              </div>
    
              {
                data.map(item => (
                  <div key={item.id} className={`${ item.id === 3 ? 'bg-[#F4392C]' : 'bg-[#161A3E]'} w-[435px] h-[28px] px-[5px] py-[5px] flex flex-row justify-start items-center gap-x-[4px] mb-[6px] rounded-[6px] `}>
                    <img src={item.avatar} className='w-[22px] h-[22px] '/>
                    <p className='w-[210px] text-[#fff] text-[12px] font-[400px]'>{item.employee}</p>
                    <p className='w-[45px] text-[#fff] text-[12px] font-[400px]'>{item.grpu}</p>
                    <p className='w-[105px] text-[#fff] text-[12px] font-[400px]'>{item.actions}</p>
                    <Decision name='BlueTask' />
                  </div>
                ))
              }

            </div>
          </div>
        </div>
        
      </div>
      <div className='w-[1055px] h-[94px] rounded-[12px] bg-[#6043DD] px-[32px] pt-[44px] pb-[42px] flex flex-row gap-x-[0.8em] items-center'>
          <Decision name='ThreeDots' />
          <NameInitials />
          <p className='w-[885px] text-[#e5e3e3] text-[18px] font-baloo font-[700px] opacity-100'> I Honestly don't think we are going to be able to make it if we need to go on a 1 on 1 with everyone, if we could
            do only the top 3 things regarding this problem to fix it it would be great, what do you think? </p>
        </div>
    </div>
  )
}
