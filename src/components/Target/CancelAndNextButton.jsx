import TextIconButton from '@/components/General/Buttons/TextIconButton';


const CancelAndNextButton = () => {
    return (
        <div className='gap-x-3.5 bg-[#202449] w-[431px] h-[58px] flex flex-row justify-center items-center'>
            <TextIconButton 
          	    text = 'Cancel' 
                iconLeft = '' 
                iconRight = '' 
                background='bg-[#202449]' 
                backgroundHover= 'hover:bg-[#FFFFFF]' 
                textColor='text-[#563CC7]'/>
            <TextIconButton 
                text = 'Next' 
                iconLeft = '' 
                iconRight = 'RightArrow' 
                background='bg-[#6043DD]' 
                backgroundHover='hover:bg-indigo-700' 
                textColor='text-[#FFFFFF]'/>
        </div>
    );
};

export default CancelAndNextButton;