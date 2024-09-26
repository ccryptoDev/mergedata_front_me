import "@/css/Toggle.css";

export default function ToggleSwitch ({ action, handleClick, name1, name2 }) {


    return (
        <div className="w-auto h-7 bg-[#212A43] flex flex-row items-center gap-4">
            <div className="w-auto h-7">
                <span className="font-baloo text-[#EEECF1]">{name1}</span>
            </div>
            <label className="switch" >
                <input type="checkbox" checked={action} onClick={handleClick} />
                <span className="slider"></span>
            </label>
            <div className="w-auto h-7">
                <span className="font-baloo text-[#EEECF1]">{name2}</span>
            </div>
        </div>
    )
}


