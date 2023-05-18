import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';

const data = [
    { id: 1, expenses: 'Total', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'up', percentage2: '10%' } },
]
export default function Table7Total(shouldReduce = false) {

    let behaviorTextColor = '';
    const behaviorIcon = { neutral };

    return (

        <div className={`h-[60px] flex flex-col ${!shouldReduce.shouldReduce ? 'w-[1363px]' : 'w-[550px]'}`}>
            <table className="whitespace-nowrap h-[60px] text-left text-sm font-light bg-[#505A78] rounded-2xl">
                <tbody className='overflow-y-auto h-auto pb-6'>
                    {
                        data.map((item) => {
                            const beHavior = item.variance.behavior;

                            function scoreColor() {

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

                            function iconSelect() {
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

                                <tr className='h-auto rounded-x-2xl border-separate border-spacing-2' key={item.id}>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto w-[336px] pl-10 rounded-l-2xl "><div className='text-lg font-bold text-neutrals-00'>{item.expenses}</div></td>

                                    <td className={`whitespace-nowrap text-neutrals-300 h-auto px-3 text-center ${shouldReduce.shouldReduce ? 'w-[97px]' : 'w-[120px]'}`}><div className=' text-base '>{item.totalAmount}</div></td>

                                    {shouldReduce.shouldReduce ? null : <td className=" whitespace-nowrap text-neutrals-300 h-auto w-[164px] text-center"><div className='text-base '>{item.target}</div></td>}
                                    
                                    {shouldReduce.shouldReduce ? null : <td className="whitespace-nowrap text-neutrals-300 h-auto w-[255px] text-center"><div className='text-base '>{item.forecast}</div></td>}
                                    
                                    {shouldReduce.shouldReduce ? null : <td className="whitespace-nowrap text-neutrals-300 h-auto w-[256px] text-center"><div className='text-base '>{item.tracking}</div></td>}

                                    <td className={`whitespace-nowrap text-neutrals-100 h-12 text-base flex flex-row flex-nowrap items-center justify-center mt-[5px] rounded-2xl bg-[#151F39] brightness-90 ${shouldReduce.shouldReduce ? 'w-[100px]' : 'w-[206px]'}`}>
                                        <p className='pr-2 file:text-base'>{item.variance.percentage1}</p>
                                        <p className='pr-1 '>{iconSelect()}</p>
                                        <p className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}>
                                            {item.variance.percentage2}
                                        </p>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

