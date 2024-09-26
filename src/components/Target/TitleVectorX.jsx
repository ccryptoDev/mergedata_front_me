import Decision from "@/components/General/Icons/Decision";

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
    onClick,
}) {

    return (
        <div className={`${width} ${height} flex flex-row justify-between items-start px-[0.5em] `}>
            <div className='w-full h-full flex flex-col content-between' >
                <div className='mb-[0.25em] w-full h-[1em]' >
                    <p className={`${upperTitleSize} ${upperTitleWeigth} ${upperTitleColor} ${upperTitleFont}`}>{upperTitle}</p>
                </div>
                <div className='w-full h-[1.4375em]' >
                    <p className={`${mainTitleSize} ${mainTitleWeigth} ${mainTitleColor} ${mainTitleFont}`}>{mainTitle}</p>
                </div>
            </div>
            <button onClick={onClick} className='w-[1.5em] h-[1.5em] flex justify-center items-center hover:scale-110'>
                <Decision name='Cancel' />
            </button>
        </div>
    )
}
