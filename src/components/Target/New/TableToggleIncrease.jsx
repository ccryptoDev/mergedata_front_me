import { useState } from 'react';
import ToggleSwitch from '@/components/Target/ToggleSwitch';
import SingleButton from '@/components/General/Buttons/SingleButton';
import Table7 from '@/components/Target/New/Table7';
import Table8 from '@/components/Target/New/Table8';
import Table7Total from '@/components/Target/New/Table7Total';
import Table8Total from '@/components/Target/New/Table8Total';

export default function TableToggleIncrease ({ report }) {

    const [reduce, setReduce] = useState(false);
    const [onSwitch, setOnSwitch] = useState(false);

    const handleClick = () => {
        setOnSwitch(!onSwitch)
    };
    return (
        <div className='h=4 w-30'>
            <div className={`relative bg-[#212A43] px-6 pt-6 flex flex-col h-[666px] rounded-2xl ${!reduce ? 'w-[1363px]' : 'w-[555px]'}`}>
                <div className='flex flex-row justify-between px-3'>
                    <div className=' text-neutrals-00 flex flex-row gap-x-0'>
                        <ToggleSwitch className='border cursor-pointer' name1='By Month' name2='' handleClick={handleClick} />
                        <ToggleSwitch className='border cursor-pointer' name1='By Store' name2='' />
                    </div>
                    <div className='flex flex-row gap-x-2'>
                        <button>
                            <SingleButton
                                icon='Share'
                                background=''
                                width='w-[50px]'
                                border=''
                                height='h-[50px]'
                                backgroundHover='hover:bg-purple-300 transition duration-100 delay-150 hover:delay-300'
                                borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
                                radius=''
                            />
                        </button>
                        <button onClick={() => setReduce(!reduce)}>
                            {reduce ?
                                <SingleButton
                                    icon='Pause'
                                    background='bg-purple-100 bg-opacity-70'
                                    width='w-[50px]'
                                    border='ring ring-purple-100 ring-opacity-70 border-[4px] border-neutrals-900'
                                    height='h-[50px]'
                                    backgroundHover='hover:bg-purple-300 bg-opacity-70 transition duration-100 delay-150 hover:delay-300'
                                    borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
                                    radius=''
                                />
                                :
                                <SingleButton
                                    icon='Pause'
                                    background=''
                                    width='w-[50px]'
                                    border=''
                                    height='h-[50px]'
                                    backgroundHover='hover:bg-purple-300 transition duration-100 delay-150 hover:delay-300'
                                    borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
                                    radius=''
                                />
                            }
                        </button>
                    </div>

                </div>
                <div className='transition-opacity delay-[4000ms]'>
                    {!onSwitch ?
                        <div>
                            <div className="overflow-hidden">
                                <Table8 shouldReduce={reduce} report={report} />
                            </div>
                            <div className='absolute top-[606px] left-0 w-full rounded-[50px]'>
                                <Table8Total shouldReduce={reduce} report={report} />
                            </div>
                        </div>

                        :
                        <div>
                            <div className="overflow-hidden">
                                <Table7 />
                            </div>
                            <div className='absolute top-[606px] left-0 w-full rounded-[50px]'>
                                <Table7Total shouldReduce={reduce} report={report} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

