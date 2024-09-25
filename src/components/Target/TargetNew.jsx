import { useState } from "react";

export default function TargetNew({
    uppertitle = '',
    maintitle = '',
    takeChecked
}) {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        takeChecked(newChecked); 
    };

    return (
        <div className='w-[196px] h-8 flex flex-col justify-center items-start'>
            <div className='w-[60px] h-[32px] flex justify-between items-center'>
                <label className='mr-4 w-4 h-4 flex justify-center items-center '>
                    <input type='checkbox' id='CheckBox' value='' onChange={handleCheck} className='checked:bg-[#6043DD] w-4 h-4 bg-[#202449]/0 border-[#C2C8D7] border-[1.5px] rounded focus:ring-0 focus:ring-offset-0' />
                </label>
                <div className='w-[60px] h-[32px] flex flex-col items-start'>
                    <div className='w-[60px] h-4 flex items-center'>
                        <p className='text-xs font-semibold text-[#C2C8D7] font-baloo'>
                            {uppertitle}
                        </p>
                    </div>
                    <div className='w-[60px] h-4 flex items-center'>
                        <p className='text-lg font-semibold text-[#C2C8D7] font-baloo'>
                            {maintitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}




