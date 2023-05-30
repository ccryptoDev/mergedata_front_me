import TextIconButton from '@/components/General/Buttons/TextIconButton';


const CancelAndNextButton = () => {
    return (
        <div className='gap-x-3.5 bg-transparent w-auto h-auto flex flex-row justify-center items-center'>
            <TextIconButton
                text='Cancel'
                iconLeft=''
                iconRight=''
                background='bg-[#05081E]'
                backgroundHover='hover:bg-[#FFFFFF]'
                textColor='text-[#563CC7]'
                width='w-[134px]'
                height='h-[56px]'
                textSize = 'text-lg'
                textColorHover = ''
            />
            <TextIconButton
                text='Next'
                iconLeft=''
                iconRight='RightArrow'
                background='bg-[#6043DD]'
                backgroundHover='hover:bg-indigo-700'
                textColor='text-[#FFFFFF]' 
                width='w-[134px]'
                height='h-[56px]'
                textSize = 'text-lg'
                textColorHover = ''
            />
            
        </div>
    );
};

export default CancelAndNextButton;

   
