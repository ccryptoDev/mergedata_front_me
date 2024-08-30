import ScrollableList from '@/components/General/MergeChat/LeftPanel/ScrollableList'

export default function PredictiveAITask({data}) {

  return (
    <ScrollableList 
      title='Predictive AI - Task' 
      icon='Clipboard'
      data={data}
    />
  )
}
