
import Avatar1 from '@/assets/svg/Avatar1.svg';
import Avatar2 from '@/assets/svg/Avatar2.svg';
import Avatar3 from '@/assets/svg/Avatar3.svg';
import Avatar4 from '@/assets/svg/Avatar4.svg';
import Avatar5 from '@/assets/svg/Avatar5.svg';
import Avatar6 from '@/assets/svg/Avatar6.svg';
import Avatar7 from '@/assets/svg/Avatar7.svg';
import Avatar8 from '@/assets/svg/Avatar8.svg';
import Decision from '@/components/General/Icons/Decision';

export default function TaskByKayChart() {

    const chartHeadText = 'text-sm text-[#EFECFC] h-[22px]';

    const colorTextHandler = (status) => {
        if (status === 'No Started') return 'bg-[#95D319]';
        if (status === 'In Progress') return 'bg-[#FC9905]';
        if (status === 'Completed') return 'bg-[#00C0E2]';
        if (status === 'Overdue') return 'bg-[#FF0000]';
    };
    
    const data = ([
        { id: 1, name: 'Predictive AI', department: 'Vehicle',nameSub: 'Sales GRPU', days: '1', created: '13/02/2023', status: 'No Started', view:'Private', reviewer: 'JC', assignedToPhoto: Avatar1, assignedToName: 'Harrison D', detailText: 'AIBJH4', detailIcon: 'TaskWhite' },
        { id: 2, name: 'Predictive AI', department: 'Inventory',nameSub: 'Used Vehicle', days: '1', created: '13/02/2023', status: 'No Started', view:'Private', reviewer: 'JC', assignedToPhoto: Avatar2, assignedToName: 'Britany H', detailText: 'AIBJH4', detailIcon: 'CrownSm' },
        { id: 3, name: 'AI & Dealer', department: 'Sales',nameSub: 'Lease End', days: '1', created: '13/02/2023', status: 'No Started', view:'Public', reviewer: 'JC', assignedToPhoto: Avatar3, assignedToName: 'Jessica J', detailText: 'AIBJH4', detailIcon: 'CrownSm' },
        { id: 4, name: 'AI & Dealer', department: 'Sales',nameSub: 'Model Shortage', days: '2', created: '13/02/2023', status: 'In Progress', view:'Private', reviewer: 'JC', assignedToPhoto: Avatar4, assignedToName: 'Isabella M', detailText: 'ADVJJ3', detailIcon: 'TaskWhite' },
        { id: 5, name: 'AI & Dealer', department: 'Vehicle',nameSub: 'Inefficient ROI', days: '2', created: '13/02/2023', status: 'In Progress', view:'Public', reviewer: 'JC', assignedToPhoto: Avatar5, assignedToName: 'Harrison D', detailText: 'AIBJH4', detailIcon: 'TaskWhite' },
        { id: 6, name: 'Predictive AI', department: 'Sales',nameSub: 'Update Strategy', days: '3', created: '13/02/2023', status: 'In Progress', view:'Private', reviewer: 'JC', assignedToPhoto: Avatar6, assignedToName: 'Brandon F', detailText: 'AIBJH4', detailIcon: 'TaskWhite' },
        { id: 7, name: 'Predictive AI', department: 'Vehicle',nameSub: 'Update Strategy', days: '3', created: '13/02/2023', status: 'In Progress', view:'Publ;ic', reviewer: 'JC', assignedToPhoto: Avatar7, assignedToName: 'Jackson F', detailText: 'AIBJH4', detailIcon: 'CrownSm' },
        { id: 8, name: 'Predictive AI', department: 'Vehicle',nameSub: 'Update Strategy', days: '3', created: '13/02/2023', status: 'Completed', view:'Private', reviewer: 'JC', assignedToPhoto: Avatar8, assignedToName: 'Jackson F', detailText: 'ADVJJ3', detailIcon: 'TaskWhite' },
    ]);

    return (

        <div className='w-[1043px] h-[574px] bg-[#0D102C] flex flex-col justify-start items-center gap-y-2'>
            <div className={`w-[1043px] h-[38px] flex flex-row items-center mt-2`}>
                <p className={`pl-4 w-[153px] ${chartHeadText} `}>Name</p>
                <p className={`w-[107px] ${chartHeadText} `}>Department</p>
                <p className={`w-[64px] ${chartHeadText} `}>Days</p>
                <p className={`w-[150px] ${chartHeadText} `}>Created</p>
                <p className={`w-[116px] ${chartHeadText} `}>Status</p>
                <p className={`w-[96px] ${chartHeadText} `}>View</p>
                <p className={`w-[101px] ${chartHeadText} `}>Reviewer</p>
                <p className={`w-[128px] ${chartHeadText} `}>Assigned to</p>
                <p className={`w-[102px] ${chartHeadText} `}>Details</p>
            </div>
            <div className=''>
                {data.map((item, index) => (
                    <div className='flex flex-row items-center justify-start w-[1043px] h-[56px] mb-[8px] bg-[#000000]'>
                        <div className='flex flex-col w-[153px] justify-center mr-1'>
                            <p className='text-[#B0A1EE] text-[12px] leading-[18px] pl-4'>
                                {item.name}
                            </p>
                            <p className='text-[#C2C8D7] text-[16px] leading-[18px] pl-4'>
                                {item.nameSub}
                            </p>
                        </div>
                        <div className='flex items-center w-[107px]'>
                            <p className='text-[#C2C8D7] text-[16px] leading-[18px]'>
                                {item.department}
                            </p>
                        </div>
                        <div className='flex flex-col w-[64px] justify-center'>
                            <p className='text-[#C2C8D7] text-[16px] leading-[18px] pl-4'>
                                {item.days}
                            </p>
                        </div>
                        <div className='flex flex-col w-[110px] mr-4'>
                            <p className='text-[#C2C8D7] text-[16px] leading-[18px]'>
                                {item.created}
                            </p>
                        </div>
                        <div className='w-[565px] h-[56px] bg-[#151F39] rounded-xl flex flex-row items-center justify-start mr-8 px-5 shadow-lg'>
                            <div className={`w-[72px] h-[28px] flex flex-row items-center justify-center border-2 border-[#99B269]/30 rounded-md shadow-lg box-content mr-[40px] ${colorTextHandler(item.status)}`}>
                                <p className='text-[#FFFFFF] text-[13px] leading-[18px] font-baloo'>
                                    {item.status}
                                </p>
                            </div>
                            <div className='w-[72px] h-[28px] flex flex-row items-center justify-center bg-[#4832A6] border-2 border-[#99B269]/10 rounded-md shadow-lg box-content mr-[46px]'>
                                <p className='text-[#FFFFFF] text-[13px] leading-[18px] font-baloo'>
                                    {item.view}
                                </p>
                            </div>
                            <div className='w-8 h-8 bg-[#FFFFFF] rounded-full flex flex-row items-center justify-center mr-[48px]'>
                                <p className='text-[#563CC7] text-[14px] leading-[18px] font-baloo'>{item.reviewer}</p>
                            </div>
                            <div className=''>
                                <img src={item.assignedToPhoto} alt='Photo' className='w-6 h-6 rounded-full' />
                            </div>
                            <div className='w-[95px] h-auto flex flex-row items-center justify-start pl-2'>
                                <p className='text-[#FFFFFF] text-[13px] leading-[18px] font-baloo'>{item.assignedToName}</p>
                            </div>
                            <div className='w-[77px] h-[28px] flex flex-row items-center justify-center bg-[#4832A6] border-2 border-[#99B269]/10 rounded-md shadow-lg box-content gap-x-[7px]'>
                                <p className='text-[#FFFFFF] font-normal text-[13px] leading-[18px] font-sans'>
                                    {item.detailText}
                                </p>
                                <Decision name={item.detailIcon} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
