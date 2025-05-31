import { NavLink } from "react-router-dom";
import { NavBarList, NavLinkBtn } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <NavBarList>
      <li>
        <NavLinkBtn>
          Admin
          <ul>
            <li>
              <NavLink to={"admin/parcels"}>Parcels</NavLink>
            </li>
            <li>
              <NavLink to={"admin/users"}>Users</NavLink>
            </li>
            <li>
              <NavLink to={"admin/map"}>Map</NavLink>
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
              <NavLink to={"driver/parcels"}>Parcels</NavLink>
            </li>
            <li>
              <NavLink to={"auth/edit"}>Settings</NavLink>
            </li>
          </ul>
        </NavLinkBtn>
      </li>
    </NavBarList>
  );
};
