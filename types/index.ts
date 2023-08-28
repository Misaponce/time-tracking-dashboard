import { StaticImageData } from "next/image";

export interface CustomButtonProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface MainCardProps {
    handleClick: (name: string) => void;
}

export interface UserCardProps {
    thumbnail: StaticImageData;
    username: string;
}

export interface ActivityCardProps {
    activityData: Array<{
        title: string;
        timeframes: {
            daily: {
                current: number;
                previous: number;
            };
            weekly: {
                current: number;
                previous: number;
            };
            monthly: {
                current: number;
                previous: number;
            };
            //adding an index type so selectedtimeframe can be used
            [key: string]: {
                current: number;
                previous: number;
            };
        };
    }>;

    selectedTimeframe: string;
}
