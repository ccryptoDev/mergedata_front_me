import { PieChart, Pie, Label, Cell } from 'recharts';
import mouse from '@/assets/svg/mouse.svg'

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#785FE2', '#FF7D05', '#01F1E3', '#785FE2'];

const CustomLabel = ({ viewBox, labelText, value }) => {
    const { cx, cy } = viewBox;
    return (
        <g>
            <text
                x={cx}
                y={cy}
                className="recharts-text recharts-label"
                textAnchor="middle"
                dominantBaseline="central"
                alignmentBaseline="central"
                fill="#FFFFFF"
                fontSize="20"
                fontWeight="700"
                fontFamily='baloo'
                
            >
                {value}
            </text>
        </g>
    );
};

export default function ProgressPieResume({
    endAngle=0, value=0, gameNumber=0, date='today' 
}) {
    return (
        <div className='w-[293px] h-[72px] bg-[#161A3E] flex flex-row items-center pl-2'>
            <div className='w-[62px] h-[62px] mr-4'>

                <PieChart width={80} height={80} >
                    <Pie
                        data={data}
                        cx={25}
                        cy={25}
                        innerRadius={23}
                        outerRadius={29}
                        fill="#8884d8"
                        paddingAngle={-10}
                        dataKey="value"
                        stroke="none"
                        legendType="circle"
                        startAngle={0}
                        endAngle={endAngle}
                        cornerRadius={100}
                        labelLine={false}
                        isAnimationActive={true}
                        // label={}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Label
                            content={<CustomLabel labelText="" value={value} />}
                            position="center"
                        />
                    </Pie>
                </PieChart>
            </div>
            <div className='w-[180px] h-12 flex flex-col'>
                <div className='h-6 text-[#FFFFFF] text-base '>{`Game  ${gameNumber}`}</div>
                <div className='h-6 text-[#FFFFFF] flex flex-row items-center gap-x-2'>
                    <div className='w-3 h-3 pb-3'><img src={mouse} /></div>
                    <div className='text-[#8B93A9] text-xs'>{date}</div>
                </div>
            </div>
        </div>
    )
}
