import ChannelButton from '@/components/General/MergeChat/RightPanel/Buttons/ChannelButton'
import DownloadButton from '@/components/General/MergeChat/RightPanel/Buttons/DownloadButton'
import PreviewButton from '@/components/General/MergeChat/RightPanel/Buttons/PreviewButton'
import NameInitials from '@/components/General/NameInitials'


export default function AttachmentsSentBody() {

    const data = [
        { id: 1, name: 'SalesPerson Group', subName: 'PartnerShip Op', File: 'XLXS', date: '01/02/2023', channel: 'ADVJJ3', sendByName: 'Juan C.' },
        { id: 2, name: 'Kate Morrison', subName: 'Used Vehicle2', File: 'PNG', date: '01/02/2023', channel: 'AIVJB4', sendByName: 'Juan C.' },
        { id: 3, name: 'Expansion Group', subName: 'Lease TimeV4', File: 'PNG', date: '01/02/2023', channel: 'ADVJJ3', sendByName: 'Juan C.' },
        { id: 4, name: 'Koray Okumus', subName: 'Model Shortage', File: 'JPEG', date: '01/02/2023', channel: 'ADVJH1', sendByName: 'Juan C.' },
        { id: 5, name: 'Jay Garcia', subName: 'TargetChanges', File: 'XLXS', date: '01/02/2023', channel: 'BDVJJ3', sendByName: 'Juan C.' },
        { id: 6, name: 'Kate Morrison', subName: 'TargetChanges', File: 'PDF', date: '01/02/2023', channel: 'AXYJJ3', sendByName: 'Juan C.' },
        { id: 7, name: 'Sales GPRU Task 01', subName: 'Patrick_Starr_notes...', File: 'XLXS', date: '01/02/2023', channel: 'ADCKL3', sendByName: 'Juan C.' },
        { id: 8, name: 'New Alliance dept.', subName: 'Pascal Perform.', File: 'WORD', date: '01/02/2023', channel: 'VJJ3AS', sendByName: 'Juan C.' },
    ]

    const tableRowEvenStyle = 'bg-[#0D102C] border-b-[7px] mb-4 border-b-[#0D102C]/70';
    const tableRowOddStyle = 'bg-[#151f39]/70 border-b-[7px] border-b-[#0D102C]/70 mb-4';

    return (
        <div className="">
            <div className="w-[1055px] h-[558px] bg-[#0D102C] flex flex-col items-start justify-center px-[18px] py-[21px]">
                <table className=''>
                    <thead className='mt-[16px] mb-[24px]'>
                        <tr className="w-[893px] h-[32px]">
                            <th className="w-[186px] text-[#C2C8D7] text-[13px] leading-[22px] text-left pr-[26px] pl-[16px]">Name</th>
                            <th className="w-[200px] text-[#C2C8D7] text-[13px] leading-[22px] text-left pr-[26px]">File</th>
                            <th className="w-[148px] text-[#C2C8D7] text-[13px] leading-[22px] text-left pr-[26px]">Date</th>
                            <th className="w-[120px] text-[#C2C8D7] text-[13px] leading-[22px] text-center pr-[36px]">Channel</th>
                            <th className="w-[130px] text-[#C2C8D7] text-[13px] leading-[22px] text-left pr-[32px]">Send by:</th>
                            <th className="w-[94px] text-[#C2C8D7] text-[13px] leading-[22px] text-left pr-[26px]">Preview</th>
                            <th className="w-[130px] text-[#C2C8D7] text-[13px] leading-[22px] text-left pr-[26px]">Download</th>
                        </tr>
                    </thead>
                    <tbody className="my-4">
                        {data.map((item, index) => (
                            <tr
                                key={item.id}
                                className={`h-[60px]
                                    ${index % 2 === 0 ? tableRowEvenStyle : tableRowOddStyle }
                                `}
                            >
                                <td className="text-[#B0A1EE] text-[12px] font-medium font-base leading-[22px] rounded-l-[15px] pl-[16px]">
                                    <div>
                                        <p>
                                            {item.name}
                                        </p>
                                        <p className="text-[#C2C8D7] text-[12px] leading-[12px]">
                                            {item.subName}
                                        </p>
                                    </div>
                                </td>
                                <td className="text-[#C2C8D7] text-[16px] leading-[22px]">{item.File}</td>
                                <td className="text-[#C2C8D7] text-[16px] leading-[22px]">{item.date}</td>
                                <td className="pl-[26px] rounded-l-[15px] bg-[#202449]">
                                    <ChannelButton name={item.channel} />
                                </td>
                                <td className=" text-[#C2C8D7] text-[13px] font-medium font-baloo leading-[22px] bg-[#202449]">
                                    <div className='flex flex-row gap-x-2 items-center'>
                                        <NameInitials className="w-[32px] h-[32px]" />
                                        <p className='text-[14px]'>{item.sendByName} </p>
                                    </div>
                                </td>
                                <td className="pl-4 bg-[#202449]">
                                    <PreviewButton />
                                </td>
                                <td className="pl-4 bg-[#202449] rounded-r-[15px]">
                                    <DownloadButton />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}





