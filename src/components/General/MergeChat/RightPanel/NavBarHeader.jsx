import Decision from '@/components/General/Icons/Decision'

import photo1 from "@/assets/svg/photo_1.svg";
import photo2 from "@/assets/svg/photo_2.svg";
import photo3 from "@/assets/svg/photo_3.svg";

export default function NavBarHeader ({ title, comment, selectedButton }) {

    return (
        <div className='w-[1055px] h-[52px] bg-[#13132D] flex flex-row items-center justify-between space-between px-[14px] rounded-t-2xl'>
            <p className='flex flex-row items-center space-between text-[16px] font-[800px] font-baloo leading-[19px] text-[#907BE7] mr-1'>
                {title}
            </p>
            <Decision name='ArrowDown' />
            <p className='text-xs text-[#fff] opacity-70 ml-2 mr-[50px]'>{comment}</p>

            <div className='w-[316px] h-[34px] flex flex-row items-center justify-between gap-x-3 px-2'>
                {
                    (selectedButton === 'Channels') &&
                    <>
                        <button className='w-[100px] h-[26px] rounded-[4px] flex flex-row items-center justify-center text-[#fff] text-[14px] font-baloo font-[800px] bg-gradient-to-r from-[#F1C300] to-[#EE7302]'>
                            <p className='text-[#fff] font-baloo'>On Going</p>
                        </button>
                        <button className='w-[77px] h-[26px] rounded-[4px] flex flex-row items-center justify-center text-[#fff] text-[14px] font-baloo font-[800px] bg-[#4832A6]'>
                            <p className='text-[#fff] font-baloo'>Private</p>
                        </button>
                        <div className='w-12 h-5 flex flex-row'>
                            <img src={photo3} alt='photo_1' className='w-full h-full ml-[-6px] border border-[#000000]' />
                            <img src={photo2} alt='photo_1' className='w-full h-full ml-[-6px] border border-[#000000]' />
                            <img src={photo1} alt='photo_1' className='w-full h-full ml-[-6px] border border-[#000000]' />
                        </div>
                        <p className='text-[#EFECFC] text-xs'>+4</p>
                        <Decision name='ProfilePlus' />
                    </>
                }
            </div>


            <div className='w-[70px] h-5 ml-6 flex flex-row items-center justify-between'>
                <Decision name='Award' />
                <Decision name='Camera' />
                {/* <Decision name='Share' /> */}
            </div>
        </div>
    )
}
