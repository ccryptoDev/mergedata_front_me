import triangledownblack from '@/assets/svg/triangledownblack.svg';

const TargetPresetsSlider = ({

    value = 130,
    location = 'left-[350px]',
    title = 'Target',
    sliderwidth = 'w-[535px]',
    background = 'bg-[#161A3E]',
    textSize = 'font-bold text-lg'

}) => {
    return (
        <div className={`m-0 ${sliderwidth} h-[147px] flex flex-col items-center`}>
            <div className={`relative  ${sliderwidth} h-full ${background} flex flex-col`}>
                <div className='w-[full] h-[58px] text-neutral-200 flex flex-col justify-center align-middle'>
                    <p className='font-baloo text-2xl font-bold text-[#FFFFFF]'>{title}</p>
                    <p className='font-baloo text-sm font-normal text-[#A6ACBD]'>Drag the target icon to set the target for this new preset.</p>
                </div>
                <div className={`absolute flex flex-col mt-[49px] ${location}`}>
                    <div className='w-[58px] flex flex-col'>
                        <div className='w-[50px] h-[26px] bg-[#000000] rounded flex items-center justify-center'>
                            <p className='text-[14px] font-baloo text-[#FFFFFF] font-bold'>{value}%
                            </p>
                        </div>
                        <div className='mt-[-1px] flex justify-center bg-opacity-50'>
                            <img src={triangledownblack} />
                        </div>
                    </div>

                    <div className='z-30 w-[58px] h-[24px] flex justify-center'>
                        <div className='w-[24px] h-[24px] rounded-full bg-[#E5E8EF] flex items-center justify-center'>
                            <div className='w-[18px] h-[18px] rounded-full bg-[#3E4761] flex justify-center items-center'>
                                <div className='w-[8px] h-[8px] rounded-full bg-[#E5E8EF]'></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='h-[9px] flex flex-col'>
                    <div className={`relative flex flex-row items-center  ${sliderwidth} h-[17px] rounded-full grid justify-items-stretch content-center mt-[30px] bg-[#000000]`}>
                        <div className='z-10 absolute left-[50%] items-center w-[111px] h-[17px] bg-gradient-to-r from-[#3C1CC5] to-[#9043DD] '> </div>
                        <div className='z-20 justify-self-center items-center w-[20px] h-[20px] rounded-full bg-[#FFFFFF]'></div>
                    </div>
                    <div className={`pt-[12px] flex justify-center ${textSize} font-medium`}>
                        <p className='text-[#EEECF1]'>100%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TargetPresetsSlider