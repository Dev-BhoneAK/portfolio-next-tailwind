import React from "react";

export default function ToolsTag({ tagName }) {
  return (
    <span className="bg-blue-950 text-sky-500 px-3 py-2 mr-2 rounded-full capitalize text-sm font-semibold">
      {tagName}
    </span>
  );
}
