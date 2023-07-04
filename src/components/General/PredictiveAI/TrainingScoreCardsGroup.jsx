import TrainingScoreCards from '@/components/General/PredictiveAI/TrainingScoreCards'

import crown from '@/assets/svg/crown.svg'
import growth from '@/assets/svg/growth.svg'
import photo_1 from '@/assets/svg/photo_1.svg'
import photo_8 from '@/assets/svg/photo_8.svg'
import photo_5 from '@/assets/svg/photo_5.svg'

const personData = [
    {
        id: 1,
        sliderwidth: 'w-[20px]',
        topBadgeBgColor: 'bg-[#ADACAD]',
        place: '#2',
        icon: 'crown',
        text: 'PLACE',
        name: 'Phoenix Baker',
        photo: photo_5,
        role: 'Corporate Manager',
        email: 'PBaker@mergedata.com',
        phoneNumber: '+1 (123) 46 78 90',
        data1: [
            { id: 1, bgColor: 'bg-[#4832A6]', value: 2, icon: crown, text: 'AWARDS' },
            { id: 2, bgColor: 'bg-[#1BE2C5]', value: 223, icon: growth, text: 'TOTAL POINTS' },
            { id: 3, bgColor: 'bg-[#13132D]', value: 7, icon: crown, text: 'BADGES' },
        ],
        data2: [
            { id: 1, bgColor: 'bg-[#FB9C7F]', value: '8', icon: null, text: 'ON GOING TASKS' },
            { id: 2, bgColor: 'bg-[#13132D]', value: '100', icon: null, text: 'COMPLETED TASKS' },
            { id: 3, bgColor: 'bg-[#13132D]', value: '4+', icon: null, text: 'YEARS OF EXPERIENCE' },
        ],
    },
    {
        id: 2,
        sliderwidth: 'w-[60px]',
        topBadgeBgColor: 'bg-[#FAC125]',
        place: '#1',
        icon: 'crown',
        text: 'PLACE',
        name: 'Jay García',
        photo: photo_8,
        role: 'Corporate Manager',
        email: 'JayGar@mergedata.com',
        phoneNumber: '+1 (123) 46 78 90',
        data1: [
            { id: 1, bgColor: 'bg-[#4832A6]', value: 2, icon: crown, text: 'AWARDS' },
            { id: 2, bgColor: 'bg-[#1BE2C5]', value: 223, icon: growth, text: 'TOTAL POINTS' },
            { id: 3, bgColor: 'bg-[#13132D]', value: 15, icon: crown, text: 'BADGES' },
        ],
        data2: [
            { id: 1, bgColor: 'bg-[#FB9C7F]', value: '13', icon: null, text: 'ON GOING TASKS' },
            { id: 2, bgColor: 'bg-[#13132D]', value: '76', icon: null, text: 'COMPLETED TASKS' },
            { id: 3, bgColor: 'bg-[#13132D]', value: '5+', icon: null, text: 'YEARS OF EXPERIENCE' },
        ],
    },
    {
        id: 3,
        sliderwidth: 'w-[50px]',
        topBadgeBgColor: 'bg-[#E98A4D]',
        place: '#3',
        icon: 'crown',
        text: 'PLACE',
        name: 'Koray Okumus',
        photo: photo_1,
        role: 'Corporate Manager',
        email: 'KorayOk@mergedata.com',
        phoneNumber: '+1 (123) 46 78 90',
        data1: [
            { id: 1, bgColor: 'bg-[#4832A6]', value: 2, icon: crown, text: 'AWARDS' },
            { id: 2, bgColor: 'bg-[#1BE2C5]', value: 223, icon: growth, text: 'TOTAL POINTS' },
            { id: 3, bgColor: 'bg-[#13132D]', value: 5, icon: crown, text: 'BADGES' },
        ],
        data2: [
            { id: 1, bgColor: 'bg-[#CFF171]', value: '3', icon: null, text: 'ON GOING TASKS' },
            { id: 2, bgColor: 'bg-[#13132D]', value: '100', icon: null, text: 'COMPLETED TASKS' },
            { id: 3, bgColor: 'bg-[#13132D]', value: '3+', icon: null, text: 'YEARS OF EXPERIENCE' },
        ],
    },
]

export default function TrainingScoreCardsGroup() {
    return (
        <div className='flex flex-row gap-x-6'>
            {
                personData.map((person) => (
                    <div key={person.id}>
                        <TrainingScoreCards  
                            topBadgeBgColor={person.topBadgeBgColor}
                            place={person.place}
                            icon={person.icon}
                            text={person.text}
                            name={person.name}
                            photo={person.photo}
                            role={person.role}
                            email={person.email}
                            phoneNumber={person.phoneNumber}
                            data1={person.data1}
                            data2={person.data2}
                            sliderwidth={person.sliderwidth}
                        />
                    </div>
                ))
            }
        </div>
    )
}
