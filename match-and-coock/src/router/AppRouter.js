import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { RecipesGrid } from "../components/recipesGrid/RecipesGrid";
import { useFetch } from "../hooks/useFetch";
import { Home } from "../pages/home/Home";
import SwipeScreen from "../pages/swipe/SwipeScreen";
// import your route components too

export const AppRouter = () => {
  const { loading, state } = useFetch("/food");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home stateSwipe={state} />} />
          <Route path="swipe" element={<SwipeScreen />} />
          <Route path="matchs" element={<RecipesGrid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
