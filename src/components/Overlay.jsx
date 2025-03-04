import React from "react";

export default function Overlay({ handleOutsideClick }) {
  return (
    <div
      className="overlay bg-black/50 inset-0 fixed backdrop-blur-sm z-10"
      id="overlay"
      onClick={handleOutsideClick}
    ></div>
  );
}
