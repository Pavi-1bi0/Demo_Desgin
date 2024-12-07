import React, { useState } from "react";
import "../../styles/navbar/navbar.scss";
import Divider from "@mui/material/Divider";
// import img from "../../../assets/Dashboard/navbar/images.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import MenuIcon from "@mui/icons-material/Menu"; // Import the hamburger icon
import { IconButton } from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import img from '../../assets/dashboard/img.jpg';


interface navbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<navbarProps> = ({ toggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Sidebar Toggle Button */}
      <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="toggle sidebar" className="toggle-icon">
        <MenuIcon />
      </IconButton>

      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Greeting */}
      <div className="navbar__greeting">
        <h4>Software Development Tool</h4>
        </div>

      {/* Icons Section */}
      <div className="navbar__icons">
        {/* Search Icon */}
        {/* <IconButton aria-label="search">
          <SearchIcon />
        </IconButton> */}

        {/* Notification Icon */}
        {/* <IconButton aria-label="notifications">
          <NotificationAddIcon />
        </IconButton> */}

        {/* Divider */}
        <Divider orientation="vertical" flexItem className="divider" />

        {/* Avatar */}
        <div className="navbar__avatar">
          <img
            src={img} // Replace with your avatar image URL
            alt="User Avatar"
            className="navbar__avatar-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
