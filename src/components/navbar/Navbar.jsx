import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon"  onClick={() => dispatch({ type: "TOGGLE" })}/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHkj6-Tndku8K2387sMaBf2DaiwfBtHQw951-fc9zzA&s"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
