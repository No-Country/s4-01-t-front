import "./App.css";
import { Home } from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cover from "./pages/home/cover/Cover"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="cover" element={<Cover />} />
        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
