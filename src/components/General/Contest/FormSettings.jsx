import CancelAndNextButton from "@/components/Target/CancelAndNextButton"
import ArrowDownIcon from "@/components/General/Icons/ArrowDownIcon"

export default function FormSettings() {
    return (
        <div className='w-[657px] h-[590px] bg-[#05081E] px-6 pb-6 flex flex-col items-start justify-between'>
            <form>
                <div className='w-[160px] h-[30px] font-baloo text-[#FFF] font-bold text-xl mb-1'>1. Game settings</div>
                <div className="w-[609px] h-[72] flex flex-row justify-between mb-6">
                    <div className='flex flex-col'>
                        <label className='text-[#E5E8EF] text-xs mb-1' >Game tittle</label>
                        <input className='w-[298px] h-[56px] bg-transparent rounded border border-[#D1D5DB] hover:border-[#FFFFFF]' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[#E5E8EF] text-xs mb-1'>Game type</label>
                        <div className='w-[298px] h-[56px] bg-transparent flex flex-row items-center justify-between rounded border border-[#D1D5DB] hover:border-[#FFFFFF] pr-4'>
                            <input className='w-[270px] h-[56px] bg-transparent' type="text" />
                            <ArrowDownIcon />
                        </div>
                    </div>
                </div>
                <div className='w-[160px] h-[30px] font-baloo text-[#FFF] font-bold text-xl mb-1'>2. Data access</div>
                <div className="w-[609px] h-[72] mb-3">
                    <input className='w-[609px] h-[56px] pl-3 bg-transparent rounded border border-[#D1D5DB] placeholder-[#E5E8EF] hover:border-[#FFFFFF]' placeholder="Monitoring recipients" ></input>
                </div>
                <div>
                    <div className='w-[690px] h-[48px] flex flex-row items-center  mb-3'>
                        <div className=' mr-2'>
                            <input className='rounded-full bg-transparent border-[2px] border-[#D1D5DB]' type='checkbox' />
                        </div>
                        <div className="flex flex-col justify-start">
                            <p className='text-[#FFFFFF] font-semibold'>Full Access</p>
                            <p className='text-[#E5E8EF]'>Best for administrators and managers who will need access to sensitive data.</p>
                        </div>
                    </div>
                    <div className='w-[690px] h-[48px] flex flex-row items-center mb-6'>
                        <div className=' mr-2'>
                            <input className='rounded-full bg-transparent border-[2px] border-[#D1D5DB]' type='checkbox' />
                        </div>
                        <div className="flex flex-col justify-start">
                            <p className='text-[#FFFFFF] font-semibold'>Online Monitoring Access</p>
                            <p className='text-[#E5E8EF]'>Best for users who shouldn't have access to sensitive data.</p>
                        </div>
                    </div>
                    <div className='w-[160px] h-[30px] font-baloo text-[#FFF] font-bold text-xl mb-1'>3. Notifications</div>
                    <div className="w-[609px] h-[72] flex flex-row justify-between mb-6">
                        <div className='flex flex-col'>
                            <label className='text-[#E5E8EF] text-xs mb-1'>Frequency</label>
                            <div className='w-[609px] h-[56px] px-4 bg-transparent rounded border border-[#D1D5DB] placeholder-[#E5E8EF] hover:border-[#FFFFFF] flex flex-between items-center'>
                                <input className='w-[580px] h-[56px] bg-transparent' type='text' placeholder='Everyday' />
                                <ArrowDownIcon />
                            </div>
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
