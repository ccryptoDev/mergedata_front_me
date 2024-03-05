import { useEffect, useState } from 'react';
import Carousel from '@/pages/Target/Carousel';
import CarouselSlider from '@/components/General/PredictiveAI/CarouselSlider';
import Card from '@/components/Target/Card';
import Layout from '@/components/General/Layout';
import Header from '@/components/General/Header/Header';
import Ribbon from '@/components/General/Ribbon/Ribbon';
import StorePickerDynamic from '@/components/General/StorePicker/StorePickerDynamic';
import TargetSelector from '@/components/General/TargetSelector/TargetSelector';
import DateFilter from '@/components/General/DateFilter/DateFilter';
import Decision from '@/components/General/Icons/Decision';
import { useSubSections } from '@/hooks/useSubSections';


const gradients = [
    {
        start: 'from-[#150c7b]',
        end: 'to-[#5f0f9d]',
    },
    {
        start: 'from-[#4413a6]',
        end: 'to-[#be3476]',
    },
    {
        start: 'from-[#190f94]',
        end: 'to-[#6800ba]',
    }, {
        start: 'from-[#502a9c]',
        end: 'to-[#0b96b5]',
    },
    {
        start: 'from-[#015eb4]',
        end: 'to-[#0a79a8]',
    },
    {
        start: 'from-[#190f94]',
        end: 'to-[#6800ba]',
    }
];

export default function Target () {
    const { localSubSections } = useSubSections('Targets');
    const [carouselSession, setCarouselSession] = useState(0);
    const [moveX, setMoveX] = useState('0em');
    const swiperPosition = sliderFourSession => {
        setCarouselSession(sliderFourSession);
    };

    useEffect(() => {
        if (carouselSession === 0) {
            setMoveX('translate-x-[0.1875em]');
        } else if (carouselSession === 1) {
            setMoveX('translate-x-[82.2em]');
        } else if (carouselSession === 2) {
            setMoveX('translate-x-[164.2em]');
        } else if (carouselSession === 3) {
            setMoveX('translate-x-[246.23em]');
        }
    }, [carouselSession]);

    return (
        <Layout bgColor='bg-[#05081E]'>
            <Header />
            <Ribbon showAddFavorite={false}>
                <DateFilter />
                <StorePickerDynamic />
                <TargetSelector />
            </Ribbon>
            <div className='flex flex-col justify-between items-center h-full'>
                <div className='relative grid grid-cols-2 lg:grid-cols-3 lg:scale-[1.1]  grid-rows-2 gap-x-[1.5em] gap-y-[1.5em] justify-items-center  h-auto w-auto mt-[2.5em] mb-[1.5em]'>
                    {localSubSections.map((subSection, index) => (
                        <Card
                            key={index}
                            title={subSection.name}
                            gradient={gradients[index]}
                            typeOfCard={1}
                            subSection={subSection}
                        />
                    ))}
                </div>
                <div className='w-[90.5em] flex flex-col justify-center items-center mt-[1.5em] pt-[1.1em] px-[3.125em] gap-y-[0.8em]'>
                    <div className='relative w-[82.5em] px-[0.25em] h-[8em] py-[0.25em] flex flex-row items-center overflow-hidden'>
                        <div
                            className={`absolute top-0 right-0 transform ${moveX} transition duration-1000 delay-100`}
                        >
                            <Carousel />
                        </div>
                    </div>
                    <div className='w-[82em] h-[1.5em] flex flex-row justify-between items-center'>
                        <CarouselSlider swiperPosition={swiperPosition} />
                        <div className='w-[3.75em] h-[1.5em] flex justify-between '>
                            <Decision name='Gallery9Squares' />
                            <Decision name='Nut' />
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}
