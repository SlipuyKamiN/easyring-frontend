import Select from "react-select";
import { FaListUl, FaUserEdit, FaHome } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { RiRoadMapLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserState } from "~/Redux/selectors";
import { SelectWrapper } from "../ParcelsList/Filter.styled";

const optionsList = [
  {
    label: <FaListUl size={20} />,
    value: "/user/parcels",
    roles: ["admin", "driver"],
  },
  {
    label: <FaUserEdit size={20} />,
    value: "/auth/edit",
    roles: ["admin", "driver"],
  },
  {
    label: <FaUsersViewfinder size={20} />,
    value: "/user/users",
    roles: ["admin"],
  },
  { label: <RiRoadMapLine size={20} />, value: "/user/map", roles: ["admin"] },
  {
    label: <IoSettingsSharp size={20} />,
    value: "/user/settings",
    roles: ["admin"],
  },
  { label: <FaHome size={20} />, value: "/", roles: ["admin", "driver"] },
];

export const NavSelect = () => {
  const user = useSelector(getUserState);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const options = optionsList.filter(({ roles }) => roles.includes(user.role));
  const value = options.find((o) => o.value === pathname || o.value === "/");

  if (!user._id && !user.isLoggedIn) return;

  const state = {
    _id: user._id,
    user: { ...user },
  };

  delete state.user.createdAt;
  delete state.user.updatedAt;
  delete state.user.isLoggedIn;
  delete state.user.token;
  delete state.user._id;
  delete state.user._persist;

  return (
    <SelectWrapper>
      <Select
        className="react-nav-select-container"
        classNamePrefix="react-nav-select"
        noOptionsMessage={() => ""}
        placeholder={<FaHome size={20} />}
        isSearchable={false}
        value={value}
        options={options}
        onChange={(e) => navigate(e.value, { state })}
      />
    </SelectWrapper>
  );
};
