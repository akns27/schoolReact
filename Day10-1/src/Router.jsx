import { Link } from "react-router-dom";
import Header from "./components/Header";
export default function Router(){
  return(

      <nav>
        <Header/>
        <div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/CardList">CardList</Link>
          <Link to="/about">About</Link>
        </div>

      </nav>

  )
}