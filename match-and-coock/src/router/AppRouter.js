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
import { PrivatesPages } from "./Privates.js/PrivatesPages";
import { Details } from "../pages/details/Details";
import { useSelector } from "react-redux";
import { CreateView } from "../pages/create-edit/CreateView";

// import your route components too

export const AppRouter = () => {
  const { loading, state } = useFetch("/food");
  const user = useSelector((state) => state.auth);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home stateSwipe={state} />} />
          <Route path="swipe" element={<SwipeScreen />} />
          <Route path="create" element={<CreateView />} />

          <Route element={<PrivatesPages />}>
            <Route path="matched" element={<MatchedScreen />} />
            <Route path="liked" element={<LikedScreen />} />
          </Route>
          <Route
            path="auth/*"
            element={user === null ? <Auth /> : <Navigate replace to={"/"} />}
          >
            <Route index element={<Cover />} />
            <Route path="login" element={<Login2 />} />
            <Route path="register" element={<Register2 />} />
            <Route path="*" element={<Navigate to={-1} />} />
          </Route>
          <Route path="help" element={<HelpScreen />} />
          <Route path="details" element={<Details />} />

          <Route path="*" element={<Navigate to={-1} />} />
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
