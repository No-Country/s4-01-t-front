import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import  RecipesGrid  from "../components/recipesGrid/RecipesGrid";
import { useFetch } from "../hooks/useFetch";
import { Home } from "../pages/home/Home";
import SwipeScreen from "../pages/swipe/SwipeScreen";
import HelpScreen from "../pages/help/HelpScreen";
import MatchedScreen from "../pages/matched/MatchedScreen";
import LikedScreen from "../pages/liked/likedScreen";
// import your route components too
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Cover from "../pages/home/cover/Cover"

export const AppRouter = () => {
  const { loading, state } = useFetch("/food");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home stateSwipe={state} />} />
          <Route path="swipe" element={<SwipeScreen />} />
          <Route path="matched" element={<MatchedScreen/>}/>
          <Route path="liked" element={<LikedScreen/>} />
          {/* <Route path="matchs" element={<RecipesGrid />} /> */}
          <Route path="help" element={<HelpScreen />} />
          <Route path="cover" element={<Cover />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
