import BlackTalker from '@/components/Target/BlackTalker';
import { useState } from "react";

function CheckNameSliderButtonCard() {

    const [checked, setChecked] = useState(false);

    return (

        <div1 className='px-4 w-[790px] h-[70px] bg-[#202449] rounded-xl flex flex-row items-center justify-between hover:bg-[#35257A]'>

            <div className='w-[239px] h-[46px] flex flex-row  items-center justify-center '>
                <label className='mr-4 w-4 h-4 flex justify-center items-center '>
                    <input type='checkbox' id='CheckBox' onChange={() => setChecked(checked => !checked)} className='checked:bg-[#6043DD] w-4 h-4 bg-[#202449]/0 border-[#C2C8D7] border-[1.5px] rounded focus:ring-0 focus:ring-offset-0' />
                </label>

                <div className='w-60 h-10 flex flex-col justify-center'>
                    <p className='text-lg font-semibold text-[#C2C8D7] font-baloo'>
                        Alameda Honda
                    </p>
                </div>
            </div>

            <div className='relative w-[211px] h-[70px] flex flex-col justify-center items-center pt-6'>
                <div className={`z-10 flex items-center w-full h-[10px] rounded-full justify-items-stretch content-center ${checked ? 'bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]': 'bg-gradient-to-r from-[#3C1CC5] to-[#9043DD] opacity-20'}`} >
                    <div className='z-20 absolute left-[52%] items-center w-[73px] h-[9px] bg-[#FFFFFF]'> </div>
                    <div className='z-30 absolute left-[50%] items-center w-[16px] h-[16px] rounded-full bg-[#FFFFFF]'></div>
                </div>
                <div className='pt-[12px] flex justify-center text-[13px] font-normal'>
                    <p className='text-[#EEECF1]'>100%</p>
                </div>

                {/* cursor ball */}
                <div className={`z-40 absolute left-[80%] top-[25%] w-[24px] h-[24px] rounded-full bg-[#E5E8EF] flex items-center justify-center ${checked ? '' : 'opacity-20'}`}>
                    <div className='w-[18px] h-[18px] rounded-full bg-[#3E4761] flex justify-center items-center'>
                        <div className='w-[8px] h-[8px] rounded-full bg-[#E5E8EF]'></div>
                    </div>
                </div>
            </div>
            <div className={`w-[122px] h-8 text-white border-[1.5px] border-[#6043DD] rounded flex items-center justify-center font-baloo text-sm font-semibold ${checked ? 'bg-[#6043DD]' : 'bg-[#6043DD] opacity-20'} `}>
                <p>By Department</p>
            </div>
            <div className='z-50 absolute left-[65%] top-[-1.6%]'>
                <BlackTalker/>
            </div>

        </div1>
    )
}

export default CheckNameSliderButtonCard