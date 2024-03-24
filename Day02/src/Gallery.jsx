import React from "react";
import { createRoot } from "react-dom/client";

function MyImage() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="Floralis Genërale"
    />
  );
}

function Gallery() {
  return (
    <div>
      <MyImage />
      <MyImage />
      <MyImage />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Gallery />);
