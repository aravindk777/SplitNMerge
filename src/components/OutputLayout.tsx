import React from "react";

interface Props {
  data: string;
}

function OutputLayout({ data }: Props) {
  return (
    <span>
      <textarea name="txtOutput" className="ta ta-out" readOnly value={data} />
    </span>
  );
}

export default OutputLayout;
