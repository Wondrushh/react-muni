import { ChevronRightIcon } from "@heroicons/react/16/solid";
import "./nav-bar-item.css";

export interface NavBarItemProps {
  label: string;
}

export const NavBarItem = ({ ...props }: NavBarItemProps) => {
  return (
    <>
      <button className={`nav-bar-item`}>
        {props.label} <ChevronRightIcon className="nav-bar-item__icon" />
      </button>
    </>
  );
};
