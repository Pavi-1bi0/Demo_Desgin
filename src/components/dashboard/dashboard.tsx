import React, { useState } from "react";
// import Header from "./top-navbar/top-navbar";
// import Sidebar from "../sidebar/sidebar";
// import EmployeeDetails from "./general-info/info";
// import Navbar from "../navbar/navbar";
import SoftwareDashboard from "../software-review/software-review";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="dashboard-container">
        {/* <Navbar toggleSidebar={toggleSidebar}/> */}
        {/* <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />  */}
      {/* <Header toggleSidebar={toggleSidebar} /> */}
      <div className="dashboard-content">
      {/* <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Toggle Sidebar</button>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> */}
        {/* <div className="main-content"> */}
          < SoftwareDashboard/>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
