import CrownMd from "@assets/svg/CrownMd.svg";
import Book_mark from "@assets/svg/Book_mark.svg";

import Avatar1 from '@/assets/svg/Avatar1.svg';
import Avatar2 from '@/assets/svg/Avatar2.svg';
import Avatar3 from '@/assets/svg/Avatar3.svg';
import Avatar4 from '@/assets/svg/Avatar4.svg';
import Avatar5 from '@/assets/svg/Avatar5.svg';
import Avatar6 from '@/assets/svg/Avatar6.svg';
import Avatar7 from '@/assets/svg/Avatar7.svg';
import Avatar8 from '@/assets/svg/Avatar8.svg';

function useChatData() {

    const predictiveAITaskData = [
        { id: 1, iconList: Book_mark, name: 'Customer Lease End 02' },
        { id: 2, iconList: Book_mark, name: 'Sales GPRU Task 01' },
        { id: 3, iconList: Book_mark, name: 'Inventory Model Shortage' }
    ]

    const contestData = [
        { id: 1, iconList: CrownMd, name: 'Best Seller' },
        { id: 2, iconList: CrownMd, name: 'Best Consultant' },
        { id: 3, iconList: CrownMd, name: 'Sales Contest' }
    ]

    const directMessagesData = [
        { id: 1, iconList: Avatar1, name: 'Juan C (you)' },
        { id: 2, iconList: Avatar2, name: 'Koray Okumus' },
        { id: 3, iconList: Avatar3, name: 'Jay García' },
        { id: 4, iconList: Avatar4, name: 'Phoenix Baker' },
        { id: 5, iconList: Avatar5, name: 'Kate Morrison' },
        { id: 6, iconList: Avatar6, name: 'Bruce Clark' },
        { id: 7, iconList: Avatar7, name: 'Britanny H' },
        { id: 8, iconList: Avatar8, name: 'Zahir Jhonson' },
    ]

    return { predictiveAITaskData, contestData, directMessagesData };
}

export default useChatData;