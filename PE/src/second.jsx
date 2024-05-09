import "./App.css";

function AlertButton() {

  const showAlert = () => {
    alert("이벤트 예제입니다.");
  };

  return (
    <div>
      <h1>AlertButton</h1>
      <button onClick={showAlert}>클릭</button>
    </div>
  );
}

export default AlertButton;