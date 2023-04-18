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
    { id: 1, user: { avatar: Avatar1, name: 'Jones Ferdinand', role: 'Corporate Manager' }, totalPoints: 1321, level: 'Coqueror', mtd: 18921, daily: 82, reward: 982 },
    { id: 2, user: { avatar: Avatar2, name: 'Vincent Morris', role: 'Corporate Manager' }, totalPoints: 1212, level: 'Coqueror', mtd: 18921, daily: 80, reward: 980 },
    { id: 3, user: { avatar: Avatar3, name: 'Andi Lane', role: 'Corporate Manager' }, totalPoints: 1210, level: 'Ace', mtd: 18903, daily: 80, reward: 972 },
    { id: 4, user: { avatar: Avatar4, name: 'Zahir Mays', role: 'Corporate Manager' }, totalPoints: 1202, level: 'Crown', mtd: 18720, daily: 85, reward: 912 },
    { id: 5, user: { avatar: Avatar5, name: 'Kate Morrison', role: 'Corporate Manager' }, totalPoints: 1180, level: 'Crown', mtd: 18019, daily: 70, reward: 810 },
    { id: 6, user: { avatar: Avatar6, name: 'Ava Wright', role: 'Corporate Manager' }, totalPoints: 1176, level: 'Platinum', mtd: 18512, daily: 69, reward: 800 },
    { id: 7, user: { avatar: Avatar7, name: 'Olivia Rhye', role: 'Corporate Manager' }, totalPoints: 1100, level: 'Platinum', mtd: 17512, daily: 66, reward: 790 },
    { id: 8, user: { avatar: Avatar8, name: 'Lana Steiner', role: 'Corporate Manager' }, totalPoints: 1000, level: 'Platinum', mtd: 17111, daily: 65, reward: 712 },
    { id: 9, user: { avatar: Avatar9, name: 'Koray Okumus', role: 'Corporate Manager' }, totalPoints: 1222, level: 'Ace', mtd: 18921, daily: 62, reward: 712 },
    { id: 10, user: { avatar: Avatar10, name: 'Candice Wu', role: 'Corporate Manager' }, totalPoints: 1223, level: 'Coqueror', mtd: 17005, daily: 61, reward: 702 },
];

export default function Table1() {

    return (

        <div className="flex flex-col  bg-[#161A3E] text-neutrals-200">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light border-separate border-spacing-y-[14px]">
                            <thead className="font-medium text-xs leading-[18px]">
                                <tr>
                                    <th scope="col" className="px-1 flex justify-center">
                                    </th>
                                    <th scope="col" className="px-6 border-r border-neutrals-800">Resource and position</th>
                                    <th scope="col" className="px-3 border-r border-neutrals-800">Total Pointst</th>
                                    <th scope="col" className="px-3 border-r border-neutrals-800">Level</th>
                                    <th scope="col" className="px-3 border-r border-neutrals-800">MTD</th>
                                    <th scope="col" className="px-3 border-r border-neutrals-800">Daily</th>
                                    <th scope="col" className="px-3">Reward</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => {
                                        return (
                                            <tr className={`${((item.id) % 2 !== 0) ? 'bg-[#202449]' : ''}`} key={item.id}>
                                                <td className="whitespace-nowrap px-1  text-xs">{item.id}</td>
                                                <td className="whitespace-nowrap px-3 border-r border-neutrals-800">
                                                    <div className='flex flex-row' key={item.id}>
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
                                                <td className="whitespace-nowrap px-3 border-r border-neutrals-800 font-baloo font-bold text-lg ">{item.totalPoints}</td>
                                                <td className="whitespace-nowrap px-3 border-r border-neutrals-800 text-sm">{item.level}</td>
                                                <td className="whitespace-nowrap px-3 border-r border-neutrals-800 text-sm">{item.mtd}</td>
                                                <td className="whitespace-nowrap px-3 border-r border-neutrals-800 text-sm">{item.daily}</td>
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