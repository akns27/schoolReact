import React from "react";

function MapTest3() {
  const ages = [132, 33, 16, 40];
  const result = ages.filter((item) => item > 18);
  const result2 = ages.filter((item) => item !== 32);

  return (
    <>
      <h2>filter 결과 (18보다 큰 아이템)</h2>
      <ul>
        {result.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <h2>filter 결과 (32와 같지 않은 아이템)</h2>
      <ul>
        {result2.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default MapTest3;