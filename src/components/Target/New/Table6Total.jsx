import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';

const data =
    [{ id: 1, total: 'Total', variance: { value: 12, percent: 2, behavior: 'up' }, inventory: 28, daysSupply: 28, totalUnits: 163, gp: 11, forecast: '12', tracking: 27, pvrGoal: '-$2.982' }]
    ;

export default function Table6Total() {

    let behaviorTextColor = '';
    const behaviorIcon = { neutral };

    return (

        <div className="overflow-y-hidden h-[550px] my-3 ">
            <table className="min-w-full h-[60px] text-left text-sm font-light bg-neutrals-700 rounded-2xl flex items-center">
                <tbody className=''>

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

                                <tr className=' h-[60px] w-full flex items-center' key={item.id}>
                                    <td className="h-[44px] w-[140px] rounded-l-lg text-lg font-bold text-neutrals-00 flex items-center justify-center pl-4">
                                        {item.total}
                                    </td>
                                    <td className="whitespace-nowrap text-neutrals-100 h-auto text-base w-[118px] text-center">{item.inventory}</td>
                                    <td className="whitespace-nowrap text-neutrals-100 h-auto text-base text-start w-[116px]">{item.daysSupply}</td>
                                    <td className="whitespace-nowrap text-neutrals-100 h-auto w-[118px] text-start text-base">{item.totalUnits}</td>
                                    <td className="whitespace-nowrap text-neutrals-100 h-auto text-base text-start w-[50px]">{item.gp}%</td>
                                    <td className="whitespace-nowrap text-neutrals-100 h-auto text-base w-[85px]">{item.forecast}</td>
                                    <td className="whitespace-nowrap text-neutrals-100 h-12 w-20 flex items-center text-base pl-6 rounded-l-[18px] bg-[#151F39] brightness-90">{item.tracking}</td>
                                    <td className="whitespace-nowrap text-neutrals-100 h-12 text-base flex flex-row flex-nowrap items-center bg-[#151F39] brightness-90">
                                        <p className='pr-2 text-base'>{item.variance.value}%</p>
                                        <p className='pr-1 '>{iconSelect()}</p>
                                        <p className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}>
                                            {item.variance.percent}%
                                        </p>
                                    </td>
                                    <td className="whitespace-nowrap text-neutrals-100 text-sm flex items-center justify-center text-center w-[140px] h-12 pr-4 pl-2 rounded-r-2xl bg-[#151F39] brightness-90">{item.pvrGoal}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

