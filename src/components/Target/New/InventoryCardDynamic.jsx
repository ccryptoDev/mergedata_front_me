const InventoryCardDynamic = ({ reportInfo = { name: 'Inventory', description: 'Aging Analysis' }, dataInfo = [{ name: '0-31', quantity: '12' }] }) => {
    return (
        <div className="flex flex-col items-start w-[337px] h-[65%] bg-neutrals-900 rounded-2xl py-6 px-8 gap-3.5">
            <div className="flex flex-col items-start w-[151px] h-[55px]">
                <div className="flex flex-row items-center w-[151px] h-[36px] gap-2">
                    <span className="w-[107px] h-[36px] font-baloo font-bold text-2xl text-white flex items-center">{reportInfo.name}</span>
                </div>
                <span className='w-[151px] h-[19px] text-[14px] text-white tracking-wide opacity-60'>{reportInfo.description}</span>
            </div>
            <div className='flex flex-col w-[273px] h-[180px] gap-6 justify-end'>
                <div className='flex flex-row items-start w-[273px] h-[74px] gap-6'>

                    <div className='flex flex-col justify-center items-start w-[125px] h-[74px]'>
                        <span className='w-[100px] h-[22px] flex items-center text-white text-sm'>{dataInfo[0].name}</span>
                        <div className='w-[65px] h-[24px] flex flex-row items-center justify-between'>
                            <span className='w-[23px] h-[24px] font-baloo font-bold text-[24px] flex items-center text-white'>{dataInfo[0].quantity}</span>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-start w-[125px] h-[74px]'>
                        <span className='w-[100px] h-[22px] flex items-center text-white text-sm'>{dataInfo[1].name}</span>
                        <div className='w-[65px] h-[24px] flex flex-row items-center justify-between'>
                            <span className='w-[23px] h-[24px] font-baloo font-bold text-[24px] flex items-center text-white'>{dataInfo[1].quantity}</span>
                        </div>
                    </div>

                </div>

                <div className='flex flex-row items-start w-[273px] h-[74px] gap-6'>

                    <div className='flex flex-col justify-center items-start w-[125px] h-[74px]'>
                        <span className='w-[100px] h-[22px] flex items-center text-white text-sm'>{dataInfo[2].name}</span>
                        <div className='w-[70px] h-[24px] flex flex-row items-center justify-between'>
                            <span className='w-[23px] h-[24px] font-baloo font-bold text-[24px] flex items-center text-white'>{dataInfo[2].quantity}</span>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-start w-[125px] h-[74px]'>
                        <span className='w-[100px] h-[22px] flex items-center text-white text-sm'>{dataInfo[3].name}</span>
                        <div className='w-[70px] h-[24px] flex flex-row items-center justify-between'>
                            <span className='w-[23px] h-[24px] font-baloo font-bold text-[24px] flex items-center text-white'>{dataInfo[3].quantity}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InventoryCardDynamic;