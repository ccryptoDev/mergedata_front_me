import vector from '@/assets/svg/vector.svg'

export default function TitleVectorX({
    width = 'w-96',
    height = '',
    upperTitle = '',
    mainTitle = '',
    upperTitleSize = '',
    mainTitleSize = ''
}) {
    return (
        <div className={`${width} ${height} flex flex-row justify-between border-blue-500 shadow-md`}>
            <div className='w-full h-full flex flex-col content-between' >
                <div className='mb-[4px] w-[320px] h-[12px]' >
                    <p className={`${upperTitleSize} font-semibold text-purple-200 font-baloo`}>{upperTitle}</p>
                </div>
                <div className='w-[320px] h-[23px]' >
                    <p className={`${mainTitleSize} font-semibold text-white font-baloo`}>{mainTitle}</p>
                </div>
            </div>
            <div className='w-[14px] h-[14px] flex flex-col justify-center items-center' >
                <img src={vector} className='w-[14px] h-[14px]' />
            </div>
        </div>
    )
}
