import ResumeUserItem from "@components/Target/New/ResumeUserItem"
import Decision from "@/components/General/Icons/Decision"
import SelectionModelCard from "@/components/Target/New/SelectionModelCard"

function ResumeUserCard({
    icon = 'Download'
}) {
    return (
        <div className='w-[531px] h-[665px] rounded-xl bg-neutrals-900 p-5 gap-y-[10px] flex flex-col items-start'>
            <div className='flex flex-row gap-y-6'>
                <div className='w-[22px] h=[22px] mr-4 flex items-center justify-center'>
                    <Decision name={icon} />
                </div>
                <div>
                    <SelectionModelCard />
                </div>
            </div>
            <div>
                <ResumeUserItem />
            </div>
            <div>
                <ResumeUserItem />
            </div>
        </div>
    )
}

export default ResumeUserCard