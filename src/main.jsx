import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.jsx';
import LogIn from './pages/LogIn.jsx';
import SignIn from './pages/SignIn.jsx';
import HomePage from './pages/HomePage.jsx';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { AuthLayout } from './layout/AuthLayout.jsx';
import { MainLayout } from './layout/MainLayout.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "/login", Component: LogIn },
          { path: "/signin", Component: SignIn }
        ]
      },
      {
        element: <MainLayout />,
        children: [
          { path: "/homepage", Component: HomePage }
        ]
      }
    ]
  }
]);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <RouterProvider router={router} />,
);