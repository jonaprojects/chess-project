import logo from "./logo.svg";
import "./App.css";
import Button from "./components/UI/Button.js";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Game from "./pages/Game/Game.js";
import Root from "./pages/Root.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/game", element: <Game /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
