import CancelSaveAndContinueButtons from '@/pages/Admin/CancelSaveAndContinueButtons'
import AddClientHeader from '@/pages/Admin/AddClients/AddClientHeader';
import AddClientStores from '@/pages/Admin/AddClients/AddClientStores';
import AddClientDetails from '@/pages/Admin/AddClients/AddClientDetails';
import { useEffect, useState } from 'react';


export default function AddClient({ onHandleCancelClick, selectedButton }) {
    const [addClientSelectedTab, setAddClientSelectedTab] = useState('addClientDetails');
    const addType = selectedButton;

    const onHandleSaveAndContinueClick = (clientAddTabType) => {
        if (clientAddTabType) {
            setAddClientSelectedTab(clientAddTabType);
        }
    };

    useEffect(() => {
        console.log('addClientSelectedTab', addClientSelectedTab);
    }, [addClientSelectedTab]);

    return (

        <div className='w-[1085px] h-[772px] bg-[#212A43] px-[2em] py-[1.5em] flex flex-col justify-between items-center rounded-3xl '>
            <div className='w-[1021px] h-[50px] flex flex-row justify-between items-center gap-x-[14px] '>
                <p className='w-[174px] h-[26px] font-bold font-baloo text-[#fff] text-[24px]'>Add client</p>
                <AddClientHeader addClientSelectedTab={addClientSelectedTab}/>
            </div>
            <div className='w-[1021px] h-[549px]'>
                {
                    (addClientSelectedTab === 'AddClientDetails') && <AddClientDetails />
                }
                {
                    (addClientSelectedTab === 'AddClientStores') && <AddClientStores />
                }
            </div>
            <CancelSaveAndContinueButtons
                addType={addType}
                onHandleCancelClick={onHandleCancelClick}
                onHandleSaveAndContinueClick={onHandleSaveAndContinueClick}
            />
        </div>

    );
}
