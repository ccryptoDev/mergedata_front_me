import Avatar1 from '@/assets/svg/Avatar1.svg'
import Avatar2 from '@/assets/svg/Avatar2.svg'
import Avatar3 from '@/assets/svg/Avatar3.svg'
import Avatar4 from '@/assets/svg/Avatar4.svg'
import Avatar5 from '@/assets/svg/Avatar5.svg'
import Avatar6 from '@/assets/svg/Avatar6.svg'
import Avatar7 from '@/assets/svg/Avatar7.svg'
import Avatar8 from '@/assets/svg/Avatar8.svg'
import Avatar9 from '@/assets/svg/Avatar9.svg'
import Avatar10 from '@/assets/svg/Avatar10.svg'
import Avatar11 from '@/assets/svg/Avatar11.svg'

export default function ScoreBoardBestSellerCard() {

    const data = [
        { id: 1, avatar: Avatar1, name: 'Candice Wu', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
        { id: 2, avatar: Avatar2, name: 'Andy Lane', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
        { id: 3, avatar: Avatar3, name: 'Vicent Morris', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
        { id: 4, avatar: Avatar4, name: 'Jones Ferdinand', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
        { id: 5, avatar: Avatar5, name: 'Zahir Mays', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
        { id: 6, avatar: Avatar6, name: 'Kate Morrison', position: 'Corporate Manager', totalPoints: 767, level: 'Platinum', mtd: 18619, daily: 70, reward: 810 },
        { id: 7, avatar: Avatar7, name: 'Ava Wright', position: 'Corporate Manager', totalPoints: 742, level: 'Platinum', mtd: 18512, daily: 69, reward: 800 },
        { id: 8, avatar: Avatar8, name: 'Olivia Rhye', position: 'Corporate Manager', totalPoints: 731, level: 'Platinum', mtd: 17512, daily: 66, reward: 790 },
        { id: 9, avatar: Avatar9, name: 'Lana Steiner', position: 'Corporate Manager', totalPoints: 731, level: 'Platinum', mtd: 17112, daily: 65, reward: 712 },
        { id: 10, avatar: Avatar10, name: 'Koray Okumus', position: 'Corporate Manager', totalPoints: 700, level: 'Platinum', mtd: 17005, daily: 62, reward: 712 },
        { id: 11, avatar: Avatar11, name: 'Juan Peña', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
    ]

    return (
        <div className='w-[711px] h-[642px] p-[12px] bg-[#161A3E]'>

            <div className="w-[675px] h-[35px]">
                <p className="font-baloo font-[700px] leading-[36px] text-[24px] text-[#FFF]/90 bg-[#161A3E] flex justify-center items-center">
                    Scoreboard - Best seller
                </p>
            </div>
            <div className="w-[680px] h-[590px] bg-[#161A3E] flex flex-col items-start overflow-x-scroll shadow-2xl ">
                <table className='w-[675px] h-auto px-[2px] bg-[#161A3E]'>
                    <thead className='w-[675px] h-[49px] flex flex-row items-center justify-between rounded-[3px]'>
                        <tr className='w-auto h-[34px] flex flex-row items-center justify-between rounded-[3px] pl-[12px] '>
                            <th className='w-[195px] h-[34px] text-[#fff]/90 text-[12px] leading-[12px] text-center pl-[12px] py-[10px] '>Resources and position</th>
                            <th className='w-[110px] h-[34px] text-[#fff]/90 text-[12px] leading-[12px] text-center border-l border-l-[#3E4761] py-[10px]'>Total points</th>
                            <th className='w-[110px] h-[34px] text-[#fff]/90 text-[12px] leading-[12px] text-center border-l border-l-[#3E4761] py-[10px] '>Level</th>
                            <th className='w-[90px] h-[34px] text-[#fff]/90 text-[12px] leading-[12px] text-center border-l border-l-[#3E4761] py-[10px] '>MTD</th>
                            <th className='w-[80px] h-[34px] text-[#fff]/90 text-[12px] leading-[12px] text-center border-l border-l-[#3E4761] py-[10px] '>Daily</th>
                            <th className='w-[73px] h-[34px] text-[#fff]/90 text-[12px] leading-[12px] text-center border-l border-l-[#3E4761] pt-[10px] '>Reward</th>
                        </tr>
                    </thead>
                    <tbody className='w-[675px] h-auto '>
                        {
                            data.map((item) => (
                                <tr
                                    key={item.id}
                                    className={`w-[675px] h-[58px] flex flex-row items-center justify-center rounded-[3px] text-[#fff] ${item.id % 2 === 0 ? 'bg-transparent': 'bg-[#3E4761]/20'}`}
                                >
                                    <td className='w-[220px] pl-[8px] pr-[18px]'>
                                        <div className='w-full h-[40px] flex flex-row items-center justify-between gap-x-[4px]'>
                                            <p className="w-[10px] h-[40] text-[14px] font-[800px] font-baloo text-center leading-[40px]">{item.id}</p>
                                            <div className="flex flex-row items-center justify-center">
                                                <img src={item.avatar} alt='photo' />
                                            </div>
                                            <div className="flex flex-col justify-center items-start">
                                                <p className="text-[14px] leading-[17px] inline-block font-sans">{item.name}</p>
                                                <p className="text-[12px] text-[#6B748E] inline-block leading-[13px] font-sans">{item.position}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='w-[115px] text-[18px] font-[700px] font-baloo leading-[28px] text-center pt-[5px] border-l border-l-[#3E4761]/50'>{item.totalPoints}</td>
                                    <td className='w-[120px] text-[12px] font-sans leading-[22px] pt-[7px] border-l border-l-[#3E4761] text-center text-[#FFF]/60'>{item.level}</td>
                                    <td className='w-[100px] text-[12px] font-sans leading-[18px] pt-[9px] border-l border-l-[#3E4761] text-center text-[#FFF]/60 '>{item.mtd}</td>
                                    <td className='w-[80px] text-[12px] font-sans leading-[18px] pt-[8px] border-l border-l-[#3E4761] text-center text-[#FFF]/60 '>{item.daily}</td>
                                    <td className='w-[80px] text-[12px] font-sans leading-[18px] pt-[8px] border-l border-l-[#3E4761] text-center text-[#FFF]/60 '>{item.reward}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>

    )
}
