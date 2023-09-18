import { manufacturers } from './../constants/index';
import { MouseEventHandler } from "react"


export interface CustomButtonProps {
    title: string;
    btnType?: 'button' | 'submit';
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufactureProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
    Fragment: string;
}