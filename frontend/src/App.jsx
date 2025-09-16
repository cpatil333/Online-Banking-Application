import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Login } from "./components/Login";
import { Home } from "./pages/Home";
import { UserForm } from "./pages/UserForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/userform",
          element: <UserForm />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
