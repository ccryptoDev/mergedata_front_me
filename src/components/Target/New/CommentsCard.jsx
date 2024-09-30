import { useState } from 'react';

import CommentsItem from '@/components/Target/New/CommentsItem';
import TextIconButton from '@/components/General/Buttons/TextIconButton';
import TitleVectorX from "@/components/Target/TitleVectorX";

import Adam_Smith from "@/assets/svg/Adam_Smith.svg"
import Jones_Ferdinand from "@/assets/svg/Jones_Ferdinand.svg"


export default function CommentsCard({ onClick }) {
    const [list, setList] = useState([
        { id: 1, name: 'Adam Smith', date: '12/08/2022', message: 'Leaving this month', avatar: Adam_Smith },
        { id: 2, name: 'Adam Smith', date: '09/05/2020', message: 'Two deals working. Gone this month', avatar: Adam_Smith },
        { id: 3, name: 'Jones Ferdinand', date: '02/02/2023', message: 'Cheapest on the internet working a deal on it.', avatar: Jones_Ferdinand }
    ]);
    return (
        <div className='flex flex-col justify-between py-5 px-5 gap-y-[10px] rounded-xl w-[295px] h-[665px] bg-neutrals-900 '>
            <div className='flex flex-col gap-y-[10px]'>
                <div className='w-full h-[60px]'>
                    <TitleVectorX
                        width='w-[255px]'
                        height='h-[60px]'
                        upperTitle='Comments'
                        mainTitle='Stock #  PL17J060'
                        upperTitleSize='text-2xl'
                        mainTitleSize='text-sm'
                        upperTitleWeigth='font-bold'
                        mainTitleWeigth='font-normal font-sans mt-4'
                        upperTitleColor='text-neutrals-00'
                        mainTitleColor='text-neutrals-300'
                        upperTitleFont='font-baloo'
                        mainTitleFont='font-sans'
                        onClick={onClick}
                    />
                </div>
                <div className='flex flex-col items-center justify-start gap-y-[10px] rounded-xl'>
                    {list.map((item) => {
                        return (
                            <CommentsItem
                                key={item.id}
                                name={item.name}
                                date={item.date}
                                message={item.message}
                                avatar={item.avatar}
                            />
                        )
                    })}
                </div>
            </div>
            <div className='w-full'>
                <TextIconButton
                    text='Add Comments'
                    iconLeft=''
                    iconRight='Cross'
                    background='bg-[#6043DD]'
                    backgroundHover='hover:bg-indigo-700'
                    textColor='text-neutrals-00' 
                    width = 'w-[253px] rounded-[5px]'
                    height = 'h-[52px]'
                    textSize = 'text-lg'
                    textColorHover = ''
                />
            </div>
        </div>

    )
}
