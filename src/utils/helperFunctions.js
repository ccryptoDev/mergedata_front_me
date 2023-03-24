import arrowUp from '@/assets/svg/arrow_fat_up_icon.svg';
import arrowDown from '@/assets/svg/arrow_fat_down_icon.svg';
import neutral from '@/assets/svg/neutral.svg';

export const increaseStatus = increase => {
	let textColor;
	let icon;
	switch (increase) {
		case 'up':
			textColor = 'text-[#5EFF5A]';
			icon = arrowUp;
			break;
		case 'down':
			textColor = 'text-[#FF8181]';
			icon = arrowDown;
			break;
		case 'neutral':
			textColor = 'text-[#FFBB0D]';
			icon = neutral;
			break;

		default:
			break;
	}
	return { textColor, icon };
};
