import PercentageBigSlider from "@/components/Target/New/PercentageBigSlider";
import Kpislider from "@/components/Target/New/Kpislider";
import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';

import { useState } from "react";

export default function TotalUniqueVisitorsCard() {
    const [list, setList] = useState([
        { id: 1, title: 'Set', value: '431', percentage: '21%', slidervalue: 'w-[54%]' },
        { id: 2, title: 'Shown', value: '253', percentage: '-19%', slidervalue: 'w-[78%]' },
        { id: 3, title: 'Sold', value: '875', percentage: '101%', slidervalue: 'w-[95%]' },
    ]);

    const [data, setData] = useState([
        { id: 1, title: 'Autotrader.com', barcolor: 'bg-gradient-to-l from-pink-500 via-purple-500 to-purple-900', barLength: 'w-[65%]', iconleft: 'Building', value1: '546', value2: '+ 1,430 ' },
        { id: 2, title: 'Facebook', barcolor: 'bg-gradient-to-l from-teal-400 to-blue-600', barLength: 'w-[58%]', iconleft: 'Men', value1: '468', value2: '+ 1,210' },
        { id: 3, title: 'Google', barcolor: 'bg-gradient-to-l from-teal-400 to-blue-600', barLength: 'w-[50%]', iconleft: 'Building2', value1: '600', value2: '+ 1,001' },
        { id: 4, title: 'CRM', barcolor: 'bg-gradient-to-l from-yellow-200 to-orange-500', barLength: 'w-[40%]', iconleft: 'Building3', value1: '287', value2: '+ 1,032' },
        { id: 5, title: 'Website', barcolor: 'bg-gradient-to-l from-yellow-200 to-orange-500', barLength: 'w-[38%]', iconleft: 'Building4', value1: '169', value2: '+ 443' },
    ]);
    return (
        <div className='w-[676px] h-[676px] bg-neutrals-900 rounded-2xl flex flex-col justify-between'>

            <div className='w-[602px] mx-9 pt-9'>
                <div className='mb-[51px] flex flex-col justify-start'>
                    <p className='font-baloo font-bold text-2xl text-[#FFFFFF] '>Total Unique Visitors
                    </p>
                    <div className='flex flex-row items-center'>
                        <p className='pr-2 font-baloo font-bold text-2xl text-[#FFFFFF] '>6,466
                        </p>
                        <img src={arrowUpGreen} className='mt-[2px] w-[11px] h-[7px]' />
                        <p className='text-[#5EFF5A] font-baloo font-bold text-sm flex items-center'>10%</p>
                    </div>

                </div>
                <div className='pt-3 grid gap-y-6 w-full'>
                    {data.map((item) => {
                        return (
                            <PercentageBigSlider
                                key={item.id}
                                barcolor={item.barcolor}
                                barLength={item.barLength}
                                iconleft={item.iconleft}
                                title={item.title}
                                value1={item.value1}
                                value2={item.value2}
                            />
                        );
                    })}
                </div>
            </div>

            <div className='pt-6 w-[676px] h-[138px] bg-neutrals-800 rounded-2xl flex flex-col items-center self-end'>

                <div className='flex flex-row justify-between w-[580px] h-[74px] mb-[33px]'>
                    {list.map((item) => {
                        return (
                            <Kpislider
                                key={item.id}
                                title={item.title}
                                value={item.value}
                                percentage={item.percentage}
                                slidervalue={item.slidervalue}
                            />
                        );
                    })}
                </div>

            </div>

        </div>
    )
}
