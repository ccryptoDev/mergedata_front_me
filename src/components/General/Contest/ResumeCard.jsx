import BadgeProgressandButtons from "./BadgeProgressandButtons";
import ProgressPieResume from "./ProgressPieResume";
import UserInfoResume from "./UserInfoResume";

const data = [
    { endAngle: 300, value: '75%', gameNumber: 1, date: '01/12/2022 - 01/03/2023' },
    { endAngle: 180, value: '45%', gameNumber: 2, date: '01/12/2022 - 01/03/2023' },
    { endAngle: 330, value: '95%', gameNumber: 3, date: '01/12/2022 - 01/03/2023' }
]

export default function ResumeCard() {
    return (
        <div className='w-[317px] h-[677px] bg-[#161A3E] flex flex-col items-center justify-start pt-2'>
            <UserInfoResume />
            <BadgeProgressandButtons />

            {data.map(item => {
                return (
                    <ProgressPieResume
                        endAngle={item.endAngle}
                        value={item.value}
                        gameNumber={item.gameNumber}
                        date={item.date}
                    />)
            })}


        </div>
    )
}
