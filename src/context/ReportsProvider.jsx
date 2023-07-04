import { createContext, useState } from 'react';

const ReportsContext = createContext({});

export const ReportsProvider = ({ children }) => {
    const [section, setSection] = useState({
        id: 1,
    });
    const [subSection, setSubSection] = useState({ clientId: 1, id: 4 });
    const [report, setReport] = useState({
        id: 1,
        clientId: 1,
        storeId: [1],
        period: ['2023-04'],
    });
    const [sections, setSections] = useState([{
        id: 1,
    }]);
    const [subSections, setSubSections] = useState([{ clientId: 1, id: 4 }]);
    const [reports, setReports] = useState([{
        id: 1,
        clientId: 1,
        storeId: [1],
        period: ['2023-04'],
    }]);

    return (
        <ReportsContext.Provider value={{ section, setSection, subSection, setSubSection, report, setReport, sections, setSections, subSections, setSubSections, reports, setReports }}>
            {children}
        </ReportsContext.Provider>
    );
};

export default ReportsContext;
