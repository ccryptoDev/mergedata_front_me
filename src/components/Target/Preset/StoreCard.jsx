import React, { useEffect, useState } from "react";
import MdLupeIcon from '@/components/General/Icons/MdLupeIcon';
import CheckNameSliderButtonCard from "@/components/Target/CheckNameSliderButtonCard";
import ByDepartmentCard from "@/components/Target/Preset/ByDepartmentCard";

export default function StoreCard() {
    const [showTargetCard, setShowTargetCard] = useState(false);
    const [clickedCancel, setClickedCancel] = useState(false);

    const [activeStore, setActiveStore] = useState('');

    const initialData = [
        { id: 0, title: 'Select All', subTitle: '', storeChecked: false },
        { id: 1, title: 'Predictive AI', subTitle: 'store', storeChecked: false },
        { id: 2, title: 'AI & Dealer', subTitle: 'Store', storeChecked: false },
        { id: 3, title: 'AI & Dealer', subTitle: 'Store', storeChecked: false },
        { id: 4, title: 'AI & Dealer', subTitle: 'Store', storeChecked: false },
    ];

    const [data, setData] = useState(initialData);

    const updateCheckedState = (index, checked) => {
        const updatedData = data.map((item, i) => {
            if (i === index) {
                setActiveStore(item.title);
                return { ...item, storeChecked: true };

            } else {
                return { ...item, storeChecked: false };
            }
        });
        setData(updatedData);
    };

    useEffect(() => {
        setClickedCancel(false);
    }, [showTargetCard]);

    return (
        <div className='z-0 w-[50em] h-[29em] bg-[#0D102C] rounded-2xl flex flex-col items-center pt-[1em] px-[0.5em] relative'>
            <div className='w-full h-[4.6em] px-[1em] flex flex-row items-center justify-between '>
                <div>
                    <p className="text-[#FFFFFF] font-baloo font-semibold ">42 Stores</p>
                </div>
                <div>
                    <form className="w-[38em] h-[2.62em] bg-[#05050F] border-[#212A43] border-[0.1875em] shadow-inner-xl flex flex-row items-center justify-between pl-0 pr-[0.75em] rounded-lg shadow-xl" >
                        <input
                            className="z-10 bg-transparent text-[1rem] text-[#EEECF1] placeholder:text-[#EEECF1]/50"
                            type="text"
                            placeholder="Store Search"
                        />
                        <button type="button" className='z-20 cursor-pointer'>
                            <MdLupeIcon />
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <div className="...">
                    {data.map((item, index) => (
                        <CheckNameSliderButtonCard
                            key={item.id}
                            title={item.title}
                            subTitle={item.subTitle}
                            onClick={() => {
                                setShowTargetCard(!showTargetCard);
                            }}
                            displayChecked={checked => updateCheckedState(index, checked)}
                            storeChecked={item.storeChecked}
                        />
                    ))}
                </div>
            </div>
            {
                showTargetCard && !clickedCancel && (
                    <div className='absolute right-[2px] top-[2px] z-50'>
                        <ByDepartmentCard
                            onClick={() => {
                                setClickedCancel(true)
                                setShowTargetCard(false);
                            }}
                            activeStore={activeStore}
                        />
                    </div>
                )
            }
        </div>
    );
}
