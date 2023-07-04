
import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';


export default function Table8 ({ shouldReduce = false, report }) {
    let behaviorTextColor = '';
    const behaviorIcon = { neutral };

    return (

        <div className="h-[555px] overflow-y-auto">
            <table className="min-w-full text-left text-sm font-light ">
                <thead className="font-medium text-xs leading-[50px] h-10 sticky top-0 z-10 bg-neutrals-900">
                    <tr>
                        <th scope="col" className="text-purple-50 w-8 text-sm font-bold text-start pl-4">{report?.columns[0]}</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold w-[153px]">{report?.columns[1]}</th>
                        {shouldReduce ? null : <th scope="col" className="text-purple-50 text-sm font-bold">{report?.columns[2]}</th>}
                        {shouldReduce ? null : <th scope="col" className="text-purple-50 text-sm font-bold ">{report?.columns[3]}</th>}
                        {shouldReduce ? null : <th scope="col" className="text-purple-50 text-sm font-bold ">{report?.columns[4]}</th>}
                        <th scope="col" className="text-purple-50 text-sm font-bold pr-5 text-center">{report?.columns[5]}</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto h-[555px]'>

                    {
                        report?.rows.map((row, index) => {
                            if (index !== (report.rows.length - 1)) {
                                const beHavior = row[6].split('::')[0];

                                function scoreColor () {

                                    if (beHavior === 'up') {
                                        behaviorTextColor = 'text-[#5EFF5A]'

                                    }
                                    else if (beHavior === 'down') {
                                        behaviorTextColor = 'text-[#FF8181]'

                                    }
                                    else {
                                        behaviorTextColor = 'text-[#FFBB0D]'
                                    }
                                    return <img src={behaviorIcon} />

                                }

                                function iconSelect () {
                                    if (beHavior === 'up') {
                                        return <img src={arrowUpGreen} />
                                    }
                                    else if (beHavior === 'down') {
                                        return (<img src={arrowFatDownIcon} />)
                                    }
                                    else {
                                        return <img src={neutral} />
                                    }
                                }
                                return (

                                    <tr className={`h-auto border-[6px] border-transparent ${((index) % 2 === 0) ? 'bg-[#151F39]' : ''}`} key={index}>
                                        <td className=" text-neutrals-300 h-auto w-[260px] pl-4 rounded-l-2xl text-ellipsis text-start"><div className='text-base'>{row[0]}</div></td>
                                        <td className="whitespace-nowrap text-neutrals-300 h-auto  w-[120px] "><div className=' text-base '>{row[1]}</div></td>

                                        {shouldReduce ? null : <td className="whitespace-nowrap text-neutrals-300 h-auto w-[164px]"><div className='text-base '>{row[2]}</div></td>}

                                        {shouldReduce ? null : <td className="whitespace-nowrap text-neutrals-300 h-auto w-[256px] "><div className='text-base '>{row[3]}</div></td>}

                                        {shouldReduce ? null : <td className="whitespace-nowrap text-neutrals-300 h-auto w-[256px] "><div className='text-base '>{row[4]}</div></td>}

                                        <td className={'whitespace-nowrap text-neutrals-100 text-base rounded-r-2xl w-[126px]'}>
                                            <div className='h-[48px] flex flex-row justify-center items-center bg-[#000000] brightness-90 rounded-l-2xl rounded-r-2xl px-2' >
                                                <p className='pr-2 text-base'>{row[5]}</p>
                                                <p className='pr-1 '>{iconSelect()}</p>
                                                <p className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}>
                                                    {row[6].split('::')[1]}
                                                </p>
                                            </div>
                                        </td>
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
