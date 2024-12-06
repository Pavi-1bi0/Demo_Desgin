import React, { useState } from "react";
import SoftwarePackage from "../softwarepackage/softwarepackage";
import PackageDetails from "../softwarepackgaedetails/packagedetail";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "../../styles/software-review/software-review.scss";
import TicketHistory from "../tickethistory/tickethistory";
import Tickectdetails from "../ticketdetails/tickectdetails";

const SoftwareDashboard: React.FC = () => {
  const [packages] = useState([
    { name: "HYPERV STOP", lastReviewDate: "5/29/2023", lorem: "Description for HYPERV STOP" },
    { name: "Google Chrome", lastReviewDate: "5/30/2022", lorem: "Description for Google Chrome" },
    { name: "Image Ware Form Manager", lastReviewDate: "5/20/2023", lorem: "Description for Image Ware Form Manager" },
    { name: "IBM Operational Decision Manager - Rule", lastReviewDate: "6/29/2023", lorem: "Description for IBM Operational Decision Manager" },
  ]);
  
  // Update selectedItem type to match the structure of the package
  const [selectedItem, setSelectedItem] = useState<{ name: string; lastReviewDate: string; lorem: string } | null>(null);
  
  const [inputs, setInputs] = useState({ input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" });
  const [confirmMove, setConfirmMove] = useState<string | null>(null);

  // Handle item selection and validation before moving to a new item
  const handleSelectItem = (item: string) => {
    // Validate input fields before allowing the user to move to a new package
    if (
      selectedItem?.name !== item && // Prevent popup for the already selected card
      (
        (inputs.input1 !== "" && inputs.input2 === "") ||
        (inputs.input1 === "" && inputs.input2 !== "") ||
        (inputs.input3 !== "" && inputs.input4 === "") ||
        (inputs.input3 === "" && inputs.input4 !== "") ||
        (inputs.input5 !== "" && inputs.input6 === "") ||
        (inputs.input5 === "" && inputs.input6 !== "")
      )
    ) {
      setConfirmMove(item); // Trigger confirmation to move
    } else {
      setSelectedItem(packages.find(pkg => pkg.name === item) || null); // Set the selected item to the package that matches
      setInputs({ input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" }); // Reset inputs for the new selection
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (inputs.input1 && inputs.input2) {
      alert(`Submitted: ${inputs.input1}, ${inputs.input2}`);
    } else {
      alert("Please fill in both input fields before submitting.");
    }
  };

  const handleConfirmMove = (proceed: boolean) => {
    if (proceed && confirmMove) {
      // Proceed with the move and update the selected item
      setSelectedItem(packages.find(pkg => pkg.name === confirmMove) || null);
      setInputs({ input1: "", input2: "", input3: "", input4: "", input5: "", input6: "" }); // Reset inputs on move
    }
    setConfirmMove(null); // Close the confirmation dialog
  };

  return (
    <div className="software-review-page">
      <Navbar
        toggleSidebar={() => {
          console.log("Toggle sidebar");
        }}
      />
      <Sidebar
        isSidebarOpen={false}
        setIsSidebarOpen={(isOpen: boolean) => {
          console.log("Sidebar open:", isOpen);
        }}
      />
      <div className="software-review-center">
        <header className="header">
          <h1>Client Software Package Review Center</h1>
          <div className="sub-header">
            <p>Owner: <strong>Alan Lee</strong></p>
            <p># of Software: <strong>4</strong></p>
          </div>
        </header>
        <div className="package-section">
          <SoftwarePackage
            packages={packages}
            selectedItem={selectedItem ? selectedItem.name : null} // Pass name as selected item
            handleSelectItem={handleSelectItem}
          />
          <PackageDetails
            inputs={inputs}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="ticket-section">
          <TicketHistory selectedCard={selectedItem} />
          <Tickectdetails />
        </div>

        {confirmMove && (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      zIndex: 1000,
      maxWidth: "400px",
      width: "100%",
    }}
  >
    <h3>May we move to the next item or stay here?</h3>
    <div style={{ marginTop: "15px", textAlign: "center" }}>
      <button
        onClick={() => handleConfirmMove(true)}
        style={{
          marginRight: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Move
      </button>
      <button
        onClick={() => handleConfirmMove(false)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Stay
      </button>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default SoftwareDashboard;
