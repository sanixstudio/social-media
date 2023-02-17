import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Page404, Register } from "../pages";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile/:id", element: <h1>profile</h1> },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/*", element: <Page404 /> },
]);
