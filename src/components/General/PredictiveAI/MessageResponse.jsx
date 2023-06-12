import SingleButton from '@/components/General/Buttons/SingleButton'
import Decision from '@/components/General/Icons/Decision';
import NameInitials from '@/components/General/NameInitials';
import BubbleGraphCard from '@/components/General/Graphs/BubbleGraphCard';

export default function MessageResponse() {
    return (
        <div className='w-[1022px] h-[383px] bg-[#05081E] flex flex-col px-8 pt-[34px] pb-[42px]'>
            <div className='w-[958px] h-[32px] flex flex-row justify-between items-center mb-3'>
                <div className='w-[350px] h-[32px] flex flex-row justify-between items-center pl-2'>
                    <Decision name='ThreeDots' />
                    <NameInitials />
                    <p className='font-baloo text-[#FFFFFF] font-bold text-lg'>Improve my inventory days supply</p>
                </div>
                <div className='w-[120px] h-[24px] flex flex-row justify-between items-center'>
                    <SingleButton
                        icon='ThumbMd'
                        background='bg-[#05081E]'
                        width='w-[24px]'
                        height='h-[24px]'
                        border=''
                        backgroundHover=''
                        borderHover=''
                        radius=''
                    />
                    <SingleButton
                        icon='ThumbMdInverted'
                        background='bg-[#05081E]'
                        width='w-[24px]'
                        height='h-[24px]'
                        border=''
                        backgroundHover=''
                        borderHover=''
                        radius=''
                    />
                    <SingleButton
                        icon='ShareSm'
                        background='bg-[#05081E]'
                        width='w-[24px]'
                        height='h-[24px]'
                        border=''
                        backgroundHover=''
                        borderHover=''
                        radius=''
                    />
                </div>
            </div>
            <div className='w-[958px] h-[264px] flex flex-row justify-between items-center'>
                <div className='w-[467px] h-[264px] overflow-y-hidden leading-[22px]'>
                    <p className='text-[14px] font-normal text-[#FFFFFF] text-start '>
                        AI can be used to help automotive dealerships analyze data to become more profitable with respect to their Inventory by using predictive analytics to identify trends in customer buying behavior, such as which models are selling the most, which models are selling the least, and which models are most likely to be in demand in the future. AI can also be used to analyze customer feedback and reviews to identify areas of improvement and to identify potential opportunities for new product lines. Additionally, AI can be used to analyze inventory data to identify which models are in stock, which models are out of stock, and which models are most likely to be in demand in the future. This data can then be used to inform decisions about which models to stock and which models to discontinue.
                    </p>
                </div>
                <div className='relative w-[467px] h-[264px] overflow-hidden rounded-2xl'>
                    <div className='absolute left-[-35px] top-[-35px] scale-[83%] '>
                        <BubbleGraphCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
