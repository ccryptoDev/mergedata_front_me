export const drillModeSlice = set => ({
	toggleDrillMode: false,
	toggleChatMode: false,
	setToggleDrillMode: toggleDrillMode => set(() => ({ toggleDrillMode })),
	setToggleChatMode: toggleChatMode => set(() => ({ toggleChatMode })),
});
