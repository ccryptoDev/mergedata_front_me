import { useStore } from '@/store/store';


function ByStore () {
    const byStore = useStore(state => state.byStore);
    const setByStore = useStore(state => state.setByStore);
    const setByTrend = useStore(state => state.setByTrend);
    const handleSelection = () => {
        setByTrend(false);
        setByStore(!byStore);
    }
    return (
        <>
            <input
                type='checkbox'
                id='byStore'
                name='byStore'
                checked={byStore}
                onClick={handleSelection}
                className='border-[1px] border-neutrals-600 bg-transparent checked:bg-purple-600 checked:border-transparent accent-primary-purple-900 rounded'
            />
            <label
                htmlFor='byStore'
                className='text-neutrals-00 text-xs'
            >
                By Store
            </label>
        </>
    )
}

export default ByStore;
