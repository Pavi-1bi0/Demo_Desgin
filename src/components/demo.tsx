import React, { useState } from "react";
import Table from "./tabel";
import InputFields from "./inputfields";

const demo: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [inputs, setInputs] = useState({ input1: "", input2: "" });
  const [confirmMove, setConfirmMove] = useState<string | null>(null);

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const handleSelectItem = (item: string) => {
    // Show popup only if one input field is filled and the other is empty
    if (
      selectedItem !== item && // Prevent popup when clicking the already selected item
      ((inputs.input1 !== "" && inputs.input2 === "") || (inputs.input1 === "" && inputs.input2 !== ""))
    ) {
      setConfirmMove(item);
    } else {
      setSelectedItem(item);
      setInputs({ input1: "", input2: "" }); // Reset inputs for new selection
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
      setSelectedItem(confirmMove);
      setInputs({ input1: "", input2: "" });
    }
    setConfirmMove(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Select an Item</h3>
      
      {/* Table Component */}
      <Table
        items={items}
        selectedItem={selectedItem}
        handleSelectItem={handleSelectItem}
      />
      
      {/* InputFields Component */}
      <InputFields
        inputs={inputs}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      {confirmMove && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid red",
            background: "#ffe6e6",
          }}
        >
          <p>May we move to the next item or stay here?</p>
          <button onClick={() => handleConfirmMove(true)}>Move</button>
          <button onClick={() => handleConfirmMove(false)}>Stay</button>
        </div>
      )}
    </div>
  );
};

export default demo;
