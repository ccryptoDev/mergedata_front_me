import Decision from '@/components/General/Icons/Decision';
import ResultResume from '@/components/Target/New/ResultResume';

export default function ResultResumeCard() {
    return (
        <div className='w-[317px] h-[427px] bg-[#05081E] flex flex-col items-start px-3 gap-y-3'>
            <div className='w-[293px] h-8 flex flex-row items-center justify-between'>
                <div className='w-[209px] h-[32px] flex flex-row border700 rounded-[6px] bg-neutrals-800 items-center justify-between border border-neutrals-900 px-4'>
                    <p className='font-semibold text-base text-[#EEECF1]  font-baloo'>Search</p>
                    <Decision name='Lupe' />
                </div>
                <div className='gap-x-[4px] flex flex-row'>
                    <div className='w-9 h-8 rounded-[6px] bg-neutrals-800 border border-neutrals-900 flex items-center justify-center'>
                        <Decision name='Filter' />
                    </div>
                    <div className='w-9 h-8 rounded-[6px] bg-neutrals-800 border border-neutrals-900 flex items-center justify-center'>
                        <Decision name='DoubleArrowVertical' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <ResultResume className='border' title='Best consultant' qty='5'/>
                <ResultResume className='border' title='Best seller' qty='22'/>
                <ResultResume className='border' title='Sales contest' qty='100'/>
                <ResultResume className='border' title='Consultant contest' qty='12'/>
                <ResultResume className='border' title='Best consultant' qty='500'/>
            </div>


        </div>
    )
}
