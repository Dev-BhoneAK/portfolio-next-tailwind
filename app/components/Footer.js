import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
export default function Footer() {
  return (
    <section>
      <div>
        <h6 className="text-center flex items-center justify-center uppercase border space-x-6">
          Made with
          <span className="text-pink-600 text-lg">
            {/* <BsSuitHeartFill className="text-pink-600" /> */} 🖤
          </span>
          by BAK.
        </h6>
      </div>
    </section>
  );
}
