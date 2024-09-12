import IconNameIconDropdownButton from '@/components/General/Buttons/IconNameIconDropdownButton'
import TextIconButton from '@/components/General/Buttons/TextIconButton'
import Decision from '@/components/General/Icons/Decision'
import Avatar1 from '@assets/svg/Avatar1.svg'
import Avatar2 from '@assets/svg/Avatar2.svg'
import Avatar3 from '@assets/svg/Avatar3.svg'
import Avatar4 from '@assets/svg/Avatar4.svg'
import Avatar5 from '@assets/svg/Avatar5.svg'

export default function TaskInformationView() {

    const data = [
        { id: 1, avatar: Avatar1, employee: 'Eduard Monte', position: 'Semi Senior', grpu: '-28%', completion: 'On Going', action: 'None' },
        { id: 2, avatar: Avatar2, employee: 'Wendy Smith', position: 'Junior Salesperson', grpu: '-25%', completion: 'Finished', action: 'Jay García' },
        { id: 3, avatar: Avatar3, employee: 'Miguel Flores', position: 'Junior Salesperson', grpu: '-22%', completion: 'Finished', action: 'Jay García' },
        { id: 4, avatar: Avatar4, employee: 'April Graner', position: 'Semi Senior', grpu: '-22%', completion: 'On Going', action: 'None' },
        { id: 5, avatar: Avatar5, employee: 'Dale Postman', position: 'Semi Senior', grpu: '-21%', completion: 'On Going', action: 'None' },
    ]

    const buttonColor = (text) => {
        if (text === 'On Going') {
            return 'bg-[#FC9905]'
        }
        if (text === 'Finished') {
            return 'bg-[#00C0E2]'
        }
    }

    return (
        <div className="w-[1055px] h-[632px] bg-[#13132D] flex flex-col justify-end items-end rounded-b-[12px]" >
            <div className="w-[1055px] h-[611px] rounded-[12px] bg-[#35257A] pt-[25px] pl-[29px] pr-[36px] flex flex-col mt-[1em]">
                <div className="w-[455px] h-[87px] mb-[7px]">
                    <p className="text-[#FFFFFF] text-[28px] font-bold font-baloo leading-[43px] ">Assign to a manager to dig into the
                        cause of the drop
                    </p>
                </div>
                <div className="w-[671px] h-[65px] mb-[8px]">
                    <p className="text-[#C2C8D7] text-[15.6px] leading-[21px]">By assigning a dedicated manager and scheduling regular one-on-one meetings, you can create a clear line of communication between the employee and the manager, and provide the employee with a dedicated support system to help them succeed.
                    </p>
                </div>
                <div className="w-[990px] h-[25px] flex flex-row gap-x-[6px] mb-[13px] items-center ">
                    <div className='w-[28px] h-[28px] rounded-full bg-[#161A3E] flex flex-row items-center justify-center'>
                        <Decision name="BlueStar" />
                    </div>
                    <p className="w-[233px] text-[#C2C8D7]/70 text-[1rem] ">Employee</p>
                    <p className="w-[194px] text-[#C2C8D7]/70 text-[1rem] ">GPRU</p>
                    <p className="w-[326px] text-[#C2C8D7]/70 text-[1rem] ">Completion</p>
                    <p className="w-[130px] text-[#C2C8D7]/70 text-[1rem] ">Action</p>
                </div>
                <div className='w-[990px] h-[280px] items-center'>
                    {
                        data.map((item) => (
                            <div
                                key={item.id}
                                className="relative w-[990px] h-[50px] flex flex-row items-center gap-x-[8px] bg-[#0D102C] pl-[60px] pr-[16px] rounded-l-[27px] rounded-br-[28px] rounded-tr-[12px] mb-[6px]">
                                <img src={item.avatar} alt="avatar" className='absolute w-[51px] h-[51px] left-[-3px]' />
                                <div className="w-[220px] h-[50px] flex flex-col justify-center">
                                    <p className="text-[#FFFFFF] text-[1rem] leading-[24px] font-baloo">{item.employee}</p>
                                    <p className="text-[#C2C8D7] text-[0.55rem] leading-[14px]">{item.position}</p>
                                </div>
                                <p className="w-[194px] text-[#FFFFFF]/60 font-[400px] text-[1rem] ">{item.grpu}</p>
                                <button className="w-[326px] text-[#FFFFFF] text-[1rem] ">
                                    <TextIconButton
                                        text={item.completion}
                                        textSize='text-[13px] font-baloo'
                                        iconLeft=''
                                        iconRight=''
                                        background={buttonColor(item.completion)}
                                        textColor='text-white'
                                        width='w-[72px]'
                                        height='h-[28px]'
                                        borderColor=''
                                        backgroundHover=''
                                        borderHover=''
                                        gapX='gap-x-2'
                                        rounded='rounded-[4px]'
                                    />
                                </button>
                                <IconNameIconDropdownButton
                                    iconName='Profile'
                                    width='w-[138px]'
                                    height='h-[28px] py-[6px] pl-[6px] pr-[8px]'
                                    text={item.action}
                                    borderRadius='rounded-[3px]'
                                    background='bg-[#fff]/20'
                                    border='border border-[1px] border-[#E5E8EF]/20'
                                    backgroundHover='hover:bg-neutrals-900 transition duration-300 delay-150 hover:delay-300'
                                    borderHover='hover:border-purple-600'
                                    font='font-[400] font-sans text-[13px] leading-[24px] text-[#E5E8EF]'
                                    activeStyle='bg-transparent'
                                />
                                <div className='w-[39px] h-35px] ml-[6px]'>
                                    <input
                                        type='checkbox'
                                        className='w-[20px] h-[20px] border-[1px] border-neutrals-600 bg-transparent checked:bg-purple-600 checked:border-transparent accent-primary-purple-900 rounded-[4px] focus:ring-0 focus:ring-offset-0'

                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-[990px] h-[56px] flex flex-row gap-x-[22px] justify-end items-center pr-[6px] mt-[20px]">
                    <TextIconButton
                        iconLeft=''
                        text='End Task'
                        iconRight='Check'
                        background='bg-[#6B748E]'
                        width='w-[140px]'
                        height='h-[55px]'
                        backgroundHover=''
                        textSize='text-[14px] '
                        textColor='text-white'
                        textColorHover=''
                        borderColor='border border-transparent'
                        borderHover='hover:border-[#4832A6]'
                        gapX='gap-x-2'
                        rounded='rounded-[7px]'
                    />
                    <TextIconButton
                        iconLeft=''
                        text='View Task'
                        iconRight='TaskLg'
                        background='bg-[#6043DD]'
                        width='w-[140px]'
                        height='h-[55px]'
                        backgroundHover=''
                        textSize='text-[14px] '
                        textColor='text-white'
                        textColorHover=''
                        borderColor='border border-transparent'
                        borderHover='hover:border-[#4832A6]'
                        gapX='gap-x-2'
                        rounded='rounded-[7px]'
                    />
                </div>
            </div>
        </div>
    )
}
