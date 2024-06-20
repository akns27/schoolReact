import React from "react";
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
import DetailTab from "./components/DetailTab.jsx";
import { useState } from "react";
import { useCallback } from "react";
import Cart from "./components/Cart.jsx";

export let Context1 = React.createContext();

export default function App() {
  const [users, setUsers] = useState(["user1", "user2","user3"]);
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(()=>{
    setTheme(theme==="light" ? "dark" : "light");
  },[theme])
  return (
      <Routes>
        <Route path="/" element={<HomeAxios />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/CardList" element={<CardList />} />
        <Route path="/Detail/:id"
        element={
          <Context1.Provider value={{theme, toggleTheme}}>
            <DetailTab/>
          </Context1.Provider>
        }/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>

  );
}
