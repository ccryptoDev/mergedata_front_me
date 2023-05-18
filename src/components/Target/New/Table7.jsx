
import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';

const data = [
    { id: 1 , expenses: 'Sales Mgrs Comm & Incentives', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 2 , expenses: 'Salesperson Mgrs Comm & Inc.', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 3 , expenses: 'Salaries Salesperson', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 4 , expenses: 'Delivery Expense', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 5 , expenses: 'Policy Work', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 6 , expenses: 'Used Truck Expense', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 7 , expenses: 'Interest - Floor Plan - Vehicles', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 8 , expenses: 'Salaries Adminstration', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 9 , expenses: 'Nissa Versa', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 10 , expenses: 'Sales and Warranties', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
    { id: 11 , expenses: 'Sales Promotional', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
];

export default function Table6(shouldReduce = false) {

    // let behaviorTextColor = '';
    const behaviorIcon = { neutral };

    return (

        <div className="h-[555px]">
            <table className="min-w-full text-left text-sm font-light ">
                <thead className="font-medium text-xs leading-[50px] h-10">
                    <tr>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Expenses</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Jan</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Feb</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Mar</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Apr</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">May</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Jun</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Jul</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Aug</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Sep</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Oct</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Nov</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-4">Dec</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-auto h-[555px]'>

                    {
                        data.map((item) => {
                            // const beHavior = item.variance.behavior;

                            // function scoreColor() {

                            //     if (beHavior === 'up') {
                            //         behaviorTextColor = 'text-[#5EFF5A]'

                            //     }
                            //     else if (beHavior === 'down') {
                            //         behaviorTextColor = 'text-[#FF8181]'

                            //     }
                            //     else {
                            //         behaviorTextColor = 'text-[#FFBB0D]'
                            //     }
                            //     return <img src={behaviorIcon} />

                            // }

                            // function iconSelect() {
                            //     if (beHavior === 'up') {
                            //         return <img src={arrowUpGreen} />
                            //     }
                            //     else if (beHavior === 'down') {
                            //         return (<img src={arrowFatDownIcon} />)
                            //     }
                            //     else {
                            //         return <img src={neutral} />
                            //     }
                            // }
                            return (

                                <tr className={`h-auto ${((item.id) % 2 === 0) ? 'bg-[#151F39] brightness-90 rounded-x-2xl border-separate border-spacing-2 border border-transparent' : ''}`} key={item.id}>
                                    {/* <td className="h-[44px] w-min pl-6 items-center justify-start rounded-l-lg">
                                        <p className='text-xs text-purple-300 h-4'>
                                            {item.makeModel.brand}
                                        </p>
                                        <p className='text-base text-neutrals-300 h-5'>
                                            {item.makeModel.model}
                                        </p>
                                    </td> */}
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto w-[100px] pl-4 rounded-l-2xl"><div className='flex items-center text-base '>{item.expenses}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.jan.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.jan.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.feb.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.feb.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.mar.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.mar.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.apr.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.apr.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.may.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.may.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.jun.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.jun.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.jul.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.jul.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.aug.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.aug.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.sep.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.sep.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.oct.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.oct.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.nov.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.nov.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto rounded-r-2xl"><div className='flex items-center text-base '>{item.dec.value}</div>
                                     <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.dec.percentage}</div></td>
                                    {/* <td className="whitespace-nowrap text-neutrals-300 h-12 text-base flex flex-row flex-nowrap items-center bg-[#151F39] brightness-90">
                                        <p className='pr-2 text-base'>{item.variance.value}%</p>
                                        <p className='pr-1 '>{iconSelect()}</p>
                                        <p className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}>
                                            {item.variance.percent}%
                                        </p>
                                    </td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

