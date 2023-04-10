import IconSelected from '@/components/General/Icons/Decision';

const SingleButton = ({

    icon = 'Filter',
    background = 'bg-neutrals-800',
    width = 'w-[56px]',
    border = 'border border-[2px] border-neutrals-900',
    height = 'h-[50px]',
    backgroundHover = 'hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300',
    borderHover = 'hover:border-purple-600',
    radius = 'rounded-xl'

}) => {
    return (
        <button className={`${background} ${width} ${height} ${border} flex items-center justify-center shadow-[0_13px_25px_-13px_rgba(0,0,0,0.48)] ${backgroundHover} ${borderHover} ${radius}`}>
            <div className='w-6 h-6 flex justify-center items-center'>
                <IconSelected name={icon} />
            </div>
        </button>
    );
};

export default SingleButton;