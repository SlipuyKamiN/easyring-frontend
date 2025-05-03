import { NavLink } from "react-router-dom";
import { NavBarList, NavLinkBtn } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <NavBarList>
      <li>Customer</li>
      <li>
        <NavLinkBtn>
          Admin
          <ul>
            <li>
              <NavLink to={"admin/calendar"}>Calendar</NavLink>
            </li>
            <li>
              <NavLink to={"admin/orders"}>Orders</NavLink>
            </li>
            <li>
              <NavLink to={"admin/drivers"}>Drivers</NavLink>
            </li>
            <li>
              <NavLink to={"admin/settings"}>Settings</NavLink>
            </li>
          </ul>
        </NavLinkBtn>
      </li>
      <li>
        <NavLinkBtn>
          Driver
          <ul>
            <li>
              <NavLink to={"driver/orders"}>Orders</NavLink>
            </li>
            <li>
              <NavLink to={"driver/settings"}>Settings</NavLink>
            </li>
          </ul>
        </NavLinkBtn>
      </li>
    </NavBarList>
  );
};
