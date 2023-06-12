import QuickChatCounter from '@/components/General/PredictiveAI/QuickChatCounter';
import StepsCardAI from '@/components/General/PredictiveAI/StepsCardAI';
import TextIconButton from '@/components/General/Buttons/TextIconButton';
import SingleButton from '@/components/General/Buttons/SingleButton';

export default function AssignAnOwnerForThisTask() {

    return (
        <div className='w-[626px] h-[509px] bg-[#35257A] rounded-xl pt-4 pl-6 flex flex-col'>
            <div className='w-[575px] h-[41px] flex flex-row justify-between items-end mb-4'>
                <div className='w-[319px] h-9'>
                    <p className='font-baloo text-[#FFFFFF] text-2xl'>Recommendation Details</p>
                </div>
                <QuickChatCounter />
            </div>
            <div className='flex flex-col w-[575px] h-[318px] mb-7 justify-start'>
                <div className='w-[575px] h-[54px] text-[13px] text-neutrals-300 flex items-center justify-center leading-4 mb-[88px]'>
                    I recommend acquiring more vehicles to address the model shortage in our database. Consider diversifying your inventory by sourcing from other dealerships or manufacturers. Stay updated on market trends and adjust your inventory accordingly to meet customer demands.
                </div>
                <div className='w-[575px] h-[97px] flex flex-row justify-start gap-x-[18px]'>
                    <StepsCardAI
                        step = '1'
                        backGroundColor='bg-purple-200'
                        width = 'w-[180px]'
                        height = 'h-[97px]'
                        textColor = 'text-[#FFFFFF]'
                        text = 'Expand your network and reach out to trusted partners to find the vehicles you need. Use online tools and networks to discover new suppliers'
                    />
                    <StepsCardAI
                        step = '2'
                        backGroundColor='bg-purple-300'
                        width = 'w-[180px]'
                        height = 'h-[97px]'
                        textColor = 'text-[#FFFFFF]'
                        text = 'Negotiate prices and terms to ensure you are getting a fair deal. Discuss payment options, delivery dates, and warranties, among other factors.'
                    />
                    <StepsCardAI
                        step = '3'
                        backGroundColor='bg-purple-400'
                        width = 'w-[180px]'
                        height = 'h-[97px]'
                        textColor = 'text-[#FFFFFF]'
                        text = 'Inspect the vehicles to ensure that they meet your dealerships standards for quality and condition. Check for any damages, wear and tear, or technical issues that may affect the vehicles resale value.'
                    />
                </div>
            </div>
            <div className='w-[574px] h-[46px] flex flex-row justify-end gap-x-5'>
                <TextIconButton
                    iconRight='TaskLg'
                    iconLeft=''
                    background='bg-[#563CC7]'
                    text='Create Task'
                    width='w-[132px]'
                    height='h-[44px]'
                    textSize='text-[14px]'
                    borderHover=''
                    backgroundHover='hover:bg-[#44DDFF]'
                />
                <SingleButton
                    icon='ThumbLargeInverted'
                    width='w-[50px]'
                    height='h-[46px]'
                    background='bg-[#202449]'
                    borderHover=''
                    backgroundHover='hover:bg-red-600'
                />
                <SingleButton
                    icon='ThumbLarge'
                    width='w-[50px]'
                    height='h-[46px]'
                    background='bg-[#202449]'
                    borderHover=''
                    backgroundHover='hover:bg-[#92fe53]'
                />
            </div>
        </div>
    )
}


