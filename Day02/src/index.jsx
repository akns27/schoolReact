import React from "react"; // React import 추가
import { createRoot } from "react-dom/client"; // createRoot import 수정
import App from "./App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Could not find root element with id 'root'");
}

createRoot(root).render(<App />);
