import React, { useEffect, useState } from "react";
import Decision from "@components/General/Icons/Decision";

export default function TopMenu({ onHandleActiveButton }) {

    const menuList = [
        { id: 1, iconName: "Chat", title: "Channels" },
        { id: 2, iconName: "Attachment", title: "Attachments" },
        { id: 3, iconName: "BookMark", title: "Saved" },
    ];

    const activeButtonStyle = "bg-[#35257A] border-[#35257A] border-2 h-[40%] w-full flex flex-row justify-start items-center px-[0.75em] gap-x-[0.3em] group:hover:font-semibold";
    const inactiveButtonStyle = "bg-[#05081E]/70 border-[#05083E] border-2 h-[30%] w-full flex flex-row justify-start items-center px-[0.75em] py-[2px] gap-x-[0.3em] group:hover:font-semibold  group:hover:border-[#35257A]/30";

    const [activeButton, setActiveButton] = useState('Channels');

    const handleButtonClick = (title) => {
        setActiveButton(title); 
    };

    useEffect(() => {
        onHandleActiveButton(activeButton);
    }, [activeButton]);

    return (
        <div className="w-full h-[7em] bg-[#13132D] flex flex-col justify-between items-center py-[0.625em] gap-y-[2px]">
            {menuList.map((item) => {
                return (
                    <button
                        key={item.id}
                        className={`${activeButton === item.title ? activeButtonStyle : inactiveButtonStyle} group hover:bg-[#1E1E4E]`}
                        onClick={() => handleButtonClick(item.title)}
                    >
                        <div className="w-[1.5em] h-[1.5em] flex items-center justify-center group-hover:scale-[103%]">
                            <Decision name={item.iconName} />
                        </div>
                        <p className="text-[#FFFFFF] text-[0.88rem]">{item.title}</p>
                    </button>
                );
            })}
        </div>
    );
}
