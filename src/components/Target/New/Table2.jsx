
import Avatar1 from '@/assets/svg/Avatar1.svg';
import Avatar2 from '@/assets/svg/Avatar2.svg';
import Avatar3 from '@/assets/svg/Avatar3.svg';
import Avatar4 from '@/assets/svg/Avatar4.svg';
import Avatar5 from '@/assets/svg/Avatar5.svg';
import Avatar6 from '@/assets/svg/Avatar6.svg';
import Avatar7 from '@/assets/svg/Avatar7.svg';
import Avatar8 from '@/assets/svg/Avatar8.svg';
import Avatar9 from '@/assets/svg/Avatar9.svg';
import Avatar10 from '@/assets/svg/Avatar10.svg';

const data = [
    { id: 1, user: { avatar: Avatar1, name: 'Jones Ferdinand', role: 'Corporate Manager' }, totalpoints: 1321, newemailleads: 82, reward: 982 },
    { id: 2, user: { avatar: Avatar2, name: 'Vincent Morris', role: 'Corporate Manager' }, totalpoints: 1212, newemailleads: 80, reward: 980 },
    { id: 3, user: { avatar: Avatar3, name: 'Andi Lane', role: 'Corporate Manager' }, totalpoints: 1210, newemailleads: 80, reward: 972 },
    { id: 4, user: { avatar: Avatar4, name: 'Zahir Mays', role: 'Corporate Manager' }, totalpoints: 1202, newemailleads: 85, reward: 912 },
    { id: 5, user: { avatar: Avatar5, name: 'Kate Morrison', role: 'Corporate Manager' }, totalpoints: 1180, newemailleads: 70, reward: 810 },
    { id: 6, user: { avatar: Avatar6, name: 'Ava Wright', role: 'Corporate Manager' }, totalpoints: 1176, newemailleads: 69, reward: 800 },
    { id: 7, user: { avatar: Avatar7, name: 'Olivia Rhye', role: 'Corporate Manager' }, totalpoints: 1100, newemailleads: 66, reward: 790 },
    { id: 8, user: { avatar: Avatar8, name: 'Lana Steiner', role: 'Corporate Manager' }, totalpoints: 1000, newemailleads: 65, reward: 712 },
    { id: 9, user: { avatar: Avatar9, name: 'Koray Okumus', role: 'Corporate Manager' }, totalpoints: 1222, newemailleads: 62, reward: 712 },
    { id: 10, user: { avatar: Avatar10, name: 'Candice Wu', role: 'Corporate Manager' }, totalpoints: 1223, newemailleads: 61, reward: 702 },
];

export default function Table2() {

    return (

        <div className="flex flex-col  bg-[#212A43] text-neutrals-200">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light border-separate border-spacing-y-[12px]">
                            <thead className="font-medium text-xs leading-[18px]">
                                <tr>
                                    <th scope="col" className="px-1 flex justify-center">
                                    </th>
                                    <th scope="col" className="px-6 border-r border-neutrals-800">Resource and position</th>
                                    <th scope="col" className="px-3 border-r border-neutrals-800">Total Pointst</th>
                                    <th scope="col" className="px-3 border-r border-neutrals-800">New Email Leads</th>
                                    <th scope="col" className="px-3">Reward</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => { 
                                        return (
                                            <tr className={`${((item.id) % 2 === 0) ? 'bg-[#161A3E]' : ''}`} key={item.id}>
                                                    <td className="whitespace-nowrap px-1  text-xs" >{item.id}</td>
                                                    <td className="whitespace-nowrap px-3 border-r border-neutrals-800">
                                                        <div className='flex flex-row'>
                                                            <div className='flex items-center w-[30px] h-[30px]'>
                                                                <img src={item.user.avatar} alt='photo' />
                                                            </div>
                                                            <div className='flex flex-col items-start pl-3'>
                                                                <p className='text-base font-semibold flex justify-start'>{item.user.name}
                                                                </p>
                                                                <p className='text-xs text-neutrals-600'>{item.user.role}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                <td className="whitespace-nowrap px-3 border-r border-neutrals-800 font-baloo font-bold text-lg ">{item.totalpoints}</td>
                                                <td className="whitespace-nowrap px-3 border-r border-neutrals-800 text-sm">{item.newemailleads}</td>
                                                <td className="whitespace-nowrap px-3 text-sm">{item.reward}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};