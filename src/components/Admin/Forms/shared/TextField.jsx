import greyUser from '@/assets/svg/greyUser.svg';
import email from '@/assets/svg/email.svg';
import phone from '@assets/svg/phoneCord.svg';
import user from '@/assets/svg/User.svg';
import userKey from '@assets/svg/keys.svg';
// import label from '@/assets/svg/label.svg';

const TextField = ({ label, type, placeholder, icon }) => {
	const renderIcon = () => {
		switch (icon) {
			case 'greyUser':
				return greyUser;
			case 'email':
				return email;
			case 'phone':
				return phone;
			case 'user':
				return user;
			case 'userKey':
				return userKey;
			case 'label':
				return label;
			default:
				return greyUser;
		}
	};
	return (
		<div className={`w-full flex flex-col justify-start`}>
			<label htmlFor='client-name' className='text-[12px] text-neutrals-300'>
				{label}
			</label>
			<div className='w-full h-[48px] px-3 flex items-center gap-1 border border-neutrals-400 rounded '>
				<img src={renderIcon(icon)} className='' />
				<input
					id='client-name'
					name='client-name'
					type={type}
					placeholder={placeholder}
					className='w-full h-[24px] bg-transparent text-neutrals-50 placeholder:text-neutrals-400'
				/>
			</div>
		</div>
	);
};

export default TextField;
