
import ScoreBoardBestSellerCard from '@/components/General/MergeChat/RightPanel/Contest/BestSeller/ContestInformation/ScoreboardBestSellerCard';
import Notifications from '@/components/General/MergeChat/RightPanel/Contest/BestSeller/ContestInformation/Notifications';

export default function ContestInformationView() {
    return (
        <div className='flex flex-col'>
            <div className="w-[1055px] h-[644px] flex flex-row justify-between items-center">
                <ScoreBoardBestSellerCard />
                <Notifications />
            </div>
        </div>
    )
}
