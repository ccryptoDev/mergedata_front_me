import ExcelAttachment from '@/components/General/MergeChat/RightPanel/ChatFileAttachments/ExcelAttachment';
import ScoreBoardBestSeller from '@/components/General/MergeChat/RightPanel/ChatFileAttachments/ScoreBoardBestSeller';
import TaskStatus from '@/components/General/MergeChat/RightPanel/ChatFileAttachments/TaskStatus';

// import AttachmentIcon from '@/components/General/Icons/AttachmentIcon';
// import ArrowDownIcon from '@/components/General/Icons/ArrowDownIcon';
// import ArrowFatUpIcon from '@/components/General/Icons/ArrowFatUpIcon';

const AttachmentSelector = ({ name }) => {

    if (name === 'ExcelAttachment') return <ExcelAttachment />;
    if (name === 'ScoreBoardBestSeller') return <ScoreBoardBestSeller />;
    if (name === 'TaskStatus') return <TaskStatus />;

	return null;
};

export default AttachmentSelector;