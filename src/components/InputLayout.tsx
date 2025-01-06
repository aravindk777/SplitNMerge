import React from "react";

interface Props {
  heading: string;
  onInputChange: (value: string) => void;
}

function InputLayout({ heading, onInputChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <div>
      <h2>{heading}</h2>
      <textarea className={`ta ta-in`} onChange={handleChange}></textarea>
    </div>
  );
}

export default InputLayout;
