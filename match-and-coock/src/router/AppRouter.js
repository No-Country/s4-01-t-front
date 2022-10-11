import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import { useFetch } from "../hooks/useFetch";
import { Home } from "../pages/home/Home";
import SwipeScreen from "../pages/swipe/SwipeScreen";
import HelpScreen from "../pages/help/HelpScreen";
import MatchedScreen from "../pages/matched/MatchedScreen";
import LikedScreen from "../pages/liked/likedScreen";
import { Auth } from "../pages/auth/Auth";
import { Login2 } from "../pages/auth/login/Login2";
import { Register2 } from "../pages/auth/register/Register2";
import Cover from "../pages/home/cover/Cover";
// import your route components too

export const AppRouter = () => {
  const { loading, state } = useFetch("/food");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home stateSwipe={state} />} />
          <Route path="swipe" element={<SwipeScreen />} />
          <Route path="matched" element={<MatchedScreen />} />
          <Route path="liked" element={<LikedScreen />} />
          <Route path="help" element={<HelpScreen />} />
          <Route path="auth/*" element={<Auth />}>
            <Route index element={<Cover />} />
            <Route path="login" element={<Login2 />} />
            <Route path="register" element={<Register2 />} />
            <Route path="*" element={<Navigate to={-1} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

/*  <Route path="/" element={<App />}>
          <Route index element={<Home stateSwipe={state} />} />
          <Route path="swipe" element={<SwipeScreen />} />
          <Route path="matched" element={<MatchedScreen />} />
          <Route path="liked" element={<LikedScreen />} />
          <Route path="help" element={<HelpScreen />} />
          <Route path="auth/*" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to={"login"} />} />
          </Route>
        </Route> */
