import CancelAndNextButton from "@/components/Target/CancelAndNextButton"
import DiamondIcon from "@/components/General/Icons/DiamondIcon"
import ArrowDownIcon from "@/components/General/Icons/ArrowDownIcon"
import TextIconButton from '@/components/General/Buttons/TextIconButton';

export default function FormSettings() {
    return (

        <div className='w-[657px] h-[590px] bg-[#05081E] px-6 pb-6 flex flex-col items-start justify-between'>
            <form>
                <div className='w-[160px] h-[30px] font-baloo text-[#FFF] font-bold text-xl mb-1'>6.Game points</div>

                <label className='text-[#E5E8EF] text-xs mb-[2px]'>Position 1</label>
                <input className='w-[609px] h-[56px] px-5 mb-2 border rounded bg-transparent placeholder-[#E5E8EF] hover:border-[#FFFFFF] flex flex-row items-center justify-star gap-x-4' placeHolder='$ 0.00'>
                </input>
                <label className='text-[#E5E8EF] text-xs mb-[2px]'>Position 2</label>
                <input className='w-[609px] h-[56px] px-5 mb-2 border rounded bg-transparent placeholder-[#E5E8EF] hover:border-[#FFFFFF] flex flex-row items-center justify-star gap-x-4' placeHolder='$ 0.00'>
                </input>
                <label className='text-[#E5E8EF] text-xs mb-[2px]'>Position 3</label>
                <input className='w-[609px] h-[56px] px-5 mb-2 border rounded bg-transparent placeholder-[#E5E8EF] hover:border-[#FFFFFF] flex flex-row items-center justify-star gap-x-4' placeHolder='$ 0.00'>
                </input>
                <label className='text-[#E5E8EF] text-xs mb-[2px]'>Game point value</label>
                <input className='w-[609px] h-[56px] px-5 mb-2 border rounded bg-transparent placeholder-[#E5E8EF] hover:border-[#FFFFFF] flex flex-row items-center justify-star gap-x-4' placeHolder='$ 0.00'>
                </input>

                <div className='w-[160px] h-[30px] font-baloo text-[#FFF] font-bold text-xl mb-2'>7. Award</div>
                <label className='text-[#E5E8EF] text-xs mb-1'>Award Name</label>

                <div className='flex flex-row items-center justify-between gap-x-2 mb-3'>
                    <button className="w-[429px] h-[72] flex flex-row bg-transparent rounded justify-between items-center border border-[#D1D5DB] cursor-pointer px-5">
                        <div className='w-[609px] h-[56px] placeholder-[#E5E8EF] hover:border-[#FFFFFF] flex flex-row items-center justify-star gap-x-4'>
                            <DiamondIcon />
                        </div>
                        <div>
                            <ArrowDownIcon />
                        </div>
                    </button>
                    <TextIconButton
                        iconLeft=''
                        text='Add award for winner'
                        iconRight=''
                        background='bg-transparent'
                        width='w-[168px]'
                        height='h-[54px]'
                        backgroundHover=''
                        textSize='text-sm'
                        textColor='text-[#6043DD]'
                        textColorHover=''
                        borderColor='border border-[#6043DD]'
                    />
                </div>
            </form>
            <div className="w-[609px] flex justify-end">
                <CancelAndNextButton
                />
            </div>
        </div>
    )
}

