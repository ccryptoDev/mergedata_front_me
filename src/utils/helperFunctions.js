import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

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

const formatterDollars = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
});

const formatterNumbers = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
});

const getBehavior = sign => {
	if (sign === '+') return 'up';
	if (sign === '-') return 'down';
	return 'neutral';
};

export const formatReportsTable = report => {
	const columns = [...report.reportConfig.columns];
	const unfilteredTypes = [...report.reportConfig.typeFormats];
	const rows = report.reportLines.map(reportLine => [
		reportLine.name,
		...reportLine.values
			.map((value, index) => {
				if (unfilteredTypes[index] === 'subtitle') return `subtitle::${value}`;
				if (unfilteredTypes[index] === 'dollar')
					return formatterDollars.format(value);
				if (unfilteredTypes[index] === 'dollar_v')
					return `${getBehavior(value[0])}::${formatterDollars.format(value)}`;
				if (unfilteredTypes[index] === 'double') return parseFloat(value);
				if (unfilteredTypes[index] === 'double_v')
					return `${getBehavior(value[0])}::${parseFloat(value)}`;
				if (unfilteredTypes[index] === 'integer') return parseInt(value);
				if (unfilteredTypes[index] === 'integer_v')
					return `${getBehavior(value[0])}::${parseInt(value)}`;
				if (unfilteredTypes[index] === 'indented_number')
					return formatterNumbers.format(value);
				if (unfilteredTypes[index] === 'indented_number_v')
					return `${getBehavior(value[0])}::${formatterNumbers.format(value)}`;
				if (unfilteredTypes[index] === 'percentage')
					return `${+(parseFloat(value) * 100).toFixed(12)}%`;
				if (unfilteredTypes[index] === 'percentage_v')
					return `${getBehavior(value[0])}::${+(
						parseFloat(value) * 100
					).toFixed(12)}%`;
				if (unfilteredTypes[index] === 'icon') return `icon::${value}`;
				if (unfilteredTypes[index] === 'image') return `image::${value}`;
				if (unfilteredTypes[index] === 'link') return `link::${value}`;
				return value;
			})
			.filter(value => value !== 'hidden'),
	]);
	const types = unfilteredTypes.filter(type => type !== 'hidden');
	columns.unshift('Expenses');
	types.unshift('text');
	return { columns, rows, types };
};

export const removeSpecialCases = (rows = null) => {
	const cleanRows = [];
	if (Array.isArray(rows)) {
		for (let index = 0; index < rows.length; index++) {
			cleanRows[index] = rows[index].map(cell =>
				`${cell}`.includes('::') ? cell.split('::')[1] : cell,
			);
		}
		return cleanRows;
	}
	return null;
};

export const exportPDF = (
	columns = [],
	rows = null,
	title = 'Merge Data Report',
) => {
	if (!rows) return null;
	const unit = 'pt';
	const size = 'A4'; // Use A1, A2, A3 or A4
	const orientation = 'landscape'; // portrait or landscape

	const marginLeft = 40;
	// eslint-disable-next-line new-cap
	const doc = new jsPDF(orientation, unit, size);

	doc.setFontSize(12);

	const headers = [columns];
	const data = [...rows];

	const content = {
		startY: 50,
		head: headers,
		body: data,
		willDrawCell: function (data) {
			if (data.column.index === 0) {
				data.cell.styles.halign = 'left';
			} else {
				data.cell.styles.halign = 'right';
			}
		},
	};

	doc.text(title, marginLeft, 40);
	doc.autoTable(content);
	doc.save('MergeDataReport.pdf');
};

export const exportCSV = (columns = [], rows = null) => {
	if (rows) {
		return [columns, ...rows];
	}
	return null;
};

export const formatSectionName = sectionName => {
	return `/${sectionName.toLowerCase().replace(/\s/g, '-')}`;
};
