import "./App.css";
import { Home } from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cover from "./pages/home/cover/Cover"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cover" element={<Cover />} />

    </Routes>
    

    </div>
  );
}

export default App;
