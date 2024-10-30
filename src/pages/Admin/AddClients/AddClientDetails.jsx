import greyUser from '@/assets/svg/greyUser.svg';
import email from '@/assets/svg/email.svg';
import phoneCord from '@assets/svg/phoneCord.svg';
import InputBlock from '@/pages/Admin/InputBlock';

export default function AddClientDetails() {

    return (

            <div className='w-[1021px] h-[549px] flex flex-row justify-between items-center  gap-x-[24px] mb-[32px] '>
                <div className='w-[1021px] h-[514px] flex flex-col justify-start items-start gap-y-[26px] px-[32px] py-[12px] '>
                    <div className='w-[813px] h-[26px] flex flex-row justify-start items-center gap-x-[14px]'>
                        <p className='font-bold font-baloo text-[#fff] text-[24px]'>Basic info</p>
                    </div>
                    <form className="flex flex-col justify-between items-start gap-y-[20px] ">
                        <div className='w-[1021px] h-[70px] flex flex-row justify-between items-center '>
                            <InputBlock
                                labelText='Client name'
                                forName='Client name'
                                icon={greyUser}
                                id='Client name'
                                boxWidth='w-[950px]'
                                placeHolder='Client name'
                                name=''
                            />

                        </div>
                        <div className='w-[950px] h-[1px] border-b-[1px] border-[#505A78] mt-[26px] mb-[8px]'></div>
                        <div className='w-[813px] h-[26px] flex flex-row justify-start items-center gap-x-[14px]'>
                            <p className='font-bold font-baloo text-[#fff] text-[24px]'>Primary contact</p>
                        </div>
                        <div className='w-[950px] h-[70px] flex flex-row justify-between items-center'>
                            <InputBlock
                                labelText='First Name'
                                forName='FirstName'
                                icon={greyUser}
                                id='FirstName'
                                boxWidth='w-[460px]'
                                placeHolder='First Name'
                                name=''
                            />
                            <InputBlock
                                labelText='Last Name'
                                forName='LastName'
                                icon={greyUser}
                                id='LastName'
                                boxWidth='w-[460px]'
                                placeHolder='Last Name'
                                name=''
                            />
                        </div>
                        <div className='w-[950px] h-[70px] flex flex-row justify-between items-center'>
                            <InputBlock
                                labelText='Email'
                                forName='email'
                                icon={email}
                                id='email'
                                boxWidth='w-[460px]'
                                placeHolder='User Company Email'
                                name=''
                            />
                            <InputBlock
                                labelText='Phone'
                                forName='Phone'
                                icon={phoneCord}
                                id='userPhone'
                                boxWidth='w-[460px]'
                                placeHolder='User Phone'
                                name=''
                            />
                        </div>
                    </form>
                </div>
            </div>
    );
}
