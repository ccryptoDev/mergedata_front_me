import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceDot, CartesianGrid, CartesianAxis } from 'recharts';
import IconNameIconDropdownButton from '../Buttons/IconNameIconDropdownButton';

const data = [
    {
        name: 'Jan 2021',
        neutral: 12,
        pv: 3,
    },
    {
        name: 'Feb',
        neutral: 12,
        pv: 6,
    },
    {
        name: 'Mar',
        neutral: 12,
        pv: 7.5,
    },
    {
        name: 'Apr',
        neutral: 12,
        pv: 15,
    },
    {
        name: 'May',
        neutral: 12,
        pv: 16,
    },
    {
        name: 'Jun',
        neutral: 12,
        pv: 22,
    },
    {
        name: 'Jul',
        neutral: 12,
        pv: 24,
    },
    {
        name: 'Aug',
        neutral: 12,
        pv: 22,
    },
    {
        name: 'Sep',
        neutral: 12,
        pv: 19,
    },
    {
        name: 'Oct',
        neutral: 12,
        pv: 16,
    },
    {
        name: 'Nov',
        neutral: 12,
        pv: 15,
    },
    {
        name: 'Dec 2022',
        neutral: 12,
        pv: 16,
    },
];

export default function LineGraph() {
    return (
        <div className='z-0 relative w-[660px] h-[329px] bg-neutrals-900 rounded-[10px] flex flex-col pt-6 px-8 gap-y-6'>
            <div className='z-10 absolute top-[191px] left-[590px] border border-[#E5E8EF] w-[11.23px] h-[15.04px] bg-[#E5E8EF] rounded-full flex items-center justify-center'>
                <div className='w-[8.6px] h-[11.5px] border-[3px] border-[#3E4761] bg-[#3E4761] rounded-full flex items-center justify-center'>
                    <div className='w-[3.74px] h-[5px] bg-[#E5E8EF] rounded-full'>
                    </div>
                </div>
            </div>
            <div className='w-[458px] h-[42px] flex flex-row items-center justify-start'>
                <div className='w-auto h-[36px] pr-[7px] flex items-center'>
                    <p className='text-2xl text-[#FFFFFF] font-baloo font-bold'>
                        Pages View Per Session over time
                    </p>
                </div>
                <div> <IconNameIconDropdownButton
                    text='Top 5'
                    iconName=''
                    width='w-[88px]'
                    height='h-[42px]'
                    background='bg-[#05081E]'
                />
                </div>
            </div>
            <ResponsiveContainer width={597} height={213}>
                <LineChart
                    data={data}
                >
                    <defs>
                        <linearGradient id='selected'>
                            <stop offset='10%' stopColor='#FF4D8D' stopOpacity={1} />
                            <stop offset='90%' stopColor='#9BFF4D' stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="name"
                        padding={{ left: 10, right: 30 }}
                        fontSize={15}
                        fontFamily='baloo'
                        fontWeight={600}
                        stroke='#505A78'
                        axisLine={{ strokeWidth: 1 }}
                        strokeDasharray='3 8'
                        interval={10}
                    />
                    <YAxis
                        domain={[0, 30]}
                        allowDataOverflow={true}
                        fontSize={15}
                        fontFamily='baloo'
                        fontWeight={600}
                        stroke='#505A78'
                        axisLine={{ strokeWidth: 1 }}
                        strokeDasharray='3 8'
                        unit='k'
                        ticks={[0, 10, 20, 30]}
                    />
                    <Line
                        type='monotone'
                        dataKey='neutral'
                        dot={false}
                        stroke='#D6DBE8'
                        strokeWidth={1}
                    />
                    <Line
                        type='monotone'
                        dataKey='pv'
                        dot={false}
                        stroke='url(#selected)'
                        strokeWidth={4}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
