// import RouterTest from "./RouterTest";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1> No Page Not found 404</h1>
      {/* <button onClick={() =>navigate("./Home.jsx")}>홈으로</button>{""} */}
      <button onClick={() =>navigate(-1)}>뒤로가기</button>{""}
    </div>
  );
};

export default NoPage;
