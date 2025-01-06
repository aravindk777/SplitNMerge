import React, { useState } from "react";

interface Props {
  onConvertFromChange: (value: string) => void;
  onConvertToChange: (value: string) => void;
}

function ConvertOptions({ onConvertFromChange, onConvertToChange }: Props) {
  const converters = [
    ["Select...", ""],
    ["NewLine", "\n"],
    ["Comma (,)", ","],
    ["Semi-Colon (;)", ";"],
    ["Colon (:)", ":"],
    ["Space", " "],
  ];

  const [convertFrom, setConvertFrom] = useState(converters[0]);
  const [convertTo, setConvertTo] = useState(converters[0]);

  const handleConvertFromChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    console.log("Convert From value is: [" + value + "]");
    setConvertFrom(
      converters.find((item) => item[1] === value) || converters[0]
    );
    onConvertFromChange(value);
  };

  const handleConvertToChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setConvertTo(converters.find((item) => item[1] === value) || converters[0]);
    onConvertToChange(value);
  };

  return (
    <>
      From&nbsp;
      <select
        name="convertFrom"
        value={convertFrom[1]}
        onChange={handleConvertFromChange}
      >
        {converters.map((item) => (
          <option key={item[1]} value={item[1]}>
            {item[0]}
          </option>
        ))}
      </select>
      <br />
      To&nbsp;
      <select
        name="convertTo"
        value={convertTo[1]}
        onChange={handleConvertToChange}
      >
        {converters.map((item) => (
          <option key={item[1]} value={item[1]}>
            {item[0]}
          </option>
        ))}
      </select>
      <p>Convert From: {convertFrom}</p>
      <p>Convert To: {convertTo}</p>
    </>
  );
}

export default ConvertOptions;
