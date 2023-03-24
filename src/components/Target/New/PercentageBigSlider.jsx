import Decision from '@/components/General/Icons/Decision';

export default function PercentageBigSlider({
    barcolor = 'bg-gradient-to-l from-pink-500 via-purple-500 to-purple-900',
    barLength = '',
    iconleft = 'Building',
    title = 'New Emails Lead',
    value1 = 700,
    value2 = '+ 1,430',
}) {

   
    return (
        <div>
            <div className='w-[602px] h-[45px] bg-gray-900 rounded-full flex flex-row items-center shadow-xl'>
                <div className={`${barLength} h-full ${barcolor} rounded-full flex items-center`}>
                    <div className='pl-5 pr-4 w-full flex justify-between items-center'>
                        <p className='font-bold font-baloo text-base text-[#FFFFFF]'>
                            {title}
                        </p>
                        <div className='text-white'>
                            <Decision name={iconleft} />
                        </div>
                    </div>
                </div>
                <div className='ml-4 w-[47px] h-[37px]'>
                    <p className='mb-[3px] w-full h-[18px] text-base font-baloo font-bold text-[#FFFFFF] flex items-start justify-start'>
                        {value1}
                    </p>
                    <p className='text-xs font-normal text-[#DFD9F8]'>
                        {value2}
                    </p>
                </div>
            </div>
        </div>
    )
}
