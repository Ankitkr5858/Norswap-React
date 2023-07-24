import { Navigate, createBrowserRouter } from "react-router-dom";
import LazyLoader from "../components/routes/LazyLoader";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyLoader Component={Home} />,
  },
  {
    path: "/about",
    element: <LazyLoader Component={About} />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
export default router;
