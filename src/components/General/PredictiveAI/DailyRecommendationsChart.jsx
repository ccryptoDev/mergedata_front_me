
import img_001 from '@/assets/svg/img_001.svg';
import img_002 from '@/assets/svg/img_002.svg';
import img_003 from '@/assets/svg/img_003.svg';
import bot2 from '@/assets/svg/bot2.svg';
import SingleButton from "@/components/General/Buttons/SingleButton";
import TextIconButton from '@/components/General/Buttons/TextIconButton';

export default function DailyRecommendations() {

    const data = [
        { id: 1, name: 'Sales', nameSub: 'Sales GRPU', days: '1', description: 'Salesperson GPRU dropped by more than 20% this week, compared to other salespersons.', graphs: '' },
        { id: 2, name: 'Customer', nameSub: 'Lease End', days: '1', description: 'Customer coming up on Lease End in next 2 weeks. Offer Customer a Unique Deal.', graphs: '' },
        { id: 3, name: 'Inventory', nameSub: 'Model', days: '1', description: 'A Model Shortage appears in our Database, consider acquiring more vehicles..', graphs: '' },
        { id: 4, name: 'DMS - Service', nameSub: 'Sales GRPU', days: '2', description: 'Customer Satisfaction is facing a decline in the recent quarter..', graphs: '' },
        { id: 5, name: 'Technicians', nameSub: 'Sales GRPU', days: '2', description: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Suspendisse ', graphs: '' },
        { id: 6, name: 'DMS - Service', nameSub: 'Sales GRPU', days: '2', description: 'Customer Satisfaction is facing a decline in the recent quarter..', graphs: '' },
    ]

    return (

        <div className='w-[1043px] h-[446px] bg-[#0D102C] flex flex-col justify-start items-center gap-y-2'>
            <div className='w-[1043px] h-[38px] flex flex-row items-center'>
                <p className='pl-4 w-[159px] text-[#EFECFC]  h-[22px]'>Name</p>
                <p className='w-[107px] text-[#EFECFC]  h-[22px]'>Department</p>
                <p className='w-[63px]  text-[#EFECFC] h-[22px]'>Days</p>
                <p className='w-[290px] text-[#EFECFC]  h-[22px]'>Description</p>
                <p className='w-[214px] text-[#EFECFC]  h-[22px]'>Recommendations</p>
                <p className='w-[207px] text-[#EFECFC]  h-[22px]'>Create</p>
            </div>
            <div className=''>
                {data.map((item, index) => (
                    <div className={`flex flex-row items-center justify-start w-[1043px] h-[60px] mb-[8px] ${(item.id === 6) ? 'bg-[#6043DD] rounded-xl' : 'bg-[#000000]'}`}>
                        <div className='flex flex-col w-[159px] justify-center'>
                            <p className='text-[#B0A1EE] text-[12px] leading-[18px] pl-4'>
                                {(item.id === 6) ? 'Predictive AI' : item.name}
                            </p>
                            <p className='text-[#C2C8D7] text-[16px] leading-[18px] pl-4'>
                                {(item.id === 6) ? 'Predictive AI' : item.nameSub}
                            </p>
                        </div>
                        <div className='flex items-center w-[107px]'>
                            <p className='text-[#C2C8D7] text-[16px] leading-[18px]'>
                                {(item.id === 6) ? 'Coming soon..' : item.name}
                            </p>
                        </div>
                        {
                            (item.id === 6) ?
                                <div className='flex flex-row ml-[20px] w-[330px] h-[60px] justify-between items-center'>
                                    <p className='w-[260px] text-[#C2C8D7] text-[12px]'>We are working on... consectetur adipiscing elit. Suspendisse faucibus</p>
                                    <div className='w-[60px] flex items-center'>
                                        <img src={bot2} />
                                    </div>
                                </div>
                                :
                                (
                                    <div className='flex flex-row'>
                                        <div className='flex flex-col w-[63px] justify-center'>
                                            <p className='text-[#C2C8D7] text-[16px] leading-[18px] pl-4'>
                                                {item.days}
                                            </p>
                                        </div>
                                        <div className='flex flex-col w-[280px] mr-2'>
                                            <p className='text-[#C2C8D7] text-[12px] leading-[18px]'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                        }
                        <div className={`w-[422px] h-[55px] bg-[#151F39] rounded-xl flex flex-row items-center justify-between px-2 ${(item.id === 6) ? 'blur-sm' : null}`}>
                            <div className='w-[190px] h-[31px] flex flex-row items-center justify-between gap-x-1'>
                                <img src={img_001} className='w-[56px] h-[29px]' />
                                <img src={img_002} className='w-[56px] h-[29px]' />
                                <img src={img_003} className='w-[56px] h-[29px]' />
                            </div>
                            <div className='w-[190px] h-[29px] flex flex-row justify-between'>
                                <TextIconButton
                                    iconLeft=''
                                    text='Create Task'
                                    iconRight='Task'
                                    background='bg-neutrals-800'
                                    width='w-[84px]'
                                    height='h-[27px]'
                                    backgroundHover='hover:bg-blue-300'
                                    textSize='text-[9px]'
                                    textColor='text-[#FFFFFF]'
                                    textColorHover=''
                                    borderColor='border border-neutrals-900'
                                />
                                <SingleButton
                                    icon='ThumbSMInverted'
                                    background='bg-neutrals-800'
                                    width='w-[28px]'
                                    border='border border-neutrals-900'
                                    height='h-[27px]'
                                    backgroundHover='hover:bg-red-500 transition duration-100 hover:delay-100'
                                    borderHover='hover:border-red-500'
                                    radius='rounded-md'
                                />
                                <SingleButton
                                    icon='ThumbSM'
                                    background='bg-neutrals-800'
                                    width='w-[28px]'
                                    border='border border-neutrals-900'
                                    height='h-[27px]'
                                    backgroundHover='hover:bg-green-500 transition duration-100 hover:delay-100'
                                    borderHover='hover:border-green-500'
                                    radius='rounded-md'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
