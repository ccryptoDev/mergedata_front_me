
import AddButton from '../AddButton';

export default function AddClientStores() {

    return (

        <div className='w-[1021px] h-[549px] bg-[#161A3E] rounded-2xl flex flex-col justify-center items-center gap-y-[16px]'>
            <p className='font-bold font-baloo text-[#fff] text-[1.5rem]'>You don't have any stores yet</p>
            <div className='w-[270px] text-[#fff]/50  text-center'>
                <p>You can create and assign a store by clicking the 'Add Store' button.</p>
            </div>

            <AddButton name='Store' />
        </div>
    );
}
