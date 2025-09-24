import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname.toLowerCase();

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token && path !== "/login" && path !== "/register") {
      navigate("/login", { replace: true });
    }
  }, [token, path, navigate]);

  const logout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Online Banking Application</h2>
        <ul>
          {token ? (
            <>
              <li>
                <Link>User</Link>
              </li>
              <li>
                <Link to="/account-form">Account</Link>
              </li>
              <li>
                <Link to="/transaction-form">Transaction</Link>
              </li>
              <li>
                <Link onClick={logout}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
