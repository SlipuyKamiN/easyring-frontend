import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul>
      <li>Customer</li>
      <li>
        <a>Admin</a>
        <ul>
          <li>
            <NavLink to={"admin/calendar"}>calendar</NavLink>
          </li>
          <li>
            <NavLink to={"admin/orders"}>orders</NavLink>
          </li>
          <li>
            <NavLink to={"admin/drivers"}>drivers</NavLink>
          </li>
          <li>
            <NavLink to={"admin/settings"}>settings</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <a>Driver</a>
        <ul>
          <li>
            <NavLink to={"driver/orders"}>orders</NavLink>
          </li>
          <li>
            <NavLink to={"driver/settings"}>settings</NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};
