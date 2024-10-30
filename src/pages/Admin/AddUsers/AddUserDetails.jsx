import user from '@/assets/svg/User.svg';
import greyUser from '@/assets/svg/greyUser.svg';
import email from '@/assets/svg/email.svg'
import phoneCord from '@assets/svg/phoneCord.svg'
import userKey from '@assets/svg/keys.svg'
import label from '@/assets/svg/label.svg';
import InputBlock from '@/pages/Admin/InputBlock'

export default function AddUserDetails() {

    return (
        <div className='w-[1021px] h-[549px] flex flex-row justify-between items-center  gap-x-[24px] mb-[32px]'>
            <div className='w-[120px] h-[514px] flex flex-col justify-start items-center gap-y-[12px]'>
                <div className='w-[120px] h-[120px] rounded-full flex justify-center items0center bg-[#E5E8EF] border-[4px] border-[#fff]'>
                    <img src={user} />
                </div>
                <button>
                    <img src={label} className='mt-[-30px]' />
                </button>
            </div>
            <div className='w-[877px] h-[514px] flex flex-col justify-start items-start gap-y-[26px] px-[32px] py-[12px]'>
                <div className='w-[813px] h-[26px] flex flex-row justify-start items-center gap-x-[14px]'>
                    <p className='font-bold font-baloo text-[#fff] text-[24px]'>Basic info</p>
                </div>
                <form className="flex flex-col justify-between items-start gap-y-[20px] ">
                    <div className='w-[813px] h-[70px] flex flex-row justify-between items-center '>
                        <InputBlock
                            labelText='First Name'
                            forName='FirstName'
                            icon={greyUser}
                            id='FirstName'
                            boxWidth='w-[398px]'
                            placeHolder='First Name'
                            name=''
                        />
                        <InputBlock
                            labelText='Last Name'
                            forName='LastName'
                            icon={greyUser}
                            id='LastName'
                            boxWidth='w-[398px]'
                            placeHolder='Last Name'
                            name=''
                        />
                    </div>
                    <InputBlock
                        labelText='Email'
                        forName='email'
                        icon={email}
                        id='email'
                        boxWidth='w-[813px]'
                        placeHolder='User Company Email'
                        name=''
                    />
                    <div className='w-[813px] h-[70px] flex flex-row justify-between items-center '>
                        <InputBlock
                            labelText='Username'
                            forName='Username'
                            icon={greyUser}
                            id='Username'
                            boxWidth='w-[398px]'
                            placeHolder='Username'
                            name=''
                        />
                        <InputBlock
                            labelText='Phone'
                            forName='Phone'
                            icon={phoneCord}
                            id='userPhone'
                            boxWidth='w-[398px]'
                            placeHolder='User Phone'
                            name=''
                        />
                    </div>
                    <div className='w-[813px] h-[1px] border-b-[1px] border-[#505A78] mt-[26px] mb-[8px]'></div>
                    <div className='w-[813px] h-[70px] flex flex-row justify-between items-center '>
                        <InputBlock
                            labelText='Password'
                            forName='Password'
                            icon={userKey}
                            id='Password'
                            boxWidth='w-[398px]'
                            placeHolder='Password'
                            name=''
                        />
                        <InputBlock
                            labelText='Confirm Password'
                            forName='Confirm Password'
                            icon={userKey}
                            id='Confirm Password'
                            boxWidth='w-[398px]'
                            placeHolder='Confirm Password'
                            name=''
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
