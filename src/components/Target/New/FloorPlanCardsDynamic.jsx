export default function FloorPlanCardsDynamic ({ reportInfo = { name: 'Floorplan', columns: ['# Floor plans', 'Deals'] }, dataInfo = [{ values: ['34', '142'] }] }) {

    return (
        <div className="w-[337px] h-[35%] flex flex-col items-start p-6 gap-3 bg-neutrals-900 rounded-2xl">
            <span className="w-full h-[36px] flex items-center font-baloo font-bold text-2xl text-white">{reportInfo.name}</span>
            <div className="w-[289px] h-[58px] flex flex-row items-start gap-3">
                <div className="flex flex-col justify-center items-start w-[139px] h-[58px]">
                    <span className="w-[90px] h-[22px] flex items-center text-white text-sm">{reportInfo.columns[0]}</span>
                    <div className="w-[65px] h-[32px] flex flex-row items-center gap-1">
                        <span className="w-[36px] h-[32px] flex items-center font-baloo font-bold text-3xl text-white">{dataInfo[0].values[0]}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-[139px] h-[58px]">
                    <span className="w-[90px] h-[22px] flex items-center text-white text-sm">{reportInfo.columns[1]}</span>
                    <div className="w-[85px] h-[32px] flex flex-row items-center">
                        <span className="w-[50px] h-[32px] flex items-center font-baloo font-bold text-3xl text-white">{dataInfo[0].values[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

