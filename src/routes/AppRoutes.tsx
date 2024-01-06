import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopPage from "../pages/TopPage";
import DefaultPage from "../pages/DefaultPage";
import RoulettePage from "../pages/RoulettePage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/default" element={<DefaultPage />} />
        <Route path="/" element={<TopPage />} />
        <Route path="/roulette" element={<RoulettePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
