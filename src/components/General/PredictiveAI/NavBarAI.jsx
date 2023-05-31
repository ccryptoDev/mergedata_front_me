import { useState } from 'react';
import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton';
import SingleButton from '@/components/General/Buttons/SingleButton';

export default function NavBarAI() {

    const [makeChange, setMakeChange] = useState(false);
    const [swapButtons, setSwapButtons] = useState(false);
    const [swapLh, setSwapLh] = useState(false);
    const [swapRh, setSwapRh] = useState(false);

    const handleClickButton = () => {
        setSwapButtons(!swapButtons);
        setSwapLh('transform translate-x-[-84px] transition duration-700 delay-0');
        setSwapRh('transform translate-x-[84px] transition duration-700 delay-0');
        setTimeout(() => {
            setSwapLh('transform translate-x-0 delay-0');
            setSwapRh('transform translate-x-0 delay-0');
        }, 300);
    }

    setTimeout(() => {
        setMakeChange(true);
    }, 10000);

    return (

            <div className=''>
                <nav className='flex flex-row items-center justify-between w-[1022px] h-[50px] bg-black'>
                    <p className='text-[#FFFFFF] text-2xl font-baloo font-bold'>
                        {makeChange ? 'KAI´s Recommendations' : 'Predictive AI'}
                    </p>
                    <div className='w-[326px] flex flex-row justify-end '>
                        {makeChange ?
                            <div className='w-auto flex flex-row space-x-7 mr-3'>
                                <div className={`${swapRh}`}>
                                    <SingleButton icon='Return' />
                                </div>
                                <div
                                    onClick={() => handleClickButton()}
                                    className={`${swapLh}`} >

                                    {swapButtons ?
                                        <SingleButton icon='Divide' /> : <SingleButton icon='Gallery4Squares' />
                                    }

                                </div>
                            </div>
                            : null}
                        <IconNameIconDropdownButton
                            iconName='Home'
                            width='w-[164px]'
                            height='h-[50px]'
                            text='All Stores'
                            borderRadius='rounded-xl'
                            background='#05081E'
                            border='border border-neutrals-800'
                            backgroundHover='hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300'
                            borderHover='hover:border-purple-600'
                        />
                    </div>
                </nav>
            </div>

    )
}

