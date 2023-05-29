
import { PieChart, Pie, Label, Cell } from 'recharts';
import Decision from '@/components/General/Icons/Decision';
import circleLeds from '@/assets/svg/circleLeds.svg';

import orangePin from '@/assets/images/orangePin.png';
import purplePin from '@/assets/images/purplePin.png';
import bluePin from '@/assets/images/bluePin.png';

const data = [
    { name: 'Group A', value: 900 },
    { name: 'Group B', value: 400 },
    { name: 'Group C', value: 320 },
];

const COLORS = ['url(#g1)', 'url(#g3)', 'url(#g2)'];

function CustomLabel({ viewBox, value1, value2 }) {
    const { cx, cy } = viewBox;
    return (
        <>
            <text
                x={cx}
                y={cy - 34}
                fill="#5A5A89"
                className="recharts-text recharts-label"
                textAnchor="middle"
                dominantBaseline="central">
                <tspan fontSize="10" fontWeight='700' fontFamily='sans-serif'>COMPLETED CONTEST</tspan>
            </text>
            <text
                x={cx}
                y={cy + 15}
                fill="#FFFFFF"
                className="recharts-text recharts-label"
                textAnchor="middle"
                dominantBaseline="central">
                <tspan alignmentBaseline="middle" fontSize="60" fontWeight='600' fontFamily='sans-serif' >{value1}</tspan>

            </text>
            <text
                x={cx + 43}
                y={cy + 5}
                fill="#FFFFFF"
                className="recharts-text recharts-label"
                textAnchor="middle"
                dominantBaseline="central">
                <tspan fontSize="20" fontWeight='400' fontFamily='sans-serif'>{value2}</tspan>
            </text>
            <text
                x={cx}
                y={cy + 55}
                fill="#5A5A89"
                className="recharts-text recharts-label"
                textAnchor="middle"
                dominantBaseline="central">
                <tspan fontSize="6" fontWeight='700' fontFamily='sans-serif'>17/32 CONTESTS</tspan>
            </text>
        </>
    )
}

export default function PieGraph() {
    return (

        <div className='relative w-[317px] h-[265px] bg-[#05081E] flex flex-row items-center '>
            <PieChart width={325} height={285} >
                <defs>
                    <linearGradient id='g1'>
                        <stop offset='0%' stopColor='#007DF1' stopOpacity={0.9} />
                        <stop offset='90%' stopColor='#00F1E7' stopOpacity={1} />
                    </linearGradient>
                    <linearGradient id='g2'>
                        <stop offset='10%' stopColor='#FFB524' stopOpacity={0.7} />
                        <stop offset='90%' stopColor='#FF5924' stopOpacity={1} />
                    </linearGradient>
                    <linearGradient id='g3'>
                        <stop offset='100%' stopColor='#8424FF' stopOpacity={0.8} />
                        <stop offset='90%' stopColor='#6B01F1' stopOpacity={0.8} />
                    </linearGradient>
                </defs>
                <Pie
                    data={data}
                    cx={120}
                    cy={145}
                    innerRadius={160 / 2}
                    outerRadius={166 / 2}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                    legendType="circle"
                    startAngle={35}
                    endAngle={395}
                    // end={<CustomEnd />}
                    cornerRadius={0}
                    labelLine={false}
                    isAnimationActive={true}
                // label={}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

                    <Label width={30} position="center"
                        content={<CustomLabel value1={'53'} value2={'%'} />}>

                    </Label>

                </Pie>

            </PieChart>
            <div className='absolute top-[76px] left-[116px]'>
                <Decision name='CrownShadow' />
            </div>
            <div className='absolute top-[20px] left-[5px] w-[240px] h-[240px]'>
                <img src={circleLeds} />
            </div>
            <div className='absolute top-[35px] left-[205px] w-[60px] h-[60px] rounded-full border-[2.4px] border-[#F17401] bg-[#05081E] flex flex-col items-center '>
                <p className='text-[#5A5A89] font-extrabold text-[6px] mb-[-8px] flex justify-center'>ACTUAL</p>
                <p className='text-xl font-extrabold text-[#FFFFFF] flex justify-center'>15</p>
            </div>
            <div className='absolute top-[130px] left-[220px] w-[60px] h-[60px] rounded-full border-[2.4px] border-[#6B01F1] bg-[#05081E] flex flex-col items-center '>
                <p className='text-[#5A5A89] font-extrabold text-[6px] mt-[6px] mb-[-9px] flex justify-center '>NEAR TO END</p>
                <p className='text-xl font-extrabold text-[#FFFFFF] flex justify-center'>3</p>
            </div>
            <div className='absolute top-[185px] left-[183px]'>
                <img src={orangePin} alt='' />
            </div>
            <div className='absolute top-[203px] left-[75px]'>
                <img src={purplePin} alt='' />
            </div>
            <div className='absolute top-[88px] left-[186px]'>
                <img src={bluePin} alt='' />
            </div>
        </div>
    )
}
