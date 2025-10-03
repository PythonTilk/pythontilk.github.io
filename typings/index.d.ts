import { ReactNode } from "react";

export interface Tech {
    title: string;
    icon: ReactNode;
    link: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}
