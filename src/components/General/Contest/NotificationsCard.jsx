import NotificationGroup from "@/components/General/Contest/NotificationGroup"

export default function NotificationsCard() {
    return (
        <div className='w-[317px] h-[692px] bg-[#0D102C] flex justify-center rounded-xl'>
            <div className='w-[293px] h-[668px] flex flex-col overflow-hidden'>
                <div className='w-[293px] h-[41px] flex justify-center my-3'>
                    <div className='w-[277px] h-[41px] bg-[#563CC7] rounded-lg flex flex-row items-center justify-center gap-x-2'>
                        <p className='text-[13px] text-[#FFFFFF] text-semibold '>Notifications</p>
                        <div className='w-[26px] h-[20px] border-[3px] border-[#563CC7] border-double  rounded-lg bg-primary-purple-300 flex items-center justify-center'>
                            <p className='text-[12px] text-[#FFFFFF] font-bold'>99</p>
                        </div>
                    </div>
                </div>
                <div className='w-[293px]'>
                    <NotificationGroup contestStatus='1 Days to finishing Game'/>
                </div>
                <div className='w-[293px]'>
                    <NotificationGroup contestStatus='3 Days to finishing Game'/>
                </div>
                <div className='w-[293px]'>
                    <NotificationGroup contestStatus='7 Days to finishing Game'/>
                </div>
            </div>
        </div>
    )
}
