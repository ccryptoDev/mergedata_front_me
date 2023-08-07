import { useEffect, useContext } from "react";

import SharedLayout from '@/components/General/SharedLayout';
import { useReport } from '@/hooks/useReport';
import { usePage } from '@/hooks/usePage';
import ReportsContext from '@/context/ReportsProvider';
import { formatSectionName } from '@/utils/helperFunctions';


export default function Home () {
    const { getSections } = useReport('reporter');
    const { moveToPage } = usePage();
    const { sections, setSections, user } = useContext(ReportsContext);

    const defineFirstSection = async () => {
        setSections(await getSections(user?.userId));
    }

    useEffect(() => {
        user.userId && defineFirstSection();
    }, [user]);

    useEffect(() => {
        if (sections?.length) moveToPage(`/${formatSectionName(sections[0].name)}`);
    }, [sections]);

    return (
        <SharedLayout isHome={true} />
    );
}
