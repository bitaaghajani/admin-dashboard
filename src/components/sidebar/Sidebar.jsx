import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Bita Aghajani</span>
        </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="tittle">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dasboard</span>
                    </li>
                    </Link>
                    <p className="tittle">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                    <li>
                        <PersonIcon className="icon" />
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                    <li>
                        <StorefrontIcon className="icon" />

                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" />

                        <span>Orders</span>
                    </li>

                    <li>
                        <LocalShippingIcon className="icon" />

                        <span>Delivery</span>
                    </li>
                    <p className="tittle">USER</p>

                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notifications</span>
                    </li>

                    <li>
                        <SettingsIcon className="icon" />

                        <span>Settings</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <LogoutIcon className="icon" />
                <span>Logout</span>
            </div>
        </div>
    );
};

export default Sidebar;
