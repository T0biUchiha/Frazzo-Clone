
import "./App.css";
import data from "../data.json";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/home";

function App() {
  console.log(data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
