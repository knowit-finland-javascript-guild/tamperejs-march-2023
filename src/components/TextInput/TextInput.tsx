import React from "react";

type InputType = "text" | "password";

interface TextInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  type?: InputType;
  error?: boolean;
  emoji?: string;
}

export const TextInput = ({ label, id, value, onChange, type = "text", error, emoji }: TextInputProps) => {
  return (
    <div style={{ display: "block" }}>
      <label htmlFor={id} style={{ marginRight: "5px" }}>
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
      {emoji && <div style={{ display: "inline" }}>{emoji}</div>}
    </div>
  );
};
