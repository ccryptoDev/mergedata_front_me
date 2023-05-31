import SingleButton from '@/components/General/Buttons/SingleButton';
import IconSelected from '@/components/General/Icons/Decision';
import Decision from '@/components/General/Icons/Decision';

export default function RecommendationCard(
    {area='area',
    title,
    helpText,
    recommendations=[],
    behavior='-23.6%',
    behaviorIcon='DownRedArrow',
}
) {

    return (
        <div className='group w-[325px] h-[452px] bg-[#05081E] hover:bg-[#161A3E] flex flex-col items-center justify-between py-6 shadow-md'>
            <div className='w-[280px] h-[145px] flex flex-col justify-between items-center'>
                <div className='w-[280px] h-[30px] flex flex-row justify-between items-center'>
                    <p className="text-[#C2C8D7] text-xl font-baloo font-bold">{area}</p>
                    <div className='w-auto flex flex-row items-center space-x-[6px]'>
                        <div className="space-x-4 mr-2 flex">
                            <IconSelected name='HeartLg' />
                            <IconSelected name='Share' />
                        </div>
                        <SingleButton
                            icon='ThumbSMInverted'
                            background='bg-neutrals-800'
                            width='w-[28px]'
                            border='border border-neutrals-900'
                            height='h-[24px]'
                            backgroundHover='hover:bg-red-600 transition duration-100 hover:delay-100'
                            borderHover='hover:border-red-600'
                            radius='rounded-md'
                        />
                        <SingleButton
                            icon='ThumbSM'
                            background='bg-neutrals-800'
                            width='w-[28px]'
                            border='border border-neutrals-900'
                            height='h-[24px]'
                            backgroundHover='hover:bg-green-500 transition duration-100 hover:delay-100'
                            borderHover='hover:border-green-500'
                            radius='rounded-md'
                        />
                    </div>
                </div>
                <div className='w-[280px] h-[45px] flex flex-row justify-start items-center'>
                    <p className='font-baloo text-[#FFFFFF] text-[32px] mr-2'>{title}</p>
                    <Decision name={behaviorIcon} />
                    <p className='text-[#F4392C] text-sm ml-1'>{behavior}</p>
                </div>
                <div className='w-[280px] h-[70px] flex flex-row justify-between items-start'>
                    <p className='text-xs text-[#FFFFFF]'>{helpText}</p>
                </div>
                <p className='w-full text-xs text-[#FFFFFF] text-left'>Recommendations:</p>
            </div>
            <div className='w-[280px] h-[240px] flex flex-col justify-between items-center'>
            {recommendations.map((item) => (
                <div className='w-[280px] h-[50px] bg-[#161A3E] group-hover:bg-[#05081E] flex flex-row justify-between items-center  rounded-md'>
                    <p className='w-[202px] h-[36px] text-[11px] leading-[18px] ml-[5px] text-[#FFFFFF]'>{item.text}</p>
                    <img src={item.image} alt='' className='mr-2 ' />
                </div>
            ))}
            </div>
        </div>
    )
}
