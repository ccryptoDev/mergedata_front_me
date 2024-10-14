import { useState } from 'react';
import SetTargetButtons from '@/components/Target/Preset/SetTargetButtons';
import TargetPresetsSlider from '@/components/Target/TargetPresetsSlider';
import StoreCard from '@/components/Target/Preset/StoreCard';

export default function SetTargetCard() {
    const [showedCard, setShowedCard] = useState('AllStores');

    const onHandleCard = (showCard) => {
        setShowedCard(showCard);
    }

    return (
        <div className='bg-[#202449] w-[58em] h-[37.6em] rounded-2xl flex flex-col pt-[2.3em] px-[1.5em] justify-start items-start'>
            <div className='w-full h-[50px] flex flex-row justify-between items-center'>
                <div className='w-auto h-[2.25em] flex items-center justify-center gap-x-[1em]'>
                    <span className='font-baloo text-[#8B93A9] text-[1.5rem]'>02</span>
                    <span className='font-baloo text-[#FFFFFF] font-bold text-[1.5rem]'>Set Target</span>
                </div>
                <div>
                    <SetTargetButtons onHandleCard={onHandleCard}/>
                </div>
            </div>
            <div className='h-full w-full flex items-center justify-center'>
                {
                    showedCard === 'AllStores' ? <TargetPresetsSlider background='bg-[#202449]' /> : <StoreCard />
                }
            </div>
        </div>
    )
}
