
import { NavLink } from 'react-router-dom';

export default function MenuTabsBar( ) {

    const activeStyle = { backgroundColor: '#6043DD', color: '#fff', height: '48px', padding: '12px' };
    const normalStyle = { color: '#fff', height: '48px', padding: '12px' };
 
    return (
        <div className='flex flex-col relative'>
            <nav
                className='w-[310px] h-12 rounded-xl text-white font-baloo flex items-center justify-between bg-[#161A3E]'
            >
                <ul className='text-sm flex items-center gap-x-6'>
                    <li className='flex items-center justify-between'>
                        <NavLink
                            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                            className='rounded-l-xl rounded-r-lg'
                            to={`/integrations`}
                        >
                            Integrations
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                            className='rounded-lg '
                            to={`/scheduler`}
                        >
                            Scheduler
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                            className='rounded-l-lg rounded-r-xl '
                            to={`/reports`}
                        >
                            Reports
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}