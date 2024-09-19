import { useStore } from '@/store/store';


function ByTrend () {
    const byTrend = useStore(state => state.byTrend);
    const setByTrend = useStore(state => state.setByTrend);
    const setByStore = useStore(state => state.setByStore);
    const handleSelection = () => {
        setByStore(false);
        setByTrend(!byTrend);
    }

    return (
        <>
            <input
                type='checkbox'
                id='byTrend'
                name='byTrend'
                checked={byTrend}
                onClick={handleSelection}
                className='border-[1px] border-neutrals-600 bg-transparent checked:bg-purple-600 checked:border-transparent accent-primary-purple-900 rounded'
            />
            <label
                htmlFor='byTrend'
                className='text-neutrals-00 text-xs'
            >
                By Trend
            </label>
        </>
    )
}

export default ByTrend;
