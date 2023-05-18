
import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';

const data = [
    { id: 1, expenses: 'Sales Mgrs Comm & Incentives', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'up', percentage2: '10%' } },
    { id: 2, expenses: 'Salesperson Mgrs Comm & Inc.', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'down', percentage2: '10%' } },
    { id: 3, expenses: 'Salaries Salesperson', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'up', percentage2: '10%' } },
    { id: 4, expenses: 'Delivery Expense', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'up', percentage2: '10%' } },
    { id: 5, expenses: 'Policy Work', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'steady', percentage2: '10%' } },
    { id: 6, expenses: 'Used Truck Expense', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'up', percentage2: '10%' } },
    { id: 7, expenses: 'Interest - Floor Plan - Vehicles', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'down', percentage2: '10%' } },
    { id: 8, expenses: 'Salaries Adminstration', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'up', percentage2: '10%' } },
    { id: 9, expenses: 'Nissan Versa', totalAmount: '$46.273', target: 32, forecast: 32, tracking: 15, variance: { percentage1: '21%', behavior: 'down', percentage2: '10%' } },
];

export default function Table8(shouldReduce = false) {

    let behaviorTextColor = '';
    const behaviorIcon = { neutral };

    return (

        <div className="h-[555px]">
            <table className="min-w-full text-left text-sm font-light ">
                <thead className="font-medium text-xs leading-[50px] h-10">
                    <tr>
                        <th scope="col" className="text-purple-50 w-8 text-sm font-bold text-start pl-4">Expenses</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-center pl-2">Total Amount</th>
                        {shouldReduce.shouldReduce ? null : <th scope="col" className="text-purple-50 text-sm font-bold text-center pl-6">Target</th>}
                        {shouldReduce.shouldReduce ? null : <th scope="col" className="text-purple-50 text-sm font-bold text-center pl-12">Forecast</th>}
                        {shouldReduce.shouldReduce ? null : <th scope="col" className="text-purple-50 text-sm font-bold text-center pl-12">Tracking</th>}
                        <th scope="col" className="text-purple-50 text-sm font-bold text-center pr-5">Variance</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto h-[555px]'>

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
                                
                                <tr className={`h-auto border-[6px] border-transparent ${((item.id) % 2 === 0) ? 'bg-[#151F39]' : ''}`} key={item.id}>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto w-[260px] pl-4 rounded-l-2xl "><div className='text-xl font-bold'>{item.expenses}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto px-4 w-[120px] text-center "><div className=' text-base '>{item.totalAmount}</div></td>

                                    {shouldReduce.shouldReduce ? null : <td className="whitespace-nowrap text-neutrals-300 h-auto text-center w-[164px]"><div className='text-base '>{item.target}</div></td>}

                                    {shouldReduce.shouldReduce ? null : <td className="whitespace-nowrap text-neutrals-300 h-auto text-center w-[256px] "><div className='text-base '>{item.forecast}</div></td>}

                                    {shouldReduce.shouldReduce ? null : <td className="whitespace-nowrap text-neutrals-300 h-auto text-center w-[256px] "><div className='text-base '>{item.tracking}</div></td>}

                                    <td className={'whitespace-nowrap text-neutrals-100 text-base rounded-r-2xl'}>
                                        <div className='h-[48px] flex flex-row justify-center items-center bg-[#000000] brightness-90 rounded-l-2xl rounded-r-2xl px-2' >
                                            <p className='pr-2 text-base'>{item.variance.percentage1}</p>
                                            <p className='pr-1 '>{iconSelect()}</p>
                                            <p className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}>
                                                {item.variance.percentage2}
                                            </p>
                                        </div>
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

