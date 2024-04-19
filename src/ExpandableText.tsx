//import React from 'react';

import { useState } from "react";

interface Props {
  revChars: number;
  children: string;
}

const ExpandableText = ({ revChars, children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (revChars >= children.length) return <div>{children}</div>;

  const text = isExpanded ? children : children.substring(0, revChars) + "...";

  return (
    <div>
      {text}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          setExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );

};

export default ExpandableText;
