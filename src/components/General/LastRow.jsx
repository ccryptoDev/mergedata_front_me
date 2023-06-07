import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';


export default function LastRow ({ shouldReduce = false, report }) {
    let behaviorTextColor = '';
    const behaviorIcon = { neutral };
    let beHavior = '';
    function scoreColor () {
        if (beHavior === 'up') {
            behaviorTextColor = 'text-[#5EFF5A]'
        } else if (beHavior === 'down') {
            behaviorTextColor = 'text-[#FF8181]'
        } else {
            behaviorTextColor = 'text-[#FFBB0D]'
        }
        return <img src={behaviorIcon} />
    }

    function iconSelect () {
        if (beHavior === 'up') {
            return <img src={arrowUpGreen} />
        } else if (beHavior === 'down') {
            return (<img src={arrowFatDownIcon} />)
        } else {
            return <img src={neutral} />
        }
    }

    return (
        <div className={`h-[60px] flex flex-col ${!shouldReduce ? 'w-[1363px]' : 'w-[550px]'}`}>
            <table className="whitespace-nowrap h-[60px] text-left text-sm font-light bg-[#505A78] rounded-2xl">
                <tbody className='overflow-y-auto h-auto pb-6'>
                    {
                        report?.rows.slice(-1).map((row, index) => {
                            return (
                                <tr className='h-auto rounded-x-2xl border-separate border-spacing-2 flex items-center' key={index}>
                                    {row.map((text, index) => {
                                        if (text.includes('::')) {
                                            beHavior = text.split('::')[0]
                                            return (
                                                <td key={`row-item-${index}`} className={`text-neutrals-100 h-12 text-base flex flex-row flex-nowrap items-center justify-center mt-[5px] px-2 rounded-2xl bg-[#151F39] brightness-90 ${shouldReduce ? 'w-[100px]' : 'w-[130px]'}`}>
                                                    <div className='h-[48px] flex flex-row justify-center items-center bg-[#000000] brightness-90 rounded-l-2xl rounded-r-2xl px-2' >
                                                        <p className='pr-1 '>{iconSelect()}</p>
                                                        <p className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}>
                                                            {text.split('::')[1]}
                                                        </p>
                                                    </div>
                                                </td>
                                            )
                                        }
                                        if (index === 0) return <td key={`row-item-${index}`} className="whitespace-nowrap text-neutrals-300 h-auto w-[279px] pl-11 rounded-l-2xl mr-[26px]"><div className='text-lg font-bold text-neutrals-00'>{text}</div></td>
                                        if (index === 1) return <td key={`row-item-${index}`} className={`whitespace-nowrap text-neutrals-300 h-auto px-1 ${shouldReduce ? 'w-[97px]' : 'w-[164px]'}`}><div className=' text-base '>{text}</div></td>
                                        if ([2, 3, 4].includes(index) && !shouldReduce) return <td key={`row-item-${index}`} className=" whitespace-nowrap text-neutrals-300 h-auto w-[275px]"><div className='text-base '>{text}</div></td>
                                        if ([2, 3, 4].includes(index) && shouldReduce) return null
                                        return <td key={`row-item-${index}`} className=" whitespace-nowrap text-neutrals-300 h-auto w-[176px]"><div className='text-base '>{text}</div></td>
                                    })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

