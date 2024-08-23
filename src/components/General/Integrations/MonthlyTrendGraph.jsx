
import { Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart } from 'recharts';

import ToggleSwitchIntegration from '@/components/General/Integrations/ToggleSwitchIntegration';

export default function MonthlyTrendGraph() {
  const data = [
    { name: 0, ReportReceived: 22, FailedReports: 22, Prior: 0 },
    { name: 1, ReportReceived: 42, FailedReports: 38, Prior: 2 },
    { name: 2, ReportReceived: 29, FailedReports: 29, Prior: 3 },
    { name: 3, ReportReceived: 25, FailedReports: 25, Prior: 5 },
    { name: 4, ReportReceived: 33, FailedReports: 33, Prior: 4 },
    { name: 5, ReportReceived: 21, FailedReports: 21, Prior: 5 },
    { name: 6, ReportReceived: 27, FailedReports: 27, Prior: 4 },
    { name: 7, ReportReceived: 34, FailedReports: 34, Prior: 7 },
    { name: 8, ReportReceived: 23, FailedReports: 23, Prior: 9 },
    { name: 9, ReportReceived: 29, FailedReports: 29, Prior: 13 },
    { name: 10, ReportReceived: 32, FailedReports: 32, Prior: 12 },
    { name: 11, ReportReceived: 26, FailedReports: 26, Prior: 14 },
    { name: 12, ReportReceived: 23, FailedReports: 23, Prior: 18 },
    { name: 13, ReportReceived: 25, FailedReports: 25, Prior: 20 },
    { name: 14, ReportReceived: 32, FailedReports: 33, Prior: 22 },
    { name: 15, ReportReceived: 27, FailedReports: 28, Prior: 21 },
    { name: 16, ReportReceived: 19, FailedReports: 21, Prior: 20 },
    { name: 17, ReportReceived: 23, FailedReports: 23, Prior: 16 },
    { name: 18, ReportReceived: 31, FailedReports: 31, Prior: 20 },
    { name: 19, ReportReceived: 17, FailedReports: 17, Prior: 23 },
    { name: 20, ReportReceived: 26, FailedReports: 26, Prior: 30 },
    { name: 21, ReportReceived: 23, FailedReports: 22, Prior: 31 },
    { name: 22, ReportReceived: 29, FailedReports: 28, Prior: 28 },
    { name: 23, ReportReceived: 33, FailedReports: 32, Prior: 27 },
    { name: 24, ReportReceived: 16, FailedReports: 17, Prior: 23 },
    { name: 25, ReportReceived: 26, FailedReports: 25, Prior: 28 },
    { name: 26, ReportReceived: 22, FailedReports: 21, Prior: 31 },
    { name: 27, ReportReceived: 33, FailedReports: 32, Prior: 33 },
    { name: 28, ReportReceived: 22, FailedReports: 22, Prior: 34 },
    { name: 29, ReportReceived: 23, FailedReports: 23, Prior: 39 },
    { name: 30, ReportReceived: 34, FailedReports: 34, Prior: 40 },
  ];

  return (
    <div className='w-[874px] h-[625px] px-6 pt-6 flex flex-col justify-start items-center '>
      <div className='w-[842px] h-[36px] flex flex-row justify-between items-center pl-1 '>
        <p className='text-[#FFFFFF] font-baloo text-2xl'>Monthly Trend</p>
        <div className='w-[185px] h-[24px] flex flex-row items-center'>
          <p className='text-[#FFFFFF] text-sm'>Integrations</p>
          <ToggleSwitchIntegration />
          <p className='text-[#FFFFFF] text-sm'>Files</p>
        </div>
      </div>
      <ComposedChart
        width={860}
        height={535}
        data={data}
        margin={{
          top: 2,
          right: 2,
          bottom: 2,
          left: -20,
        }}
        vertical={false}
        horizontal={false}
        className='mt-3'
        overflow='hidden'
      >
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#E1FE7E" stopOpacity={0.8} />
            <stop offset="90%" stopColor="#95D319" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#F89A70" stopOpacity={0.8} />
            <stop offset="90%" stopColor="#F4392C" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <CartesianGrid
          horizontal={true}
          vertical={false}
          strokeDasharray="0 0"
          stroke="#AAAAAE"
          strokeWidth={1}
          strokeOpacity={0.2}
          strokeLinejoin='round'
          strokeLinecap='round'
        />
        <YAxis
          axisLine={{ stroke: 'transparent' }}
          dataKey="ReportReceived"
          yAxisId="left"
          domain={[0, 75]}
          tickLine={false}
          interval={0}
          tickCount={16}
          tick={{ fill: '#AAAAAE', dx: -10, dy: 5 }}
          style={{ fontSize: 12, overflow: 'visible' }}
        />
        <XAxis
          axisLine={{ stroke: 'transparent' }}
          dataKey="name"
          interval={1}
          tickCount={16}
          domain={[0, 30]}
          tick={{ fontSize: 12, fill: '#AAAAAE', dy: 10 }}
          tickLine={false}
        />
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          height={20}
          align="right"
          iconType="circle"
          formatter={(value, entry, index) => (
            <span style={{ color: '#CACACC', fontSize: 11 }}>{value}</span>
          )}
          padding={{ top: 10, right: 0, left: 0, bottom: 0 }}
        />
        <Bar
          dataKey="FailedReports"
          barSize={5.66}
          radius={50}
          fill="url(#gradient2)"
          yAxisId="left"
          stackId="a"
        />
        <Bar
          dataKey="ReportReceived"
          barSize={5.66}
          radius={50}
          fill="url(#gradient1)"
          yAxisId="left"
          stackId="a"
        />
        <Line
          type="monotone"
          dataKey="Prior"
          stroke="#BDBDBD"
          yAxisId="left"
          strokeDasharray="5 5"
          dot={false}
          legendType="line"
        />
      </ComposedChart>
    </div>
  );
}