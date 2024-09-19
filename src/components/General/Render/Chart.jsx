import { useEffect, useState } from 'react';

import LineGraph from '@/components/General/Graphs/LineChart';
import Card from '@/components/Target/New/Card';
import IconNameBarIncreaseDynamic from '@/components/Target/New/IconNameBarIncreaseDynamic';
import IconNameBarIncreaseTable from '@/components/Target/New/IconNameBarIncreaseTable';
import NameIncreaseDropdownDynamic from '@/components/Target/New/NameIncreaseDropdownDynamic';
import ModelsIndividualStatus from '@/components/Target/New/ModelsIndividualStatus';
import { increaseStatus, formatNumbers } from '@/utils/helperFunctions';
import { useSumariesForASubSection } from '@/hooks/useSumariesForASubSection';


function Chart ({ summary = {}, handleSummaryClick }) {
    const { getReportUpdated } = useSumariesForASubSection();
    const [summaryUpdated, setSummaryUpdated] = useState(summary);

    useEffect(() => {
        setSummaryUpdated(summary);
    }, [summary]);

    const getNewSummary = async (selectedOptions) => {
        const newSummary = await getReportUpdated({ reportId: summary.reportConfig.id, selectedOptions });
        setSummaryUpdated(newSummary);
    }

    let description = summaryUpdated?.reportConfig?.description || '';
    let increase = null;
    let percentageDirty = null;
    let percentage = null;
    let newDescription = null;
    let rows = summaryUpdated?.rows?.rows || [];
    let resumes = null;
    if (description?.includes('%')) {
        description = summaryUpdated.reportConfig.description?.split('&')[1];
        increase = description?.split(';')[0];
        percentageDirty = description?.split(';')[1].trim();
        percentage = percentageDirty?.split('%')[0];
        newDescription = percentageDirty?.split('%')[1];
    }
    if (summaryUpdated?.rows?.length > 3) {
        rows = summaryUpdated.rows.slice(0, 3);
        resumes = summaryUpdated.rows.slice(3);
    }
    const { icon, textColor } = increaseStatus(increase === 'arrow_up' ? 'up' : increase === 'arrow_down' ? 'down' : 'neutral');
    return (
        <div className='flex flex-col bg-[#3E4761] lg:col-span-4 col-span-2 row-span-2  rounded-2xl justify-between grow'>
            <>
                <Card
                    height='h-auto'
                    width='w-[23.3em]'
                    gapY='gap-1'
                    onClick={() => handleSummaryClick(summary.reportConfig)}
                >
                    <NameIncreaseDropdownDynamic
                        changeSelectedOptions={(selectedOptions) => getNewSummary(selectedOptions)}
                        title={summary.reportConfig.name}
                        columns={summary.columns}
                    />
                    <div className='flex gap-2 mt-4 items-center justify-center h-5'>
                        {percentage && (
                            <div className='flex'>
                                <img src={icon} />
                                <p
                                    className={`font-baloo ${textColor} text-[0.75em] font-bold`}
                                >
                                    {`${+(
                                        parseFloat(percentage)
                                    ).toFixed(2)}%`.replace('-', '')}
                                </p>
                            </div>
                        )}
                        <p className='text-white text-[0.875em] leading-[1em] opacity-60'>
                            {newDescription || description}
                        </p>
                    </div>
                    {
                        rows &&
                        <>
                            <LineGraph />
                            <IconNameBarIncreaseTable>
                                {rows.map((row, index) => {
                                    return (
                                        <IconNameBarIncreaseDynamic
                                            key={index}
                                            title={row.values[0]}
                                            value={row.values[1]}
                                            percentage={`${formatNumbers(row.values[2])}%`}
                                        />
                                    )
                                })}
                            </IconNameBarIncreaseTable>
                        </>
                    }
                </Card>
            </>
            <div className='flex justify-between px-[1.39em] py-[1.42em]'>
                {resumes?.map((resume, index) => {
                    return (
                        <ModelsIndividualStatus
                            key={index}
                            name={resume.values[0]}
                            value={resume.values[1]}
                            percentage={resume.values[2]}
                            showRangeBar={false}
                            showPercentageBar={true}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Chart;
