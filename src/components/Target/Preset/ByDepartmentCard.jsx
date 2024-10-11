import { useState } from 'react';
import TitleVectorX from "@/components/Target/TitleVectorX";
import ToggleSwitch from "@/components/Target/ToggleSwitch";
import NameSliderCard from '@/components/Target/NameSliderCard';
import CollapseButton from '@/components/General/Buttons/CollapseButton';

export default function ByDepartmentCard(
    { onClick, activeStore  }
) {
    const initialData = [
        { id: 1, name: 'New', checked: false, collapse: true },
        { id: 2, name: 'Used', checked: false, collapse: true },
        { id: 3, name: 'F&I', checked: false, collapse: true },
        { id: 4, name: 'Parts', checked: false, collapse: true },
    ];

    const [data, setData] = useState(initialData);

    const handleCheck = (item) => {
        const newData = data.map((dataItem) =>
            dataItem.id === item.id ? { ...dataItem, checked: !dataItem.checked } : dataItem
        );
        setData(newData);
    };

    const collapseCard = (item) => {
        const newData = data.map((dataItem) =>
            dataItem.id === item.id ? { ...dataItem, collapse: !dataItem.collapse } : dataItem
        );
        setData(newData);
    };

    return (
        <div className='w-[40em] h-[28.8em] bg-[#202449] rounded-[0.75em] py-[1.125em] px-[1em] flex flex-col justify-start items-between shadow-3xl'>
            <div className='w-full h-[2.43em] flex flex-col items-start'>
                <TitleVectorX
                    width='w-full'
                    height=''
                    upperTitle={activeStore}
                    mainTitle='By Department'
                    upperTitleSize='text-[0.8125rem] leading-[1rem]'
                    mainTitleSize='text-[1.125rem] leading-[1.2rem]'
                    upperTitleWeigth='font-semibold'
                    mainTitleWeigth='font-bold'
                    upperTitleColor='text-[#B0A1EE]'
                    mainTitleColor='text-[#FFFFFF]'
                    upperTitleFont='font-baloo'
                    mainTitleFont='font-baloo'
                    onClick={onClick}
                />
                <div className='flex flex-col gap-y-[1em] w-full h-[23.125em] mt-[1em] '>
                    <div className='flex flex-col gap-y-[1em] w-full h-[23.125em] overflow-y-scroll'>
                        {data.map((item) => (
                            <>
                                <div key={item.id} className='w-full h-min-[2.5em] flex flex-row justify-between items-center px-[1em] py-[0.0625rem]'>

                                    <div className='flex flex-row items-center justify-between'>
                                        <label className='mr-4 w-4 h-4 flex justify-center items-center'>
                                            <input type='checkbox' id={`CheckBox-${item.id}`} checked={item.checked} onChange={() => handleCheck(item)} className='checked:bg-[#6043DD] w-4 h-4 bg-[#202449]/0 border-[#C2C8D7] border-[0.0625rem] hover:scale-110 hover:border-[#dfe5f5] rounded focus:ring-0 focus:ring-offset-0' />
                                        </label>
                                        <div className='w-[3.75em] h-[2em] flex flex-col items-start'>
                                            <div className='w-[3.75em] h-[1em] flex items-center'>
                                                <p className='text-xs font-semibold text-[#C2C8D7] font-baloo'>
                                                    Target
                                                </p>
                                            </div>
                                            <div className='w-[3.75em] h-4 flex items-center'>
                                                <p className='text-lg font-semibold text-[#C2C8D7] font-baloo'>
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <>
                                        {
                                            item.checked &&
                                            <div className='w-auto h-full flex flex-row items-center'>
                                                <div className='mr-[1em]'>
                                                    <ToggleSwitch
                                                        name1='Percentage'
                                                        name2='Amount' />
                                                </div>
                                                <CollapseButton onClick={() => collapseCard(item)} />
                                            </div>
                                        }
                                    </>
                                </div>
                                {
                                    item.checked && item.collapse && (
                                        <NameSliderCard />
                                    )
                                }

                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

