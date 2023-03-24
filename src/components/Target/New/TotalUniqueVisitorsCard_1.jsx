import PercentageBigSlider from "@/components/Target/New/PercentageBigSlider";
import Kpislider from "@components/Target/New/Kpislider";

import { useState } from "react";

export default function TotalUniqueVisitorsCard() {
    const [list, setList] = useState([
        { id: 1, title: 'Set', value: '431', percentage: '21%', slidervalue: 'w-[54%]' },
        { id: 2, title: 'Shown', value: '253', percentage: '-19%', slidervalue: 'w-[78%]' },
        { id: 3, title: 'Sold', value: '875', percentage: '101%', slidervalue: 'w-[95%]' },
    ]);

    const [data, setData] = useState([
        { id: 1, title: 'New Emails Lead', barcolor: 'bg-gradient-to-l from-pink-500 via-purple-500 to-purple-900', barLength: 'w-[44%]', iconleft: 'Building', value1: '546', value2: '+ 1,430' },
        { id: 2, title: 'Used Emails Lead', barcolor: 'bg-gradient-to-l from-pink-500 via-purple-500 to-purple-900', barLength: 'w-[49%]', iconleft: 'Men', value1: '468', value2: '+ 1,210' },
        { id: 3, title: 'Phone Calls', barcolor: 'bg-gradient-to-l from-teal-400 to-blue-600', barLength: 'w-[50%]', iconleft: 'Building2', value1: '600', value2: '+ 1,001' },
        { id: 4, title: 'Web Site Appt Set', barcolor: 'bg-gradient-to-l from-yellow-200 to-orange-500', barLength: 'w-[58%]', iconleft: 'Building3', value1: '287', value2: '+ 1,032' },
        { id: 5, title: 'Web Site Appt Sold', barcolor: 'bg-gradient-to-l from-yellow-200 to-orange-500', barLength: 'w-[65%]', iconleft: 'Building4', value1: '169', value2: '+ 443' },
    ]);
    return (
        <div className='mb-8 w-[676px] h-[676px] bg-neutrals-900 rounded-2xl'>
            <div className='w-[676px] h-[195px] bg-neutrals-800 rounded-2xl flex flex-col justify-between items-center'>
                <div className='w-[676px] px-12 pt-8'>
                    <p className='font-baloo font-bold text-2xl text-[#FFFFFF] '>
                        Appoints
                    </p>
                </div >

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
            <div className='w-[602px] mx-9 mt-12'>
                <div className='mb-8'>
                    <p className='font-baloo font-bold text-2xl text-[#FFFFFF] '>Lead Performance
                    </p>
                </div>
                <div className='grid gap-y-6 w-full'>
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
        </div>
    )
}
