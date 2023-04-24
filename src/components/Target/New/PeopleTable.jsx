import next_arrow from '@/assets/svg/next_arrow.svg';
import Table2 from '@/components/Target/New/Table2';


export default function PeopleTable() {
    return (
        <div className='relative w-[660px] h-[666px] px-8 py-6 bg-[#212A43] flex flex-col items-center'>
            <div className='w-[634px] h-[50px] flex flex-row mb-2'>
                <p className='font-bold text-2xl text-[#EEECF1]  font-baloo'>People</p>
                <div className='absolute top-4 right-5'>
                    <img src={next_arrow} alt='Next' />
                </div>
            </div>
            <div className='flex flex-col w-[634px] h-[618px]'>
                <Table2 width='w-[596px]' height='h-[574px]' bgtable='bg-[#212A43]'/>
            </div>
        </div>
    )
}