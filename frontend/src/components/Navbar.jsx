import React, { useEffect } from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname.toLowerCase();

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token && path !== "/login" && path !== "/register") {
      navigate("/login");
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
              {" "}
              <li>
                <Link>User</Link>
              </li>
              <li>
                <Link>Account</Link>
              </li>
              <li>
                <Link>Transaction</Link>
              </li>
              <li>
                <Link onClick={logout}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
