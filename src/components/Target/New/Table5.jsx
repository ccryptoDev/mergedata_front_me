import arrowFatDownIcon from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';

const data = [
    { id: 1, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '35,123', behavior: 'up', percent: 2 } },
    { id: 2, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '62,210', behavior: 'steady', percent: 13 } },
    { id: 3, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '45,978', behavior: 'down', percent: 4 } },
    { id: 4, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '34,274', behavior: 'up', percent: 8 } },
    { id: 5, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '28,256', behavior: 'up', percent: 23 } },
    { id: 6, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '42,623', behavior: 'steady', percent: 1.2 } },
    { id: 7, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '45,123', behavior: 'steady', percent: 12 } },
    { id: 8, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '25,333', behavior: 'up', percent: 10 } },
    { id: 9, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '35,128', behavior: 'up', percent: 18 } },
    { id: 10, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '55,123', behavior: 'down', percent: 4 } },
    { id: 11, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '12,426', behavior: 'steady', percent: 22 } },
    { id: 12, stores: 'Alameda Honda', days: '98', stockNumber: 'PL17JO60', makeModel: { brand: 'Subaru', model: 'Ascent' }, year: '2022', miles: 43, color: 'Black', glBalance: { value: '67,987', behavior: 'up', percent: 9 } },
];

export default function Table5({
    shouldReduce,
    showLargeTable,
}) {

    let behaviorTextColor = '';

    return (

        <div className="overflow-y-hidden h-[550px] my-3">
            <table className="min-w-full text-left text-sm font-light ">
                <thead className="font-medium text-xs leading-[50px] h-12">
                    <tr>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-start pl-6">Stores</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold px-0">Days</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold px-0">Stock #</th>
                        <th scope="col" className="text-purple-50 text-sm font-bold text-center">Make/Model</th>

                        { (!showLargeTable) ? null : <th scope="col" className="text-purple-50 text-sm font-bold text-center">Year</th>}
                        { (!showLargeTable) ? null : <th scope="col" className="text-purple-50 text-sm font-bold pl-0">Miles</th>}
                        { (!showLargeTable) ? null : <th scope="col" className="text-purple-50 text-sm font-bold text-center pr-0">Color</th>}
                        <th scope="col" className="text-purple-50 text-sm font-bold text-center pr-0">GL Balance</th>
                    </tr>
                </thead>
                <tbody className=''>

                    {
                        data.map((item) => {
                            const beHavior = item.glBalance.behavior;

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

                                <tr className={`h-[56px] rounded-r-xl ${((item.id) % 2 === 0) ? 'bg-[#192543] rounded-r-xl' : 'rounded-r-xl'}`} key={item.id}>
                                    <td className="whitespace-nowrap text-neutrals-300 h-12 pl-6 font-semibold text-base rounded-l-xl">{item.stores}</td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-12 text-xs">{item.days}</td>
                                    <td className="whitespace-nowrap text-neutrals-300 h-12 text-xs">{item.stockNumber}</td>
                                    <td className="whitespace-nowrap h-auto flex flex-col justify-center items-center">
                                        <p className='text-xs text-purple-300 h-3 flex items-center'>
                                            {item.makeModel.brand}
                                        </p>
                                        <p className='text-base text-neutrals-300 h-4 flex items-center'>
                                            {item.makeModel.model}
                                        </p>
                                    </td>
                                    { (!showLargeTable) ? null : <td className="whitespace-nowrap text-neutrals-300 h-12 text-smb text-start">{item.year}</td>}
                                    { (!showLargeTable) ? null : <td className="whitespace-nowrap text-neutrals-300 h-12 text-sm text-start pl-2">{item.miles}</td>}
                                    { (!showLargeTable) ? null : <td className="whitespace-nowrap text-neutrals-300 h-12 text-sm text-center">{item.color}</td>}
                                    <td className="whitespace-nowrap text-neutrals-300 h-12 rounded-xl mt-[0.27em] text-sm bg-[#0e1628] text-center flex flex-row justify-center">
                                        <span className='pr-2 flex items-center'>{item.glBalance.value}</span>
                                        <span className='pr-1 flex items-center'>{iconSelect()}</span>
                                        <span className={`flex items-center ${scoreColor()} ${behaviorTextColor}`}>
                                            {item.glBalance.percent}%
                                        </span>
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

