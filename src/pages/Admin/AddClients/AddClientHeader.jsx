export default function AddClientHeader({ addClientSelectedTab }) {

    const isActive = 'bg-[#563CC7] text-[#fff] text-[15px] font-semibold';
    const isNotActive = 'bg-transparent text-[#fff] text-[15px] font-semibold';

    return (
        <div className='w-[813px] h-[48px] bg-[#161A3E] flex flex-row justify-start items-center gap-x-[14px] rounded-[12px]'>
            <button className={`w-[128px] h-[48px] ${addClientSelectedTab === 'AddClientDetails' ? isActive : isNotActive} flex flex-row justify-center items-center rounded-[8px]`}>
                <p>Details</p>
            </button>
            <button className={`w-[105px] h-[48px] ${addClientSelectedTab === 'AddClientStores' ? isActive : isNotActive} flex flex-row justify-center items-center rounded-[8px]`}>
                <p>Stores</p>
            </button>
        </div>
    );
}
