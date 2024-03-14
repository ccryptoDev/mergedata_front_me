import { useStore } from '@/store/store';
import ClientForm from '../../Forms/ClientForm/ClientForm';

const CreateMode = () => {
	const adminSection = useStore(state => state.adminSection);
	return (
		<div className='w-full h-full py-3 px-8 flex flex-col gap-10'>
			{adminSection === 'Clients' && <ClientForm />}
		</div>
	);
};
export default CreateMode;
