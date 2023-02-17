import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  { path: "/", element: <h1>Home</h1> },
  { path: "/register", element: <h1>Register</h1> },
  { path: "/login", element: <h1>Login</h1> },
  { path: "/*", element: <h1>404</h1> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
