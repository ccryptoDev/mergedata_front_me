
import triangledownblack from '@/assets/svg/triangledownblack.svg';

export default function blacktalker({
  value = 130
}) {
    return (
        <div>
            <div >
                <div className='w-[58px] flex flex-col'>
                    <div className='w-[50px] h-[26px] bg-[#000000] rounded flex items-center justify-center'>
                        <p className='text-[14px] font-baloo text-[#FFFFFF] font-bold'>{value}%
                        </p>
                    </div>
                    <div className='mt-[-1px] flex justify-center bg-opacity-50'>
                        <img src={triangledownblack} />
                    </div>
                </div>
            </div>
        </div>
    )
}
