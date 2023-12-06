import ParticipantsList from "@/components/Contest/ContestAdd/Participants/ParticipantsList/ParticipantsList";
import TimeInterval from "@/components/Contest/ContestAdd/Participants/TimeInterval/TimeInterval";

const Participants = () => {
	return (
		<div className='grow flex flex-col text-white'>
			<div className='flex flex-col gap-6 grow'>
                <ParticipantsList />
				<TimeInterval />
            </div>
		</div>
	);
};

export default Participants;
