import React from "react";
import "./Header.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
      auth.signOut().then(() => {
          dispatch(logout())
      })
  }

  return (
    <div className="header">  
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://1000logos.net/wp-content/uploads/2018/04/Gmail-logo-new-768x432.jpg"
          alt="logo"
        />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input placeholder="Search_mail" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar className="header_avatar" onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
