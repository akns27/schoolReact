import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/*" element={<NoPage/>}/>
    </Routes>
  );
}

export default App;
