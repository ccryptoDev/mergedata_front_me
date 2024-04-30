import Avatar1 from '@assets/svg/Avatar1.svg'
import Avatar2 from '@assets/svg/Avatar2.svg'
import Avatar3 from '@assets/svg/Avatar3.svg'
import Avatar4 from '@assets/svg/Avatar4.svg'
import Avatar5 from '@assets/svg/Avatar5.svg'

export default function Notifications() {

    const data = [
        { id: 1, avatar: Avatar1, name: 'Eduard Monte', goal: 'Sold a vehicle', hour: '06:00 PM', points: '+42pt' },
        { id: 2, avatar: Avatar2, name: 'Candice Wu', goal: '', hour: '', points: '' },
        { id: 3, avatar: Avatar3, name: 'Zahir Mays', goal: 'Sold a vehicle', hour: '06:00 PM', points: '+42pt' },
        { id: 4, avatar: Avatar4, name: 'Jones Ferdinand', goal: 'Sold a vehicle', hour: '06:00 PM', points: '+42pt' },
        { id: 5, avatar: Avatar5, name: 'Andi Lane', goal: '', hour: '', points: '' },
    ]


    return (
        <div className="w-[317px] h-[644px] rounded-b-[12px] bg-[#161A3E] pt-[12px] px-[12px] pb-[24px] gap-y-[12px] flex flex-col ">
            <div className="w-full h-[41px] bg-[#563CC7] flex flex-row justify-center items-center rounded-[8px] p-[12px] gap-[10px]">
                <p className="text-[#E5E8EF] font-[600] font-baloo text-[13px] leading-[16px]">Notifications</p>
                <div className='w-[16px] h-[17px] box-content rounded-full border-[3px] flex items-center justify-center bg-[#907BE7]'>
                    <p className='text-[#FFFFFF] text-[11px] font-baloo font-semibold'>99</p>
                </div >
            </div>
            {
                data.map((item) => (
                    <div
                        key={item.id}
                        className="w-[293px] h-[56px] p-[8px] gap-y-[8px] flex flex-row justify-between items-center rounded-[8px] ">
                        <img src={item.avatar} alt="avatar" className="w-[40px] h-[40px] rounded-full" />
                        <div className="w-[157px] h-[40px] flex flex-col justify-between items-center">
                            <p className="w-[157px] h-[22px] text-[#fff]">{item.name}</p>
                            <p className="w-[157px] h-[18px] text-[#6B748E]"> {item.goal}</p>
                        </div>
                        <div className="w-[48px] h-[50px] flex flex-col justify-center items-end gap-y-[2px]">
                            <p className="w-[40px] h-[14px] text-[8px] leading-[12px] text-[#6B748E] ">{item.hour}</p>
                            <p className="w-[48px] h-[28px] text-[18px] font-baloo leading-[28px] text-[#1BE2C5] ">{item.points}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
