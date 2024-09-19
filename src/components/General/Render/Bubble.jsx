import BubbleGraphCardDynamic from '@/components/General/Graphs/BubbleGraphCardDynamic';


function Bubble ({ summary = {}, handleClick }) {
    return (
        <BubbleGraphCardDynamic
            name={summary.reportConfig.name}
            description={summary.reportConfig.description}
            // width={544}
            height={334}
            personalizedStyle={{
                flex: 'grow'
            }}
            data={summary.rows}
            handleClick={() => handleClick(summary.reportConfig)}
        />
    )
}

export default Bubble;
