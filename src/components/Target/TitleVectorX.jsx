import vector from '@/assets/svg/vector.svg'

export default function TitleVectorX({
    width = 'w-96',
    height = '',
    upperTitle = '',
    mainTitle = '',
    upperTitleSize = '',
    mainTitleSize = '',
    upperTitleWeigth = 'font-semibold',
    mainTitleWeigth = 'font-semibold',
    upperTitleColor = 'text-purple-200',
    mainTitleColor = 'text-neutrals-00',
    upperTitleFont = 'font-baloo',
    mainTitleFont = 'font-baloo',
}) {
    return (
        <div className={`${width} ${height} flex flex-row justify-between border-blue-500 shadow-md`}>
            <div className='w-full h-full flex flex-col content-between' >
                <div className='mb-[4px] w-full h-[12px]' >
                    <p className={`${upperTitleSize} ${upperTitleWeigth} ${upperTitleColor} ${upperTitleFont}`}>{upperTitle}</p>
                </div>
                <div className='w-full h-[23px]' >
                    <p className={`${mainTitleSize} ${mainTitleWeigth} ${mainTitleColor} ${mainTitleFont}`}>{mainTitle}</p>
                </div>
            </div>
            <div className='w-[14px] h-[14px] flex flex-col justify-center items-center' >
                <img src={vector} className='w-[14px] h-[14px]' />
            </div>
        </div>
    )
}
