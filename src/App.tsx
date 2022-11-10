import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authState } from "./store/slice/authSlice";
import useAuth from "./hooks/useAuth";
import "./index.css";
import { ProtectedOutlet } from "./utils";
import { HomePage, ProfilePage, MoviePage, ErrorPage } from "./pages";
import { Layout } from "./components/";

function App() {
  const { verifyToken } = useAuth();
  const navigate = useNavigate();
  const auth = useSelector(authState);
  const { pathname } = useLocation();

  useEffect(() => {
    verifyToken().then(() => navigate(pathname));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={auth ? <ProfilePage /> : <HomePage />} />
        <Route element={<ProtectedOutlet />}>
          <Route path="/movie/:title" element={<MoviePage />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
