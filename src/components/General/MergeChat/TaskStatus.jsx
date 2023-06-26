import Decision from '@/components/General/Icons/Decision'
import Avatar1 from '@/assets/svg/Avatar1.svg';
import Avatar2 from '@/assets/svg/Avatar2.svg';
import Avatar3 from '@/assets/svg/Avatar3.svg';

const data = [
    { id: 1, photo: Avatar1, name: 'Dale Postman', gpru: '-21%', action: 'Assign Supervisor', icon: 'CheckBoxOn', bgColor: 'bg-[#00C0E2]' },
    { id: 2, photo: Avatar2, name: 'Miguel Flores', gpru: '-22%', action: 'Assign Supervisor', icon: 'CheckBoxOn', bgColor: 'bg-[#00C0E2]' },
    { id: 3, photo: Avatar3, name: 'Eduard Monte', gpru: '-28%', action: 'Assign Supervisor', icon: 'CheckBoxOff', bgColor: 'bg-[#F4392C]' },
    { id: 4, photo: Avatar1, name: 'April Graner', gpru: '-22%', action: 'Assign Supervisor', icon: 'CheckBoxOff', bgColor: 'bg-[#FC9905]' },
    { id: 5, photo: Avatar2, name: 'Wendy Smith', gpru: '-25%', action: 'Assign Supervisor', icon: 'CheckBoxOn', bgColor: 'bg-[#FC9905]' },
]

export default function TaskStatus() {
    return (
        <div className='w-[467px] h-[240px] bg-[#13132D] rounded-2xl pt-3 px-6'>

            <div className='w-76 flex flex-col mb-3'>
                <p className='text-[#907BE7] text-[14px]'>Task Status</p>
            </div>

            <div className='w-full h-[18px] flex justify-start items-center gap-x-1 mb-3'>
                <Decision name='BlueStar' />
                <p className='text-[#ffffff] text-[14px] w-[130px] mr-1'>Employee</p>
                <p className='text-[#ffffff] text-[14px] w-[130px] '>GRPU</p>
                <p className='text-[#ffffff] text-[14px]'>Action</p>
            </div>
            <div className='w-full h-40 flex flex-col justify-start items-center  gap-y-1'>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className={`w-full h-7 ${item.bgColor} flex justify-start items-center px-[5px] gap-x-1 rounded-lg`}>
                                <div className="relative mr-1">
                                    <img src={item.photo} alt="" className="w-4 h-4" />
                                    <div className='absolute w-2 h-2 bg-[#1E2A6B] rounded-full left-[10px] top-[10px] flex items-center justify-center'>
                                        <div className='w-1 h-1 bg-[#27AE60] rounded-full'></div>
                                    </div>
                                </div>
                                <div className="w-[130px] h-[18px] ">
                                    <p className='text-[#ffffff] text-xs leading-4'>{item.name}</p>
                                </div>
                                <div className="w-[140px] h-[18px] ">
                                    <p className='text-[#ffffff] text-xs leading-4'>{item.gpru}</p>
                                </div>
                                <div className="w-[120px] h-[18px] ">
                                    <p className='text-[#ffffff] text-xs leading-4'>{item.action}</p>
                                </div>
                                <Decision name={item.icon} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
