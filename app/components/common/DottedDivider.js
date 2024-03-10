import React from "react";

function DottedDivider({ screenSize }) {
  return (
    <div
      className={`${
        screenSize === "small" ? "h-8 self-center" : "h-auto"
      } border-l-6 border-dotted border-sky-600 dark:border-sky-400 opacity-50`}
    ></div>
  );
}

export default DottedDivider;
