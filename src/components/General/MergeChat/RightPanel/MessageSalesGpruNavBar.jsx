import React, { useState } from 'react';
import TextIconButton from '@/components/General/Buttons/TextIconButton';
import LupeIcon from '@/components/General/Icons/LupeIcon';
import NavBarHeader from '@/components/General/MergeChat/RightPanel/NavBarHeader';

export default function MessageSalesGpruNavBar({
    title,
    comment,
    selectedButton,
    onHandleSelectedNavBarButton
}) {

    const [showItems, setShowItems] = useState(false);
    const [activeButton, setActiveButton] = useState(
        selectedButton === 'Channels' || 'Best Seller' ? 'Messaging Channel' :
            selectedButton === 'Attachments' ? 'Attachments Sent' : ''
    );

    const handleNavBar = (button) => {
        setActiveButton(button);
        onHandleSelectedNavBarButton(activeButton);
    };

    console.log('selectedButton', selectedButton)

    return (
        <div className="flex flex-col">
            <NavBarHeader title={title} comment={comment} selectedButton={selectedButton} />
            <div className="w-[1055px] h-[42px] bg-[#13132D] flex flex-row items-center space-between pl-4 gap-x-[22px]">

                {selectedButton === 'Channels' && (
                    <>
                        <button
                            type='button'
                            onClick={() => handleNavBar('Messaging Channel')}
                        >
                            <TextIconButton
                                text="Messaging Channel"
                                iconRight=""
                                iconLeft="CommunicationGlobe"
                                background={`${activeButton === 'Messaging Channel' ? 'bg-[#4832A6]' : 'bg-[#4832A6]/40'}`}
                                textColor={`${activeButton === 'Messaging Channel' ? 'text-[#fff]' : 'text-[#EEECF1]/60'}`}
                                width="w-[160px]"
                                height="h-[29px]"
                                borderColor=""
                                textSize="text-[12px] font-md font-baloo leading-[18px]"
                                gapX="gap-x-0"
                                rounded="rounded-[12px]"
                                textColorHover=""
                                backgroundHover=""
                            />
                        </button>

                        <button
                            type="button"
                            onClick={() => handleNavBar('Recommendation History')}
                        >
                            <TextIconButton
                                text="Recommendation History"
                                iconRight=""
                                iconLeft="SmBot"
                                background={`${activeButton === 'Recommendation History' ? 'bg-[#4832A6]' : 'bg-[#4832A6]/40'}`}
                                textColor={`${activeButton === 'Recommendation History' ? 'text-[#fff]' : 'text-[#EEECF1]/60'}`}
                                width="w-[193px]"
                                height="h-[29px]"
                                borderColor=""
                                textSize="text-[12px] font-md font-baloo leading-[18px]"
                                gapX="gap-x-0"
                                rounded="rounded-[12px]"
                                textColorHover=""
                                backgroundHover=""
                            />
                        </button>
                        <button
                            type='button'
                            onClick={() => handleNavBar('Task Information')}
                        >
                            <TextIconButton
                                text="Task Information"
                                iconRight=""
                                iconLeft="PieGraph"
                                background={`${activeButton === 'Task Information' ? 'bg-[#4832A6]' : 'bg-[#4832A6]/40'}`}
                                textColor={`${activeButton === 'Task Information' ? 'text-[#fff]' : 'text-[#EEECF1]/60'}`}
                                width="w-[136px]"
                                height="h-[29px]"
                                borderColor=""
                                textSize="text-[12px] font-md font-baloo leading-[14px]"
                                gapX="gap-x-0"
                                rounded="rounded-[12px]"
                                textColorHover=""
                                backgroundHover=""
                            />
                        </button>
                        <button
                            type='button'
                            onClick={() => handleNavBar('ADVJJ3')}
                        >
                            <TextIconButton
                                text="ADVJJ3"
                                iconRight=""
                                iconLeft="Note"
                                background={`${activeButton === 'ADVJJ3' ? 'bg-gradient-to-r from-[#EE7302] to-[#F1C300]' : 'bg-transparent'}`}
                                textColor={`${activeButton === 'ADVJJ3' ? 'text-[#fff]' : 'text-[#EEECF1]/60'}`}
                                rounded={`${activeButton === 'ADVJJ3' ? 'rounded-[6px]' : 'rounded-[12px]'}`}
                                width="w-[93px]"
                                height="h-[29px]"
                                borderColor=""
                                textSize="text-[12px] font-md font-baloo leading-[14px]"
                                gapX="gap-x-0"
                                textColorHover=""
                                backgroundHover=""
                            />
                        </button>
                    </>
                )}
                {selectedButton === 'Attachments' && (
                    <>
                        <button
                            type="button"
                            onClick={() => handleNavBar('Attachments Sent')}
                        >
                            <TextIconButton
                                text='Attachments Sent'
                                iconRight=''
                                iconLeft='FileUpload'
                                background={`${activeButton === 'Attachments Sent' ? 'bg-[#4832A6]' : 'bg-[#4832A6]/40'}`}
                                textColor={`${activeButton === 'Attachments Sent' ? 'text-[#fff]' : 'text-[#EEECF1]/60'}`}
                                width='w-[160px]'
                                height='h-[29px]'
                                borderColor=''
                                textSize='text-[12px] font-md font-baloo leading-[18px]'
                                gapX='gap-x-0'
                                rounded='rounded-[12px]'
                                textColorHover=''
                                backgroundHover=''
                            />
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNavBar('Attachments Received')}
                        >
                            <TextIconButton
                                text='Attachments Received'
                                iconRight=''
                                iconLeft='FileDownload'
                                background={`${activeButton === 'Attachments Received' ? 'bg-[#4832A6]' : 'bg-[#4832A6]/40'}`}
                                textColor={`${activeButton === 'Attachments Received' ? 'text-[#fff]' : 'text-[#EEECF1]/60'}`}
                                width='w-[193px]'
                                height='h-[29px]'
                                borderColor=''
                                textSize='text-[12px] font-md font-baloo leading-[18px]'
                                gapX='gap-x-0'
                                rounded='rounded-[12px]'
                                textColorHover=''
                                backgroundHover=''
                            />
                        </button>
                    </>
                )}
                {selectedButton === 'Best Seller' && (
                    <>
                        <button
                            type='button'
                            onClick={() => handleNavBar('Messaging Channel')}
                        >
                            <TextIconButton
                                text="Messaging Channel"
                                iconRight=""
                                iconLeft="CommunicationGlobe"
                                background={`${activeButton === 'Messaging Channel' ? 'bg-[#4832A6]' : 'bg-[#4832A6]/40'}`}
                                textColor={`${activeButton === 'Messaging Channel' ? 'text-[#fff]' : 'text-[#EEECF1]/60'}`}
                                width="w-[160px]"
                                height="h-[29px]"
                                borderColor=""
                                textSize="text-[12px] font-md font-baloo leading-[18px]"
                                gapX="gap-x-0"
                                rounded="rounded-[12px]"
                                textColorHover=""
                                backgroundHover=""
                            />
                        </button>

                        <button
                            type="button"
                            onClick={() => handleNavBar('Contest Information')}
                        >
                            <TextIconButton
                                text="Contest Information"
                                iconRight=""
                                iconLeft="PieGraph"
                                background={`${activeButton === 'Contest Information' ? 'bg-[#4832A6]' : 'bg-[#4832A6]/40'}`}
                                textColor={`${activeButton === 'Contest Information' ? 'text-[#fff]' : 'text-[#EEECF1]/60'}`}
                                width="w-[158px]"
                                height="h-[29px]"
                                borderColor=""
                                textSize="text-[12px] font-md font-baloo leading-[18px]"
                                gapX="gap-x-0"
                                rounded="rounded-[12px]"
                                textColorHover=""
                                backgroundHover=""
                            />
                        </button>
                        <button
                            type='button'
                            onClick={() => handleNavBar('ADVJJ3')}
                        >
                            <TextIconButton
                                text="CBS2023"
                                iconRight=""
                                iconLeft="CrownMd"
                                background={`${activeButton === 'ADVJJ3' ? 'bg-gradient-to-r from-[#EE7302] to-[#F1C300]' : 'bg-gradient-to-r from-[#EE7302]/40 to-[#F1C300]/40'}`}
                                textColor={`${activeButton === 'ADVJJ3' ? 'text-[#fff]' : 'text-[#EEECF1]/60'}`}
                                rounded={`${activeButton === 'ADVJJ3' ? 'rounded-[6px]' : 'rounded-[12px]'}`}
                                width="w-[93px]"
                                height="h-[29px]"
                                borderColor=""
                                textSize="text-[12px] font-md font-baloo leading-[14px]"
                                gapX="gap-x-0"
                                textColorHover=""
                                backgroundHover=""
                            />
                        </button>
                    </>
                )}

                <form className={`${selectedButton === 'Channels' ? 'w-[354px]' : selectedButton === 'Attachments' ? 'w-[630px]' : 'w-[540px]'
                    } h-[30px] flex flex-row items-center justify-between pl-0 pr-3 rounded-lg border border-[#3E4761]`}
                >
                    <input
                        className="bg-transparent text-[#EEECF1] placeholder:text-[#505A78]"
                        type="text"
                        placeholder="Search"
                    />
                    <button type="button" className="cursor-pointer" onClick={() => setShowItems(!showItems)}>
                        <LupeIcon className={`duration-300 ${showItems ? 'rotate-180' : ''}`} />
                    </button>
                </form>

            </div>
        </div>
    );
}
