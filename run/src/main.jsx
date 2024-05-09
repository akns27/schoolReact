import React from "react";

import ReactDOM from "react-dom/client";

function Event() {
  return <button onClick={() => alert("이벤트 예제입니다.")}>클릭</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Event />);