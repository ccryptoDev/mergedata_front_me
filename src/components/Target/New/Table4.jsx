
const data = [
    { id: 1, postingDescription: 'Sale Vehicle Sale Invoice', glDate: '11/15/2022', control1: 855234, referenceId: 152398 , postAmount: '-$17024' },
    { id: 2, postingDescription: 'Sale Vehicle Sale Invoice', glDate: '11/15/2022', control1: 855234, referenceId: 152398 , postAmount: '-$17024' },
    { id: 3, postingDescription: 'Sale Vehicle Sale Invoice', glDate: '11/15/2022', control1: 855234, referenceId: 152398 , postAmount: '-$17024' },
    { id: 4, postingDescription: 'Sale Vehicle Sale Invoice', glDate: '11/15/2022', control1: 855234, referenceId: 152398 , postAmount: '-$17024' },
    { id: 5, postingDescription: 'Sale Vehicle Sale Invoice', glDate: '11/15/2022', control1: 855234, referenceId: 152398 , postAmount: '-$17024' },
    { id: 6, postingDescription: 'Sale Vehicle Sale Invoice', glDate: '11/15/2022', control1: 855234, referenceId: 152398 , postAmount: '-$17024' },
];

export default function Table4() {

    return (
                    <div className="overflow-hidden pl-1">
                        <table className="min-w-full text-justify text-sm font-light">
                            <thead className="font-medium text-sm leading-[30px]">
                                <tr>
                                    <th scope="col" className="text-neutrals-400 text-xm font-normal px-4">Posting Description</th>
                                    <th scope="col" className="text-neutrals-400 text-xm font-normal px-4">GL Date</th>
                                    <th scope="col" className="text-neutrals-400 text-xm font-normal px-3">Control 1</th>
                                    <th scope="col" className="text-neutrals-400 text-xm font-normal px-3">Reference ID</th>
                                    <th scope="col" className="text-neutrals-400 text-xm font-normal text-end pr-6 ">Post Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => {
                                        return (
                                            <tr className={`w=full h-10 ${((item.id) % 2 === 0) ? 'bg-[#161A3E]' : ''}`} key={item.id}>
                                                <td className="whitespace-nowrap text-neutrals-100 font-semibold font-baloo rounded-l-lg pl-4 text-sm text-start">{item.postingDescription}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 text-xs text-center pr-6">{item.glDate}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 text-xs text-center pr-8">{item.control1}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 text-xs text-start pl-12">{item.referenceId}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 font-semibold text-base text-end pr-8 rounded-r-lg">{item.postAmount}</td>
                                                
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
    );
};
