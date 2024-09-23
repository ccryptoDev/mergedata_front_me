import InventoryCardDynamic from '@/components/Target/New/InventoryCardDynamic';


function Quad ({ summary = {} }) {
    const data = summary.rows.map((row, index) => {
        return {
            id: index,
            name: row.values[0],
            quantity: row.values[1],
        };
    })
    return (
        <InventoryCardDynamic
            reportInfo={summary.reportConfig}
            dataInfo={data}
        />
    )
}

export default Quad;
