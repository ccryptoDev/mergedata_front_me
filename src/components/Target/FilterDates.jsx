import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';


export default function FilterDates ({ type = 'year', value = '2021 - 2022' }) {
    return (
        <button className='flex flex-row py-[8px] pr-[12px] pl-[16px] items-center w-[232px] h-[42px] gap-[16px] bg-[#35257A] rounded-[16px]'>
            <span className='font-[600] font-baloo w-[35px] h-[26px] text-center text-[15px] leading-[26px] uppercase text-[#FFFFFF]'>{type}</span>
            <span className='text-[#FFFFFF] w-[17px]'>|</span>
            <span className='font-[700] font-baloo w-[100px] h-[22px] tracking-[1px] text-center text-[14px] leading-[21px] text-[#EEECF1]'>{value}</span>
            <ArrowDownIcon />
        </button>
    )
}
