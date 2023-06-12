
import QuickChatCounter from '@/components/General/PredictiveAI/QuickChatCounter'
import Decision from '@/components/General/Icons/Decision'
import Avatar1 from '@/assets/svg/Avatar1.svg';
import Avatar2 from '@/assets/svg/Avatar2.svg';
import Avatar3 from '@/assets/svg/Avatar3.svg';
import Avatar4 from '@/assets/svg/Avatar4.svg';
import TextIconButton from '@/components/General/Buttons/TextIconButton'

export default function AssignAnOwnerForThisTask() {

    return (
        <div className='w-[626px] h-[509px] bg-[#35257A] rounded-xl pt-4 pl-6 flex flex-col'>
            <div className='w-[575px] h-[41px] flex flex-row justify-between items-end mb-[39px]'>
                <div className='w-[319px] h-9'>
                    <p className='font-baloo text-[#FFFFFF] text-2xl'>Assign an Owner for this Task</p>
                </div>
                <QuickChatCounter />
            </div>
            <div className='flex flex-row w-[575px] h-[318px] mb-7 justify-between'>
                <div className='w-[250px] h-[318px] border border-dashed rounded-2xl flex items-center justify-center'>
                    <div className='w-[216px] h-[283px] px-6 pt-3
                        bg-gradient-to-r from-[#78ABFB] from-4% to-[#4AEC22] to-90% rounded-xl'>
                        <div className='w-[163px] h-[30px] flex flex-row justify-end items-center '>
                            <div className='transform rotate-[135deg]'>
                                <Decision name='LeftArrow' />
                            </div>
                        </div>
                        <div className='flex flex-row w-[163px] h-[30px] justify-start items-center mb-[5px]'>
                            <Decision name='TaskLg' />
                        </div>
                        <p className='font-baloo text-[#ffffff] text-[27px] mb-1'>Sales GRPU</p>
                        <p className='flex flex-row w-[163px] h-3 justify-start items-center mb-5 text-[#FFFFFF] text-xs'>AIVJH4</p>
                        <div className='w-[163px] h-0 border border-b-2 border-dashed mb-[11px] opacity-50'>
                        </div>
                        <div className='w-[163px] h-6 flex flex-row'>
                            <img src={Avatar1} alt='' />
                            <p className='text-[#FFFFFF] font-baloo font-semibold ml-2 mb-2'>
                                Harrison D
                            </p>
                        </div>
                        <p className='text-[#FFFFFF] font-baloo font-semibold mb-[9px]'>
                            13/02/2023
                        </p>
                        <p className='text-[#FFFFFF] font-baloo font-semibold mb-2'>
                            Predictive AI
                        </p>
                        <div className='w-[163px] h-[23.5px] flex flex-row justify-start items-center gap-x-2 opacity-75'>
                            <TextIconButton
                                iconLeft=''
                                text='Private'
                                iconRight=''
                                background='bg-purple-800'
                                width='w-[74px]'
                                height='h-[23.5px]'
                                backgroundHover=''
                                textSize='text-[13.42px]'
                                textColor='text-white'
                                textColorHover=''
                                borderColor='border border-transparent'
                            />
                            <TextIconButton
                                iconLeft=''
                                text='New'
                                iconRight=''
                                background='bg-[#95D319]'
                                width='w-[57px]'
                                height='h-[23.5px]'
                                backgroundHover=''
                                textSize='text-[13.42px]'
                                textColor='text-white'
                                textColorHover=''
                                borderColor='border border-transparent'
                            />
                        </div>
                    </div>
                </div>
                <div className='w-[271px] h-[318px] flex flex-col items-center justify-between'>
                    <div className='w-[271px] h-[86px] flex flex-col justify-between items-start'>
                        <p className='text-[#FFFFFF] font-baloo font-semibold text-sm leading-4'>
                            Invite additional contributors
                        </p>
                        <div className='w-[271px] h-[56px] border border-[#E5E8EF] rounded-lg flex flex-row items-center justify-between pl-3 pr-4'>
                            <Decision name='ProfilePlus' />
                            <p className='text-[#FFFFFF]'>Salespeople</p>
                            <div className='flex flex-row'>
                                <img src={Avatar1} alt='' className='w-5 h-5' />
                                <img src={Avatar2} alt='' className='w-5 h-5 ml-[-6px]' />
                                <img src={Avatar3} alt='' className='w-5 h-5 ml-[-6px]' />
                                <img src={Avatar4} alt='' className='w-5 h-5 ml-[-6px]' />
                                <div className='w-5 h-5 bg-[#07b1ea] rounded-full ml-[-6px] flex items-center justify-center'>
                                    <p className='text-[#FFFFFF] font-bold text-[8px]'>+5</p>
                                </div>
                            </div>
                            <Decision name='ArrowDown' />
                        </div>
                    </div>
                    <div className='w-[271px] h-[86px] flex flex-col justify-between items-start'>
                        <p className='text-[#FFFFFF] font-baloo font-semibold text-sm leading-4'>
                            Share a Link (View)
                        </p>
                        <div className='w-[271px] h-[56px] bg-[#202449] border border-[#E5E8EF] rounded-lg flex flex-row items-center justify-between pl-3 pr-4'>
                            <p className='text-[#FFFFFF]'>mrgdta.rcmnd.io/SGPItsk</p>
                            <div className='flex flex-row'>
                            </div>
                            <Decision name='Copy' />
                        </div>
                    </div>
                    <div className='w-[271px] h-[86px] flex flex-col justify-between items-start'>
                        <p className='text-[#FFFFFF] font-baloo font-semibold text-sm leading-4'>
                            Access
                        </p>
                        <div className='w-[175px] h-[56px] border border-[#E5E8EF] rounded-lg flex flex-row items-center justify-between pl-3 pr-4'>
                            <Decision name='Private' />
                            <p className='text-[#FFFFFF]'>Private</p>
                            <Decision name='ArrowDown' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[575px] h-[44px] flex flex-row justify-end items-center gap-x-[10px]'>
                <TextIconButton
                    iconLeft=''
                    iconRight='Bell'
                    width='w-[168px]'
                    height='h-[44px]'
                    text='Notify Harrison D'
                    textSize = 'text-sm'
                    background='bg-[#563CC7]'
                />
                <TextIconButton
                    iconLeft=''
                    iconRight='TaskLg'
                    width='w-[132px]'
                    height='h-[44px]'
                    text='Create Task'
                    textSize = 'text-sm'
                    background='bg-[#563CC7]'
                />
            </div>
        </div>
    )
}


