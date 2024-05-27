import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
const Widget = ({ type }) => {
  let amount = 100;
  let diff = 20;
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlinedIcon className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "View all orders",
        icon: <AddShoppingCartOutlinedIcon className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <LocalAtmOutlinedIcon className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="tittle">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
