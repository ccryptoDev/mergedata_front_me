import TextIconButton from "@/components/General/Buttons/TextIconButton";

const CardPreset = () => {
  return (
    <div className="w-[27rem] h-[19rem] flex flex-col bg-[#0D102C] rounded-xl">
      <div className="w-96 h-[5.4rem] flex flex-col p-6 mb-6">
        <p className="text-[#A6ACBD] font-sans font-normal	text-xs	leading-[18px]">Target Name</p>
        <p className="text-[#FFFFFF] font-baloo font-bold text-lg">Used by Year</p>
        <p className="text-[#F0F2F5] font-sans	text-sm	tracking-wide w-[382.67px] h-[40px]">Lorem ipsum dolor sit amet, ad imperdiet liberavisse cum.</p>
      </div>
      <hr className="w-[382.67px] border-dotted border-0.5 border-[#505A78] m-6"></hr>
      <div className="w-[382.67px] h-[40px] flex flex-row justify-between	items-center mx-6">
        <div className="w-28 h-10 flex flex-col justify-start">
          <p className="text-[#A6ACBD]">Lorem</p>
          <p className="text-[#E5E8EF]">-$4,525,094.23</p>
        </div>
        <div className="w-28 h-10 flex flex-col justify-start">
          <p className="text-[#A6ACBD]">Lorem</p>
          <p className="text-[#E5E8EF]">5</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center m-6 w-96 h-14">
        <TextIconButton text='Remove' background="bg-base" width='w-[161px]' height='h-[50px]' backgroundHover='hover:bg-white' textColor='text-purple-600' textSize="text-lg" />
        <TextIconButton text='Edit' iconRight='RightArrowIcon' />
      </div>
    </div>
  );
};
export default CardPreset;