import TitleVectorX from "@/components/Target/TitleVectorX";
import TargetNew from '@/components/Target/TargetNew';
import CancelAndSave from "@/components/Target/CancelAndSave";

export default function DepartmentCard() {
    return (
        <div className='w-[431px] h-[673px] bg-[#0D102C] rounded-[16px] px-[24px] flex flex-col items-start justify-center'>
            <div className='w-[383px] h-[625px]' >
                <div>
                    <TitleVectorX 
                    width = 'w-96'
                    height = 'h-10'
                    upperTitle = 'Alameda Onda'
                    mainTitle = 'By Department'
                    />
                </div>
                <div className='my-3 w-full h-[506px]'>
                    <TargetNew uppertitle='Target' maintitle='New' />
                    <TargetNew uppertitle='Target' maintitle='Used' />
                    <TargetNew uppertitle='Target' maintitle='F&I' />
                    <TargetNew uppertitle='Target' maintitle='Parts' />
                </div>
                <CancelAndSave/>
            </div>
        </div>
    )
}

