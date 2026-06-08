import { createBrowserRouter } from "react-router-dom";
import Download from "./components/Download";
import LandingPage from "./pages/LandingPage";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/download", element: <Download /> },
]);
