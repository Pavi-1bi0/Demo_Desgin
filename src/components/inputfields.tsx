import React from "react";

interface InputFieldsProps {
  inputs: { input1: string; input2: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const InputFields: React.FC<InputFieldsProps> = ({
  inputs,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        Input 1:{" "}
        <input
          type="text"
          name="input1"
          value={inputs.input1}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Input 2:{" "}
        <input
          type="text"
          name="input2"
          value={inputs.input2}
          onChange={handleInputChange}
        />
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputFields;
