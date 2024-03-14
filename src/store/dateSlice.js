import moment from 'moment';

const initialState = localStorage.getItem('MergeDataSystemDate')
	? [moment(localStorage.getItem('MergeDataSystemDate')).format('YYYY-MM')]
	: [''];

export const dateSlice = set => ({
	period: initialState,
	setPeriod: period => set(() => period),
});
