import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useReport } from '@/hooks/useReport';

import SharedLayout from '@/components/General/SharedLayout';
import Dropdown from '@/components/Target/Dropdown';
import FilterDates from '@/components/Target/FilterDates';
import LeftArrowDirectActionHeart from '@/components/Target/New/LeftArrowDirectActionHeart';
import TableToggleIncrease from '@/components/Target/New/TableToggleIncrease';


function CommunityReports () {
    const [report, setReport] = useState(null)
    const navigate = useNavigate();
    const { getReports } = useReport('reporter');

    const getReport = async () => {
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
        const result = await getReports();
        const columns = [...result.reportConfig.columns];
        const types = [...result.reportConfig.typeFormats];
        const getBehavior = (sign) => {
            if (sign === '+') return 'up';
            if (sign === '-') return 'down';
            return 'neutral';
        }
        const rows = result.reportLines.map(reportLine => [reportLine.name, ...reportLine.values.map((value, index) => {
            if (types[index] === 'subtitle') return `subtitle::${value}`;
            if (types[index] === 'dollar') return formatterDollars.format(value);
            if (types[index] === 'dollar_v') return `${getBehavior(value[0])}::${formatterDollars.format(value)}`;
            if (types[index] === 'double') return parseFloat(value);
            if (types[index] === 'double_v') return `${getBehavior(value[0])}::${parseFloat(value)}`;
            if (types[index] === 'integer') return parseInt(value);
            if (types[index] === 'integer_v') return `${getBehavior(value[0])}::${parseInt(value)}`;
            if (types[index] === 'indented_number') return formatterNumbers.format(value);
            if (types[index] === 'indented_number_v') return `${getBehavior(value[0])}::${formatterNumbers.format(value)}`;
            if (types[index] === 'percentage') return `${+(parseFloat(value) * 100).toFixed(12)}%`;
            if (types[index] === 'percentage_v') return `${getBehavior(value[0])}::${+(parseFloat(value) * 100).toFixed(12)}%`;
            if (types[index] === 'icon') return `icon::${value}`;
            if (types[index] === 'image') return `image::${value}`;
            if (types[index] === 'link') return `link::${value}`;
            return value
        }).filter(value => value !== 'hidden')]);
        const typesFiltered = types.filter(type => type !== 'hidden');
        columns.unshift('Expenses');
        typesFiltered.unshift('text');
        setReport({ columns, typesFiltered, rows });
    }

    useEffect(() => {
        getReport();
    }, []);

    return (
        <SharedLayout>
            <div className='flex justify-between items-center mr-12'>
                <LeftArrowDirectActionHeart
                    bgColor='bg-dark-popup-00'
                    buttonName='MIS/Doc'
                    upperName='Community Reports'
                    onClick={() => navigate(-1)}
                />
                <div className='flex items-center gap-12 uppercase'>
                    <h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
                        Day
                    </h6>
                    <h6 className='text-white py-1 px-3 rounded-2xl hover:bg-neutrals-400 transition-colors duration-700'>
                        Month
                    </h6>
                    <FilterDates />
                </div>
                <Dropdown name='Home' />
            </div>
            <TableToggleIncrease report={report} />
        </SharedLayout>
    );
}

export default CommunityReports;