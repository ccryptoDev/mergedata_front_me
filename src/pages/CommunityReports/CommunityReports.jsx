import { useEffect } from "react";

import { useReport } from "@/hooks/useReport";


const CommunityReports = () => {
    const { loading, getReports } = useReport();

    useEffect(() => {
        console.log(loading);
        getReports();
    }, []);

    return (
        <div>CommunityReports</div>
    )
}

export default CommunityReports