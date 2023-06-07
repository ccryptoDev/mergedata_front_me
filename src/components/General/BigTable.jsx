import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';


export default function BigTable ({ shouldReduce = false, report }) {
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
        <div className="h-[555px] overflow-y-auto">
            <table className="min-w-full text-left text-sm font-light ">
                <thead className="font-medium text-xs leading-[50px] h-10">
                    <tr>
                        {report?.columns.map((column, index) => {
                            if (index === 0) return <th scope="col" key={`column-${index}`} className="text-purple-50 w-8 text-sm font-bold text-start pl-4">{column}</th>
                            if (index === 1) return <th scope="col" key={`column-${index}`} className="text-purple-50 text-sm font-bold w-[153px]">{column}</th>
                            if ([2, 3, 4].includes(index) && !shouldReduce) return <th scope="col" key={`column-${index}`} className="text-purple-50 text-sm font-bold">{column}</th>
                            if ([2, 3, 4].includes(index) && shouldReduce) return null
                            return <th scope="col" key={`column-${index}`} className="text-purple-50 text-sm font-bold pr-5 text-center">{column}</th>
                        })}
                    </tr>
                </thead>
                <tbody className='overflow-y-auto h-[555px]'>
                    {
                        report?.rows.map((row, index) => {
                            if (index !== (report.rows.length - 1)) {
                                return (
                                    <tr className={`h-auto border-[6px] border-transparent ${((index) % 2 === 0) ? 'bg-[#151F39]' : ''}`} key={index}>
                                        {row.map((text, index) => {
                                            if (text.includes('::')) {
                                                beHavior = text.split('::')[0]
                                                return (
                                                    <td key={`row-item-${index}`} className={'whitespace-nowrap text-neutrals-100 text-base rounded-r-2xl w-[126px]'}>
                                                        <div className='h-[48px] flex flex-row justify-center items-center bg-[#000000] brightness-90 rounded-l-2xl rounded-r-2xl px-2' >
                                                            <p className='pr-1 '>{iconSelect()}</p>
                                                            <p className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}>
                                                                {text.split('::')[1]}
                                                            </p>
                                                        </div>
                                                    </td>
                                                )
                                            }
                                            if (index === 0) return <td key={`row-item-${index}`} className=" text-neutrals-300 h-auto w-[260px] pl-4 rounded-l-2xl text-ellipsis"><div className='text-xl font-bold'>{text}</div></td>
                                            if (index === 1) return <td key={`row-item-${index}`} className="whitespace-nowrap text-neutrals-300 h-auto  w-[120px] "><div className=' text-base '>{text}</div></td>
                                            if ([2, 3, 4].includes(index) && !shouldReduce) return <td key={`row-item-${index}`} className="whitespace-nowrap text-neutrals-300 h-auto w-[256px] "><div className='text-base '>{text}</div></td>
                                            if ([2, 3, 4].includes(index) && shouldReduce) return null
                                            return <td key={`row-item-${index}`} className="whitespace-nowrap text-neutrals-300 h-auto w-[256px] "><div className='text-base '>{text}</div></td>
                                        })
                                        }
                                    </tr>
                                )
                            }
                            return null;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

