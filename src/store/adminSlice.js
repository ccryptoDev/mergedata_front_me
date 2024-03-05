export const adminSlice = set => ({
	adminSection: 'Clients',
	viewMode: 'read',
	setAdminSection: adminSection => set(() => ({ adminSection })),
	setViewMode: viewMode => set(() => ({ viewMode })),
});
