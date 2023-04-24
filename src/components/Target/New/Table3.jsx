

const data = [
    { id: 1, acct: 43012, gl_desc: 'Jag Xj USD RTL-non Certified', acc_type: 'S', mtd: '-$218,094' , ytd: '-$4,525,094', cnt_mtd: 5, cnt_ytd: 102  },
    { id: 2, acct: 43012, gl_desc: 'Jag Xj USD RTL-non Certified', acc_type: 'S', mtd: '-$218,094' , ytd: '-$4,525,094', cnt_mtd: 5, cnt_ytd: 102  },
    { id: 3, acct: 43012, gl_desc: 'Jag Xj USD RTL-non Certified', acc_type: 'S', mtd: '-$218,094' , ytd: '-$4,525,094', cnt_mtd: 5, cnt_ytd: 102  },
];

export default function Table3() {

    return (

        <div className="flex flex-col  bg-[#212A43] text-neutrals-200">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light ">
                            <thead className="font-medium text-xs leading-[50px]">
                                <tr>
                                    <th scope="col" className="text-neutrals-400 px-4">ACCT</th>
                                    <th scope="col" className="text-neutrals-400 px-0">GL Desc</th>
                                    <th scope="col" className="text-neutrals-400 px-0">ACC Type</th>
                                    <th scope="col" className="text-neutrals-400 px-3">MTD</th>
                                    <th scope="col" className="text-neutrals-400 p-3">YTD</th>
                                    <th scope="col" className="text-neutrals-400 pl-3">CNT MTD</th>
                                    <th scope="col" className="text-neutrals-400 self-end pr-0">CNT YTD</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => {
                                        return (
                                            <tr className='bg-[#161A3E] h-12 border-b-4 border-[#212A43]' key={item.id}>
                                                <td className="whitespace-nowrap text-neutrals-100 h-12 font-semibold rounded-l-xl text-base pl-4">{item.acct}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 h-12 text-xs">{item.gl_desc}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 h-12 text-xs">{item.acc_type}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 h-12 text-sm">{item.mtd}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 h-12 pl-4 text-sm">{item.ytd}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 h-12 pl-4 text-sm">{item.cnt_mtd}</td>
                                                <td className="whitespace-nowrap text-neutrals-200 h-12 pl-4 rounded-r-xl text-sm">{item.cnt_ytd}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};