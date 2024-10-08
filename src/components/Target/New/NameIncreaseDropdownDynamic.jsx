import { useState, useEffect } from 'react';

import Dropdown from '@/components/Target/Dropdown';


const NameIncreaseDropdownDynamic = ({
    title = 'Financial Statement',
    columns = [],
    changeSelectedOptions = () => { },
}) => {
    const [dropdowns, setDropdowns] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(columns.map(() => 1));

    const changeSelectedOptionsVisual = (index, id) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = id + 1;
        setSelectedOptions(newSelectedOptions);
        changeSelectedOptions(newSelectedOptions);
    }

    useEffect(() => {
        const emptyColumns = [];
        const columnsGlobal = [];
        columns.map((column, index) => {
            const localItems = [];
            if (!column) return null;
            const splitItems = column.split(',');
            const items = splitItems.map((item, id) => {
                localItems.push({ id, name: item, value: item, click: () => changeSelectedOptionsVisual(index, id), selected: false });
                return { id, name: item, value: item, click: () => changeSelectedOptionsVisual(index, id), selected: (id + 1) === selectedOptions[index] };
            });
            columnsGlobal.push(items);
            emptyColumns.push(localItems);
            return null;
        });
        setDropdowns(columnsGlobal);
    }, [columns, selectedOptions]);

    return (
        <div className='h-[auto] flex flex-col mb-1'>
            <div className='flex'>
                <h4 className='h-[36px] font-baloo font-bold text-[24px] text-white'>
                    {title}
                </h4>
            </div>
            <div className='flex'>
                {dropdowns ?
                    dropdowns.map((column, index) => {
                        return (
                            <Dropdown
                                key={`dropdown-classic-selectable-${index}`}
                                showOptionSelected={true}
                                items={column}
                            />
                        );
                    })
                    : null}
            </div>
        </div>
    );
};

export default NameIncreaseDropdownDynamic;
