import photo_1 from "@/assets/svg/photo_1.svg";
import photo_2 from "@/assets/svg/photo_2.svg";
import photo_3 from "@/assets/svg/photo_3.svg";
import photo_4 from "@/assets/svg/photo_4.svg";
import photo_5 from "@/assets/svg/photo_5.svg";

export default function ScoreBoardBestSeller() {

    const data = [
        { id: 1, avatar: photo_1, name: 'Candice Wu', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
        { id: 2, avatar: photo_2, name: 'Andy Lane', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
        { id: 3, avatar: photo_3, name: 'Vicent Morris', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
        { id: 4, avatar: photo_4, name: 'Jones Ferdinand', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
        { id: 5, avatar: photo_5, name: 'Zahir Mays', position: 'Corporate Manager', totalPoints: 822, level: 'Platinum', mtd: 16002, daily: 61, reward: 702 },
    ]
    const getBgColor = (id) => {
        const colors = {
            1: '#FAC125',
            2: '#6B748E',
            3: '#E98A4D',
            4: '#161A3E',
            5: '#3E4761',
        };
        return colors[id] || '#202449';
    };

    const getTextColor = (id) => {
        const colors = {
            1: '#6043DD',
            2: '#4832A6',
            3: '#35257A',
            4: '#ffffff',
            5: '#ffffff',
        };
        return colors[id] || '#fff';
    };

    return (
        <div className="w-[498px] h-[266px] border-l-[4px] border-l-[#209DD4] border-opacity-80 flex justify-end mt-[12px]">
            <div className="w-[484px] h-[266px] bg-[#161A3E] rounded-[8px] flex flex-col items-start shadow-2xl">
                <p className='text-[14.6] text-[#907BE7] pl-3'>Scoreboard - Best Seller</p>
                <table className='w-[460px] h-[207px] px-[2px] ml-[12px] bg-[#161A3E] '>
                    <thead className='w-[460px] h-[34px] flex flex-row items-center justify-between rounded-[3px]'>
                        <tr className='w-[460px] h-[34px] flex flex-row items-center justify-between rounded-[3px]'>
                            <th className='w-[165px] h-[34px] text-[#fff] text-[8.33px] leading-[12px] text-center pt-[10px]'>Resources and position</th>
                            <th className='w-[64px] h-[34px] text-[#fff] text-[8.33px] leading-[12px] text-center pt-[10px]'>Total points</th>
                            <th className='w-[70px] h-[34px] text-[#fff] text-[8.33px] leading-[12px] text-center pt-[10px]'>Level</th>
                            <th className='w-[50px] h-[34px] text-[#fff] text-[8.33px] leading-[12px] text-center pt-[10px]'>MTD</th>
                            <th className='w-[40px] h-[34px] text-[#fff] text-[8.33px] leading-[12px] text-center pt-[10px]'>Daily</th>
                            <th className='w-[50px] h-[34px] text-[#fff] text-[8.33px] leading-[12px] text-center pt-[10px]'>Reward</th>
                        </tr>
                    </thead>
                    <tbody className='w-[460px] h-[206px] '>
                        {
                            data.map((item) => (
                                <tr
                                    key={item.id}
                                    className='w-[460px] h-[41px] flex flex-row items-center justify-between rounded-[3px]'
                                    style={{ backgroundColor: getBgColor(item.id), color: getTextColor(item.id), opacity: item.id === 4 || item.id === 5 ? 0.6 : 1 }}
                                >
                                    <td className='w-[165px] h-[41px]'>
                                        <div className='w-full h-[40px] flex flex-row items-center justify-between pl-[6px] gap-x-[1px]'>
                                            <p className="w-[8px] h-[40] text-[9.72px] font-[800px] font-baloo text-center leading-[40px]">{item.id}</p>
                                            <div className="w-[34px] h-[40px] flex flex-row items-center justify-center">
                                                <img src={item.avatar} alt='photo' className='w-[26px] h-[26px] rounded-full' />
                                            </div>
                                            <div className="flex flex-col justify-center items-start">
                                                <p className="text-[14px] leading-[17px] font-sans">{item.name}</p>
                                                <p className="text-[12px] text-[#6B748E] leading-[13px] font-sans">{item.position}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='w-[64px] h-[41px] text-[18px] font-[700px] font-baloo leading-[28px] text-center pt-[5px]'>{item.totalPoints}</td>
                                    <td className='w-[70px] h-[41px] text-[12px] font-sans leading-[22px] pt-[7px]'>{item.level}</td>
                                    <td className='w-[50px] h-[41px] text-[12px] font-sans leading-[18px] pt-[9px] text-center '>{item.mtd}</td>
                                    <td className='w-[40px] h-[41px] text-[12px] font-sans leading-[18px] pt-[8px] text-center '>{item.daily}</td>
                                    <td className='w-[50px] h-[41px] text-[12px] font-sans leading-[18px] pt-[8px] text-center '>{item.reward}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
