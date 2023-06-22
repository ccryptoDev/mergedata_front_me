
export default function BadgeGroup({
    width = 'w-[293px]',
    height = 'h-[58px]',
    roundCorner = 'rounded-[5px]',
    leading = 'leading-3',
    valueSize = 'text-2xl',
    txtSize = 'text-[8px]',
    iconSize = 'w-5 h-5',
    gapX = 'gap-x-1',
    gapY = 'gap-y-1',
    data1 = [],
    data2 = []
}) {
    return (
        <div className={`w-[293px] h-[58px] flex flex-row ${gapX} mt-6`}>
            {
                data1.map((item) => {
                    return (
                        <div key={item.id} className={`${width} ${height} pt-4 pb-3 ${roundCorner} ${item.bgColor} flex flex-col items-center justify-center shadow-md ${gapY}`}>
                            <div className='h-auto w-auto flex flex-row items-center justify-center gap-x-1'>
                                {
                                 (item.icon !== null) &&
                                    <img src={item.icon} className={`${iconSize} font-bold`} />
                                }
                                <p className={`font-baloo ${valueSize} ${leading} text-[#FFF]`}>{item.value}</p>
                            </div>
                            <p className={`${txtSize} text-center font-semibold ${leading} text-[#FFF]`}>{item.text}</p>
                        </div>
                    )
                }
                )
            }{
                data2.map((item) => {
                    return (
                        <div key={item.id} className={`${width} ${height} pt-4 pb-3 ${roundCorner} ${item.bgColor} flex flex-col items-center justify-center shadow-md ${gapY}`}>
                            <div className='h-auto w-auto flex flex-row items-center justify-center gap-x-1'>
                                {
                                 (item.icon !== null) &&
                                    <img src={item.icon} className={`${iconSize} font-bold`} />
                                }
                                <p className={`font-baloo ${valueSize} ${leading} text-[#FFF]`}>{item.value}</p>
                            </div>
                            <p className={`${txtSize} text-center font-semibold ${leading} text-[#FFF]`}>{item.text}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
