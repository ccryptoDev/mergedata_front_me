import FloorPlanCardsDynamic from '@/components/Target/New/FloorPlanCardsDynamic';


function Dual ({ summary = {} }) {
    return (
        <FloorPlanCardsDynamic
            reportInfo={summary.reportConfig}
            dataInfo={summary.rows}
        />
    )
}

export default Dual;
