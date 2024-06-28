import "./button.css";
import { HeroIcon } from "../../../types/icons.ts";

export interface ButtonProps {
    type: "primary" | "secondary";
    label: string;
    icon?: HeroIcon;
}

export const Button = ({ ...props }: ButtonProps) => {
    return (
        <>
            <button className={`button button--${props.type}`}>
                {props.label} {props.icon ? <props.icon className="button__icon" /> : null}
            </button>
        </>
    ) 
};
