import "./App.css";
import { Home } from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cover from "./pages/home/cover/Cover";


function App() {
  
  return (
    <div className="App">
      {/* <Cover/> */}
      {/* <Login/> */}
      <Register/>
    </div>
  );
}


export default App;