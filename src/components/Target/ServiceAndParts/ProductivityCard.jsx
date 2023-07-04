import Decision from '@/components/General/Icons/Decision'

import Avatar1 from '@/assets/svg/Avatar1.svg';
import Avatar2 from '@/assets/svg/Avatar2.svg';
import Avatar3 from '@/assets/svg/Avatar3.svg';
import Avatar4 from '@/assets/svg/Avatar4.svg';

export default function ProductivityCard() {

    const data = [
        { id: 1, behaviorIcon: 'down', avatar: Avatar1, name: 'Drew Canor', role: 'Service Manager', sales: '$76,829', goal: 93, goalBehaviorIcon: 'up' },
        { id: 2, behaviorIcon: 'up', avatar: Avatar2, name: 'Demi Wikinson', role: 'Service Manager', sales: '$76,829', goal: 92, goalBehaviorIcon: 'up' },
        { id: 3, behaviorIcon: 'down', avatar: Avatar3, name: 'Ava Wright', role: 'Service Manager', sales: '$76,829', goal: 90, goalBehaviorIcon: 'up' },
        { id: 4, behaviorIcon: 'neutral', avatar: Avatar4, name: 'Ava Wright', role: 'Service Manager', sales: '$76,829', goal: 88, goalBehaviorIcon: 'up' },
    ]

    return (
        <div className='relative w-[510px] h-[325px] bg-[#212A43] rounded-2xl pt-6 px-7 flex flex-col'>
            <div className='absolute right-7' >
                <Decision name='Arrow45Degrees' />
            </div>
            <div className='w-[308px] h-[56px]  -blue-400 flex flex-col'>
                <p className='font-baloo text-2xl text-[#FFFFFF] leading-7 mb-2'>
                    Service Advisor Productivity
                </p>
                <p className='text-xs text-[#CFC7F5]'>Top 5 Employees</p>
            </div>
            <div className='w-[454px] h-[245px] '>
                <table className=''>
                    <thead>
                        <tr className=''>
                            <th className='text-start  w-[36px] text-[#EFECFC]'></th>
                            <th className='text-start  w-[210px] text-[#EFECFC] '>Employee</th>
                            <th className='text-start  w-[150px] text-[#EFECFC]'>Sales</th>
                            <th className='text-center  w-[94px] text-[#EFECFC] '>Goal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                function iconSelect() {
                                    if (item.behaviorIcon === 'up') {
                                        return 'UpGreenArrowSm'
                                    } else if (item.behaviorIcon === 'down') {
                                        return 'DownRedArrowSm'
                                    } else {
                                        return 'Neutral'
                                    }
                                }
                                return (
                                    <tr key={item.id}>
                                        <td className=''>
                                            <div className=' flex flex-row items-center gap-x-1'>
                                                <p className='text-[#C2C8D7]'>
                                                    {item.id}
                                                </p>
                                                <Decision name={iconSelect()} />
                                            </div>
                                        </td>
                                        <td className=''>
                                            <div className=' flex flex-row'>
                                                <img src={item.avatar} alt='avatar' />
                                                <div className='flex flex-col ml-2'>
                                                    <p className='text-sm leading-5 text-[#FFFFFF]'>{item.name}</p>
                                                    <p className='text-xs leading-5 text-[#6B748E]'>{item.role}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <div className=''>
                                                <p className='text-[#C2C8D7] text-[16px] '>
                                                    {item.sales}
                                                </p>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <div className='w-[94px] h-[52px] bg-[#3E4761] rounded-md flex flex-row items-center justify-center  gap-x-1'>
                                                <div>
                                                    <p className='text-[#FFFFFF]'>
                                                        {item.goal}
                                                    </p>
                                                </div>
                                                <div>
                                                    <Decision name={iconSelect()} />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
