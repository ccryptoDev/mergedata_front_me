import Decision from '@/components/General/Icons/Decision'
import TextProgressBarText from '@/components/General/Contest/TextProgressBarText'
import BadgeGroup from '@/components/General/Contest/BadgeGroup';

export default function TrainingScoreCards({sliderwidth,topBadgeBgColor,place,icon,text,name,photo,role,email,phoneNumber,data1,data2,}){

    return (
        <div className='relative w-[174px] h-[241px] pt-[13.2px] rounded-lg bg-[#161A3E] flex flex-col items-center shadow-md'>
            <div className={`items-center justify-center w-[84px] mb-3 h-[30px] ${topBadgeBgColor} rounded flex flex-col pt-1 shadow-md`}>
                <div className='gap-x-1 flex flex-row'>
                    <Decision name='CrownSm' />
                    <p className='text-[#FFFFFF] text-[13px] font-baloo font-bold leading-3'>{place}</p>
                </div>
                <p className='text-[#FFFFFF] text-[4.4px] leading-[11px]'>{text}</p>
            </div>
            <div className='relative w-[144px] h-[49px] mb-2 flex flex-row justify-between items-center'>
                <div className='w-[49px] h-[49px] bg-cover overflow-hidden rounded-full'>
                    <img src={photo} alt='photo_5' />
                </div>
                <div className='absolute left-8 top-9 w-[16.3px] h-[16.3px] rounded-full bg-[#161A3E] flex items-center justify-center'>
                    <div className='w-[8.1px] h-[8.1px] rounded-full bg-[#27AE60]'></div>
                </div>
                <div className='w-[89px] h-[49px] flex flex-col'>
                    <p className='text-[#FFFFFF] text-[12px] font-bold leading-4'>{name}</p>
                    <p className='text-[#FFFFFF] text-[6.8px] leading-3'>{role}</p>
                    <p className='text-[#FFFFFF] text-[6px] leading-3'>{email}</p>
                    <p className='text-[#FFFFFF] text-[5.8px] leading-[8.8px]'>{phoneNumber}</p>
                </div>
            </div>
            <TextProgressBarText
                txtSize='text-[6.5px]'
                sliderwidth={sliderwidth}
                sliderheight='h-[4.3px]'
                slidervalue=''
                sliderbg='bg-[#32E5CB]'
                slotheight='h-[4.3px]'
                slotbg='bg-neutrals-500'
                slotwidth='w-[73px]'
                targetValue=''
                showBall={false}
            />
            <div className='w-[147px] h-[32px] mt-[10px] flex flex-row justify-center items-center'>
                <BadgeGroup
                    width='w-[45px]'
                    height='h-[31px]'
                    roundCorner='rounded-[2.8px]'
                    leading='leading-[5px]'
                    valueSize='text-[13px]'
                    txtSize='text-[4.4px]'
                    iconSize='w-3 h-3'
                    gapX='gap-x-[7px]'
                    gapY='gap-y-[2px]'
                    data1={data1}
                />
            </div>
            <div className='w-[147px] h-[38px] mt-[9px] flex flex-row justify-center items-center'>
                <BadgeGroup
                    width='w-[45px]'
                    height='h-[36px]'
                    roundCorner='rounded-[2.8px]'
                    leading='leading-[5px]'
                    valueSize='text-[13px]'
                    txtSize='text-[4.4px] w-[42px]'
                    iconSize='w-3 h-3'
                    gapX='gap-x-[7px]'
                    gapY='gap-y-[6px]'
                    data2={data2}
                />
            </div>
            <div className="absolute right-2 space-x-4 mr-2 flex">
                <Decision name='Arrow45Degrees' />
            </div>
        </div>
    )
}
