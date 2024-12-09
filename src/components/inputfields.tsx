import React from "react";

interface InputFieldsProps {
  inputs: { [key: string]: string };
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
      {Array.from({ length: 6 }, (_, index) => (
        <div key={`input${index + 1}`}>
          <label>
            Input {index + 1}:{" "}
            <input
              type="text"
              name={`input${index + 1}`}
              value={inputs[`input${index + 1}`]}
              onChange={handleInputChange}
            />
          </label>
          <br />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputFields;
