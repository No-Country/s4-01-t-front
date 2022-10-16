import { Outlet } from "react-router-dom";
import "./App.css";
// import { Home } from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

// import Cover from "./pages/home/cover/Cover";
import NavBar  from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from "../src/pages/home/cover/Cover.jsx";



function App() {
  
  return (
    <div className="App">
      <NavBar></NavBar>
     {/*} <Cover></Cover> */}
      {/* <Register></Register>  */}
      <Login></Login>
      {/* <Outlet/> */}
    </div>
  );
}


export default App;