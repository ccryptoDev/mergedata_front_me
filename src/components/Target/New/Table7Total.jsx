import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';

const data = [
    { id: 1, expenses: 'Total', jan: { value: '$56273', percentage: '10%' }, feb: { value: '$56273', percentage: '10%' }, mar: { value: '$56273', percentage: '10%' }, apr: { value: '$56273', percentage: '10%' }, may: { value: '$56273', percentage: '10%' }, jun: { value: '$56273', percentage: '10%' }, jul: { value: '$56273', percentage: '10%' }, aug: { value: '$56273', percentage: '10%' }, sep: { value: '$56273', percentage: '10%' }, oct: { value: '$56273', percentage: '10%' }, nov: { value: '$56273', percentage: '10%' }, dec: { value: '$56273', percentage: '10%' } },
]
export default function Table7Total ({ shouldReduce = false, report }) {
    return (
        <div className={`h-[60px] flex flex-col ${!shouldReduce ? 'w-full' : 'w-[555px]'}`}>
            <table className="whitespace-nowrap h-[60px] text-left text-sm font-light bg-[#505A78] rounded-2xl">
                <tbody className='overflow-y-auto h-auto pb-6'>
                    {
                        data.map((item) => {
                            return (

                                <tr className='h-auto rounded-x-2xl border-separate border-spacing-2' key={item.id}>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto w-[270px] pl-10 rounded-l-2xl"><div className='flex items-center text-lg font-bold text-neutrals-00'>{item.expenses}</div></td>

                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.jan.value}</div>
                                        <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.jan.percentage}</div></td>

                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.feb.value}</div>
                                        <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.feb.percentage}</div></td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.mar.value}</div>
                                        <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.mar.percentage}</div></td>

                                    {shouldReduce ? null :

                                        <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.apr.value}</div>
                                            <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.apr.percentage}</div></td>
                                    }

                                    {shouldReduce ? null :
                                        <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.may.value}</div>
                                            <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.may.percentage}</div></td>
                                    } {shouldReduce ? null :
                                        <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.jun.value}</div>
                                            <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.jun.percentage}</div></td>
                                    } {shouldReduce ? null :
                                        <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.jul.value}</div>
                                            <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.jul.percentage}</div></td>
                                    } {shouldReduce ? null :
                                        <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.aug.value}</div>
                                            <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.aug.percentage}</div></td>
                                    } {shouldReduce ? null :
                                        <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.sep.value}</div>
                                            <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.sep.percentage}</div></td>
                                    } {shouldReduce ? null :
                                        <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.oct.value}</div>
                                            <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.oct.percentage}</div></td>
                                    } {shouldReduce ? null :
                                        <td className="whitespace-nowrap text-neutrals-300 h-auto "><div className='flex items-center text-base '>{item.nov.value}</div>
                                            <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.nov.percentage}</div></td>
                                    } {shouldReduce ? null :
                                        <td className="whitespace-nowrap text-neutrals-300 h-auto rounded-r-2xl pr-4"><div className='flex items-center text-base '>{item.dec.value}</div>
                                            <div className='text-[#5EFF5A] text-start pl-4 flex flex-row items-center'>   <img src={arrowUpGreen} className="w-[10px] h-[7px]" />{item.dec.percentage}</div></td>
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

