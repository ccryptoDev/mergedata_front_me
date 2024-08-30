import ScrollableList from '@/components/General/MergeChat/LeftPanel/ScrollableList'

export default function Contest({ data, onHandleSelectedItemFromList }) {
  return (
    <ScrollableList 
      title='Contest' 
      icon='CrownMd'
      data={data}
      onHandleSelectedItemFromList={onHandleSelectedItemFromList}
    />

  )
}
