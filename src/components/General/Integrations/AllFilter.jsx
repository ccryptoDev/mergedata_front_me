import { useRef, useState } from "react";

export default function AllFilter() {
  const filePickerRef = useRef(null);
  
  const [data, setData] = useState([
    { id: 1, name: 'All', checked: false },
    { id: 2, name: 'DMS', checked: false },
    { id: 3, name: 'CRM', checked: false },
    { id: 4, name: 'Website', checked: false },
    { id: 5, name: 'More', checked: false },
  ]);

  const handleOptionChange = (itemId) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === itemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };

  return (
    <div className='w-[160px] h-[184px] rounded-md bg-[#05081E] shadow-md shadow-md-[#fff] flex flex-col px-[18px] py-3'>
      {data.map((item) => (
        <div key={item.id} className='w-40 h-8 flex items-center gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <div
              onClick={() => handleOptionChange(item.id)}
              className={`w-[16px] h-[16px] rounded-full flex items-center justify-center border ${item.checked ? 'border-[#6043DD]' : 'bg-transparent border-[#A6ACBD]'} flex items-center justify-center`}
            >
              <div className={`w-[8px] h-[8px] rounded-full border ${item.checked ? 'bg-[#6043DD] border-[#6043DD]' : 'bg-transparent border-transparent'} flex items-center justify-center`}></div>
            </div>
            <label htmlFor={item.name} className='text-[#fff] font-baloo mt-[3px]'>{item.name}</label>
          </div>
          <input
            type='checkbox'
            id={item.name}
            ref={filePickerRef}
            checked={item.checked}
            onChange={() => handleOptionChange(item.id)}
            className='mr-2 hidden'
          />
        </div>
      ))}
    </div>
  );
}
