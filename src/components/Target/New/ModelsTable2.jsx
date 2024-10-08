import { useState } from 'react';
import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton';
import SingleButton from '@/components/General/Buttons/SingleButton';
import Table5 from '@/components/Target/New/Table5';

export default function ModelsTable2 ({
    reduceTable,
    showComments,
    showLargeTable
}) {

    // const [shouldReduce, setShouldReduce] = useState(false)
    const [shouldReduce,] = useState(false)
    // const [shouldComment, setShouldComment] = useState(false)

    // const handleShouldReduce = () => {
    //     setShouldReduce(!shouldReduce)
    //     reduceTable(shouldReduce)
    // }

    // const handleShowCommentsCard = () => {
    //     setShouldComment(!shouldComment)
    //     showComments(shouldComment)
    //     setShouldReduce(false)
    // }

    return (

        <div className={`bg-neutrals-900 px-[24px] pt-[20px] ${(shouldReduce && !showLargeTable) ? 'w-[691px]' : 'w-[1004px]'} h-[666px] rounded-2xl`}>
            <div className='h-[50px] w-full flex flex-row items-center justify-between'>
                <div className='flex flex-row gap-x-3'>
                    <SingleButton />
                    <IconNameIconDropdownButton
                        text='All Models'
                        iconName=''
                        background='bg-neutrals-800'
                        width='w-[128px]'
                        border='border border-neutrals-900'
                        height='h-[50px]'
                        backgroundHover='hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300'
                        borderHover='hover:border-purple-600'
                        radius='rounded-xl'
                    />
                </div>
                <div className='flex flex-row gap-x-2'>
                    {/* <SingleButton
                        icon='Share'
                        background=''
                        width='w-[50px]'
                        border=''
                        height='h-[50px]'
                        backgroundHover='hover:bg-purple-300 transition duration-100 delay-150 hover:delay-300'
                        borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
                        radius=''
                    /> */}
                    <SingleButton
                        icon='Download'
                        background=''
                        width='w-[50px]'
                        border=''
                        height='h-[50px]'
                        backgroundHover='hover:bg-purple-300 transition duration-100 delay-150 hover:delay-300'
                        borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
                        radius=''
                    />
                    {/* <SingleButton
                        icon='Pause'
                        background=''
                        width='w-[50px]'
                        border=''
                        height='h-[50px]'
                        backgroundHover='hover:bg-purple-300 bg-opacity-70 transition duration-100 delay-150 hover:delay-300'
                        borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
                        radius=''
                        onClick={handleShouldReduce}
                    /> */}
                    {/* <SingleButton
                        icon='Chat'
                        background=''
                        width='w-[50px]'
                        border=''
                        height='h-[50px]'
                        backgroundHover='hover:bg-purple-300 transition duration-100 delay-150 hover:delay-300'
                        borderHover='hover:border-purple-100 rounded-full hover:outline-offset-4 hover:opacity-50'
                        radius=''
                        onClick={handleShowCommentsCard}
                    /> */}
                </div>
            </div>
            <div className='w-full'>
                <div className="inline-block min-w-full py-2 ">
                    <div className="overflow-hidden">
                        <Table5
                            shouldReduce={shouldReduce}
                            showLargeTable={showLargeTable}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
