import { useState } from 'react'
import LupeIcon from "@components/General/Icons/LupeIcon";

export default function SearchBox() {

    const [searchText, setSearchText] = useState(false);

    return (
        <form className="w-[15.25em] h-[3.125em] bg-[#05081E] flex flex-row items-center justify-between pl-[0.5em] pr-[1em] mb-[0.625em] rounded-lg shadow-xl border border-[#3E4761]" >
            <input
                className="bg-transparent text-[0.9375rem] text-[#EEECF1] placeholder:text-[#EEECF1]"
                // onChange={onChange}
                // value={searchText}
                type="text"
                placeholder="Search"
            />
            <button type="button" className='cursor-pointer' onClick={() => setSearchText(!searchText)}>
                <LupeIcon className={`duration-300 ${searchText ? 'rotate-180' : ''}`} />
            </button>
        </form>
    )
}
