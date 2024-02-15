import { useEffect, useState } from 'react';
import Decision from '@/components/General/Icons/Decision';


export default function ScrollableList({ title, icon, data, onHandleSelectedItemFromList }) {

  const [showList, setShowList] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);

  const selectedItemFromList = (itemName) => {
    const item = itemName;
    setSelectedItem(item);
  }
  
  useEffect(() => {
    if (selectedItem !== null) {
      onHandleSelectedItemFromList(selectedItem);
    } else { null }
  }, [selectedItem]); 

  return (
    <div className='flex flex-col'>
      <button
        onClick={() => setShowList(!showList)}
        className='w-full h-[2.0625em] flex flex-row gap-x-[0.3em] pt-[0.3em] pb-[0.3em] pl-[0.75em]'
      >
        <Decision name='ScrollDownIcon' />
        <Decision name={icon} />
        <p className='text-[#FFFFFF] text-[0.875rem]'>{title}</p>
      </button>

      {showList && (
        <div className='flex flex-col justify-start items-center w-full gap-y-[0.125em]'>
          {data.map(item => {
            return (
              <button
                key={item.id}
                className='w-full h-[1.75em] bg-transparent py-[0.125em] pl-[1.375em] gap-x-[0.3em] flex flex-row justify-start items-center hover:bg-[#35257A]'
                onClick={() => selectedItemFromList(item.name)}
              >
                <div className='w-[1.25em] h-[1.25em]'>
                  <img src={item.iconList} />
                </div>
                <p className='text-[#FFFFFF] text-[0.875rem]'>{item.name}</p>
              </button>
            )
          })}
        </div>
      )}

    </div>
  );
}
