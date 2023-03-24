import TextIconButton from "@/components/General/Buttons/TextIconButton";

function CancelAndSave() {
    return (
        <div>
            <div className='flex flex-row justify-end'>
                <div className='w-[286px] h-[56px] flex flex-row justify-between' >
                    <TextIconButton className='mr-[14px]' text='Cancel' width='w-[136px]' height='h-[56px]' background='bg-[#0D102C]' textColor='text-[#563CC7]' backgroundHover='hover:bg-[#FFFFFF] hover:opacity-90' />
                    <TextIconButton text='Save' width='w-[136px]' height='h-[56px]' background='bg-[#6043DD]' textColor='text-[#C2C8D7]' iconRight='Save' backgroundHover='hover:opacity-60' />
                </div>
            </div>Í
        </div>
    )
}

export default CancelAndSave