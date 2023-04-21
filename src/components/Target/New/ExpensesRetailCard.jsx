import download from '@/assets/svg/download.svg';
import line from '@/assets/svg/line.svg';
import vector from '@/assets/svg/vector.svg';

const ExpensesRetailCard = () => {
    return (
        <div className="w-[608px] h-[665px] flex flex-col items-start p-5 gap-2.5 rounded-2xl bg-[#202449]">
            <div className="flex flex-col items-start gap-2.5 w-[568px] h-[510px]">
                <div className="flex flex-row items-start gap-6 w-[568px] h-[54px] pr-5">
                    <button className="w-[33px] h-[33px] flex items-center justify-center">
                        <img src={download} className="w-[20px] h-[20px]" />
                    </button>
                    <div className="flex flex-row justify-between items-center gap-6 w-[512px] h-[54px]">
                        <div className="flex flex-col justify-center items-start w-[70px] h-[54px]">
                            <span className="w-[60px] h-[18px] text-xs text-white">Expenses</span>
                            <span className="w-[70px] h-[36px] font-baloo font-bold text-2xl flex items-center text-white">Retail</span>
                        </div>
                        <div className="w-[170px] h-[54px] flex flex-row items-start gap-6">
                            <div className="flex flex-col justify-center items-start w-[80px] h-[54px]">
                                <span className="w-[80px] h-[18px] text-xs text-right text-white">Amount</span>
                                <span className="w-[80px] h-[36px] font-baloo font-bold text-2xl flex items-center justify-end text-white">-$3,153</span>
                            </div>
                            <div className="flex flex-col justify-center items-start w-[60px] h-[54px]">
                                <span className="w-[60px] h-[18px] text-xs text-right text-white">Count</span>
                                <span className="w-[60px] h-[36px] font-baloo font-bold text-2xl flex items-center justify-end text-white">68</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3 px-4 gap-4 w-[568px] h-[142px] bg-[#161A3E] rounded-xl">
                    <div className="flex flex-row items-start gap-11 w-[536px] h-[40px]">
                        <div className="flex flex-col items-start w-[42px] h-[40px]">
                            <span className="w-[42px] h-[18px] text-xs text-[#A6ACBD]">GL Acc</span>
                            <span className="w-[42px] h-[22px] text-sm text-white">43012</span>
                        </div>
                        <div className="flex flex-col items-start w-[80px] h-[40px]">
                            <span className="w-[50px] h-[18px] text-xs text-[#A6ACBD]">GL Date</span>
                            <span className="w-[80px] h-[22px] text-sm text-white">10/20/2022</span>
                        </div>
                        <div className="flex flex-col items-start w-[220px] h-[40px]">
                            <span className="w-[50px] h-[18px] text-xs text-[#A6ACBD]">GL Desc</span>
                            <span className="w-[220px] h-[22px] text-sm text-[#E5E8EF]">JAG XJ USD RTL-NON CERTIFIED</span>
                        </div>
                    </div>
                    <img src={line} />
                    <div className="flex flex-row justify-between items-center gap-2 w-[536px] h-[46px]">
                        <div className="flex flex-col items-start w-[75px] h-[46px]">
                            <span className="w-[75px] h-[18px] text-xs text-[#A6ACBD]">Post Amount</span>
                            <span className="w-[75px] h-[28px] font-baloo font-bold text-lg text-white">$920.00</span>
                        </div>
                        <div className="flex flex-col items-start w-[55px] h-[40px]">
                            <span className="w-[55px] h-[18px] text-xs text-[#A6ACBD]">Journal ID</span>
                            <span className="w-[17px] h-[22px] text-sm text-[#E5E8EF]">70</span>
                        </div>
                        <div className="flex flex-col items-start w-[100px] h-[40px]">
                            <span className="w-[100px] h-[18px] text-xs text-right text-[#A6ACBD]">Sched No</span>
                            <span className="w-[100px] h-[22px] text-sm text-right text-[#E5E8EF]">9</span>
                        </div>
                        <div className="flex flex-col items-start w-[100px] h-[40px]">
                            <span className="w-[100px] h-[18px] text-xs text-right text-[#A6ACBD]">Ref ID</span>
                            <span className="w-[100px] h-[22px] text-sm text-right text-[#E5E8EF]">15463</span>
                        </div>
                        <div className="flex flex-col items-start w-[100px] h-[40px]">
                            <span className="w-[100px] h-[18px] text-xs text-right text-[#A6ACBD]">Control 2</span>
                            <span className="w-[100px] h-[22px] text-sm text-right text-[#E5E8EF]">102</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3 px-4 gap-4 w-[568px] h-[142px] bg-[#161A3E] rounded-xl">
                    <div className="flex flex-row items-start gap-11 w-[536px] h-[40px]">
                        <div className="flex flex-col items-start w-[42px] h-[40px]">
                            <span className="w-[42px] h-[18px] text-xs text-[#A6ACBD]">GL Acc</span>
                            <span className="w-[42px] h-[22px] text-sm text-white">43012</span>
                        </div>
                        <div className="flex flex-col items-start w-[80px] h-[40px]">
                            <span className="w-[50px] h-[18px] text-xs text-[#A6ACBD]">GL Date</span>
                            <span className="w-[80px] h-[22px] text-sm text-white">10/20/2022</span>
                        </div>
                        <div className="flex flex-col items-start w-[220px] h-[40px]">
                            <span className="w-[50px] h-[18px] text-xs text-[#A6ACBD]">GL Desc</span>
                            <span className="w-[220px] h-[22px] text-sm text-[#E5E8EF]">JAG XJ USD RTL-NON CERTIFIED</span>
                        </div>
                    </div>
                    <img src={line} />
                    <div className="flex flex-row justify-between items-center gap-2 w-[536px] h-[46px]">
                        <div className="flex flex-col items-start w-[75px] h-[46px]">
                            <span className="w-[75px] h-[18px] text-xs text-[#A6ACBD]">Post Amount</span>
                            <span className="w-[75px] h-[28px] font-baloo font-bold text-lg text-white">$920.00</span>
                        </div>
                        <div className="flex flex-col items-start w-[55px] h-[40px]">
                            <span className="w-[55px] h-[18px] text-xs text-[#A6ACBD]">Journal ID</span>
                            <span className="w-[17px] h-[22px] text-sm text-[#E5E8EF]">70</span>
                        </div>
                        <div className="flex flex-col items-start w-[100px] h-[40px]">
                            <span className="w-[100px] h-[18px] text-xs text-right text-[#A6ACBD]">Sched No</span>
                            <span className="w-[100px] h-[22px] text-sm text-right text-[#E5E8EF]">9</span>
                        </div>
                        <div className="flex flex-col items-start w-[100px] h-[40px]">
                            <span className="w-[100px] h-[18px] text-xs text-right text-[#A6ACBD]">Ref ID</span>
                            <span className="w-[100px] h-[22px] text-sm text-right text-[#E5E8EF]">15463</span>
                        </div>
                        <div className="flex flex-col items-start w-[100px] h-[40px]">
                            <span className="w-[100px] h-[18px] text-xs text-right text-[#A6ACBD]">Control 2</span>
                            <span className="w-[100px] h-[22px] text-sm text-right text-[#E5E8EF]">102</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3 px-4 gap-4 w-[568px] h-[142px] bg-[#161A3E] rounded-xl">
                    <div className="flex flex-row items-start gap-11 w-[536px] h-[40px]">
                        <div className="flex flex-col items-start w-[42px] h-[40px]">
                            <span className="w-[42px] h-[18px] text-xs text-[#A6ACBD]">GL Acc</span>
                            <span className="w-[42px] h-[22px] text-sm text-white">43012</span>
                        </div>
                        <div className="flex flex-col items-start w-[80px] h-[40px]">
                            <span className="w-[50px] h-[18px] text-xs text-[#A6ACBD]">GL Date</span>
                            <span className="w-[80px] h-[22px] text-sm text-white">10/20/2022</span>
                        </div>
                        <div className="flex flex-col items-start w-[220px] h-[40px]">
                            <span className="w-[50px] h-[18px] text-xs text-[#A6ACBD]">GL Desc</span>
                            <span className="w-[220px] h-[22px] text-sm text-[#E5E8EF]">JAG XJ USD RTL-NON CERTIFIED</span>
                        </div>
                    </div>
                    <img src={line} />
                    <div className="flex flex-row justify-between items-center gap-2 w-[536px] h-[46px]">
                        <div className="flex flex-col items-start w-[75px] h-[46px]">
                            <span className="w-[75px] h-[18px] text-xs text-[#A6ACBD]">Post Amount</span>
                            <span className="w-[75px] h-[28px] font-baloo font-bold text-lg text-white">$920.00</span>
                        </div>
                        <div className="flex flex-col items-start w-[55px] h-[40px]">
                            <span className="w-[55px] h-[18px] text-xs text-[#A6ACBD]">Journal ID</span>
                            <span className="w-[17px] h-[22px] text-sm text-[#E5E8EF]">70</span>
                        </div>
                        <div className="flex flex-col items-start w-[100px] h-[40px]">
                            <span className="w-[100px] h-[18px] text-xs text-right text-[#A6ACBD]">Sched No</span>
                            <span className="w-[100px] h-[22px] text-sm text-right text-[#E5E8EF]">9</span>
                        </div>
                        <div className="flex flex-col items-start w-[100px] h-[40px]">
                            <span className="w-[100px] h-[18px] text-xs text-right text-[#A6ACBD]">Ref ID</span>
                            <span className="w-[100px] h-[22px] text-sm text-right text-[#E5E8EF]">15463</span>
                        </div>
                        <div className="flex flex-col items-start w-[100px] h-[40px]">
                            <span className="w-[100px] h-[18px] text-xs text-right text-[#A6ACBD]">Control 2</span>
                            <span className="w-[100px] h-[22px] text-sm text-right text-[#E5E8EF]">102</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="absolute pt-[-15px] pr-2 pl-[560px]">
                <img src={vector} />
            </button>
        </div>
    );
}

export default ExpensesRetailCard;