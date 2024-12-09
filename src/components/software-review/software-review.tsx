import React, { useState } from "react";
import SoftwarePackage from "../softwarepackage/softwarepackage";
import PackageDetails from "../softwarepackgaedetails/packagedetail";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "../../styles/software-review/software-review.scss";
import TicketHistory from "../tickethistory/tickethistory";
import Tickectdetails from "../ticketdetails/tickectdetails";
import CloseIcon from '@mui/icons-material/Close';

const SoftwareDashboard: React.FC = () => {
  const [packages] = useState([
    { name: "HYPERV STOP", lastReviewDate: "5/29/2023", lorem: "Description for HYPERV STOP" },
    { name: "Google Chrome", lastReviewDate: "5/30/2022", lorem: "Description for Google Chrome" },
    { name: "Image Ware Form Manager", lastReviewDate: "5/20/2023", lorem: "Description for Image Ware Form Manager" },
    { name: "IBM Operational Decision Manager - Rule", lastReviewDate: "6/29/2023", lorem: "Description for IBM Operational Decision Manager" },
  ]);

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [inputs, setInputs] = useState(
    Array.from({ length: 6 }, (_, i) => ({ [`input${i + 1}`]: "" })).reduce(
      (acc, obj) => ({ ...acc, ...obj }),
      {}
    )
  );
  const [confirmMove, setConfirmMove] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectItem = (item: string) => {
    // Check if any input is filled before switching items
    const isAnyInputFilled = Object.values(inputs).some((val) => val !== "");
    if (selectedItem !== item && isAnyInputFilled) {
      // If inputs are filled and a different item is selected, ask for confirmation
      setConfirmMove(item);
    } else {
      // If the same item is selected, do not reset the inputs
      if (selectedItem !== item) {
        setSelectedItem(item);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const isAllInputsFilled = Object.values(inputs).every((val) => val !== "");
    if (isAllInputsFilled) {
      alert(`Submitted: ${Object.values(inputs).join(", ")}`);
    } else {
      alert("Please fill in all input fields before submitting.");
    }
  };

  const handleConfirmMove = (proceed: boolean) => {
    if (proceed && confirmMove) {
      setSelectedItem(confirmMove);
      setInputs(
        Array.from({ length: 6 }, (_, i) => ({ [`input${i + 1}`]: "" })).reduce(
          (acc, obj) => ({ ...acc, ...obj }),
          {}
        )
      );
    }
    setConfirmMove(null);
  };


  const handleClose = () => handleConfirmMove(false); // Close popup


  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="software-review-page">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="software-review-center">
        <header className="header">
          <h1>Client Software Package Review Center</h1>
          <div className="sub-header">
            <p>
              Owner: <strong>Alan Lee</strong>
            </p>
            <p>
              # of Software: <strong>4</strong>
            </p>
          </div>
        </header>
        <div className="package-section">
          <SoftwarePackage
            packages={packages}
            selectedItem={selectedItem}
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
             <button
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0',
                        }}
                    >
                        <CloseIcon style={{ fontSize: '24px', color: '#dc3545' }} />
                    </button>
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
