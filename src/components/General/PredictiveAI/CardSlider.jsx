import { useState } from "react";

import RecommendationCard from "@/components/General/PredictiveAI/RecommendationCard";
import img_001 from '@/assets/svg/img_001.svg';
import img_002 from '@/assets/svg/img_002.svg';
import img_003 from '@/assets/svg/img_003.svg';
import img_004 from '@/assets/svg/img_004.svg';
import img_005 from '@/assets/svg/img_005.svg';
import img_006 from '@/assets/svg/img_006.svg';
import nextSlide from '@/assets/svg/nextSlide.svg';

export default function CardSlider() {

    const [cardData, setCardData] = useState([
        {
            id: 1,
            area: 'Sales',
            title: 'GPRU',
            behavior: '-23.6%',
            behaviorIcon: 'DownRedArrow',
            helpText: 'Salesperson GPRU dropped by more than 20% this week, compared to other salespersons.',
            recommendations: [
                {
                    text: 'Assign to a manager to dig into the cause of the drop',
                    image: img_001
                },
                {
                    text: 'Schedule a training session for best practices with top performers',
                    image: img_002
                },
                {
                    text: 'Create a Contest for these individuals for the next week',
                    image: img_003
                },]
        },
        {
            id: 2,
            area: 'Customer',
            title: 'Lease End',
            behavior: '-23.6%',
            behaviorIcon: 'DownRedArrow',
            helpText: 'Customer coming up on Lease End in next 2 weeks. Offer Customer a Unique Deal.',
            recommendations: [
                {
                    text: 'Assign to a manager to dig into the cause of the drop',
                    image: img_004
                },
                {
                    text: 'Schedule a training session for best practices with top performers',
                    image: img_005
                },
                {
                    text: 'Create a Contest for these individuals for the next week',
                    image: img_006
                },]
        },
        {
            id: 3,
            area: 'Inventory',
            title: 'Model',
            behavior: '-23.6%',
            behaviorIcon: 'DownRedArrow',
            helpText: 'A Model Shortage appears in our Database, consider acquiring more vehicles.',
            recommendations: [
                {
                    text: 'Assign to a manager to dig into the cause of the drop',
                    image: img_005
                },
                {
                    text: 'Schedule a training session for best practices with top performers',
                    image: img_001
                },
                {
                    text: 'Create a Contest for these individuals for the next week',
                    image: img_003
                },]
        },
        {
            id: 4,
            area: 'Sales',
            title: 'Dept Trends',
            behavior: '-23.6%',
            behaviorIcon: 'DownRedArrow',
            helpText: 'Used Vehicle Dept on track to miss their monthly target by 10%.',
            recommendations: [
                {
                    text: 'Assign to a manager to dig into the cause of the drop',
                    image: img_001
                },
                {
                    text: 'Schedule a training session for best practices with top performers',
                    image: img_003
                },
                {
                    text: 'Create a Contest for these individuals for the next week',
                    image: img_003
                },]
        },
        {
            id: 5,
            area: 'Customer',
            title: 'Losing Customers',
            behavior: '',
            behaviorIcon: '',
            helpText: 'Customers leaving for other dealerships? Use a loyalty connection program to retain customers and boost customer satisfaction.',
            recommendations: [
                {
                    text: 'Assign to a manager to dig into the cause of the drop',
                    image: img_001
                },
                {
                    text: 'Schedule a training session for best practices with top performers',
                    image: img_003
                },
                {
                    text: 'Create a Contest for these individuals for the next week',
                    image: img_003
                },]
        },
        {
            id: 6,
            area: 'Inventory',
            title: 'Inefficient Pricing',
            behavior: '',
            behaviorIcon: '',
            helpText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra urna ac tellus ornare, ac vestibulum purus aliquam.',
            recommendations: [
                {
                    text: 'Assign to a manager to dig into the cause of the drop',
                    image: img_001
                },
                {
                    text: 'Schedule a training session for best practices with top performers',
                    image: img_003
                },
                {
                    text: 'Create a Contest for these individuals for the next week',
                    image: img_003
                },]
        },
    ])

    const slideHandlerRH = () => {
        setCardData((prev) => {
            const last = prev[prev.length - 1];
            const rest = prev.slice(0, -1);
            return [last, ...rest];
        });
    };

    const slideHandlerLH = () => {
        setCardData((prev) => {
            const first = prev[0];
            const rest = prev.slice(1);
            return [...rest, first];
        });
    };

    return (
        <div className=''>

            <div className='relative z-10 w-[1023px] h-[458px] bg-transparent shadow-md flex flex-row justify-start items-center'>
                <div className='h-[452px] bg-transparent flex flex-row gap-x-6 overflow-hidden'>
                    {
                        cardData.map((item) => ( 
                            <div className=''  key={item.id}>
                                <RecommendationCard
                                   
                                    area={item.area}
                                    title={item.title}
                                    helpText={item.helpText}
                                    recommendations={item.recommendations}
                                    behavior={item.behavior}
                                    behaviorIcon={item.behaviorIcon}
                                />
                            </div>
                        ))
                    }
                </div>
                <button className='absolute z-40 flex items-center justify-center left-0 top-[200px]' >
                    <img src={nextSlide} alt="" className="transform rotate-180 object-none" onClick={() => { slideHandlerLH() }} />
                </button>

                <button className='absolute z-50 flex items-center justify-center left-[1006px] top-[200px]' >
                    <img src={nextSlide} alt="" className="transform rotate-0 object-none " onClick={() => { slideHandlerRH() }} />
                </button>
            </div>

        </div>

    )
}
