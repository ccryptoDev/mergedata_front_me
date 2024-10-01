import arrowUpGreen from '@/assets/svg/arrowupgreen.svg';
import neutral from '@/assets/svg/neutral.svg';

export default function FloorPlanCards() {
  
    return (
        <div className="w-[337px] h-[154px] flex flex-col items-start p-6 gap-3 bg-neutrals-900 rounded-2xl">
            <span className="w-[104px] h-[36px] flex items-center font-baloo font-bold text-2xl text-white">Floorplan</span>
            <div className="w-[289px] h-[58px] flex flex-row items-start gap-3">
                <div className="flex flex-col justify-center items-start w-[139px] h-[58px]">
                    <span className="w-[90px] h-[22px] flex items-center text-white text-sm"># Floor plans</span>
                    <div className="w-[65px] h-[32px] flex flex-row items-center gap-1">
                        <span className="w-[36px] h-[32px] flex items-center font-baloo font-bold text-3xl text-white">34</span>
                        <div className="w-[25px] h-[12px] flex flex-row items-end">
                            <div className='w-[10px] h-[10px] flex items-end pb-0.5'>
                                <img src={arrowUpGreen} className='w-[9px] h-[6px]' />
                            </div>
                            <span className='w-[15px] h-[12px] flex items-center font-baloo font-bold text-xs text-[#59fd56]'>1%</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-[139px] h-[58px]">
                    <span className="w-[90px] h-[22px] flex items-center text-white text-sm">Deals</span>
                    <div className="w-[85px] h-[32px] flex flex-row items-center">
                        <span className="w-[50px] h-[32px] flex items-center font-baloo font-bold text-3xl text-white">142</span>
                        <div className="w-[30px] h-[12px] flex flex-row items-center">
                            <div className="w-[10px] h-[10px] flex items-center">
                                <img src={neutral} className='w-[10px] h-[10px]' />
                            </div>
                            <span className='w-[15px] h-[12px] flex items-center font-baloo font-bold text-xs text-[#FFBB0D]'>3%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

