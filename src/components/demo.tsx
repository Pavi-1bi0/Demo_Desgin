import React, { useState } from "react";
import Table from "./tabel";
import InputFields from "./inputfields";

const Demo: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [inputs, setInputs] = useState(
    Array.from({ length: 6 }, (_, i) => ({ [`input${i + 1}`]: "" })).reduce(
      (acc, obj) => ({ ...acc, ...obj }),
      {}
    )
  );
  const [confirmMove, setConfirmMove] = useState<string | null>(null);

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

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

export default Demo;
