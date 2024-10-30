import { useEffect, useState } from 'react';
import CancelSaveAndContinueButtons from '@/pages/Admin/CancelSaveAndContinueButtons'
import AddUserHeader from '@/pages/Admin/AddUsers/AddUserHeader';
import AddUserSettings from '@/pages/Admin/AddUsers/AddUserSettings';
import AddUserStoresAndReports from '@/pages/Admin/AddUsers/AddUserStoresAndReports';
import AddUserDetails from '@/pages/Admin/AddUsers/AddUserDetails';

export default function AddUser({ onHandleCancelClick, selectedButton }) {
    const [addUserSelectedTab, setAddUserSelectedTab] = useState('addUserDetails');
    const addType = selectedButton;

    const onHandleSaveAndContinueClick = (userAddTabType) => {
        if (userAddTabType) {
            setAddUserSelectedTab(userAddTabType);
        }
    };

    useEffect(() => {
        console.log('addUserSelectedTab', addUserSelectedTab);
    }, [addUserSelectedTab]);

    return (

        <div className='w-[1085px] h-[772px] bg-[#212A43] px-[2em] py-[1.5em] flex flex-col justify-between items-center rounded-3xl '>
            <div className='w-[1021px] h-[50px] flex flex-row justify-between items-center gap-x-[14px] '>
                <p className='w-[174px] h-[26px] font-bold font-baloo text-[#fff] text-[24px]'>Add user</p>
                <AddUserHeader addUserSelectedTab={addUserSelectedTab}/>
            </div>
            <div className='w-[1021px] h-[549px] '>
                {(addUserSelectedTab === 'AddUserDetails') && <AddUserDetails />}
                {(addUserSelectedTab === 'AddUserSettings') && <AddUserSettings />}
                {(addUserSelectedTab === 'AddUserStoresAndReports') && <AddUserStoresAndReports />}
            </div>
            <CancelSaveAndContinueButtons
                addType={addType}
                onHandleCancelClick={onHandleCancelClick}
                onHandleSaveAndContinueClick={onHandleSaveAndContinueClick}
            />
        </div>

    );
}
