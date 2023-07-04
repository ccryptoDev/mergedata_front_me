import SingleButton from '@/components/General/Buttons/SingleButton'
import Decision from '@/components/General/Icons/Decision';
import NameInitials from '@/components/General/NameInitials';

export default function UpdateLuxuryCarInventoryCard() {

    const data = [
        {id: 1, dotColor: 'bg-[#17D74D]', carModel:'2018 Ford GT - Heritage Edition', amount:'$1,575,000'},
        {id: 2, dotColor: 'bg-[#FF6A2A]', carModel:'2022 Ferrari SF90 Spider', amount:'$929 000'},
        {id: 2, dotColor: 'bg-[#AE2AFF]', carModel:'2020 Lamborghini Aventador - SVJ', amount:'$839 000'},
        {id: 4, dotColor: 'bg-[#FC9905]', carModel:'2015 Ford GT - Heritage Edition', amount:'$2,575,000'},
    ]

    return (
        <div className='w-[1022px] h-[383px] bg-[#05081E] flex flex-col px-8 pt-[34px] pb-[42px]'>
            <div className='w-[958px] h-[32px] flex flex-row justify-between items-center mb-3'>
                <div className='w-[350px] h-[32px] flex flex-row justify-start items-center pl-2 gap-x-2'>
                    <Decision name='ThreeDots' />
                    <NameInitials />
                    <p className='font-baloo text-[#FFFFFF] font-bold text-lg'>Update luxury car inventory</p>
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
                        Luxury Cars for Sale in Pompano Beach, FL near Miami
                        At HGreg Lux, we have a goal of redefining the luxury car-buying experience, and we know you’re hungry for excellence in the elegance of a luxury brand. We carry over 400 gently used luxury vehicles from many of the top high-end manufacturers. Our used inventory is considered “used” strictly based on each vehicle being titled to a previous owner. Many of these vehicles have little mileage on them, so you get even greater value for a pre-owned luxury vehicle. From Bugatti to lifted Jeeps and everything in between, we offer the brands with quality and pure excellence.
                    </p>
                </div>
                <div className='relative w-[467px] h-[262px] bg-[#202449] overflow-hidden rounded-2xl py-6 px-8 gap-y-6 flex flex-col justify-start'>
                    <div className='w-[230px] h-[112px] left-[-35px] top-[-35px]'>
                        <p className='text-[#C2C8D7] text-lg font-bold font-baloo leading-7'>Estimated cost</p>
                        <p className='text-[#FFFFFF] text-[48px] font-baloo leading-[64px]'>$3,525,362</p>
                        <p className='text-xs text-[#9292C1]'>Including 3 cars</p>
                    </div>
                    <div className='w-[403px] h-[78px] flex flex-col gap-y-3 overflow-y-hidden'>
                        {
                            data.map((item) => {
                                return (
                                    <div key={item.id} className='flex flex-row w-[360px] h-[18px] items-center justify-start gap-x-2'>
                                    <div className='w-[14px] h-[14px] rounded-full bg-[#161A3E] flex items-center justify-center'>
                                        <div className={`w-[4px] h-[4px] rounded-full ${item.dotColor}`}></div>
                                    </div>
                                    <p className='text-[#FFFFFF] text-xs'>{item.carModel}</p>
                                    <p className='text-[#9292C1] text-xs'>{item.amount}</p>
                                </div>
                                )
                            })
                        }
                    </div>
                    <div className='absolute right-7 top-7'>
                        <Decision name='Arrow45Degrees' />
                    </div>
                </div>
            </div>
        </div>
    )
}
