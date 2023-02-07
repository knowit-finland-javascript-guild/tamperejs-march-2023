import React from "react";

type InputType = "text" | "password";

interface TextInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  type?: InputType;
  error?: boolean;
}

export const TextInput = ({ label, id, value, onChange, type = "text", error }: TextInputProps) => {
  return (
    <div style={{ display: "block" }}>
      <label htmlFor={label} style={{ marginRight: "5px" }}>
        {label}:
      </label>
      <input
        type={type}
        data-testid={id}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        style={error ? { backgroundColor: "red" } : {}}
        value={value}
      />
    </div>
  );
};
