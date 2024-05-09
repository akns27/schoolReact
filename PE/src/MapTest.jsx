import ReactDOM from "react-dom";

function MapTest() {
  const ages = [10,15,18,40,50,60,70];
  const result = ages.filter((item) => item > 40);
  const result2 = ages.filter((item) => item !== 40);
  // const result3 = ages.filter((item) => item > 23);

  return (
    <>
      <h2>filter 결과 (50보다 큰 아이템)</h2>
      <ul>
        {result.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <h2>filter 결과 (40과 같지 않은 아이템)</h2>
      <ul>
        {result2.map((item)=>(
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MapTest/>)
