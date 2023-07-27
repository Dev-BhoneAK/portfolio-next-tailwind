import React from "react";
import { ImHeart } from "react-icons/im";
export default function Footer() {
  return (
    <section className="pb-2">
      <h6 className="flex items-center justify-center capitalize">
        Made with
        <span className="text-pink-600 text-lg mx-1">
          <ImHeart className="text-pink-600" />
        </span>
        by BAK
      </h6>
    </section>
  );
}
