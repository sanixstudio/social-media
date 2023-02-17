import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, Login, Page404, Register } from "../pages";
import Root from "../Root/Root";

const currentUser = false;

const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile/:id", element: <h1>profile</h1> },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/*", element: <Page404 /> },
]);
