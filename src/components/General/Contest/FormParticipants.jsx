import CancelAndNextButton from "@/components/Target/CancelAndNextButton"
import ProfileIcon from "@/components/General/Icons/ProfileIcon"
import MailIcon from "@/components/General/Icons/MailIcon"
import ArrowDownIcon from "@/components/General/Icons/ArrowDownIcon"
import CalendarIcon from "@/components/General/Icons/CalendarIcon"

export default function FormSettings() {
    return (

        <div className='w-[657px] h-[590px] bg-[#05081E] px-6 pb-6 flex flex-col items-start justify-between'>
            <form>
                <div className='w-[160px] h-[30px] font-baloo text-[#FFF] font-bold text-xl mb-2'>4. Participants</div>
                <p className='text-[#E5E8EF] text-xs mb-1'>Category of Participants</p>

                <button className="w-[609px] h-[72] flex flex-row bg-transparent rounded justify-between items-center border border-[#D1D5DB] cursor-pointer px-5 mb-3">
                    <div className='w-[609px] h-[56px] placeholder-[#E5E8EF] hover:border-[#FFFFFF] flex flex-row items-center justify-star gap-x-4'>
                        <ProfileIcon />
                        <p className='text-[#E5E8EF] text-base font-semibold '> Select a list</p>
                    </div>
                    <div>
                        <ArrowDownIcon />
                    </div>
                </button>

                <div className="w-[609px] h-[72px] mb-10">
                    <p className='text-[#E5E8EF] text-xs mb-1'>Add Participants</p>
                    <div className='w-[609px] h-[56px] pl-4 bg-transparent rounded border border-[#D1D5DB] placeholder-[#E5E8EF] hover:border-[#FFFFFF] flex items-center'  >
                        <MailIcon />
                    </div>
                </div>
                <div className='w-[160px] h-[30px] font-baloo text-[#FFF] font-bold text-xl mb-2'>5. Time interval</div>
                <div className="w-[609px] h-[72px] flex flex-row justify-between mb-6">
                    <div className='flex flex-col'>
                        <p className='text-[#E5E8EF] text-xs mb-1'>From</p>
                        <div className='w-[298px] h-[56px] pl-3 bg-transparent rounded border border-[#D1D5DB] hover:border-[#FFFFFF] flex flex-row items-center justify-start gap-x-3'>
                            <CalendarIcon />
                            <input className='w-full h-[54px] bg-transparent placeholder-[#E5E8EF] cursor-pointer text-[#E5E8EF] border-none' type='date'/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#E5E8EF] text-xs mb-1'>From</p>
                        <div className='w-[298px] h-[56px] pl-3 bg-transparent rounded border border-[#D1D5DB] hover:border-[#FFFFFF] flex flex-row items-center justify-start gap-x-3'>
                            <CalendarIcon />
                            <input className='w-full h-[54px] bg-transparent placeholder-[#E5E8EF] cursor-pointer text-[#E5E8EF] border-none' type='date'/>
                        </div>
                    </div>
                </div>
            </form>
            <div className="w-[609px] flex justify-end">
                <CancelAndNextButton />
            </div>
        </div>
    )
}
