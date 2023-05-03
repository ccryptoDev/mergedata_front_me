import { useState } from "react";

export default function NavBarForm() {
    const [showSettingsForm, setShowSettingsForm] = useState(false);
    const [showParticipantsForm, setShowParticipantsForm] = useState(false);
    const [showPointsForm, setShowPointsForm] = useState(false);

    function getClassName(isActive) {
        return `w-1/3 h-auto flex items-center justify-center text-[#FFF] font-baloo text-sm rounded-lg ${isActive ? "bg-[#6043DD]" : null}`;
    }

    return (
        <div className="w-[1341px] h-[48px] flex flex-row bg-[#161A3E]">
            <button
                className={getClassName(showSettingsForm)}
                onClick={() => setShowSettingsForm(!showSettingsForm)}
            >
                Settings
            </button>
            <button
                className={getClassName(showParticipantsForm)}
                onClick={() => setShowParticipantsForm(!showParticipantsForm)}
            >
                Participants
            </button>
            <button
                className={getClassName(showPointsForm)}
                onClick={() => setShowPointsForm(!showPointsForm)}
            >
                Points
            </button>
        </div>
    );
}