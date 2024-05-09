import ReactDOM from "react-dom/client";
function Hello (props) {

return (
<main>
<h1>Hello {props.user} 님 환영합니다.</h1>
</main>
);
}

const rootElement = document.getElementById("root") ;
const root = ReactDOM. createRoot (rootElement) ;

root. render (<Hello user="소마고"/>);