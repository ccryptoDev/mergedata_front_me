import { useEffect, useState } from "react";

import SharedLayout from '@/components/General/SharedLayout';
import { useReport } from '@/hooks/useReport';
import { usePage } from '@/hooks/usePage';
import { formatSectionName } from '@/utils/helperFunctions';


export default function Home () {
    const { getSections } = useReport('reporter');
    const { moveToPage } = usePage();
    const [sections, setSections] = useState(null);

    const defineFirstSection = async () => {
        setSections(await getSections(JSON.parse(localStorage.getItem('permissionsMergeData'))?.userId));
    }

    useEffect(() => {
        defineFirstSection();
    }, []);

    useEffect(() => {
        if (sections) moveToPage(formatSectionName(sections[0].name));
    }, [sections]);

    return (
        <SharedLayout isHome={true} />
    );
}
