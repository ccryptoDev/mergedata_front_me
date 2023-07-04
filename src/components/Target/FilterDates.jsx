import { useState } from 'react';

import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
import DropDownDateMenu from '@components/Target/DropDownDateMenu';

export default function FilterDates({ type = 'year'}) {

const currentYear = new Date().getFullYear();
const [show, setShow] = useState(false);
const [value, setValue] = useState(currentYear);

const handleYear = (year) => {
	setValue(year);
}

	return (
		<div className=''>
			<button className='flex flex-row px-5 gap-2 items-center h-[42px] bg-[#35257A] rounded-[16px]' onClick={() => setShow(!show)}>
				<span className='font-[600] font-baloo h-[26px] text-center text-[15px] leading-[26px] uppercase text-[#FFFFFF]'>
					{type}
				</span>
				<span className='text-[#FFFFFF] w-[17px]'>|</span>
				<span className='font-[700] font-baloo  h-[22px] tracking-[1px] text-center text-[14px] leading-[21px] text-[#EEECF1]'>
					{value}
				</span>
				<ArrowDownIcon />
			</button>
			<div className={`left-0 transition duration-[500ms] ease-in-out ${show ? 'translate-y-0' : 'translate-y-[-700px]'}`}>
				<DropDownDateMenu onInputYear={handleYear} />
			</div>
		</div>
	);
}
