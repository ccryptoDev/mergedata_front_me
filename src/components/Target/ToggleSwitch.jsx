import "@/css/global.css";

const ToggleSwitch = () => {
    return (
        <div className="w-[220px] h-7 px-2 bg-[#161A3E] flex flex-row items-center gap-4">
            <div className="w-20 h-7">
                <span className="font-baloo text-[#EEECF1]">Percentage</span>
            </div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
            <div className="w-14 h-7">
                <span className="font-baloo text-[#EEECF1]">Amount</span>
            </div>
        </div>
    )
}

export default ToggleSwitch;    