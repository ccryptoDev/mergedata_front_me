import TitleVectorX from "@/components/Target/TitleVectorX";

function SelectionModelCard({ onClick }) {
    return (
        <div className='w-[434px]'>
            <TitleVectorX
                width='w-[434px]'
                height='h-12'
                upperTitle='Nissan'
                mainTitle='Altima'
                upperTitleSize='text-xs'
                mainTitleSize ='text-2xl'
                onClick={onClick}
            />
        </div>
    )
}

export default SelectionModelCard