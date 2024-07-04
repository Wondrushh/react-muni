import "./navbar.css";

import Logo from "../../assets/logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { NavBarItem, NavBarItemProps } from "./NavBarItem";
import { TextInput } from "../Common/TextInput/TextInput";
import { Button } from "../Common/Button/Button";
import { Breadcrumbs } from "./Breadcrumbs";

const navBarItems: Array<NavBarItemProps> = [
  { label: "Categories" },
  { label: "Our Mission" },
  { label: "Contact" },
];

export const Navbar = () => {
  return (
    <>
      <div className="nav-bar__wrapper">
        <div className="nav-bar">
          <img src={Logo} className="nav-bar__logo" alt="" />
          {navBarItems.map((item) => (
            <>
              <div className="nav-bar__item">
                <NavBarItem label={item.label} />
              </div>
            </>
          ))}
          <div className="nav-bar__spacer"></div>
          <div className="nav-bar__search">
            <TextInput placeholder="Search..." />
          </div>
          <div className="nav-bar__search-btn">
            <Button
              label="Search"
              icon={MagnifyingGlassIcon}
              type="secondary"
            />
          </div>
        </div>
        <Breadcrumbs className="nav-bar__breadcrumbs"/>
      </div>
    </>
  );
};
