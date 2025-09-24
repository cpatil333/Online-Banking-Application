import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../apollo/Mutation";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [login, { loading, error }] = useMutation(USER_LOGIN);

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    console.log(error);
  }
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: {
          input: {
            ...formData,
          },
        },
      });
      //console.log(data);
      if (data?.login) {
        dispatch(
          setCredentials({
            user: {
              id: data.login.user.id,
              fullName: data.login.user.fullName,
              role: data.login.user.role,
            },
            token: data.login.token,
          })
        );
        navigate("/", { replace: true });
      } else {
        console.log("Invalie Credential!");
      }
    } catch (error) {
      console.error("Error login", error.message);
      alert("Login failed, please try again!");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
