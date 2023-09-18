import Decision from '@/components/General/Icons/Decision'

export default function IntegrationDeliveryChart() {

    const data = [
        { id: 1, color: 'bg-[#6043DD]', icon: 'Growth', text: 'Files Delivered', qty: '20' },
        { id: 2, color: 'bg-[#00C0E2]', icon: 'Crown', text: 'Records Delivered', qty: '1,204,540' },
        { id: 3, color: 'bg-[#6043DD]', icon: 'Graph', text: 'Average Delivery time', qty: '1m' },
        { id: 4, color: 'bg-[#00C0E2]', icon: 'Graph', text: 'Average Source Response time', qty: '1m' },
        { id: 5, color: 'bg-[#95D319]', icon: 'Graph', text: 'Success Rate', qty: '98%' }
    ]

    return (
        <div className='w-[431px] h-[472px] px-6 py-8'>
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-row w-[380px] h-[72px] items-center justify-start mb-3 gap-x-7'>
                            <div className={`w-[60px] h-[60px] rounded-[20px] pt-4 pb-3 flex flex-col items-center justify-center shadow-md ${item.color}`}>
                                <div className='h-auto w-auto flex flex-row items-center justify-center gap-x-1'>
                                    <Decision name={item.icon} />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-center font-semibold text-[#FFF]'>{item.text}</p>
                                <p className='font-baloo text-[32px] font-bold text-[#FFF]'>{item.qty}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
