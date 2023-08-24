import { StaticImageData } from "next/image";

export interface UserCardProps {
    thumbnail: StaticImageData;
    username: string;
}

// export interface ActivityProps {
//     title: string;
//     timeframe: {
//         daily: {
//             current: number;
//             previous: number;
//         };
//         weakly: {
//             current: number;
//             previous: number;
//         };
//         monthly: {
//             current: number;
//             previous: number;
//         };
//     };
// }