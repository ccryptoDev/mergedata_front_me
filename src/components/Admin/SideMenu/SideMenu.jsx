import SideMenuCard from './SideMenuCard/SideMenuCard';
import clientGraph from '@/assets/svg/admin/client-graph.svg';
import storeGraph from '@/assets/svg/admin/stores-graph.svg';
import usersGraph from '@/assets/svg/admin/users-graph.svg';
// import utilizationGraph from '@/assets/svg/admin/utilization-graph.svg';

const sideMenuOptions = [
	{ id: 1, title: 'Clients', count: 112, bgImage: clientGraph },
	{ id: 2, title: 'Stores', count: 218, bgImage: storeGraph },
	{ id: 3, title: 'Users', count: 328, bgImage: usersGraph },
	// { id: 4, title: 'Utilization', bgImage: utilizationGraph },
];

const SideMenu = () => {
	return (
		<div className='w-[283px] h-full flex flex-col gap-3 bg-bg-dark-accent-dark overflow-hidden'>
			{sideMenuOptions.map(item => (
				<SideMenuCard
					key={item.id}
					title={item.title}
					count={item.count}
					bgImg={item.bgImage}
				/>
			))}
		</div>
	);
};
export default SideMenu;
