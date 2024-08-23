import { useState } from 'react'
import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton'
import AllFilter from './AllFilter'

export default function AllButton() {
    const [showFilterOptions, setShowFilterOptions] = useState(false)

    return (
        <div className='relative'>
            <div onClick={() => setShowFilterOptions(!showFilterOptions)}>
                <IconNameIconDropdownButton
                    iconName='Filter'
                    width='w-[118px]'
                    height='h-[50px]'
                    text='All'
                    borderRadius='rounded-xl'
                    background='#05081E'
                    border='border border-neutrals-800'
                    backgroundColorHover='hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300'
                    borderHover='hover:border-purple-600'
                />
            </div>
            <div className='absolute right-0 top-13'>
                {showFilterOptions && (
                    <AllFilter />
                )}
            </div>
        </div>

    )
}
