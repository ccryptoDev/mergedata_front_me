import "@/css/ToggleSwitchIntegrations.css";

export default function ToggleSwitchIntegration() {

    return (
        <div className="w-auto h-7 bg-[#212A43] flex flex-row items-center gap-4">
            <label className="switch" >
                <input type="checkbox" />
                <span className="sliders"></span>
            </label>
        </div>
    )
}


