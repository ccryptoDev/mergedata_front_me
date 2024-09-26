import triangledownblack from '@/assets/svg/triangledownblack.svg';

const TargetPresetsSlider = ({

    value = 130,
    location = 'left-[21.9em]',
    title = 'Target',
    sliderwidth = 'w-[33.4em]',
    background = 'bg-[#161A3E]',
    textSize = 'font-bold text-lg'

}) => {
    return (
        <div className={`m-0 ${sliderwidth} h-[9.18em] flex flex-col items-center`}>
            <div className={`relative  ${sliderwidth} h-full ${background} flex flex-col`}>
                <div className='w-[full] h-[3.6em] text-neutral-200 flex flex-col justify-center align-middle'>
                    <p className='font-baloo text-2xl font-bold text-[#FFFFFF]'>{title}</p>
                    <p className='font-baloo text-sm font-normal text-[#A6ACBD]'>Drag the target icon to set the target for this new preset.</p>
                </div>
                <div className={`absolute flex flex-col mt-[3.06em] ${location}`}>
                    <div className='w-[3.625em] flex flex-col'>
                        <div className='w-[3.125em] h-[1.625em] bg-[#000000] rounded flex items-center justify-center'>
                            <p className='text-[0.875rem] font-baloo text-[#FFFFFF] font-bold'>{value}%
                            </p>
                        </div>
                        <div className='mt-[-1px] flex justify-center bg-opacity-50'>
                            <img src={triangledownblack} />
                        </div>
                    </div>

                    <div className='z-30 w-[3.625em] h-[1.5em] flex justify-center'>
                        <div className='w-[1.5em] h-[1.5em] rounded-full bg-[#E5E8EF] flex items-center justify-center'>
                            <div className='w-[1.125em] h-[1.125em] rounded-full bg-[#3E4761] flex justify-center items-center'>
                                <div className='w-[0.5em] h-[0.5em] rounded-full bg-[#E5E8EF]'></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='h-[0.56em] flex flex-col'>
                    <div className={`relative flex flex-row items-center  ${sliderwidth} h-[1em] rounded-full grid justify-items-stretch content-center mt-[1.875em] bg-[#05081E]`}>
                        <div className='z-10 absolute left-[50%] items-center w-[6.9em] h-[1em] bg-gradient-to-r from-[#3C1CC5] to-[#9043DD] '> </div>
                        <div className='z-20 justify-self-center items-center w-[1.25em] h-[1.25em] rounded-full bg-[#FFFFFF]'></div>
                    </div>
                    <div className={`pt-[0.75em] flex justify-center ${textSize} font-medium`}>
                        <p className='text-[#EEECF1]'>100%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TargetPresetsSlider