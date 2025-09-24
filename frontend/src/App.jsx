import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Login } from "./components/Login";
import { Home } from "./pages/Home";
import { UserForm } from "./pages/UserForm";
import { AccountForm } from "./pages/AccountForm";
import { TransactionForm } from "./pages/TransactionForm";

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
          path: "/register",
          element: <UserForm />,
        },
        {
          path: "/account-form",
          element: <AccountForm />,
        },
        {
          path: "/transaction-form",
          element: <TransactionForm />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
