// import BlackTalker from '@/components/Target/BlackTalker';
import { useState } from "react";

export default function CheckNameSliderButtonCard({
    title = 'Select All',
    subTitle = '',
    onClick,
    displayChecked,
    storeChecked,
}) {
    const [checked, setChecked] = useState(storeChecked);

    const handleCheck = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        displayChecked(newChecked);
    };

    return (
        <div className={`px-[1em] w-[49em] h-[4.37em]  rounded-xl flex flex-row items-center justify-between hover:bg-[#35257A] ${ storeChecked ? 'bg-[#202449]' : 'bg-[#0D102C] opacity-80'}`}>
            <div className='w-[14.9em] h-[2.87em] flex flex-row items-center justify-center '>
                <input
                    type='radio'
                    name='storeRadioGroup'
                    checked={storeChecked}
                    onChange={() => { handleCheck() }}
                    className='checked:bg-[#6043DD] w-[1em] h-[1em] bg-[#202449]/0 border-[#C2C8D7] border-[1px] rounded focus:ring-0 focus:ring-offset-0 hover:scale-110 hover:border-[#dfe5f5]'
                />
                <label className='w-[15em] ml-[1em] h-[1.5em] flex flex-col justify-center'>
                    {
                        {subTitle} &&
                        <p className='text-[0.625rem] leading-3 text-[#C2C8D7] font-baloo'>
                            {subTitle}
                        </p>
                    }
                    <p className='text-[1.125rem] font-semibold text-[#FFFFFF] font-baloo'>
                        {title}
                    </p>
                </label>
            </div>
            <div className='relative w-[13.2em] h-[4.37em] flex flex-col justify-center items-center pt-[1.5em]'>
                <div className={`z-10 flex items-center w-full h-[10px] rounded-full justify-items-stretch content-center ${ storeChecked ? 'bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]' : 'bg-gradient-to-r from-[#3C1CC5] to-[#9043DD] opacity-20'}`} >
                    <div className='z-20 absolute left-[52%] items-center w-[4.56em] h-[0.56em] bg-[#FFFFFF]'> </div>
                    <div className='z-30 absolute left-[50%] items-center w-[1em] h-[1em] rounded-full bg-[#FFFFFF]'></div>
                </div>
                <div className='pt-[0.75em] flex justify-center text-[0.8125rem] font-normal'>
                    <p className='text-[#EEECF1]'>100%</p>
                </div>
                <div className={`z-40 absolute left-[80%] top-[25%] w-[1.5em] h-[1.5em] rounded-full bg-[#E5E8EF] flex items-center justify-center ${storeChecked ? '' : 'opacity-20'}`}>
                    <div className='w-[1.125em] h-[1.125em] rounded-full bg-[#3E4761] flex justify-center items-center'>
                        <div className='w-[0.5em] h-[0.5em] rounded-full bg-[#E5E8EF]'></div>
                    </div>
                </div>
            </div>
            <button onClick={onClick} className={`w-[7.625em] h-8 text-white border-[1px] border-[#6043DD] rounded flex items-center justify-center font-baloo text-sm font-semibold ${storeChecked ? 'bg-[#6043DD]' : 'bg-[#6043DD] opacity-20'}`}>
                <p>By Department</p>
            </button>
        </div>
    )
}

