import { StaticImageData } from "next/image";

export interface UserCardProps {
    thumbnail: StaticImageData;
    username: string;
}