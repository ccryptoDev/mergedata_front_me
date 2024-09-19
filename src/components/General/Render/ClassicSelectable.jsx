import { useEffect, useState } from 'react';

import Card from '@/components/Target/New/Card';
import IconNameBarIncreaseDynamic from '@/components/Target/New/IconNameBarIncreaseDynamic';
import IconNameBarIncreaseTable from '@/components/Target/New/IconNameBarIncreaseTable';
import NameIncreaseDropdownDynamic from '@/components/Target/New/NameIncreaseDropdownDynamic';
import { useSumariesForASubSection } from '@/hooks/useSumariesForASubSection';
import { formatNumbers } from '@/utils/helperFunctions';
import Chart from '@/components/General/Render/Chart';


function ClassicSelectable ({ summary = {}, handleSummaryClick }) {
    const { getReportUpdated } = useSumariesForASubSection();
    const [summaryUpdatedRows, setSummaryUpdatedRows] = useState(summary.rows);

    const getNewSummary = async (selectedOptions) => {
        const newSummary = await getReportUpdated({ reportId: summary.reportConfig.id, selectedOptions });
        setSummaryUpdatedRows(newSummary.rows);
    }

    useEffect(() => {
        setSummaryUpdatedRows(summary.rows);
    }, [summary]);

    if (summary.nameReport === 'Models') {
        return (
            <Chart
                summary={summary}
                handleSummaryClick={handleSummaryClick}
            />
        );
    }

    return (
        <Card
            height='h-[20.8em]'
            width='w-[23.3em]'
            margin={'mb-0'}
            gapY='gap-y-[1.5em]'
            onClick={() => handleSummaryClick(summary.reportConfig)}
        >
            <NameIncreaseDropdownDynamic
                changeSelectedOptions={(selectedOptions) => getNewSummary(selectedOptions)}
                title={summary.reportConfig.name}
                columns={summary.columns}
            />
            {
                summaryUpdatedRows &&
                <IconNameBarIncreaseTable>
                    {summaryUpdatedRows.map((row, index) => {
                        return (
                            <IconNameBarIncreaseDynamic
                                key={index}
                                title={row.values[0]}
                                value={row.values[1]}
                                percentage={row.values[2] ? `${formatNumbers(row.values[2])}%` : null}
                            />
                        )
                    })}
                </IconNameBarIncreaseTable>
            }
        </Card>
    );
}

export default ClassicSelectable;
