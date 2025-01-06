import React, { useState } from "react";
import ConvertOptions from "../components/ConvertOptions";
import InputLayout from "../components/InputLayout";
import OutputLayout from "../components/OutputLayout";

function Splitter() {
  let [selectedConverterFrom, setSelectedConverterFrom] = useState("");
  let [selectedConverterTo, setSelectedConverterTo] = useState("");
  const [inputText, setInputText] = useState("");
  let [outputText, setOutputText] = useState("");

  const handleConvert = () => {
    console.log("Input Text: ", inputText);
    console.log("Convert from: [" + selectedConverterFrom + "]");
    console.log("Convert to: [" + selectedConverterTo + "]");

    let convertedText = inputText;
    if (selectedConverterFrom === " " && selectedConverterTo === "\n") {
      convertedText = inputText.replace(
        new RegExp(selectedConverterFrom, "g"),
        "\n"
      );
    } else if (selectedConverterFrom === "\n" && selectedConverterTo === " ") {
      convertedText = inputText.replace(/\n/g, " ");
    } else {
      convertedText = inputText.replace(
        new RegExp(selectedConverterFrom, "g"),
        selectedConverterTo
      );
    }
    console.log("Output: ", convertedText);
    setOutputText(convertedText);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>Source</td>
          <td></td>
          <td>Output</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <InputLayout heading="" onInputChange={setInputText} />
          </td>
          <td>
            <>
              <ConvertOptions
                onConvertFromChange={setSelectedConverterFrom}
                onConvertToChange={setSelectedConverterTo}
              />
              <br />
              <button onClick={handleConvert}>Convert &gt;</button>
            </>
          </td>
          <td>
            <OutputLayout data={outputText} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Splitter;
