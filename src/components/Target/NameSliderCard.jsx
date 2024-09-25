import TargetNew from "@/components/Target/TargetNew";
import ToggleSwitch from "@/components/Target/ToggleSwitch";
import TextIconButton from "@/components/General/Buttons/TextIconButton";
import NameSlider from "@components/Target/NameSlider";

export default function NameSliderCard() {
    return (
        <div className='w-[566px] h-[310px] mb-3 px-4 pt-3 mr-2 bg-[#161A3E] rounded-xl'>
            <div className='flex flex-row justify-between w-[534px] h-[240px] '>
                <div className='w-[261px] h-full mb-3'>
                    <NameSlider name='Retail Sales' cursorlocation='left-[70%]' sliderbg='bg-[#000000]' slidertrackbg='bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]' slidertracklenght='w-[37px]' blacktalker={true} value={160} blacktalkerlocation='left-[55%]' />
                    <NameSlider name='Retail Gross' cursorlocation='left-[45%]' sliderbg='bg-[#000000]' slidertrackbg='bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]' slidertracklenght='w-[0px]' blacktalker={false} value={100} blacktalkerlocation='left-[30%]' />
                    <NameSlider name='Retail Units' cursorlocation='left-[45%]' sliderbg='bg-[#000000]' slidertrackbg='bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]' slidertracklenght='w-[0px]' blacktalker={false} value={130} blacktalkerlocation='left-[30%]' />
                    <NameSlider name='Lease Sales' cursorlocation='left-[70%]' sliderbg='bg-[#000000]' slidertrackbg='bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]' slidertracklenght='w-[37px]' blacktalker={false} value={130} blacktalkerlocation='left-[60%]' />

                </div>
                <div className='w-[261px] h-full mb-3'>
                    <NameSlider name='Retail Sales' cursorlocation='left-[50%]' sliderbg='bg-[#000000]' slidertrackbg='bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]' slidertracklenght='w-[10px]' blacktalker={false} value={120} blacktalkerlocation='left-[40%]' />
                    <NameSlider name='Retail Gross' cursorlocation='left-[60%]' sliderbg='bg-[#000000]' slidertrackbg='bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]' slidertracklenght='w-[30px]' blacktalker={false} value={120} blacktalkerlocation='left-[50%]' />
                    <NameSlider name='Retail Units' cursorlocation='left-[75%]' sliderbg='bg-[#000000]' slidertrackbg='bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]' slidertracklenght='w-[50px]' blacktalker={true} value={120} blacktalkerlocation='left-[60%]' />
                    <NameSlider name='Lease Sales' cursorlocation='left-[45%]' sliderbg='bg-[#000000]' slidertrackbg='bg-gradient-to-r from-[#3C1CC5] to-[#9043DD]' slidertracklenght='w-[0px]' blacktalker={false} value={100} blacktalkerlocation='left-[40%]' />
                </div>
            </div>
        </div>
    )
}

