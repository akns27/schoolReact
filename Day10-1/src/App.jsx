import "./App.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage.jsx";
import CardList from "./CardList";
import Home from "./Home.jsx";
import Detail from "./components/Detail.jsx"
import HomeAxios from "./HomeAxios.jsx";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeAxios />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/CardList" element={<CardList />} />
        <Route path="/Detail/:id"element={<Detail/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>

  );
}
